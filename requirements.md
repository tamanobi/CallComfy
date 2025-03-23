# 要件定義書

## 1. 機能要件

### ComfyUI連携
- **接続方法:**
  - HTTPリクエストとWebSocketを用いる。
  - HTTPリクエスト時は、認証情報（ID、パスワード）をヘッダーに含める。
  - WebSocketは常時接続を維持し、生成途中の進捗情報を受信する。

### ワークフロー管理
- **アップロードと保存:**
  - ユーザーはJSON形式のワークフローをアップロード。
  - アップロードされたワークフローは、フロントエンドのローカルストレージに保存する。
- **動的フォーム生成:**
  - ワークフローの内容を解析し、整数・小数・画像などの入力項目に合わせたフォームを自動生成。

### 画像生成プロセス
- **生成開始:**
  - 生成ボタン押下で、ワークフローをHTTPリクエストを介してComfyUIに送信。
- **進捗表示:**
  - WebSocketを通じて、生成プロセスの進捗情報をリアルタイムに画面へ表示。
- **結果表示と保存:**
  - 生成完了後、画像を画面に表示。
  - ユーザーは生成された画像をローカルに保存できる。
  - 生成された画像は履歴として管理される。

### スマホ最適化
- **WebWorkerの活用:**
  - HTTPリクエスト（画像アップロード、ワークフロー送信）とWebSocket通信の両方をWebWorkerで処理し、メインスレッドの負荷を軽減。
  - キャッシュ機能もWebWorkerで管理し、通信効率を向上させる。

---

## 2. 非機能要件

- **ホスティング:**
  - GitHub Pages上にフロントエンドをホスト。
- **セキュリティ:**
  - 認証情報はローカルに安全に保存し、HTTPリクエスト時に適切に送信する。
- **ユーザー体験:**
  - レスポンシブなデザインにより、スマートフォンでの使いやすさを確保。

## appendix

### JSON の変換

アップロードされたワークフローはJSONになっていますが、ユーザーが入力して修正する部分のみインタフェースに表示します。そのときは次のような変換を行います。
以下は、指定された JSON から inputs オブジェクトのうち、number 型または string 型の値のみを抽出する JavaScript コードです：

```
function extractSimpleInputs(jsonData) {
  const result = {};
  
  // Iterate through each key in the JSON
  for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key) && jsonData[key].inputs) {
      // Create a new entry for this key with an empty inputs object
      result[key] = { inputs: {} };
      
      // Get the inputs object for this key
      const inputs = jsonData[key].inputs;
      
      // Iterate through each field in the inputs object
      for (const inputKey in inputs) {
        if (inputs.hasOwnProperty(inputKey)) {
          const value = inputs[inputKey];
          
          // Check if the value is a string or number (not an array)
          if (typeof value === 'string' || typeof value === 'number') {
            // Add this field to the result
            result[key].inputs[inputKey] = value;
          }
        }
      }
    }
  }
  
  return result;
}

// Example usage
const inputJson = {
  "3": {"inputs": {"ckpt_name": "hogehoge"}},
  "4": {"inputs": {
    "text": "fugafuga",
    "clip": ["49", 1]
  }}
};

const outputJson = extractSimpleInputs(inputJson);
console.log(JSON.stringify(outputJson, null, 2));
```


### インタフェース

ファイルをアップロードすると JSON ファイルを解析し、ユーザーが入力しても良い（変更しても良い）もののみがインタフェースに出てきます。たとえば生成する画像のサイズや、生成への指示などがそれに該当します。入力しても良い項目は、上の変換によって求めます。



## websocket の設定

websocket の設定もUI上でできるようにしてください。


## ComfyUI の接続方法

ComfyUI はまず workflow を送信して uuid を取得します。そのuuidをもとにwebsocket接続を行います。Pythonコードにすると次のようになります。

