import{t as B,a as j,n as Ne,d as Le}from"../chunks/DJFf1O34.js";import{i as We}from"../chunks/pCWyai4s.js";import{C as Pe,o as te,a0 as jt,$ as qt,z as Ut,j as Nt,g as t,O as ne,A as Bt,B as st,D as $e,p as Me,ae as Ft,F as pt,k as gt,G as Ot,ah as wt,i as Ht,Z as U,an as nt,ao as Ge,a2 as at,ap as Ye,aq as ot,ar as Rt,a5 as Lt,as as Pt,m as $t,at as Ze,au as Gt,K as Jt,ac as zt,av as ht,aw as Vt,ax as Yt,ay as Zt,az as Kt,aA as Xt,aB as Qt,aC as er,b as mt,J as yt,s as Te,aD as Ke,aE as Xe,t as G,v as De,T as l,w as u,y as m,x as c,aF as _e,e as _t,q as Qe,aG as be}from"../chunks/BoRT0E4S.js";import{a as tr,l as bt,e as P,s as K,r as rr}from"../chunks/D2UPCJxz.js";import{p as Be,b as sr,i as H}from"../chunks/BZVubSn3.js";import{c as kt,o as Fe,a as nr}from"../chunks/CzcyLZUS.js";function it(e,r){return r}function ar(e,r,s,n){for(var o=[],i=r.length,f=0;f<i;f++)Rt(r[f].e,o,!0);var d=i>0&&o.length===0&&s!==null;if(d){var w=s.parentNode;Lt(w),w.append(s),n.clear(),he(e,r[0].prev,r[i-1].next)}Pt(o,()=>{for(var I=0;I<i;I++){var b=r[I];d||(n.delete(b.k),he(e,b.prev,b.next)),$t(b.e,!d)}})}function qe(e,r,s,n,o,i=null){var f=e,d={flags:r,items:new Map,first:null},w=(r&ht)!==0;if(w){var I=e;f=te?Pe(jt(I)):I.appendChild(qt())}te&&Ut();var b=null,O=!1,h=ne(()=>{var q=s();return Ht(q)?q:q==null?[]:wt(q)});Nt(()=>{var q=t(h),y=q.length;if(O&&y===0)return;O=y===0;let C=!1;if(te){var p=f.data===Bt;p!==(y===0)&&(f=st(),Pe(f),$e(!1),C=!0)}if(te){for(var k=null,A,W=0;W<y;W++){if(Me.nodeType===8&&Me.data===Ft){f=Me,C=!0,$e(!1);break}var g=q[W],E=n(g,W);A=xt(Me,d,k,null,g,E,W,o,r,s),d.items.set(E,A),k=A}y>0&&Pe(st())}te||or(q,d,f,o,r,n,s),i!==null&&(y===0?b?pt(b):b=gt(()=>i(f)):b!==null&&Ot(b,()=>{b=null})),C&&$e(!0),t(h)}),te&&(f=Me)}function or(e,r,s,n,o,i,f){var _,T,X,J;var d=(o&Vt)!==0,w=(o&(Ze|Ye))!==0,I=e.length,b=r.items,O=r.first,h=O,q,y=null,C,p=[],k=[],A,W,g,E;if(d)for(E=0;E<I;E+=1)A=e[E],W=i(A,E),g=b.get(W),g!==void 0&&((_=g.a)==null||_.measure(),(C??(C=new Set)).add(g));for(E=0;E<I;E+=1){if(A=e[E],W=i(A,E),g=b.get(W),g===void 0){var Y=h?h.e.nodes_start:s;y=xt(Y,r,y,y===null?r.first:y.next,A,W,E,n,o,f),b.set(W,y),p=[],k=[],h=y.next;continue}if(w&&ir(g,A,E,o),(g.e.f&Ge)!==0&&(pt(g.e),d&&((T=g.a)==null||T.unfix(),(C??(C=new Set)).delete(g))),g!==h){if(q!==void 0&&q.has(g)){if(p.length<k.length){var z=k[0],D;y=z.prev;var V=p[0],v=p[p.length-1];for(D=0;D<p.length;D+=1)lt(p[D],z,s);for(D=0;D<k.length;D+=1)q.delete(k[D]);he(r,V.prev,v.next),he(r,y,V),he(r,v,z),h=z,y=v,E-=1,p=[],k=[]}else q.delete(g),lt(g,h,s),he(r,g.prev,g.next),he(r,g,y===null?r.first:y.next),he(r,y,g),y=g;continue}for(p=[],k=[];h!==null&&h.k!==W;)(h.e.f&Ge)===0&&(q??(q=new Set)).add(h),k.push(h),h=h.next;if(h===null)continue;g=h}p.push(g),y=g,h=g.next}if(h!==null||q!==void 0){for(var M=q===void 0?[]:wt(q);h!==null;)(h.e.f&Ge)===0&&M.push(h),h=h.next;var a=M.length;if(a>0){var S=(o&ht)!==0&&I===0?s:null;if(d){for(E=0;E<a;E+=1)(X=M[E].a)==null||X.measure();for(E=0;E<a;E+=1)(J=M[E].a)==null||J.fix()}ar(r,M,S,b)}}d&&Jt(()=>{var L;if(C!==void 0)for(g of C)(L=g.a)==null||L.apply()}),at.first=r.first&&r.first.e,at.last=y&&y.e}function ir(e,r,s,n){(n&Ze)!==0&&ot(e.v,r),(n&Ye)!==0?ot(e.i,s):e.i=s}function xt(e,r,s,n,o,i,f,d,w,I){var b=(w&Ze)!==0,O=(w&Gt)===0,h=b?O?U(o):nt(o):o,q=(w&Ye)===0?f:nt(f),y={i:q,v:h,k:i,a:null,e:null,prev:s,next:n};try{return y.e=gt(()=>d(e,h,q,I),te),y.e.prev=s&&s.e,y.e.next=n&&n.e,s===null?r.first=y:(s.next=y,s.e.next=y.e),n!==null&&(n.prev=y,n.e.prev=y.e),y}finally{}}function lt(e,r,s){for(var n=e.next?e.next.e.nodes_start:s,o=r?r.e.nodes_start:s,i=e.e.nodes_start;i!==n;){var f=zt(i);o.before(i),i=f}}function he(e,r,s){r===null?e.first=s:(r.next=s,r.e.next=s&&s.e),s!==null&&(s.prev=r,s.e.prev=r&&r.e)}const ct=[...` 	
\r\f \v\uFEFF`];function lr(e,r,s){var n=e==null?"":""+e;if(s){for(var o in s)if(s[o])n=n?n+" "+o:o;else if(n.length)for(var i=o.length,f=0;(f=n.indexOf(o,f))>=0;){var d=f+i;(f===0||ct.includes(n[f-1]))&&(d===n.length||ct.includes(n[d]))?n=(f===0?"":n.substring(0,f))+n.substring(d+1):f=d}}return n===""?null:n}function cr(e,r){return e==null?null:String(e)}function Ce(e,r,s,n,o,i){var f=e.__className;if(te||f!==s){var d=lr(s,n,i);(!te||d!==e.getAttribute("class"))&&(d==null?e.removeAttribute("class"):e.className=d),e.__className=s}else if(i&&o!==i)for(var w in i){var I=!!i[w];(o==null||I!==!!o[w])&&e.classList.toggle(w,I)}return i}function fr(e,r,s,n){var o=e.__style;if(te||o!==r){var i=cr(r);(!te||i!==e.getAttribute("style"))&&(i==null?e.removeAttribute("style"):e.style.cssText=i),e.__style=r}return n}const ur=Symbol("is custom element"),vr=Symbol("is html");function me(e){if(te){var r=!1,s=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var n=e.value;se(e,"value",null),e.value=n}if(e.hasAttribute("checked")){var o=e.checked;se(e,"checked",null),e.checked=o}}};e.__on_r=s,Yt(s),tr()}}function se(e,r,s,n){var o=dr(e);te&&(o[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||o[r]!==(o[r]=s)&&(r==="loading"&&(e[Zt]=s),s==null?e.removeAttribute(r):typeof s!="string"&&pr(e).includes(r)?e[r]=s:e.setAttribute(r,s))}function dr(e){return e.__attributes??(e.__attributes={[ur]:e.nodeName.includes("-"),[vr]:e.namespaceURI===Kt})}var ft=new Map;function pr(e){var r=ft.get(e.nodeName);if(r)return r;ft.set(e.nodeName,r=[]);for(var s,n=e,o=Element.prototype;o!==n;){s=Qt(n);for(var i in s)s[i].set&&r.push(i);n=Xt(n)}return r}function ke(e,r,s=r){var n=er();bt(e,"input",o=>{var i=o?e.defaultValue:e.value;if(i=Je(e)?ze(i):i,s(i),n&&i!==(i=r())){var f=e.selectionStart,d=e.selectionEnd;e.value=i??"",d!==null&&(e.selectionStart=f,e.selectionEnd=Math.min(d,e.value.length))}}),(te&&e.defaultValue!==e.value||mt(r)==null&&e.value)&&s(Je(e)?ze(e.value):e.value),yt(()=>{var o=r();Je(e)&&o===ze(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function ut(e,r,s=r){bt(e,"change",n=>{var o=n?e.defaultChecked:e.checked;s(o)}),(te&&e.defaultChecked!==e.checked||mt(r)==null)&&s(e.checked),yt(()=>{var n=r();e.checked=!!n})}function Je(e){var r=e.type;return r==="number"||r==="range"}function ze(e){return e===""?null:+e}function vt(e){return function(...r){var s=r[0];return s.stopPropagation(),e==null?void 0:e.apply(this,r)}}function St(e){return function(...r){var s=r[0];return s.preventDefault(),e==null?void 0:e.apply(this,r)}}const et="comfyweb_workflows",It="comfyweb_auth",tt="comfyweb_history";function Ue(){if(typeof window>"u")return[];try{const e=localStorage.getItem(et);return e?JSON.parse(e):[]}catch(e){return console.error("Error getting stored workflows:",e),[]}}function gr(e){if(!(typeof window>"u"))try{const r=Ue(),s=r.findIndex(n=>n.id===e.id);s>=0?r[s]=e:r.push(e),localStorage.setItem(et,JSON.stringify(r))}catch(r){console.error("Error saving workflow:",r)}}function wr(e){if(!(typeof window>"u"))try{let r=Ue();r=r.filter(s=>s.id!==e),localStorage.setItem(et,JSON.stringify(r))}catch(r){console.error("Error deleting workflow:",r)}}function rt(){if(typeof window>"u")return{username:"",password:"",serverUrl:"",wsEnabled:!0,wsAutoReconnect:!0,wsReconnectInterval:3e3};try{const e=localStorage.getItem(It),r={username:"",password:"",serverUrl:"http://127.0.0.1:8188",wsEnabled:!0,wsAutoReconnect:!0,wsReconnectInterval:3e3};if(!e)return r;const s=JSON.parse(e);return{...r,...s}}catch(e){return console.error("Error getting auth settings:",e),{username:"",password:"",serverUrl:"http://127.0.0.1:8188",wsEnabled:!0,wsAutoReconnect:!0,wsReconnectInterval:3e3}}}function hr(e){if(!(typeof window>"u"))try{localStorage.setItem(It,JSON.stringify(e))}catch(r){console.error("Error saving auth settings:",r)}}function dt(e){if(!(typeof window>"u"))try{const r=At();r.unshift(e),r.length>50&&r.pop(),localStorage.setItem(tt,JSON.stringify(r))}catch(r){console.error("Error saving image to history:",r)}}function At(){if(typeof window>"u")return[];try{const e=localStorage.getItem(tt);return e?JSON.parse(e):[]}catch(e){return console.error("Error getting image history:",e),[]}}function mr(){if(!(typeof window>"u"))try{localStorage.setItem(tt,JSON.stringify([]))}catch(e){console.error("Error clearing image history:",e)}}var yr=B('<p class="error svelte-g8n7xd"> </p>'),_r=B('<li tabindex="0"><span> </span> <button class="delete-btn svelte-g8n7xd" aria-label="Delete workflow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></li>'),br=B('<div class="saved-workflows svelte-g8n7xd"><h3 class="svelte-g8n7xd">Saved Workflows</h3> <ul class="svelte-g8n7xd"></ul></div>'),kr=B('<div class="workflow-uploader svelte-g8n7xd"><div><input type="file" accept=".json" style="display: none;"> <div class="upload-icon svelte-g8n7xd"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg></div> <p class="svelte-g8n7xd">Drop workflow JSON file here or <button class="svelte-g8n7xd">browse</button></p> <!></div> <!></div>');function xr(e,r){Te(r,!1);const s=U();let n=Be(r,"workflows",28,()=>[]);const o=kt();let i=U(),f=U(null),d=U(!1),w=U("");async function I(v){const M=v.target;if(!M.files||M.files.length===0)return;const a=M.files[0];await O(a),M.value=""}async function b(v){var a;if(v.preventDefault(),l(d,!1),!((a=v.dataTransfer)!=null&&a.files)||v.dataTransfer.files.length===0)return;const M=v.dataTransfer.files[0];await O(M)}async function O(v){try{if(!v.name.endsWith(".json"))throw new Error("Please upload a JSON file");const M=await v.text(),a=JSON.parse(M),S=Date.now().toString(),_=v.name.replace(".json",""),T={id:S,name:_,content:a};gr(T),l(f,T),o("workflow-uploaded",{workflow:T.content}),l(w,"")}catch(M){console.error("Error processing workflow file:",M),l(w,M instanceof Error?M.message:"Failed to process workflow file")}}function h(v){l(f,v),o("workflow-uploaded",{workflow:v.content})}function q(v,M){M.stopPropagation(),wr(v),t(f)&&t(f).id===v&&l(f,null),n(n().filter(a=>a.id!==v))}function y(v){v.preventDefault(),l(d,!0)}function C(v){v.preventDefault(),l(d,!1)}Ke(()=>t(f),()=>{var v;l(s,(v=t(f))==null?void 0:v.id)}),Xe(),We();var p=kr(),k=u(p);let A;var W=u(k);sr(W,v=>l(i,v),()=>t(i));var g=m(W,4),E=m(u(g));c(g);var Y=m(g,2);{var z=v=>{var M=yr(),a=u(M,!0);c(M),G(()=>K(a,t(w))),j(v,M)};H(Y,v=>{t(w)&&v(z)})}c(k);var D=m(k,2);{var V=v=>{var M=br(),a=m(u(M),2);qe(a,5,n,S=>S.id,(S,_)=>{var T=_r();let X;var J=u(T),L=u(J,!0);c(J);var Z=m(J,2);c(T),G(le=>{X=Ce(T,1,"svelte-g8n7xd",null,X,le),K(L,t(_).name)},[()=>({selected:t(_).id===t(s)})],ne),P("click",Z,le=>q(t(_).id,le)),P("click",T,()=>h(t(_))),P("keydown",T,le=>le.key==="Enter"&&h(t(_))),j(S,T)}),c(a),c(M),j(v,M)};H(D,v=>{n().length>0&&v(V)})}c(p),G(v=>A=Ce(k,1,"dropzone svelte-g8n7xd",null,A,v),[()=>({dragging:t(d)})],ne),P("change",W,I),P("click",E,()=>t(i).click()),P("dragover",k,y),P("dragleave",k,C),P("drop",k,b),j(e,p),De()}let N=null;function je(){if(typeof window>"u")return null;if(!N){const e=`
      let socket = null;
      let serverUrl = '';
      let credentials = null;
      let wsConfig = {
        enabled: true,
        autoReconnect: true,
        reconnectInterval: 3000
      };
      let reconnectTimeout = null;
      let clientId = null;
      
      // Generate a unique client ID
      function generateClientId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          const r = Math.random() * 16 | 0;
          const v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
      
      // Initialize client ID if not already set
      function ensureClientId() {
        if (!clientId) {
          clientId = generateClientId();
        }
        return clientId;
      }
      
      // Helper for HTTP requests
      async function fetchWithAuth(endpoint, options = {}) {
        const url = serverUrl + endpoint;
        
        if (credentials) {
          options.headers = {
            ...options.headers,
            'Authorization': 'Basic ' + btoa(credentials.username + ':' + credentials.password)
          };
        }
        
        return fetch(url, options);
      }

      /**
       * Detects if a Blob contains PNG or JPEG data and returns a new Blob with the correct MIME type
       * @param blob The input Blob to analyze
       * @returns Promise that resolves to a new Blob with the correct MIME type
       */
      async function detectAndCreateTypedImageBlob(data) {
        let uint8Array;
        
        // Handle different input types
        if (data instanceof Blob) {
          // For Blob input: slice and convert to ArrayBuffer
          const arrayBuffer = await data.slice(0, 8).arrayBuffer();
          uint8Array = new Uint8Array(arrayBuffer);
        } else if (data instanceof ArrayBuffer) {
          // For ArrayBuffer input: directly create Uint8Array
          uint8Array = new Uint8Array(data, 0, Math.min(8, data.byteLength));
        } else {
          // If we can't determine the type, return a generic blob
          return new Blob([data], { type: 'application/octet-stream' });
        }
        
        // Check for PNG signature (89 50 4E 47 0D 0A 1A 0A)
        if (
          uint8Array[0] === 0x89 &&
          uint8Array[1] === 0x50 &&
          uint8Array[2] === 0x4E &&
          uint8Array[3] === 0x47 &&
          uint8Array[4] === 0x0D &&
          uint8Array[5] === 0x0A &&
          uint8Array[6] === 0x1A &&
          uint8Array[7] === 0x0A
        ) {
          return new Blob([data], { type: 'image/png' });
        }
        
        // Check for JPEG signature (FF D8 FF)
        if (
          uint8Array[0] === 0xFF &&
          uint8Array[1] === 0xD8 &&
          uint8Array[2] === 0xFF
        ) {
          return new Blob([data], { type: 'image/jpeg' });
        }
        
        // If not recognized, return the original blob with a generic image type
        return new Blob([data], { type: 'image/jpeg' });
      } 

      // Handle messages from the main thread
      self.onmessage = async function(e) {
        const { type, data } = e.data;
        
        switch (type) {
          case 'init':
            serverUrl = data.serverUrl;
            credentials = data.credentials;
            wsConfig = data.wsConfig || wsConfig;
            break;
            
          case 'update_ws_config':
            wsConfig = data.wsConfig;
            // If connection is enabled but socket is not connected, try to connect
            if (wsConfig.enabled && !socket) {
              connectWebSocket();
            } 
            // If connection is disabled but socket is connected, disconnect
            else if (!wsConfig.enabled && socket) {
              disconnectWebSocket();
            }
            break;
            
          case 'connect_ws':
            if (wsConfig.enabled) {
              connectWebSocket();
            } else {
              self.postMessage({ type: 'ws_disabled' });
            }
            break;
            
          case 'disconnect_ws':
            disconnectWebSocket();
            break;
            
          case 'send_workflow':
            try {
              const result = await sendWorkflow(data.workflow, data.inputs);
              self.postMessage({ type: 'workflow_sent', data: result });
              
              // After the workflow is sent, make sure we're connected to the WebSocket
              // to receive progress updates for this workflow
              if (wsConfig.enabled && !socket) {
                connectWebSocket();
              }
            } catch (error) {
              self.postMessage({ type: 'error', error: error.message });
            }
            break;
            
          case 'get_history':
            try {
              const history = await getHistory();
              self.postMessage({ type: 'history', data: history });
            } catch (error) {
              self.postMessage({ type: 'error', error: error.message });
            }
            break;
        }
      };
      
      // Connect to WebSocket with our client ID
      function connectWebSocket() {
        try {
          // Clear any existing reconnect timeout
          if (reconnectTimeout) {
            clearTimeout(reconnectTimeout);
            reconnectTimeout = null;
          }
          
          if (socket) {
            disconnectWebSocket();
          }
          
          // Ensure we have a client ID
          ensureClientId();
          
          // Connect to the websocket with our client ID
          const wsUrl = serverUrl.replace('http', 'ws') + '/ws?clientId=' + clientId;
          socket = new WebSocket(wsUrl);
          
          socket.onopen = function() {
            self.postMessage({ type: 'ws_connected' });
          };
          
          socket.onclose = function(event) {
            self.postMessage({ type: 'ws_disconnected', data: { code: event.code, reason: event.reason } });
            socket = null;
            
            // Auto reconnect if enabled
            if (wsConfig.enabled && wsConfig.autoReconnect) {
              reconnectTimeout = setTimeout(() => {
                connectWebSocket();
                self.postMessage({ type: 'ws_reconnecting' });
              }, wsConfig.reconnectInterval);
            }
          };
          
          socket.onerror = function(error) {
            self.postMessage({ type: 'ws_error', error: error.message });
          };
          
          socket.onmessage = function(event) {
            if (event.data instanceof Blob || event.data instanceof ArrayBuffer) {
              // Skip the first 8 bytes of binary data
              let processedData;
              if (event.data instanceof Blob) {
                // For Blob, slice from the 8th byte onwards
                processedData = event.data.slice(8);
              } else if (event.data instanceof ArrayBuffer) {
                // For ArrayBuffer, create a new view starting from the 8th byte
                const byteLength = event.data.byteLength - 8;
                if (byteLength > 0) {
                  processedData = event.data.slice(8);
                } else {
                  // Handle case where data is less than 8 bytes
                  processedData = event.data;
                }
              }
              
              // Process the data after skipping the first 8 bytes
              detectAndCreateTypedImageBlob(processedData).then((blob) => {
                self.postMessage({ type: 'ws_binary', data: blob });
              });
            } else {
              try {
                const message = JSON.parse(event.data);
                self.postMessage({ type: 'ws_message', data: message });
              } catch (error) {
                self.postMessage({ type: 'error', error: 'Invalid WebSocket message format' });
              }
            }
          };
        } catch (error) {
          self.postMessage({ type: 'error', error: error.message });
        }
      }
      
      // Disconnect WebSocket
      function disconnectWebSocket() {
        if (reconnectTimeout) {
          clearTimeout(reconnectTimeout);
          reconnectTimeout = null;
        }
        
        if (socket) {
          socket.close();
          socket = null;
        }
      }
      
      // Send workflow to ComfyUI
      async function sendWorkflow(workflow, inputs) {
        // Ensure we have a client ID
        ensureClientId();
        
        const prompt = transformWorkflowWithInputs(workflow, inputs);
        
        const response = await fetchWithAuth('/prompt', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            prompt: prompt,
            client_id: clientId 
          })
        });
        
        if (!response.ok) {
          throw new Error('Failed to send workflow: ' + response.statusText);
        }
        
        return await response.json();
      }
      
      // Get generation history
      async function getHistory() {
        const response = await fetchWithAuth('/history');
        
        if (!response.ok) {
          throw new Error('Failed to get history: ' + response.statusText);
        }
        
        return await response.json();
      }
      
      // Transform workflow with user inputs
      function transformWorkflowWithInputs(workflow, userInputs) {
        const result = JSON.parse(JSON.stringify(workflow));
        
        // Apply user inputs to the workflow
        for (const nodeId in userInputs) {
          if (result[nodeId] && result[nodeId].inputs) {
            for (const inputKey in userInputs[nodeId].inputs) {
              if (result[nodeId].inputs.hasOwnProperty(inputKey)) {
                result[nodeId].inputs[inputKey] = userInputs[nodeId].inputs[inputKey];
              }
            }
          }
        }
        
        return result;
      }
    `,r=new Blob([e],{type:"application/javascript"});N=new Worker(URL.createObjectURL(r))}if(N){const e=rt();N.postMessage({type:"init",data:{serverUrl:e.serverUrl,credentials:{username:e.username,password:e.password},wsConfig:{enabled:e.wsEnabled,autoReconnect:e.wsAutoReconnect,reconnectInterval:e.wsReconnectInterval}}})}return N}function Et(){N||(N=je()),N&&N.postMessage({type:"connect_ws"})}function Sr(){N&&N.postMessage({type:"disconnect_ws"})}function Ir(e){N||(N=je()),N&&N.postMessage({type:"update_ws_config",data:{wsConfig:e}})}function Ar(e,r){return new Promise((s,n)=>{if(N||(N=je()),!N){n(new Error("Failed to initialize API worker"));return}const o=i=>{const{type:f,data:d,error:w}=i.data;f==="workflow_sent"?(N==null||N.removeEventListener("message",o),s(d)):f==="error"&&(N==null||N.removeEventListener("message",o),n(new Error(w)))};N.addEventListener("message",o),N.postMessage({type:"send_workflow",data:{workflow:e,inputs:r}})})}function Er(e){if(N||(N=je()),!N)return()=>{};const r=s=>{const{type:n,data:o,error:i}=s.data;n==="ws_message"||n==="ws_connected"||n==="ws_disconnected"||n==="ws_error"||n==="ws_binary"?e({type:n,data:o,error:i}):console.log("unknown message type",n)};return N.addEventListener("message",r),()=>{N&&N.removeEventListener("message",r)}}function Ve(e){const r={};for(const s in e)if(e.hasOwnProperty(s)&&e[s].inputs){r[s]={inputs:{}};const n=e[s].inputs;for(const o in n)if(n.hasOwnProperty(o)){const i=n[o];(typeof i=="string"||typeof i=="number")&&(r[s].inputs[o]=i)}}return r}var Cr=B("<p>No editable inputs found in this workflow.</p>"),Wr=B('<input type="number" step="any" class="svelte-1u2j2er">'),Tr=B('<input type="text" placeholder="File path" class="svelte-1u2j2er">'),Dr=B('<textarea rows="16" class="svelte-1u2j2er"></textarea>'),Mr=B('<div class="form-field svelte-1u2j2er"><label class="svelte-1u2j2er"> </label> <!></div>'),jr=B('<div class="collapsible-content svelte-1u2j2er"></div>'),qr=B('<div><div class="collapsible-header svelte-1u2j2er" role="button" tabindex="0"><span class="collapse-icon svelte-1u2j2er"> </span> <h4 class="svelte-1u2j2er"> </h4></div> <!></div>'),Ur=B("<span> </span>"),Nr=B('<div class="progress-container svelte-1u2j2er"><div class="progress-bar svelte-1u2j2er"><div class="progress-fill svelte-1u2j2er"></div></div> <div class="progress-info svelte-1u2j2er"><span> </span> <!></div></div>'),Br=B('<div class="error-message svelte-1u2j2er"> </div>'),Fr=B('<form><!> <div class="form-actions svelte-1u2j2er"><button type="submit" class="generate-btn svelte-1u2j2er"> </button></div></form> <!> <!>',1),Or=B('<div class="dynamic-form svelte-1u2j2er"><!></div>');function Hr(e,r){Te(r,!1);let s=Be(r,"workflow",8);const n=kt();let o=U({}),i=U({}),f=U({}),d=U(!1),w=U(0),I=U(""),b=U(""),O=null,h=!0,q=null;Fe(()=>{h=rt().wsEnabled,l(o,Ve(s())),y(),C(),h&&p()}),nr(()=>{O&&O()});function y(){l(i,{});for(const a in t(o)){t(i)[a]||_e(i,t(i)[a]={inputs:{}});for(const S in t(o)[a].inputs)_e(i,t(i)[a].inputs[S]=t(o)[a].inputs[S])}}function C(){l(f,{});for(const a in t(o))_e(f,t(f)[a]=!1)}function p(){Et(),O=Er(a=>{a.type==="ws_message"?k(a.data):a.type==="ws_error"?l(b,"WebSocket error: "+a.error):a.type==="ws_disabled"?console.log("WebSocket is disabled in settings"):a.type==="ws_reconnecting"?console.log("Attempting to reconnect WebSocket..."):a.type==="ws_connected"?(console.log("WebSocket connected successfully"),l(b,"")):a.type==="ws_disconnected"?console.log("WebSocket disconnected:",a.data):a.type==="ws_binary"&&A(a.data)})}function k(a){if(a.type==="executing"){const S=a.data;q&&S.prompt_id===q&&(S.node===null?console.log("Workflow execution complete"):l(I,S.node||""))}else if(a.type==="progress")l(w,Math.floor(a.data.value*100)),a.data.node_name&&l(I,a.data.node_name);else if(a.type==="executed"){const S=a.data;if(S.node_type==="SaveImage"||S.node_type==="SaveImageWebsocket"||S.node_type&&S.node_type.includes("Image")){const _=S.images;if(_&&_.length>0){console.log("image url",_[0].url);let T="image/png";if(_[0].filename){const J=_[0].filename.toLowerCase();J.endsWith(".jpg")||J.endsWith(".jpeg")?T="image/jpeg":J.endsWith(".png")&&(T="image/png")}const X={url:_[0].url,filename:_[0].filename,type:_[0].type||T,timestamp:Date.now()};dt(X),n("image-generated",{image:X}),l(d,!1),l(w,0),l(I,"")}}}else a.type==="status"&&(a.data.status==="error"?(l(b,"Generation error: "+a.data.message),l(d,!1)):a.data.status==="success"&&console.log("Generation completed successfully"))}async function A(a){try{let S,_,T;if(a instanceof ArrayBuffer){const L=new Uint8Array(a,0,Math.min(8,a.byteLength));L[0]===137&&L[1]===80&&L[2]===78&&L[3]===71&&L[4]===13&&L[5]===10&&L[6]===26&&L[7]===10?(_="image/png",T="png"):(L[0]===255&&L[1]===216&&L[2],_="image/jpeg",T="jpg"),S=new Blob([a],{type:_})}else if(a.type==="image/png")_="image/png",T="png",S=a;else if(a.type==="image/jpeg")_="image/jpeg",T="jpg",S=a;else{const L=await a.slice(0,8).arrayBuffer(),Z=new Uint8Array(L);Z[0]===137&&Z[1]===80&&Z[2]===78&&Z[3]===71&&Z[4]===13&&Z[5]===10&&Z[6]===26&&Z[7]===10?(_="image/png",T="png"):(Z[0]===255&&Z[1]===216&&Z[2],_="image/jpeg",T="jpg"),S=new Blob([a],{type:_})}const X=URL.createObjectURL(S);console.log("blob length",S.size),console.log("detected image type",_);const J={url:X,filename:`image_${Date.now()}.${T}`,type:_,timestamp:Date.now()};console.log("image data",J),dt(J),n("image-generated",{image:J}),l(d,!1),l(w,0),l(I,"")}catch(S){console.error("Error processing binary data:",S),l(b,"Failed to process image data")}}async function W(){l(b,"");try{l(d,!0),l(w,0),l(I,"Starting..."),q=(await Ar(s(),t(i))).prompt_id,console.log("Workflow sent, prompt ID:",q),h||l(b,"WebSocket is disabled. Generation has started, but progress updates are not available. Results will appear when completed.")}catch(a){l(b,a instanceof Error?a.message:"Failed to start generation"),l(d,!1),l(w,0),l(I,""),console.error("Error sending workflow:",a)}}function g(a){return typeof a=="number"?"number":typeof a=="string"&&/\.(png|jpg|jpeg|webp)$/i.test(a)?"file":"text"}function E(a){if(!s())return a;const S=s()[a];return S&&S.class_type?`${S.class_type} (${a})`:a}function Y(a){return a.replace(/_/g," ").replace(/([A-Z])/g," $1").replace(/^\w/,S=>S.toUpperCase())}function z(a){_e(f,t(f)[a]=!t(f)[a])}Ke(()=>(_t(s()),Ve),()=>{s()&&(l(o,Ve(s())),y(),C())}),Xe(),We();var D=Or(),V=u(D);{var v=a=>{var S=Cr();j(a,S)},M=a=>{var S=Fr(),_=Qe(S),T=u(_);qe(T,1,()=>Object.keys(t(o)),it,(ae,F)=>{var oe=qr();let Se;var x=u(oe),R=u(x),re=u(R,!0);c(R);var ce=m(R,2),fe=u(ce,!0);c(ce),c(x);var de=m(x,2);{var ee=Q=>{var ue=jr();qe(ue,5,()=>Object.keys(t(o)[t(F)].inputs),it,(ye,$)=>{var ve=Mr();const Ie=ne(()=>t(o)[t(F)].inputs[t($)]),pe=ne(()=>g(t(Ie)));var ie=u(ve),Ct=u(ie,!0);c(ie);var Wt=m(ie,2);{var Tt=we=>{var Ae=Wr();me(Ae),G(()=>se(Ae,"id",`${t(F)}-${t($)}`)),ke(Ae,()=>t(i)[t(F)].inputs[t($)],He=>_e(i,t(i)[t(F)].inputs[t($)]=He)),j(we,Ae)},Dt=(we,Ae)=>{{var He=Ee=>{var ge=Tr();me(ge),G(()=>se(ge,"id",`${t(F)}-${t($)}`)),ke(ge,()=>t(i)[t(F)].inputs[t($)],Re=>_e(i,t(i)[t(F)].inputs[t($)]=Re)),j(Ee,ge)},Mt=Ee=>{var ge=Dr();rr(ge),G(()=>se(ge,"id",`${t(F)}-${t($)}`)),ke(ge,()=>t(i)[t(F)].inputs[t($)],Re=>_e(i,t(i)[t(F)].inputs[t($)]=Re)),j(Ee,ge)};H(we,Ee=>{t(pe)==="file"?Ee(He):Ee(Mt,!1)},Ae)}};H(Wt,we=>{t(pe)==="number"?we(Tt):we(Dt,!1)})}c(ve),G(we=>{se(ie,"for",`${t(F)}-${t($)}`),K(Ct,we)},[()=>Y(t($))],ne),j(ye,ve)}),c(ue),j(Q,ue)};H(de,Q=>{t(f)[t(F)]||Q(ee)})}c(oe),G((Q,ue)=>{Se=Ce(oe,1,"form-group collapsible-group svelte-1u2j2er",null,Se,Q),se(x,"aria-expanded",!t(f)[t(F)]),K(re,t(f)[t(F)]?"►":"▼"),K(fe,ue)},[()=>({collapsed:t(f)[t(F)]}),()=>E(t(F))],ne),P("click",x,()=>z(t(F))),j(ae,oe)});var X=m(T,2),J=u(X),L=u(J,!0);c(J),c(X),c(_);var Z=m(_,2);{var le=ae=>{var F=Nr(),oe=u(F),Se=u(oe);c(oe);var x=m(oe,2),R=u(x),re=u(R);c(R);var ce=m(R,2);{var fe=de=>{var ee=Ur(),Q=u(ee);c(ee),G(()=>K(Q,`Processing: ${t(I)??""}`)),j(de,ee)};H(ce,de=>{t(I)&&de(fe)})}c(x),c(F),G(()=>{fr(Se,`width: ${t(w)??""}%`),K(re,`${t(w)??""}%`)}),j(ae,F)};H(Z,ae=>{t(d)&&ae(le)})}var xe=m(Z,2);{var Oe=ae=>{var F=Br(),oe=u(F,!0);c(F),G(()=>K(oe,t(b))),j(ae,F)};H(xe,ae=>{t(b)&&ae(Oe)})}G(()=>{J.disabled=t(d),K(L,t(d)?"Generating...":"Generate Image")}),P("submit",_,St(W)),j(a,S)};H(V,a=>{Object.keys(t(o)).length===0?a(v):a(M,!1)})}c(D),j(e,D),De()}var Rr=Ne('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg> Exit Fullscreen',1),Lr=Ne('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg> Fullscreen',1),Pr=B('<div class="image-container svelte-10bns48"><img alt="Generated Image" class="svelte-10bns48"> <div class="image-info svelte-10bns48"><span> </span> <span> </span></div> <div class="image-actions svelte-10bns48"><button class="download-btn svelte-10bns48"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Download</button> <button class="fullscreen-btn svelte-10bns48"><!></button></div></div>'),$r=B('<div class="no-image svelte-10bns48"><p>No image generated yet</p></div>'),Gr=B('<div class="fullscreen-overlay svelte-10bns48" role="dialog" aria-modal="true"><div class="fullscreen-content svelte-10bns48"><img alt="Generated Image (Fullscreen)" class="svelte-10bns48"> <button class="close-btn svelte-10bns48"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div></div>'),Jr=B("<div><!></div> <!>",1);function zr(e,r){Te(r,!1);let s=Be(r,"image",8),n=U(!1);function o(){if(!s()||!s().url)return;const p=s().url;let k="png";s().type&&(s().type==="image/jpeg"?k="jpg":s().type==="image/png"&&(k="png"));const A=document.createElement("a");A.href=p,A.download=s().filename||`generated-image.${k}`,document.body.appendChild(A),A.click(),document.body.removeChild(A)}function i(){l(n,!t(n))}function f(){return!s()||!s().url?"":s().url}const d=p=>new Date(p).toLocaleString();We();var w=Jr(),I=Qe(w);let b;var O=u(I);{var h=p=>{var k=Pr(),A=u(k),W=m(A,2),g=u(W),E=u(g,!0);c(g);var Y=m(g,2),z=u(Y,!0);c(Y),c(W);var D=m(W,2),V=u(D),v=m(V,2),M=u(v);{var a=_=>{var T=Rr();be(),j(_,T)},S=_=>{var T=Lr();be(),j(_,T)};H(M,_=>{t(n)?_(a):_(S,!1)})}c(v),c(D),c(k),G((_,T)=>{se(A,"src",_),K(E,s().filename||"Untitled"),K(z,T)},[f,()=>d(s().timestamp)],ne),P("click",A,i),P("click",V,o),P("click",v,i),j(p,k)},q=p=>{var k=$r();j(p,k)};H(O,p=>{s()&&s().url?p(h):p(q,!1)})}c(I);var y=m(I,2);{var C=p=>{var k=Gr(),A=u(k),W=u(A),g=m(W,2);c(A),c(k),G(E=>se(W,"src",E),[f],ne),P("click",W,vt(()=>{})),P("click",g,i),P("click",A,vt(()=>{})),P("click",k,i),j(p,k)};H(y,p=>{t(n)&&p(C)})}G(p=>b=Ce(I,1,"image-viewer svelte-10bns48",null,b,p),[()=>({fullscreen:t(n)})],ne),j(e,w),De()}var Vr=B("<button> </button>"),Yr=B('<p class="no-history svelte-xaorkw">No images in history</p>'),Zr=B('<div class="history-item svelte-xaorkw"><img loading="lazy" class="svelte-xaorkw"> <div class="image-meta svelte-xaorkw"><span class="image-name svelte-xaorkw"> </span> <span class="image-date svelte-xaorkw"> </span></div></div>'),Kr=B('<div class="history-list svelte-xaorkw"></div>'),Xr=B('<div class="image-history svelte-xaorkw"><div class="history-header svelte-xaorkw"><h3 class="svelte-xaorkw">Image History</h3> <!></div> <!></div>');function Qr(e,r){Te(r,!1);let s=Be(r,"images",24,()=>[]),n=U([]),o=U(!1);Fe(()=>{l(n,At())});function i(C){return!C||!C.url?"":C.url}function f(C){return new Date(C).toLocaleString()}function d(){t(o)?(mr(),l(n,[]),l(o,!1)):(l(o,!0),setTimeout(()=>{l(o,!1)},3e3))}Ke(()=>_t(s()),()=>{if(s().length>0){const C=[...s()];l(n,C)}}),Xe(),We();var w=Xr(),I=u(w),b=m(u(I),2);{var O=C=>{var p=Vr();let k;var A=u(p,!0);c(p),G(W=>{k=Ce(p,1,"clear-btn svelte-xaorkw",null,k,W),K(A,t(o)?"Confirm Clear":"Clear History")},[()=>({confirm:t(o)})],ne),P("click",p,d),j(C,p)};H(b,C=>{t(n).length>0&&C(O)})}c(I);var h=m(I,2);{var q=C=>{var p=Yr();j(C,p)},y=C=>{var p=Kr();qe(p,7,()=>t(n),k=>k.timestamp,(k,A,W)=>{var g=Zr(),E=u(g),Y=m(E,2),z=u(Y),D=u(z,!0);c(z);var V=m(z,2),v=u(V,!0);c(V),c(Y),c(g),G((M,a)=>{se(E,"src",M),se(E,"alt",`Generated image ${t(W)+1}`),K(D,t(A).filename||"Untitled"),K(v,a)},[()=>i(t(A)),()=>f(t(A).timestamp)],ne),j(k,g)}),c(p),j(C,p)};H(h,C=>{t(n).length===0?C(q):C(y,!1)})}c(w),j(e,w),De()}var es=Ne('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>'),ts=Ne('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>'),rs=B('<div class="form-group checkbox-group svelte-6qa61p"><label class="checkbox-label svelte-6qa61p"><input type="checkbox" class="svelte-6qa61p"> <span>Auto Reconnect if Disconnected</span></label> <div class="hint svelte-6qa61p">Automatically attempts to reconnect if the WebSocket connection is lost</div></div> <div class="form-group svelte-6qa61p"><label for="reconnect-interval" class="svelte-6qa61p">Reconnect Interval (ms)</label> <input type="number" id="reconnect-interval" min="500" max="30000" step="500" class="svelte-6qa61p"> <div class="hint svelte-6qa61p">Time to wait before reconnecting (500ms minimum, 30000ms maximum)</div></div>',1),ss=B(`<div class="advanced-settings svelte-6qa61p"><div class="websocket-info svelte-6qa61p"><p class="svelte-6qa61p">ComfyUI uses WebSocket connections to provide real-time progress updates during image generation. The application will:</p> <ol class="svelte-6qa61p"><li class="svelte-6qa61p">Generate a unique client ID for your session</li> <li class="svelte-6qa61p">Send your workflow with this client ID to ComfyUI</li> <li class="svelte-6qa61p">Connect to WebSocket using the same client ID to receive progress updates</li></ol></div> <div class="form-group checkbox-group svelte-6qa61p"><label class="checkbox-label svelte-6qa61p"><input type="checkbox" class="svelte-6qa61p"> <span>Enable WebSocket Connection</span></label> <div class="hint svelte-6qa61p">WebSocket is used for real-time generation progress updates. Disable only if you're experiencing connection issues.</div></div> <!></div>`),ns=B('<div class="success-message svelte-6qa61p">Settings saved successfully!</div>'),as=B("<div><!></div>"),os=B('<div class="auth-settings svelte-6qa61p"><h3 class="svelte-6qa61p">ComfyUI Connection Settings</h3> <form><div class="form-group svelte-6qa61p"><label for="server-url" class="svelte-6qa61p">Server URL</label> <input type="url" id="server-url" placeholder="http://127.0.0.1:8188" required class="svelte-6qa61p"></div> <div class="form-group svelte-6qa61p"><label for="username" class="svelte-6qa61p">Username (optional)</label> <input type="text" id="username" placeholder="Username if required" class="svelte-6qa61p"></div> <div class="form-group password-group svelte-6qa61p"><label for="password" class="svelte-6qa61p">Password (optional)</label> <div class="password-input svelte-6qa61p"><input id="password" placeholder="Password if required" class="svelte-6qa61p"> <button type="button" class="toggle-password svelte-6qa61p"><!></button></div></div> <div class="toggle-section svelte-6qa61p"><button type="button" class="toggle-btn svelte-6qa61p"> </button></div> <!> <div class="actions svelte-6qa61p"><button type="submit" class="save-btn svelte-6qa61p">Save Settings</button> <button type="button" class="test-btn svelte-6qa61p"> </button></div></form> <!> <!></div>');function is(e,r){Te(r,!1);let s=U(""),n=U(""),o=U(""),i=U(!1),f=U(!1),d=U(!1),w=U("untested"),I=U(""),b=U(!0),O=U(!0),h=U(3e3),q=U(!1);Fe(()=>{const x=rt();l(s,x.serverUrl),l(n,x.username),l(o,x.password),l(b,x.wsEnabled),l(O,x.wsAutoReconnect),l(h,x.wsReconnectInterval)});async function y(){t(s)||l(s,"http://127.0.0.1:8188"),t(h)<500&&l(h,500),hr({serverUrl:t(s),username:t(n),password:t(o),wsEnabled:t(b),wsAutoReconnect:t(O),wsReconnectInterval:t(h)}),l(f,!0),setTimeout(()=>{l(f,!1)},3e3),Sr(),je(),Ir({enabled:t(b),autoReconnect:t(O),reconnectInterval:t(h)})}async function C(){l(d,!0),l(w,"testing"),l(I,"");try{await y();const x=new Promise((ce,fe)=>{setTimeout(()=>fe(new Error("Connection timeout")),5e3)}),R=fetch(`${t(s)}/system_stats`),re=await Promise.race([R,x]);if(re.ok)l(w,"connected"),t(b)&&Et();else throw new Error(`HTTP Error: ${re.status}`)}catch(x){l(w,"error"),l(I,x instanceof Error?x.message:"Unknown connection error"),console.error("Connection test failed:",x)}finally{l(d,!1)}}function p(){l(i,!t(i))}function k(){l(q,!t(q))}We();var A=os(),W=m(u(A),2),g=u(W),E=m(u(g),2);me(E),c(g);var Y=m(g,2),z=m(u(Y),2);me(z),c(Y);var D=m(Y,2),V=m(u(D),2),v=u(V);me(v);var M=m(v,2),a=u(M);{var S=x=>{var R=es();j(x,R)},_=x=>{var R=ts();j(x,R)};H(a,x=>{t(i)?x(S):x(_,!1)})}c(M),c(V),c(D);var T=m(D,2),X=u(T),J=u(X);c(X),c(T);var L=m(T,2);{var Z=x=>{var R=ss(),re=m(u(R),2),ce=u(re),fe=u(ce);me(fe),be(2),c(ce),be(2),c(re);var de=m(re,2);{var ee=Q=>{var ue=rs(),ye=Qe(ue),$=u(ye),ve=u($);me(ve),be(2),c($),be(2),c(ye);var Ie=m(ye,2),pe=m(u(Ie),2);me(pe),be(2),c(Ie),ut(ve,()=>t(O),ie=>l(O,ie)),ke(pe,()=>t(h),ie=>l(h,ie)),j(Q,ue)};H(de,Q=>{t(b)&&Q(ee)})}c(R),ut(fe,()=>t(b),Q=>l(b,Q)),j(x,R)};H(L,x=>{t(q)&&x(Z)})}var le=m(L,2),xe=m(u(le),2),Oe=u(xe,!0);c(xe),c(le),c(W);var ae=m(W,2);{var F=x=>{var R=ns();j(x,R)};H(ae,x=>{t(f)&&x(F)})}var oe=m(ae,2);{var Se=x=>{var R=as();let re;var ce=u(R);{var fe=ee=>{var Q=Le("Testing connection...");j(ee,Q)},de=(ee,Q)=>{{var ue=$=>{var ve=Le("✓ Connected successfully to ComfyUI");j($,ve)},ye=($,ve)=>{{var Ie=pe=>{var ie=Le();G(()=>K(ie,`✗ Connection failed: ${t(I)??""}`)),j(pe,ie)};H($,pe=>{t(w)==="error"&&pe(Ie)},ve)}};H(ee,$=>{t(w)==="connected"?$(ue):$(ye,!1)},Q)}};H(ce,ee=>{t(w)==="testing"?ee(fe):ee(de,!1)})}c(R),G(ee=>re=Ce(R,1,"connection-status svelte-6qa61p",null,re,ee),[()=>({error:t(w)==="error",success:t(w)==="connected"})],ne),j(x,R)};H(oe,x=>{t(w)!=="untested"&&x(Se)})}c(A),G(()=>{se(v,"type",t(i)?"text":"password"),se(M,"aria-label",t(i)?"Hide password":"Show password"),K(J,`${(t(q)?"▼":"►")??""} WebSocket Settings`),xe.disabled=t(d),K(Oe,t(d)?"Testing...":"Test Connection")}),ke(E,()=>t(s),x=>l(s,x)),ke(z,()=>t(n),x=>l(n,x)),ke(v,()=>t(o),x=>l(o,x)),P("click",M,p),P("click",X,k),P("click",xe,C),P("submit",W,St(y)),j(e,A),De()}var ls=B('<section class="settings svelte-1ri4ytp"><!></section>'),cs=B('<main class="svelte-1ri4ytp"><header class="svelte-1ri4ytp"><h1 class="svelte-1ri4ytp">ComfyWeb</h1> <button class="svelte-1ri4ytp"> </button></header> <!> <div class="app-container svelte-1ri4ytp"><section class="workflow-section svelte-1ri4ytp"><h2 class="svelte-1ri4ytp">Workflow</h2> <!> <!></section> <section class="result-section svelte-1ri4ytp"><h2 class="svelte-1ri4ytp">Generated Image</h2> <!></section> <section class="history-section svelte-1ri4ytp"><h2 class="svelte-1ri4ytp">History</h2> <!></section></div></main>');function ws(e,r){Te(r,!1);let s=U(null),n=U([]),o=U([]),i=U(!1);Fe(()=>{l(n,Ue()),t(n).length>0&&l(s,t(n)[0])});function f(D){l(s,D.detail.workflow),l(n,Ue())}function d(D){l(o,[D.detail.image,...t(o)])}We();var w=cs(),I=u(w),b=m(u(I),2),O=u(b,!0);c(b),c(I);var h=m(I,2);{var q=D=>{var V=ls(),v=u(V);is(v,{}),c(V),j(D,V)};H(h,D=>{t(i)&&D(q)})}var y=m(h,2),C=u(y),p=m(u(C),2);xr(p,{get workflows(){return t(n)},$$events:{"workflow-uploaded":f}});var k=m(p,2);{var A=D=>{Hr(D,{get workflow(){return t(s)},$$events:{"image-generated":d}})};H(k,D=>{t(s)&&D(A)})}c(C);var W=m(C,2),g=m(u(W),2);{var E=D=>{zr(D,{get image(){return t(o)[0]}})};H(g,D=>{t(o).length>0&&D(E)})}c(W);var Y=m(W,2),z=m(u(Y),2);Qr(z,{get images(){return t(o)}}),c(Y),c(y),c(w),G(()=>K(O,t(i)?"Close Settings":"Settings")),P("click",b,()=>l(i,!t(i))),j(e,w),De()}export{ws as component};
