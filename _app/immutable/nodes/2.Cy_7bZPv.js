import{t as F,a as j,n as Be,d as Pe}from"../chunks/DJFf1O34.js";import{i as We}from"../chunks/pCWyai4s.js";import{C as $e,o as te,a0 as jt,$ as Ut,z as Nt,j as Bt,g as t,O as se,A as Ft,B as nt,D as ze,p as Me,ae as Ot,F as pt,k as gt,G as Ht,ah as mt,i as Rt,Z as N,an as st,ao as Ge,a2 as at,ap as Ye,aq as ot,ar as Lt,a5 as Pt,as as $t,m as zt,at as Ze,au as Gt,K as Jt,ac as qt,av as wt,aw as Vt,ax as Yt,ay as Zt,az as Kt,aA as Xt,aB as Qt,aC as er,b as ht,J as bt,s as Te,aD as Ke,aE as Xe,t as G,v as De,T as l,w as f,y as h,x as c,aF as ye,e as yt,q as Qe,aG as _e}from"../chunks/BoRT0E4S.js";import{a as tr,l as _t,e as $,s as K,r as rr}from"../chunks/D2UPCJxz.js";import{p as Fe,b as nr,i as R}from"../chunks/BZVubSn3.js";import{c as kt,o as Oe,a as sr}from"../chunks/CzcyLZUS.js";function it(e,r){return r}function ar(e,r,n,s){for(var o=[],i=r.length,d=0;d<i;d++)Lt(r[d].e,o,!0);var v=i>0&&o.length===0&&n!==null;if(v){var m=n.parentNode;Pt(m),m.append(n),s.clear(),we(e,r[0].prev,r[i-1].next)}$t(o,()=>{for(var I=0;I<i;I++){var _=r[I];v||(s.delete(_.k),we(e,_.prev,_.next)),zt(_.e,!v)}})}function Ue(e,r,n,s,o,i=null){var d=e,v={flags:r,items:new Map,first:null},m=(r&wt)!==0;if(m){var I=e;d=te?$e(jt(I)):I.appendChild(Ut())}te&&Nt();var _=null,H=!1,w=se(()=>{var U=n();return Rt(U)?U:U==null?[]:mt(U)});Bt(()=>{var U=t(w),b=U.length;if(H&&b===0)return;H=b===0;let C=!1;if(te){var p=d.data===Ft;p!==(b===0)&&(d=nt(),$e(d),ze(!1),C=!0)}if(te){for(var k=null,A,W=0;W<b;W++){if(Me.nodeType===8&&Me.data===Ot){d=Me,C=!0,ze(!1);break}var g=U[W],E=s(g,W);A=xt(Me,v,k,null,g,E,W,o,r,n),v.items.set(E,A),k=A}b>0&&$e(nt())}te||or(U,v,d,o,r,s,n),i!==null&&(b===0?_?pt(_):_=gt(()=>i(d)):_!==null&&Ht(_,()=>{_=null})),C&&ze(!0),t(w)}),te&&(d=Me)}function or(e,r,n,s,o,i,d){var y,T,X,J;var v=(o&Vt)!==0,m=(o&(Ze|Ye))!==0,I=e.length,_=r.items,H=r.first,w=H,U,b=null,C,p=[],k=[],A,W,g,E;if(v)for(E=0;E<I;E+=1)A=e[E],W=i(A,E),g=_.get(W),g!==void 0&&((y=g.a)==null||y.measure(),(C??(C=new Set)).add(g));for(E=0;E<I;E+=1){if(A=e[E],W=i(A,E),g=_.get(W),g===void 0){var Y=w?w.e.nodes_start:n;b=xt(Y,r,b,b===null?r.first:b.next,A,W,E,s,o,d),_.set(W,b),p=[],k=[],w=b.next;continue}if(m&&ir(g,A,E,o),(g.e.f&Ge)!==0&&(pt(g.e),v&&((T=g.a)==null||T.unfix(),(C??(C=new Set)).delete(g))),g!==w){if(U!==void 0&&U.has(g)){if(p.length<k.length){var q=k[0],D;b=q.prev;var V=p[0],u=p[p.length-1];for(D=0;D<p.length;D+=1)lt(p[D],q,n);for(D=0;D<k.length;D+=1)U.delete(k[D]);we(r,V.prev,u.next),we(r,b,V),we(r,u,q),w=q,b=u,E-=1,p=[],k=[]}else U.delete(g),lt(g,w,n),we(r,g.prev,g.next),we(r,g,b===null?r.first:b.next),we(r,b,g),b=g;continue}for(p=[],k=[];w!==null&&w.k!==W;)(w.e.f&Ge)===0&&(U??(U=new Set)).add(w),k.push(w),w=w.next;if(w===null)continue;g=w}p.push(g),b=g,w=g.next}if(w!==null||U!==void 0){for(var M=U===void 0?[]:mt(U);w!==null;)(w.e.f&Ge)===0&&M.push(w),w=w.next;var a=M.length;if(a>0){var S=(o&wt)!==0&&I===0?n:null;if(v){for(E=0;E<a;E+=1)(X=M[E].a)==null||X.measure();for(E=0;E<a;E+=1)(J=M[E].a)==null||J.fix()}ar(r,M,S,_)}}v&&Jt(()=>{var P;if(C!==void 0)for(g of C)(P=g.a)==null||P.apply()}),at.first=r.first&&r.first.e,at.last=b&&b.e}function ir(e,r,n,s){(s&Ze)!==0&&ot(e.v,r),(s&Ye)!==0?ot(e.i,n):e.i=n}function xt(e,r,n,s,o,i,d,v,m,I){var _=(m&Ze)!==0,H=(m&Gt)===0,w=_?H?N(o):st(o):o,U=(m&Ye)===0?d:st(d),b={i:U,v:w,k:i,a:null,e:null,prev:n,next:s};try{return b.e=gt(()=>v(e,w,U,I),te),b.e.prev=n&&n.e,b.e.next=s&&s.e,n===null?r.first=b:(n.next=b,n.e.next=b.e),s!==null&&(s.prev=b,s.e.prev=b.e),b}finally{}}function lt(e,r,n){for(var s=e.next?e.next.e.nodes_start:n,o=r?r.e.nodes_start:n,i=e.e.nodes_start;i!==s;){var d=qt(i);o.before(i),i=d}}function we(e,r,n){r===null?e.first=n:(r.next=n,r.e.next=n&&n.e),n!==null&&(n.prev=r,n.e.prev=r&&r.e)}const ct=[...` 	
\r\f \v\uFEFF`];function lr(e,r,n){var s=e==null?"":""+e;if(n){for(var o in n)if(n[o])s=s?s+" "+o:o;else if(s.length)for(var i=o.length,d=0;(d=s.indexOf(o,d))>=0;){var v=d+i;(d===0||ct.includes(s[d-1]))&&(v===s.length||ct.includes(s[v]))?s=(d===0?"":s.substring(0,d))+s.substring(v+1):d=v}}return s===""?null:s}function cr(e,r){return e==null?null:String(e)}function Ce(e,r,n,s,o,i){var d=e.__className;if(te||d!==n){var v=lr(n,s,i);(!te||v!==e.getAttribute("class"))&&(v==null?e.removeAttribute("class"):e.className=v),e.__className=n}else if(i&&o!==i)for(var m in i){var I=!!i[m];(o==null||I!==!!o[m])&&e.classList.toggle(m,I)}return i}function dr(e,r,n,s){var o=e.__style;if(te||o!==r){var i=cr(r);(!te||i!==e.getAttribute("style"))&&(i==null?e.removeAttribute("style"):e.style.cssText=i),e.__style=r}return s}const fr=Symbol("is custom element"),ur=Symbol("is html");function he(e){if(te){var r=!1,n=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var s=e.value;ne(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var o=e.checked;ne(e,"checked",null),e.checked=o}}};e.__on_r=n,Yt(n),tr()}}function ne(e,r,n,s){var o=vr(e);te&&(o[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||o[r]!==(o[r]=n)&&(r==="loading"&&(e[Zt]=n),n==null?e.removeAttribute(r):typeof n!="string"&&pr(e).includes(r)?e[r]=n:e.setAttribute(r,n))}function vr(e){return e.__attributes??(e.__attributes={[fr]:e.nodeName.includes("-"),[ur]:e.namespaceURI===Kt})}var dt=new Map;function pr(e){var r=dt.get(e.nodeName);if(r)return r;dt.set(e.nodeName,r=[]);for(var n,s=e,o=Element.prototype;o!==s;){n=Qt(s);for(var i in n)n[i].set&&r.push(i);s=Xt(s)}return r}function ke(e,r,n=r){var s=er();_t(e,"input",o=>{var i=o?e.defaultValue:e.value;if(i=Je(e)?qe(i):i,n(i),s&&i!==(i=r())){var d=e.selectionStart,v=e.selectionEnd;e.value=i??"",v!==null&&(e.selectionStart=d,e.selectionEnd=Math.min(v,e.value.length))}}),(te&&e.defaultValue!==e.value||ht(r)==null&&e.value)&&n(Je(e)?qe(e.value):e.value),bt(()=>{var o=r();Je(e)&&o===qe(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function ft(e,r,n=r){_t(e,"change",s=>{var o=s?e.defaultChecked:e.checked;n(o)}),(te&&e.defaultChecked!==e.checked||ht(r)==null)&&n(e.checked),bt(()=>{var s=r();e.checked=!!s})}function Je(e){var r=e.type;return r==="number"||r==="range"}function qe(e){return e===""?null:+e}function ut(e){return function(...r){var n=r[0];return n.stopPropagation(),e==null?void 0:e.apply(this,r)}}function St(e){return function(...r){var n=r[0];return n.preventDefault(),e==null?void 0:e.apply(this,r)}}const et="comfyweb_workflows",It="comfyweb_auth",tt="comfyweb_history";function Ne(){if(typeof window>"u")return[];try{const e=localStorage.getItem(et);return e?JSON.parse(e):[]}catch(e){return console.error("Error getting stored workflows:",e),[]}}function gr(e){if(!(typeof window>"u"))try{const r=Ne(),n=r.findIndex(s=>s.id===e.id);n>=0?r[n]=e:r.push(e),localStorage.setItem(et,JSON.stringify(r))}catch(r){console.error("Error saving workflow:",r)}}function mr(e){if(!(typeof window>"u"))try{let r=Ne();r=r.filter(n=>n.id!==e),localStorage.setItem(et,JSON.stringify(r))}catch(r){console.error("Error deleting workflow:",r)}}function rt(){if(typeof window>"u")return{username:"",password:"",serverUrl:"",wsEnabled:!0,wsAutoReconnect:!0,wsReconnectInterval:3e3};try{const e=localStorage.getItem(It),r={username:"",password:"",serverUrl:"http://127.0.0.1:8188",wsEnabled:!0,wsAutoReconnect:!0,wsReconnectInterval:3e3};if(!e)return r;const n=JSON.parse(e);return{...r,...n}}catch(e){return console.error("Error getting auth settings:",e),{username:"",password:"",serverUrl:"http://127.0.0.1:8188",wsEnabled:!0,wsAutoReconnect:!0,wsReconnectInterval:3e3}}}function wr(e){if(!(typeof window>"u"))try{localStorage.setItem(It,JSON.stringify(e))}catch(r){console.error("Error saving auth settings:",r)}}function vt(e){if(!(typeof window>"u"))try{const r=At();r.unshift(e),r.length>50&&r.pop(),localStorage.setItem(tt,JSON.stringify(r))}catch(r){console.error("Error saving image to history:",r)}}function At(){if(typeof window>"u")return[];try{const e=localStorage.getItem(tt);return e?JSON.parse(e):[]}catch(e){return console.error("Error getting image history:",e),[]}}function hr(){if(!(typeof window>"u"))try{localStorage.setItem(tt,JSON.stringify([]))}catch(e){console.error("Error clearing image history:",e)}}var br=F('<p class="error svelte-g8n7xd"> </p>'),yr=F('<li tabindex="0"><span> </span> <button class="delete-btn svelte-g8n7xd" aria-label="Delete workflow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></li>'),_r=F('<div class="saved-workflows svelte-g8n7xd"><h3 class="svelte-g8n7xd">Saved Workflows</h3> <ul class="svelte-g8n7xd"></ul></div>'),kr=F('<div class="workflow-uploader svelte-g8n7xd"><div><input type="file" accept=".json" style="display: none;"> <div class="upload-icon svelte-g8n7xd"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg></div> <p class="svelte-g8n7xd">Drop workflow JSON file here or <button class="svelte-g8n7xd">browse</button></p> <!></div> <!></div>');function xr(e,r){Te(r,!1);const n=N();let s=Fe(r,"workflows",28,()=>[]);const o=kt();let i=N(),d=N(null),v=N(!1),m=N("");async function I(u){const M=u.target;if(!M.files||M.files.length===0)return;const a=M.files[0];await H(a),M.value=""}async function _(u){var a;if(u.preventDefault(),l(v,!1),!((a=u.dataTransfer)!=null&&a.files)||u.dataTransfer.files.length===0)return;const M=u.dataTransfer.files[0];await H(M)}async function H(u){try{if(!u.name.endsWith(".json"))throw new Error("Please upload a JSON file");const M=await u.text(),a=JSON.parse(M),S=Date.now().toString(),y=u.name.replace(".json",""),T={id:S,name:y,content:a};gr(T),l(d,T),o("workflow-uploaded",{workflow:T.content}),l(m,"")}catch(M){console.error("Error processing workflow file:",M),l(m,M instanceof Error?M.message:"Failed to process workflow file")}}function w(u){l(d,u),o("workflow-uploaded",{workflow:u.content})}function U(u,M){M.stopPropagation(),mr(u),t(d)&&t(d).id===u&&l(d,null),s(s().filter(a=>a.id!==u))}function b(u){u.preventDefault(),l(v,!0)}function C(u){u.preventDefault(),l(v,!1)}Ke(()=>t(d),()=>{var u;l(n,(u=t(d))==null?void 0:u.id)}),Xe(),We();var p=kr(),k=f(p);let A;var W=f(k);nr(W,u=>l(i,u),()=>t(i));var g=h(W,4),E=h(f(g));c(g);var Y=h(g,2);{var q=u=>{var M=br(),a=f(M,!0);c(M),G(()=>K(a,t(m))),j(u,M)};R(Y,u=>{t(m)&&u(q)})}c(k);var D=h(k,2);{var V=u=>{var M=_r(),a=h(f(M),2);Ue(a,5,s,S=>S.id,(S,y)=>{var T=yr();let X;var J=f(T),P=f(J,!0);c(J);var Z=h(J,2);c(T),G(le=>{X=Ce(T,1,"svelte-g8n7xd",null,X,le),K(P,t(y).name)},[()=>({selected:t(y).id===t(n)})],se),$("click",Z,le=>U(t(y).id,le)),$("click",T,()=>w(t(y))),$("keydown",T,le=>le.key==="Enter"&&w(t(y))),j(S,T)}),c(a),c(M),j(u,M)};R(D,u=>{s().length>0&&u(V)})}c(p),G(u=>A=Ce(k,1,"dropzone svelte-g8n7xd",null,A,u),[()=>({dragging:t(v)})],se),$("change",W,I),$("click",E,()=>t(i).click()),$("dragover",k,b),$("dragleave",k,C),$("drop",k,_),j(e,p),De()}let B=null;function je(){if(typeof window>"u")return null;if(!B){const e=`
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
    `,r=new Blob([e],{type:"application/javascript"});B=new Worker(URL.createObjectURL(r))}if(B){const e=rt();B.postMessage({type:"init",data:{serverUrl:e.serverUrl,credentials:{username:e.username,password:e.password},wsConfig:{enabled:e.wsEnabled,autoReconnect:e.wsAutoReconnect,reconnectInterval:e.wsReconnectInterval}}})}return B}function Et(){B||(B=je()),B&&B.postMessage({type:"connect_ws"})}function Sr(){B&&B.postMessage({type:"disconnect_ws"})}function Ir(e){B||(B=je()),B&&B.postMessage({type:"update_ws_config",data:{wsConfig:e}})}function Ar(e,r){return new Promise((n,s)=>{if(B||(B=je()),!B){s(new Error("Failed to initialize API worker"));return}const o=i=>{const{type:d,data:v,error:m}=i.data;d==="workflow_sent"?(B==null||B.removeEventListener("message",o),n(v)):d==="error"&&(B==null||B.removeEventListener("message",o),s(new Error(m)))};B.addEventListener("message",o),B.postMessage({type:"send_workflow",data:{workflow:e,inputs:r}})})}function Er(e){if(B||(B=je()),!B)return()=>{};const r=n=>{const{type:s,data:o,error:i}=n.data;s==="ws_message"||s==="ws_connected"||s==="ws_disconnected"||s==="ws_error"||s==="ws_binary"?e({type:s,data:o,error:i}):console.log("unknown message type",s)};return B.addEventListener("message",r),()=>{B&&B.removeEventListener("message",r)}}function Ve(e){const r={};for(const n in e)if(e.hasOwnProperty(n)&&e[n].inputs){r[n]={inputs:{}};const s=e[n].inputs;for(const o in s)if(s.hasOwnProperty(o)){const i=s[o];(typeof i=="string"||typeof i=="number")&&(r[n].inputs[o]=i)}}return r}var Cr=F("<p>No editable inputs found in this workflow.</p>"),Wr=F('<input type="number" step="any" class="svelte-1u2j2er">'),Tr=F('<input type="text" placeholder="File path" class="svelte-1u2j2er">'),Dr=F('<textarea rows="16" class="svelte-1u2j2er"></textarea>'),Mr=F('<div class="form-field svelte-1u2j2er"><label class="svelte-1u2j2er"> </label> <!></div>'),jr=F('<div class="collapsible-content svelte-1u2j2er"></div>'),Ur=F('<div><div class="collapsible-header svelte-1u2j2er" role="button" tabindex="0"><span class="collapse-icon svelte-1u2j2er"> </span> <h4 class="svelte-1u2j2er"> </h4></div> <!></div>'),Nr=F("<span> </span>"),Br=F('<div class="progress-container svelte-1u2j2er"><div class="progress-bar svelte-1u2j2er"><div class="progress-fill svelte-1u2j2er"></div></div> <div class="progress-info svelte-1u2j2er"><span> </span> <!></div></div>'),Fr=F('<div class="error-message svelte-1u2j2er"> </div>'),Or=F('<form><!> <div class="form-actions svelte-1u2j2er"><button type="submit" class="generate-btn svelte-1u2j2er"> </button></div></form> <!> <!>',1),Hr=F('<div class="dynamic-form svelte-1u2j2er"><!></div>');function Rr(e,r){Te(r,!1);let n=Fe(r,"workflow",8);const s=kt();let o=N({}),i=N({}),d=N({}),v=N(!1),m=N(0),I=N(""),_=N(""),H=null,w=!0,U=null;Oe(()=>{w=rt().wsEnabled,l(o,Ve(n())),b(),C(),w&&p()}),sr(()=>{H&&H()});function b(){l(i,{});for(const a in t(o)){t(i)[a]||ye(i,t(i)[a]={inputs:{}});for(const S in t(o)[a].inputs)ye(i,t(i)[a].inputs[S]=t(o)[a].inputs[S])}}function C(){l(d,{});for(const a in t(o))ye(d,t(d)[a]=!1)}function p(){Et(),H=Er(a=>{a.type==="ws_message"?k(a.data):a.type==="ws_error"?l(_,"WebSocket error: "+a.error):a.type==="ws_disabled"?console.log("WebSocket is disabled in settings"):a.type==="ws_reconnecting"?console.log("Attempting to reconnect WebSocket..."):a.type==="ws_connected"?(console.log("WebSocket connected successfully"),l(_,"")):a.type==="ws_disconnected"?console.log("WebSocket disconnected:",a.data):a.type==="ws_binary"&&A(a.data)})}function k(a){if(a.type==="executing"){const S=a.data;U&&S.prompt_id===U&&(S.node===null?console.log("Workflow execution complete"):l(I,S.node||""))}else if(a.type==="progress")l(m,Math.floor(a.data.value*100)),a.data.node_name&&l(I,a.data.node_name);else if(a.type==="executed"){const S=a.data;if(S.node_type==="SaveImage"||S.node_type==="SaveImageWebsocket"||S.node_type&&S.node_type.includes("Image")){const y=S.images;if(y&&y.length>0){console.log("image url",y[0].url);let T="image/png";if(y[0].filename){const J=y[0].filename.toLowerCase();J.endsWith(".jpg")||J.endsWith(".jpeg")?T="image/jpeg":J.endsWith(".png")&&(T="image/png")}const X={url:y[0].url,filename:y[0].filename,type:y[0].type||T,timestamp:Date.now()};vt(X),s("image-generated",{image:X}),l(v,!1),l(m,0),l(I,"")}}}else a.type==="status"&&(a.data.status==="error"?(l(_,"Generation error: "+a.data.message),l(v,!1)):a.data.status==="success"&&console.log("Generation completed successfully"))}async function A(a){try{let S,y,T;if(a instanceof ArrayBuffer){const P=new Uint8Array(a,0,Math.min(8,a.byteLength));P[0]===137&&P[1]===80&&P[2]===78&&P[3]===71&&P[4]===13&&P[5]===10&&P[6]===26&&P[7]===10?(y="image/png",T="png"):(P[0]===255&&P[1]===216&&P[2],y="image/jpeg",T="jpg"),S=new Blob([a],{type:y})}else if(a.type==="image/png")y="image/png",T="png",S=a;else if(a.type==="image/jpeg")y="image/jpeg",T="jpg",S=a;else{const P=await a.slice(0,8).arrayBuffer(),Z=new Uint8Array(P);Z[0]===137&&Z[1]===80&&Z[2]===78&&Z[3]===71&&Z[4]===13&&Z[5]===10&&Z[6]===26&&Z[7]===10?(y="image/png",T="png"):(Z[0]===255&&Z[1]===216&&Z[2],y="image/jpeg",T="jpg"),S=new Blob([a],{type:y})}const X=URL.createObjectURL(S);console.log("blob length",S.size),console.log("detected image type",y);const J={url:X,filename:`image_${Date.now()}.${T}`,type:y,timestamp:Date.now()};console.log("image data",J),vt(J),s("image-generated",{image:J}),l(v,!1),l(m,0),l(I,"")}catch(S){console.error("Error processing binary data:",S),l(_,"Failed to process image data")}}async function W(){l(_,"");try{l(v,!0),l(m,0),l(I,"Starting..."),U=(await Ar(n(),t(i))).prompt_id,console.log("Workflow sent, prompt ID:",U),w||l(_,"WebSocket is disabled. Generation has started, but progress updates are not available. Results will appear when completed.")}catch(a){l(_,a instanceof Error?a.message:"Failed to start generation"),l(v,!1),l(m,0),l(I,""),console.error("Error sending workflow:",a)}}function g(a){return typeof a=="number"?"number":typeof a=="string"&&/\.(png|jpg|jpeg|webp)$/i.test(a)?"file":"text"}function E(a){if(!n())return a;const S=n()[a];return S&&S.class_type?`${S.class_type} (${a})`:a}function Y(a){return a.replace(/_/g," ").replace(/([A-Z])/g," $1").replace(/^\w/,S=>S.toUpperCase())}function q(a){ye(d,t(d)[a]=!t(d)[a])}Ke(()=>(yt(n()),Ve),()=>{n()&&(l(o,Ve(n())),b(),C())}),Xe(),We();var D=Hr(),V=f(D);{var u=a=>{var S=Cr();j(a,S)},M=a=>{var S=Or(),y=Qe(S),T=f(y);Ue(T,1,()=>Object.keys(t(o)),it,(ae,O)=>{var oe=Ur();let Se;var x=f(oe),L=f(x),re=f(L,!0);c(L);var ce=h(L,2),de=f(ce,!0);c(ce),c(x);var ve=h(x,2);{var ee=Q=>{var fe=jr();Ue(fe,5,()=>Object.keys(t(o)[t(O)].inputs),it,(be,z)=>{var ue=Mr();const Ie=se(()=>t(o)[t(O)].inputs[t(z)]),pe=se(()=>g(t(Ie)));var ie=f(ue),Ct=f(ie,!0);c(ie);var Wt=h(ie,2);{var Tt=me=>{var Ae=Wr();he(Ae),G(()=>ne(Ae,"id",`${t(O)}-${t(z)}`)),ke(Ae,()=>t(i)[t(O)].inputs[t(z)],Re=>ye(i,t(i)[t(O)].inputs[t(z)]=Re)),j(me,Ae)},Dt=(me,Ae)=>{{var Re=Ee=>{var ge=Tr();he(ge),G(()=>ne(ge,"id",`${t(O)}-${t(z)}`)),ke(ge,()=>t(i)[t(O)].inputs[t(z)],Le=>ye(i,t(i)[t(O)].inputs[t(z)]=Le)),j(Ee,ge)},Mt=Ee=>{var ge=Dr();rr(ge),G(()=>ne(ge,"id",`${t(O)}-${t(z)}`)),ke(ge,()=>t(i)[t(O)].inputs[t(z)],Le=>ye(i,t(i)[t(O)].inputs[t(z)]=Le)),j(Ee,ge)};R(me,Ee=>{t(pe)==="file"?Ee(Re):Ee(Mt,!1)},Ae)}};R(Wt,me=>{t(pe)==="number"?me(Tt):me(Dt,!1)})}c(ue),G(me=>{ne(ie,"for",`${t(O)}-${t(z)}`),K(Ct,me)},[()=>Y(t(z))],se),j(be,ue)}),c(fe),j(Q,fe)};R(ve,Q=>{t(d)[t(O)]||Q(ee)})}c(oe),G((Q,fe)=>{Se=Ce(oe,1,"form-group collapsible-group svelte-1u2j2er",null,Se,Q),ne(x,"aria-expanded",!t(d)[t(O)]),K(re,t(d)[t(O)]?"►":"▼"),K(de,fe)},[()=>({collapsed:t(d)[t(O)]}),()=>E(t(O))],se),$("click",x,()=>q(t(O))),j(ae,oe)});var X=h(T,2),J=f(X),P=f(J,!0);c(J),c(X),c(y);var Z=h(y,2);{var le=ae=>{var O=Br(),oe=f(O),Se=f(oe);c(oe);var x=h(oe,2),L=f(x),re=f(L);c(L);var ce=h(L,2);{var de=ve=>{var ee=Nr(),Q=f(ee);c(ee),G(()=>K(Q,`Processing: ${t(I)??""}`)),j(ve,ee)};R(ce,ve=>{t(I)&&ve(de)})}c(x),c(O),G(()=>{dr(Se,`width: ${t(m)??""}%`),K(re,`${t(m)??""}%`)}),j(ae,O)};R(Z,ae=>{t(v)&&ae(le)})}var xe=h(Z,2);{var He=ae=>{var O=Fr(),oe=f(O,!0);c(O),G(()=>K(oe,t(_))),j(ae,O)};R(xe,ae=>{t(_)&&ae(He)})}G(()=>{J.disabled=t(v),K(P,t(v)?"Generating...":"Generate Image")}),$("submit",y,St(W)),j(a,S)};R(V,a=>{Object.keys(t(o)).length===0?a(u):a(M,!1)})}c(D),j(e,D),De()}var Lr=Be('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg> Exit Fullscreen',1),Pr=Be('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg> Fullscreen',1),$r=F('<div class="image-container svelte-10bns48"><img alt="Generated Image" class="svelte-10bns48"> <div class="image-info svelte-10bns48"><span> </span> <span> </span></div> <div class="image-actions svelte-10bns48"><button class="download-btn svelte-10bns48"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Download</button> <button class="fullscreen-btn svelte-10bns48"><!></button></div></div>'),zr=F('<div class="no-image svelte-10bns48"><p>No image generated yet</p></div>'),Gr=F('<div class="fullscreen-overlay svelte-10bns48" role="dialog" aria-modal="true"><div class="fullscreen-content svelte-10bns48"><img alt="Generated Image (Fullscreen)" class="svelte-10bns48"> <button class="close-btn svelte-10bns48"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div></div>'),Jr=F("<div><!></div> <!>",1);function qr(e,r){Te(r,!1);let n=Fe(r,"image",8),s=N(!1);function o(){if(!n()||!n().url)return;const p=n().url;let k="png";n().type&&(n().type==="image/jpeg"?k="jpg":n().type==="image/png"&&(k="png"));const A=document.createElement("a");A.href=p,A.download=n().filename||`generated-image.${k}`,document.body.appendChild(A),A.click(),document.body.removeChild(A)}function i(){l(s,!t(s))}function d(){return!n()||!n().url?"":n().url}const v=p=>new Date(p).toLocaleString();We();var m=Jr(),I=Qe(m);let _;var H=f(I);{var w=p=>{var k=$r(),A=f(k),W=h(A,2),g=f(W),E=f(g,!0);c(g);var Y=h(g,2),q=f(Y,!0);c(Y),c(W);var D=h(W,2),V=f(D),u=h(V,2),M=f(u);{var a=y=>{var T=Lr();_e(),j(y,T)},S=y=>{var T=Pr();_e(),j(y,T)};R(M,y=>{t(s)?y(a):y(S,!1)})}c(u),c(D),c(k),G((y,T)=>{ne(A,"src",y),K(E,n().filename||"Untitled"),K(q,T)},[d,()=>v(n().timestamp)],se),$("click",A,i),$("click",V,o),$("click",u,i),j(p,k)},U=p=>{var k=zr();j(p,k)};R(H,p=>{n()&&n().url?p(w):p(U,!1)})}c(I);var b=h(I,2);{var C=p=>{var k=Gr(),A=f(k),W=f(A),g=h(W,2);c(A),c(k),G(E=>ne(W,"src",E),[d],se),$("click",W,ut(()=>{})),$("click",g,i),$("click",A,ut(()=>{})),$("click",k,i),j(p,k)};R(b,p=>{t(s)&&p(C)})}G(p=>_=Ce(I,1,"image-viewer svelte-10bns48",null,_,p),[()=>({fullscreen:t(s)})],se),j(e,m),De()}var Vr=F("<button> </button>"),Yr=F('<p class="no-history svelte-xaorkw">No images in history</p>'),Zr=F('<div class="history-item svelte-xaorkw"><img loading="lazy" class="svelte-xaorkw"> <div class="image-meta svelte-xaorkw"><span class="image-name svelte-xaorkw"> </span> <span class="image-date svelte-xaorkw"> </span></div></div>'),Kr=F('<div class="history-list svelte-xaorkw"></div>'),Xr=F('<div class="image-history svelte-xaorkw"><div class="history-header svelte-xaorkw"><h3 class="svelte-xaorkw">Image History</h3> <!></div> <!></div>');function Qr(e,r){Te(r,!1);let n=Fe(r,"images",24,()=>[]),s=N([]),o=N(!1);Oe(()=>{l(s,At())});function i(C){return!C||!C.url?"":C.url}function d(C){return new Date(C).toLocaleString()}function v(){t(o)?(hr(),l(s,[]),l(o,!1)):(l(o,!0),setTimeout(()=>{l(o,!1)},3e3))}Ke(()=>yt(n()),()=>{if(n().length>0){const C=[...n()];l(s,C)}}),Xe(),We();var m=Xr(),I=f(m),_=h(f(I),2);{var H=C=>{var p=Vr();let k;var A=f(p,!0);c(p),G(W=>{k=Ce(p,1,"clear-btn svelte-xaorkw",null,k,W),K(A,t(o)?"Confirm Clear":"Clear History")},[()=>({confirm:t(o)})],se),$("click",p,v),j(C,p)};R(_,C=>{t(s).length>0&&C(H)})}c(I);var w=h(I,2);{var U=C=>{var p=Yr();j(C,p)},b=C=>{var p=Kr();Ue(p,7,()=>t(s),k=>k.timestamp,(k,A,W)=>{var g=Zr(),E=f(g),Y=h(E,2),q=f(Y),D=f(q,!0);c(q);var V=h(q,2),u=f(V,!0);c(V),c(Y),c(g),G((M,a)=>{ne(E,"src",M),ne(E,"alt",`Generated image ${t(W)+1}`),K(D,t(A).filename||"Untitled"),K(u,a)},[()=>i(t(A)),()=>d(t(A).timestamp)],se),j(k,g)}),c(p),j(C,p)};R(w,C=>{t(s).length===0?C(U):C(b,!1)})}c(m),j(e,m),De()}var en=Be('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>'),tn=Be('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>'),rn=F('<div class="form-group checkbox-group svelte-bdmrn4"><label class="checkbox-label svelte-bdmrn4"><input type="checkbox" class="svelte-bdmrn4"> <span>Auto Reconnect if Disconnected</span></label> <div class="hint svelte-bdmrn4">Automatically attempts to reconnect if the WebSocket connection is lost</div></div> <div class="form-group svelte-bdmrn4"><label for="reconnect-interval" class="svelte-bdmrn4">Reconnect Interval (ms)</label> <input type="number" id="reconnect-interval" min="500" max="30000" step="500" class="svelte-bdmrn4"> <div class="hint svelte-bdmrn4">Time to wait before reconnecting (500ms minimum, 30000ms maximum)</div></div>',1),nn=F(`<div class="advanced-settings svelte-bdmrn4"><div class="websocket-info svelte-bdmrn4"><p class="svelte-bdmrn4">ComfyUI uses WebSocket connections to provide real-time progress updates during image generation. The application will:</p> <ol class="svelte-bdmrn4"><li class="svelte-bdmrn4">Generate a unique client ID for your session</li> <li class="svelte-bdmrn4">Send your workflow with this client ID to ComfyUI</li> <li class="svelte-bdmrn4">Connect to WebSocket using the same client ID to receive progress updates</li></ol></div> <div class="form-group checkbox-group svelte-bdmrn4"><label class="checkbox-label svelte-bdmrn4"><input type="checkbox" class="svelte-bdmrn4"> <span>Enable WebSocket Connection</span></label> <div class="hint svelte-bdmrn4">WebSocket is used for real-time generation progress updates. Disable only if you're experiencing connection issues.</div></div> <!></div>`),sn=F('<div class="success-message svelte-bdmrn4">Settings saved successfully!</div>'),an=F("<div><!></div>"),on=F('<div class="auth-settings svelte-bdmrn4"><h3 class="svelte-bdmrn4">ComfyUI Connection Settings</h3> <form><div class="form-group svelte-bdmrn4"><label for="server-url" class="svelte-bdmrn4">Server URL</label> <input type="url" id="server-url" placeholder="http://127.0.0.1:8188" required class="svelte-bdmrn4"></div> <div class="form-group svelte-bdmrn4"><label for="username" class="svelte-bdmrn4">Username (optional)</label> <input type="text" id="username" placeholder="Username if required" class="svelte-bdmrn4"></div> <div class="form-group password-group svelte-bdmrn4"><label for="password" class="svelte-bdmrn4">Password (optional)</label> <div class="password-input svelte-bdmrn4"><input id="password" placeholder="Password if required" class="svelte-bdmrn4"> <button type="button" class="toggle-password svelte-bdmrn4"><!></button></div></div> <div class="toggle-section svelte-bdmrn4"><button type="button" class="toggle-btn svelte-bdmrn4"> </button></div> <!> <div class="actions svelte-bdmrn4"><button type="submit" class="save-btn svelte-bdmrn4">Save Settings</button> <button type="button" class="test-btn svelte-bdmrn4"> </button></div></form> <!> <!></div>');function ln(e,r){Te(r,!1);let n=N(""),s=N(""),o=N(""),i=N(!1),d=N(!1),v=N(!1),m=N("untested"),I=N(""),_=N(!0),H=N(!0),w=N(3e3),U=N(!1);Oe(()=>{const x=rt();l(n,x.serverUrl),l(s,x.username),l(o,x.password),l(_,x.wsEnabled),l(H,x.wsAutoReconnect),l(w,x.wsReconnectInterval)});async function b(){t(n)||l(n,"http://127.0.0.1:8188"),t(w)<500&&l(w,500),wr({serverUrl:t(n),username:t(s),password:t(o),wsEnabled:t(_),wsAutoReconnect:t(H),wsReconnectInterval:t(w)}),l(d,!0),setTimeout(()=>{l(d,!1)},3e3),Sr(),je(),Ir({enabled:t(_),autoReconnect:t(H),reconnectInterval:t(w)})}async function C(){l(v,!0),l(m,"testing"),l(I,"");try{await b();const x=new Promise((ce,de)=>{setTimeout(()=>de(new Error("Connection timeout")),5e3)}),L=fetch(`${t(n)}/system_stats`),re=await Promise.race([L,x]);if(re.ok)l(m,"connected"),t(_)&&Et();else throw new Error(`HTTP Error: ${re.status}`)}catch(x){l(m,"error"),l(I,x instanceof Error?x.message:"Unknown connection error"),console.error("Connection test failed:",x)}finally{l(v,!1)}}function p(){l(i,!t(i))}function k(){l(U,!t(U))}We();var A=on(),W=h(f(A),2),g=f(W),E=h(f(g),2);he(E),c(g);var Y=h(g,2),q=h(f(Y),2);he(q),c(Y);var D=h(Y,2),V=h(f(D),2),u=f(V);he(u);var M=h(u,2),a=f(M);{var S=x=>{var L=en();j(x,L)},y=x=>{var L=tn();j(x,L)};R(a,x=>{t(i)?x(S):x(y,!1)})}c(M),c(V),c(D);var T=h(D,2),X=f(T),J=f(X);c(X),c(T);var P=h(T,2);{var Z=x=>{var L=nn(),re=h(f(L),2),ce=f(re),de=f(ce);he(de),_e(2),c(ce),_e(2),c(re);var ve=h(re,2);{var ee=Q=>{var fe=rn(),be=Qe(fe),z=f(be),ue=f(z);he(ue),_e(2),c(z),_e(2),c(be);var Ie=h(be,2),pe=h(f(Ie),2);he(pe),_e(2),c(Ie),ft(ue,()=>t(H),ie=>l(H,ie)),ke(pe,()=>t(w),ie=>l(w,ie)),j(Q,fe)};R(ve,Q=>{t(_)&&Q(ee)})}c(L),ft(de,()=>t(_),Q=>l(_,Q)),j(x,L)};R(P,x=>{t(U)&&x(Z)})}var le=h(P,2),xe=h(f(le),2),He=f(xe,!0);c(xe),c(le),c(W);var ae=h(W,2);{var O=x=>{var L=sn();j(x,L)};R(ae,x=>{t(d)&&x(O)})}var oe=h(ae,2);{var Se=x=>{var L=an();let re;var ce=f(L);{var de=ee=>{var Q=Pe("Testing connection...");j(ee,Q)},ve=(ee,Q)=>{{var fe=z=>{var ue=Pe("✓ Connected successfully to ComfyUI");j(z,ue)},be=(z,ue)=>{{var Ie=pe=>{var ie=Pe();G(()=>K(ie,`✗ Connection failed: ${t(I)??""}`)),j(pe,ie)};R(z,pe=>{t(m)==="error"&&pe(Ie)},ue)}};R(ee,z=>{t(m)==="connected"?z(fe):z(be,!1)},Q)}};R(ce,ee=>{t(m)==="testing"?ee(de):ee(ve,!1)})}c(L),G(ee=>re=Ce(L,1,"connection-status svelte-bdmrn4",null,re,ee),[()=>({error:t(m)==="error",success:t(m)==="connected"})],se),j(x,L)};R(oe,x=>{t(m)!=="untested"&&x(Se)})}c(A),G(()=>{ne(u,"type",t(i)?"text":"password"),ne(M,"aria-label",t(i)?"Hide password":"Show password"),K(J,`${(t(U)?"▼":"►")??""} WebSocket Settings`),xe.disabled=t(v),K(He,t(v)?"Testing...":"Test Connection")}),ke(E,()=>t(n),x=>l(n,x)),ke(q,()=>t(s),x=>l(s,x)),ke(u,()=>t(o),x=>l(o,x)),$("click",M,p),$("click",X,k),$("click",xe,C),$("submit",W,St(b)),j(e,A),De()}var cn=F('<section class="settings svelte-5rsgzr"><!></section>'),dn=F('<main class="svelte-5rsgzr"><header class="svelte-5rsgzr"><h1 class="svelte-5rsgzr">ComfyWeb</h1> <button class="svelte-5rsgzr"> </button></header> <!> <div class="app-container svelte-5rsgzr"><section class="workflow-section svelte-5rsgzr"><h2 class="svelte-5rsgzr">Workflow</h2> <!> <!></section> <section class="result-section svelte-5rsgzr"><h2 class="svelte-5rsgzr">Generated Image</h2> <!></section> <section class="history-section svelte-5rsgzr"><h2 class="svelte-5rsgzr">History</h2> <!></section></div></main>');function wn(e,r){Te(r,!1);let n=N(null),s=N([]),o=N([]),i=N(!1);Oe(()=>{l(s,Ne()),t(s).length>0&&l(n,t(s)[0])});function d(D){l(n,D.detail.workflow),l(s,Ne())}function v(D){l(o,[D.detail.image,...t(o)])}We();var m=dn(),I=f(m),_=h(f(I),2),H=f(_,!0);c(_),c(I);var w=h(I,2);{var U=D=>{var V=cn(),u=f(V);ln(u,{}),c(V),j(D,V)};R(w,D=>{t(i)&&D(U)})}var b=h(w,2),C=f(b),p=h(f(C),2);xr(p,{get workflows(){return t(s)},$$events:{"workflow-uploaded":d}});var k=h(p,2);{var A=D=>{Rr(D,{get workflow(){return t(n)},$$events:{"image-generated":v}})};R(k,D=>{t(n)&&D(A)})}c(C);var W=h(C,2),g=h(f(W),2);{var E=D=>{qr(D,{get image(){return t(o)[0]}})};R(g,D=>{t(o).length>0&&D(E)})}c(W);var Y=h(W,2),q=h(f(Y),2);Qr(q,{get images(){return t(o)}}),c(Y),c(b),c(m),G(()=>K(H,t(i)?"Close Settings":"Settings")),$("click",_,()=>l(i,!t(i))),j(e,m),De()}export{wn as component};