```
#This is an example that uses the websockets api and the SaveImageWebsocket node to get images directly without
#them being saved to disk

import websocket #NOTE: websocket-client (https://github.com/websocket-client/websocket-client)
import uuid
import json
import urllib.request
import urllib.parse

server_address = "127.0.0.1:8188"
client_id = str(uuid.uuid4())

def queue_prompt(prompt):
    p = {"prompt": prompt, "client_id": client_id}
    data = json.dumps(p).encode('utf-8')
    req =  urllib.request.Request("http://{}/prompt".format(server_address), data=data)
    return json.loads(urllib.request.urlopen(req).read())

def get_image(filename, subfolder, folder_type):
    data = {"filename": filename, "subfolder": subfolder, "type": folder_type}
    url_values = urllib.parse.urlencode(data)
    with urllib.request.urlopen("http://{}/view?{}".format(server_address, url_values)) as response:
        return response.read()

def get_history(prompt_id):
    with urllib.request.urlopen("http://{}/history/{}".format(server_address, prompt_id)) as response:
        return json.loads(response.read())

def get_images(ws, prompt):
    prompt_id = queue_prompt(prompt)['prompt_id']
    output_images = {}
    current_node = ""
    while True:
        out = ws.recv()
        if isinstance(out, str):
            message = json.loads(out)
            if message['type'] == 'executing':
                data = message['data']
                if data['prompt_id'] == prompt_id:
                    if data['node'] is None:
                        break #Execution is done
                    else:
                        current_node = data['node']
        else:
            if current_node == 'save_image_websocket_node':
                images_output = output_images.get(current_node, [])
                images_output.append(out[8:])
                output_images[current_node] = images_output

    return output_images

prompt_text = """
{
    "3": {
        "class_type": "KSampler",
        "inputs": {
            "cfg": 8,
            "denoise": 1,
            "latent_image": [
                "5",
                0
            ],
            "model": [
                "4",
                0
            ],
            "negative": [
                "7",
                0
            ],
            "positive": [
                "6",
                0
            ],
            "sampler_name": "euler",
            "scheduler": "normal",
            "seed": 8566257,
            "steps": 20
        }
    },
    "4": {
        "class_type": "CheckpointLoaderSimple",
        "inputs": {
            "ckpt_name": "v1-5-pruned-emaonly.safetensors"
        }
    },
    "5": {
        "class_type": "EmptyLatentImage",
        "inputs": {
            "batch_size": 1,
            "height": 512,
            "width": 512
        }
    },
    "6": {
        "class_type": "CLIPTextEncode",
        "inputs": {
            "clip": [
                "4",
                1
            ],
            "text": "masterpiece best quality girl"
        }
    },
    "7": {
        "class_type": "CLIPTextEncode",
        "inputs": {
            "clip": [
                "4",
                1
            ],
            "text": "bad hands"
        }
    },
    "8": {
        "class_type": "VAEDecode",
        "inputs": {
            "samples": [
                "3",
                0
            ],
            "vae": [
                "4",
                2
            ]
        }
    },
    "save_image_websocket_node": {
        "class_type": "SaveImageWebsocket",
        "inputs": {
            "images": [
                "8",
                0
            ]
        }
    }
}
"""

prompt = json.loads(prompt_text)
#set the text prompt for our positive CLIPTextEncode
prompt["6"]["inputs"]["text"] = "masterpiece best quality man"

#set the seed for our KSampler node
prompt["3"]["inputs"]["seed"] = 5

ws = websocket.WebSocket()
ws.connect("ws://{}/ws?clientId={}".format(server_address, client_id))
images = get_images(ws, prompt)
ws.close() # for in case this example is used in an environment where it will be repeatedly called, like in a Gradio app. otherwise, you'll randomly receive connection timeouts
#Commented out code to display the output images:

# for node_id in images:
#     for image_data in images[node_id]:
#         from PIL import Image
#         import io
#         image = Image.open(io.BytesIO(image_data))
#         image.show()
```