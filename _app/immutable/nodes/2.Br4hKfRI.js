import{t as O,a as T,n as Fe,d as Je}from"../chunks/DJFf1O34.js";import{i as Ae}from"../chunks/pCWyai4s.js";import{C as qe,o as re,a0 as Ht,$ as Rt,z as Lt,j as jt,g as t,O as ae,A as $t,B as it,D as Ve,p as We,ae as Pt,F as ht,k as bt,G as zt,ah as yt,i as Gt,Z as B,an as lt,ao as Ye,a2 as ct,ap as Qe,aq as ft,ar as Jt,a5 as qt,as as Vt,m as Yt,at as et,au as Kt,K as Zt,ac as Xt,av as _t,aw as Qt,ax as er,ay as tr,az as rr,aA as nr,aB as sr,aC as or,b as kt,J as xt,s as Ee,aD as tt,aE as rt,t as G,v as Ce,T as l,w as d,y as w,x as f,aF as he,e as St,q as nt,aG as _e}from"../chunks/BoRT0E4S.js";import{a as ar,l as It,e as z,s as V,r as ir}from"../chunks/D2UPCJxz.js";import{p as He,b as lr,i as $}from"../chunks/BZVubSn3.js";import{c as At,o as Re,a as cr}from"../chunks/CzcyLZUS.js";function dt(e,n){return n}function fr(e,n,r,s){for(var i=[],a=n.length,u=0;u<a;u++)Jt(n[u].e,i,!0);var p=a>0&&i.length===0&&r!==null;if(p){var b=r.parentNode;qt(b),b.append(r),s.clear(),be(e,n[0].prev,n[a-1].next)}Vt(i,()=>{for(var x=0;x<a;x++){var m=n[x];p||(s.delete(m.k),be(e,m.prev,m.next)),Yt(m.e,!p)}})}function Oe(e,n,r,s,i,a=null){var u=e,p={flags:n,items:new Map,first:null},b=(n&_t)!==0;if(b){var x=e;u=re?qe(Ht(x)):x.appendChild(Rt())}re&&Lt();var m=null,R=!1,y=ae(()=>{var N=r();return Gt(N)?N:N==null?[]:yt(N)});jt(()=>{var N=t(y),_=N.length;if(R&&_===0)return;R=_===0;let E=!1;if(re){var g=u.data===$t;g!==(_===0)&&(u=it(),qe(u),Ve(!1),E=!0)}if(re){for(var k=null,I,C=0;C<_;C++){if(We.nodeType===8&&We.data===Pt){u=We,E=!0,Ve(!1);break}var h=N[C],A=s(h,C);I=Et(We,p,k,null,h,A,C,i,n,r),p.items.set(A,I),k=I}_>0&&qe(it())}re||dr(N,p,u,i,n,s,r),a!==null&&(_===0?m?ht(m):m=bt(()=>a(u)):m!==null&&zt(m,()=>{m=null})),E&&Ve(!0),t(y)}),re&&(u=We)}function dr(e,n,r,s,i,a,u){var o,c,S,L;var p=(i&Qt)!==0,b=(i&(et|Qe))!==0,x=e.length,m=n.items,R=n.first,y=R,N,_=null,E,g=[],k=[],I,C,h,A;if(p)for(A=0;A<x;A+=1)I=e[A],C=a(I,A),h=m.get(C),h!==void 0&&((o=h.a)==null||o.measure(),(E??(E=new Set)).add(h));for(A=0;A<x;A+=1){if(I=e[A],C=a(I,A),h=m.get(C),h===void 0){var Y=y?y.e.nodes_start:r;_=Et(Y,n,_,_===null?n.first:_.next,I,C,A,s,i,u),m.set(C,_),g=[],k=[],y=_.next;continue}if(b&&ur(h,I,A,i),(h.e.f&Ye)!==0&&(ht(h.e),p&&((c=h.a)==null||c.unfix(),(E??(E=new Set)).delete(h))),h!==y){if(N!==void 0&&N.has(h)){if(g.length<k.length){var J=k[0],U;_=J.prev;var q=g[0],v=g[g.length-1];for(U=0;U<g.length;U+=1)ut(g[U],J,r);for(U=0;U<k.length;U+=1)N.delete(k[U]);be(n,q.prev,v.next),be(n,_,q),be(n,v,J),y=J,_=v,A-=1,g=[],k=[]}else N.delete(h),ut(h,y,r),be(n,h.prev,h.next),be(n,h,_===null?n.first:_.next),be(n,_,h),_=h;continue}for(g=[],k=[];y!==null&&y.k!==C;)(y.e.f&Ye)===0&&(N??(N=new Set)).add(y),k.push(y),y=y.next;if(y===null)continue;h=y}g.push(h),_=h,y=h.next}if(y!==null||N!==void 0){for(var D=N===void 0?[]:yt(N);y!==null;)(y.e.f&Ye)===0&&D.push(y),y=y.next;var P=D.length;if(P>0){var ne=(i&_t)!==0&&x===0?r:null;if(p){for(A=0;A<P;A+=1)(S=D[A].a)==null||S.measure();for(A=0;A<P;A+=1)(L=D[A].a)==null||L.fix()}fr(n,D,ne,m)}}p&&Zt(()=>{var Q;if(E!==void 0)for(h of E)(Q=h.a)==null||Q.apply()}),ct.first=n.first&&n.first.e,ct.last=_&&_.e}function ur(e,n,r,s){(s&et)!==0&&ft(e.v,n),(s&Qe)!==0?ft(e.i,r):e.i=r}function Et(e,n,r,s,i,a,u,p,b,x){var m=(b&et)!==0,R=(b&Kt)===0,y=m?R?B(i):lt(i):i,N=(b&Qe)===0?u:lt(u),_={i:N,v:y,k:a,a:null,e:null,prev:r,next:s};try{return _.e=bt(()=>p(e,y,N,x),re),_.e.prev=r&&r.e,_.e.next=s&&s.e,r===null?n.first=_:(r.next=_,r.e.next=_.e),s!==null&&(s.prev=_,s.e.prev=_.e),_}finally{}}function ut(e,n,r){for(var s=e.next?e.next.e.nodes_start:r,i=n?n.e.nodes_start:r,a=e.e.nodes_start;a!==s;){var u=Xt(a);i.before(a),a=u}}function be(e,n,r){n===null?e.first=r:(n.next=r,n.e.next=r&&r.e),r!==null&&(r.prev=n,r.e.prev=n&&n.e)}const vt=[...` 	
\r\f \v\uFEFF`];function vr(e,n,r){var s=e==null?"":""+e;if(r){for(var i in r)if(r[i])s=s?s+" "+i:i;else if(s.length)for(var a=i.length,u=0;(u=s.indexOf(i,u))>=0;){var p=u+a;(u===0||vt.includes(s[u-1]))&&(p===s.length||vt.includes(s[p]))?s=(u===0?"":s.substring(0,u))+s.substring(p+1):u=p}}return s===""?null:s}function pr(e,n){return e==null?null:String(e)}function Ie(e,n,r,s,i,a){var u=e.__className;if(re||u!==r){var p=vr(r,s,a);(!re||p!==e.getAttribute("class"))&&(p==null?e.removeAttribute("class"):e.className=p),e.__className=r}else if(a&&i!==a)for(var b in a){var x=!!a[b];(i==null||x!==!!i[b])&&e.classList.toggle(b,x)}return a}function gr(e,n,r,s){var i=e.__style;if(re||i!==n){var a=pr(n);(!re||a!==e.getAttribute("style"))&&(a==null?e.removeAttribute("style"):e.style.cssText=a),e.__style=n}return s}const wr=Symbol("is custom element"),mr=Symbol("is html");function ye(e){if(re){var n=!1,r=()=>{if(!n){if(n=!0,e.hasAttribute("value")){var s=e.value;oe(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var i=e.checked;oe(e,"checked",null),e.checked=i}}};e.__on_r=r,er(r),ar()}}function oe(e,n,r,s){var i=hr(e);re&&(i[n]=e.getAttribute(n),n==="src"||n==="srcset"||n==="href"&&e.nodeName==="LINK")||i[n]!==(i[n]=r)&&(n==="loading"&&(e[tr]=r),r==null?e.removeAttribute(n):typeof r!="string"&&br(e).includes(n)?e[n]=r:e.setAttribute(n,r))}function hr(e){return e.__attributes??(e.__attributes={[wr]:e.nodeName.includes("-"),[mr]:e.namespaceURI===rr})}var pt=new Map;function br(e){var n=pt.get(e.nodeName);if(n)return n;pt.set(e.nodeName,n=[]);for(var r,s=e,i=Element.prototype;i!==s;){r=sr(s);for(var a in r)r[a].set&&n.push(a);s=nr(s)}return n}function ke(e,n,r=n){var s=or();It(e,"input",i=>{var a=i?e.defaultValue:e.value;if(a=Ke(e)?Ze(a):a,r(a),s&&a!==(a=n())){var u=e.selectionStart,p=e.selectionEnd;e.value=a??"",p!==null&&(e.selectionStart=u,e.selectionEnd=Math.min(p,e.value.length))}}),(re&&e.defaultValue!==e.value||kt(n)==null&&e.value)&&r(Ke(e)?Ze(e.value):e.value),xt(()=>{var i=n();Ke(e)&&i===Ze(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function gt(e,n,r=n){It(e,"change",s=>{var i=s?e.defaultChecked:e.checked;r(i)}),(re&&e.defaultChecked!==e.checked||kt(n)==null)&&r(e.checked),xt(()=>{var s=n();e.checked=!!s})}function Ke(e){var n=e.type;return n==="number"||n==="range"}function Ze(e){return e===""?null:+e}function wt(e){return function(...n){var r=n[0];return r.stopPropagation(),e==null?void 0:e.apply(this,n)}}function Ct(e){return function(...n){var r=n[0];return r.preventDefault(),e==null?void 0:e.apply(this,n)}}const Le="comfyweb_workflows",Wt="comfyweb_auth",st="comfyweb_history";function Te(){if(typeof window>"u")return[];try{const e=localStorage.getItem(Le);return e?JSON.parse(e):[]}catch(e){return console.error("Error getting stored workflows:",e),[]}}function yr(e){if(!(typeof window>"u"))try{const n=Te(),r=n.findIndex(s=>s.id===e.id);r>=0?n[r]=e:n.push(e),localStorage.setItem(Le,JSON.stringify(n))}catch(n){console.error("Error saving workflow:",n)}}function _r(e,n){const r=Te(),s=r.findIndex(i=>i.id===e);s!==-1?(r[s].content=n,localStorage.setItem(Le,JSON.stringify(r)),console.log(`Workflow content updated for ID: ${e}`)):console.error(`Workflow with ID ${e} not found for update.`)}function kr(e){if(!(typeof window>"u"))try{let n=Te();n=n.filter(r=>r.id!==e),localStorage.setItem(Le,JSON.stringify(n))}catch(n){console.error("Error deleting workflow:",n)}}function ot(){if(typeof window>"u")return{username:"",password:"",serverUrl:"",wsEnabled:!0,wsAutoReconnect:!0,wsReconnectInterval:3e3};try{const e=localStorage.getItem(Wt),n={username:"",password:"",serverUrl:"http://127.0.0.1:8188",wsEnabled:!0,wsAutoReconnect:!0,wsReconnectInterval:3e3};if(!e)return n;const r=JSON.parse(e);return{...n,...r}}catch(e){return console.error("Error getting auth settings:",e),{username:"",password:"",serverUrl:"http://127.0.0.1:8188",wsEnabled:!0,wsAutoReconnect:!0,wsReconnectInterval:3e3}}}function xr(e){if(!(typeof window>"u"))try{localStorage.setItem(Wt,JSON.stringify(e))}catch(n){console.error("Error saving auth settings:",n)}}function mt(e){if(!(typeof window>"u"))try{const n=Tt();n.unshift(e),n.length>50&&n.pop(),localStorage.setItem(st,JSON.stringify(n))}catch(n){console.error("Error saving image to history:",n)}}function Tt(){if(typeof window>"u")return[];try{const e=localStorage.getItem(st);return e?JSON.parse(e):[]}catch(e){return console.error("Error getting image history:",e),[]}}function Sr(){if(!(typeof window>"u"))try{localStorage.setItem(st,JSON.stringify([]))}catch(e){console.error("Error clearing image history:",e)}}var Ir=O('<p class="error svelte-g8n7xd"> </p>'),Ar=O('<li tabindex="0"><span> </span> <button class="delete-btn svelte-g8n7xd" aria-label="Delete workflow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></li>'),Er=O('<div class="saved-workflows svelte-g8n7xd"><h3 class="svelte-g8n7xd">Saved Workflows</h3> <ul class="svelte-g8n7xd"></ul></div>'),Cr=O('<div class="workflow-uploader svelte-g8n7xd"><div><input type="file" accept=".json" style="display: none;"> <div class="upload-icon svelte-g8n7xd"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg></div> <p class="svelte-g8n7xd">Drop workflow JSON file here or <button class="svelte-g8n7xd">browse</button></p> <!></div> <!></div>');function Wr(e,n){Ee(n,!1);const r=B();let s=He(n,"workflows",28,()=>[]);const i=At();let a=B(),u=B(null),p=B(!1),b=B("");async function x(v){const D=v.target;if(!D.files||D.files.length===0)return;const P=D.files[0];await R(P),D.value=""}async function m(v){var P;if(v.preventDefault(),l(p,!1),!((P=v.dataTransfer)!=null&&P.files)||v.dataTransfer.files.length===0)return;const D=v.dataTransfer.files[0];await R(D)}async function R(v){try{if(!v.name.endsWith(".json"))throw new Error("Please upload a JSON file");const D=await v.text(),P=JSON.parse(D),ne=Date.now().toString(),o=v.name.replace(".json",""),c={id:ne,name:o,content:P};yr(c),l(u,c),i("workflow-uploaded",{workflow:c}),l(b,"")}catch(D){console.error("Error processing workflow file:",D),l(b,D instanceof Error?D.message:"Failed to process workflow file")}}function y(v){l(u,v),i("workflow-uploaded",{workflow:v})}function N(v,D){D.stopPropagation(),kr(v),t(u)&&t(u).id===v&&l(u,null),s(s().filter(P=>P.id!==v))}function _(v){v.preventDefault(),l(p,!0)}function E(v){v.preventDefault(),l(p,!1)}tt(()=>t(u),()=>{var v;l(r,(v=t(u))==null?void 0:v.id)}),rt(),Ae();var g=Cr(),k=d(g);let I;var C=d(k);lr(C,v=>l(a,v),()=>t(a));var h=w(C,4),A=w(d(h));f(h);var Y=w(h,2);{var J=v=>{var D=Ir(),P=d(D,!0);f(D),G(()=>V(P,t(b))),T(v,D)};$(Y,v=>{t(b)&&v(J)})}f(k);var U=w(k,2);{var q=v=>{var D=Er(),P=w(d(D),2);Oe(P,5,s,ne=>ne.id,(ne,o)=>{var c=Ar();let S;var L=d(c),Q=d(L,!0);f(L);var ee=w(L,2);f(c),G(j=>{S=Ie(c,1,"svelte-g8n7xd",null,S,j),V(Q,t(o).name)},[()=>({selected:t(o).id===t(r)})],ae),z("click",ee,j=>N(t(o).id,j)),z("click",c,()=>y(t(o))),z("keydown",c,j=>j.key==="Enter"&&y(t(o))),T(ne,c)}),f(P),f(D),T(v,D)};$(U,v=>{s().length>0&&v(q)})}f(g),G(v=>I=Ie(k,1,"dropzone svelte-g8n7xd",null,I,v),[()=>({dragging:t(p)})],ae),z("change",C,x),z("click",A,()=>t(a).click()),z("dragover",k,_),z("dragleave",k,E),z("drop",k,m),T(e,g),Ce()}let F=null;function De(){if(typeof window>"u")return null;if(!F){const e=`
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
    `,n=new Blob([e],{type:"application/javascript"});F=new Worker(URL.createObjectURL(n))}if(F){const e=ot();F.postMessage({type:"init",data:{serverUrl:e.serverUrl,credentials:{username:e.username,password:e.password},wsConfig:{enabled:e.wsEnabled,autoReconnect:e.wsAutoReconnect,reconnectInterval:e.wsReconnectInterval}}})}return F}function Dt(){F||(F=De()),F&&F.postMessage({type:"connect_ws"})}function Tr(){F&&F.postMessage({type:"disconnect_ws"})}function Dr(e){F||(F=De()),F&&F.postMessage({type:"update_ws_config",data:{wsConfig:e}})}function Mr(e,n){return new Promise((r,s)=>{if(F||(F=De()),!F){s(new Error("Failed to initialize API worker"));return}const i=a=>{const{type:u,data:p,error:b}=a.data;u==="workflow_sent"?(F==null||F.removeEventListener("message",i),r(p)):u==="error"&&(F==null||F.removeEventListener("message",i),s(new Error(b)))};F.addEventListener("message",i),F.postMessage({type:"send_workflow",data:{workflow:e,inputs:n}})})}function Nr(e){if(F||(F=De()),!F)return()=>{};const n=r=>{const{type:s,data:i,error:a}=r.data;s==="ws_message"||s==="ws_connected"||s==="ws_disconnected"||s==="ws_error"||s==="ws_binary"?e({type:s,data:i,error:a}):console.log("unknown message type",s)};return F.addEventListener("message",n),()=>{F&&F.removeEventListener("message",n)}}function Xe(e){const n={};for(const r in e)if(e.hasOwnProperty(r)&&e[r].inputs){n[r]={inputs:{}};const s=e[r].inputs;for(const i in s)if(s.hasOwnProperty(i)){const a=s[i];(typeof a=="string"||typeof a=="number")&&(n[r].inputs[i]=a)}}return n}var Ur=O("<p>No editable inputs found in this workflow.</p>"),Br=O('<input type="number" step="any" class="svelte-9iwu16">'),Or=O('<input type="text" placeholder="File path" class="svelte-9iwu16">'),Fr=O('<textarea rows="16" class="svelte-9iwu16"></textarea>'),Hr=O('<div class="form-field svelte-9iwu16"><label class="svelte-9iwu16"> </label> <!></div>'),Rr=O('<div class="collapsible-content svelte-9iwu16"></div>'),Lr=O('<div><div class="collapsible-header svelte-9iwu16" role="button" tabindex="0"><span class="collapse-icon svelte-9iwu16"> </span> <h4 class="svelte-9iwu16"> </h4></div> <!></div>'),jr=O("<span> </span>"),$r=O('<div class="progress-container svelte-9iwu16"><div class="progress-bar svelte-9iwu16"><div class="progress-fill svelte-9iwu16"></div></div> <div class="progress-info svelte-9iwu16"><span> </span> <!></div></div>'),Pr=O('<div class="error-message svelte-9iwu16"> </div>'),zr=O('<div class="save-message svelte-9iwu16"> </div>'),Gr=O('<form><!> <div class="form-actions svelte-9iwu16"><button type="button" class="save-btn svelte-9iwu16">Save Workflow</button> <button type="submit" class="generate-btn svelte-9iwu16"> </button></div></form> <!> <!> <!>',1),Jr=O('<div class="dynamic-form svelte-9iwu16"><!></div>');function qr(e,n){Ee(n,!1);let r=He(n,"workflow",8,null);const s=At();let i=B({}),a=B({}),u=B({}),p=B(!1),b=B(0),x=B(""),m=B(""),R=B(""),y=null,N=!0,_=null;Re(()=>{N=ot().wsEnabled,r()&&r().content&&(l(i,Xe(r().content)),E(),g()),N&&k()}),cr(()=>{y&&y()});function E(){l(a,{});for(const o in t(i)){t(a)[o]||he(a,t(a)[o]={inputs:{}});for(const c in t(i)[o].inputs)t(a)[o].inputs||he(a,t(a)[o].inputs={}),he(a,t(a)[o].inputs[c]=t(i)[o].inputs[c])}}function g(){l(u,{});for(const o in t(i))he(u,t(u)[o]=!1)}function k(){Dt(),y=Nr(o=>{o.type==="ws_message"?I(o.data):o.type==="ws_error"?l(m,"WebSocket error: "+o.error):o.type==="ws_disabled"?console.log("WebSocket is disabled in settings"):o.type==="ws_reconnecting"?console.log("Attempting to reconnect WebSocket..."):o.type==="ws_connected"?(console.log("WebSocket connected successfully"),l(m,"")):o.type==="ws_disconnected"?console.log("WebSocket disconnected:",o.data):o.type==="ws_binary"&&C(o.data)})}function I(o){if(o.type==="executing"){const c=o.data;_&&c.prompt_id===_&&(c.node===null?console.log("Workflow execution complete"):l(x,c.node||""))}else if(o.type==="progress")l(b,Math.floor(o.data.value*100)),o.data.node_name&&l(x,o.data.node_name);else if(o.type==="executed"){const c=o.data;if(c.node_type==="SaveImage"||c.node_type==="SaveImageWebsocket"||c.node_type&&c.node_type.includes("Image")){const S=c.images;if(S&&S.length>0){console.log("image url",S[0].url);let L="image/png";if(S[0].filename){const ee=S[0].filename.toLowerCase();ee.endsWith(".jpg")||ee.endsWith(".jpeg")?L="image/jpeg":ee.endsWith(".png")&&(L="image/png")}const Q={url:S[0].url,filename:S[0].filename,type:S[0].type||L,timestamp:Date.now()};mt(Q),s("image-generated",{image:Q}),l(p,!1),l(b,0),l(x,"")}}}else o.type==="status"&&(o.data.status==="error"?(l(m,"Generation error: "+o.data.message),l(p,!1)):o.data.status==="success"&&console.log("Generation completed successfully"))}async function C(o){if(!(!r()||!r().content))try{let c,S,L;if(o instanceof ArrayBuffer){const j=new Uint8Array(o,0,Math.min(8,o.byteLength));j[0]===137&&j[1]===80&&j[2]===78&&j[3]===71&&j[4]===13&&j[5]===10&&j[6]===26&&j[7]===10?(S="image/png",L="png"):(j[0]===255&&j[1]===216&&j[2],S="image/jpeg",L="jpg"),c=new Blob([o],{type:S})}else if(o.type==="image/png")S="image/png",L="png",c=o;else if(o.type==="image/jpeg")S="image/jpeg",L="jpg",c=o;else{const j=await o.slice(0,8).arrayBuffer(),K=new Uint8Array(j);K[0]===137&&K[1]===80&&K[2]===78&&K[3]===71&&K[4]===13&&K[5]===10&&K[6]===26&&K[7]===10?(S="image/png",L="png"):(K[0]===255&&K[1]===216&&K[2],S="image/jpeg",L="jpg"),c=new Blob([o],{type:S})}const Q=URL.createObjectURL(c);console.log("blob length",c.size),console.log("detected image type",S);const ee={url:Q,filename:`image_${Date.now()}.${L}`,type:S,timestamp:Date.now()};console.log("image data",ee),mt(ee),s("image-generated",{image:ee}),l(p,!1),l(b,0),l(x,"")}catch(c){console.error("Error processing binary data:",c),l(m,"Failed to process image data")}}async function h(){if(l(m,""),l(R,""),!r()||!r().content){l(m,"Workflow content is missing."),console.error("Workflow content is missing, cannot start generation.");return}try{l(p,!0),l(b,0),l(x,"Starting..."),_=(await Mr(r().content,t(a))).prompt_id,console.log("Workflow sent, prompt ID:",_),N||l(m,"WebSocket is disabled. Generation has started, but progress updates are not available. Results will appear when completed.")}catch(o){l(m,o instanceof Error?o.message:"Failed to start generation"),l(p,!1),l(b,0),l(x,""),console.error("Error sending workflow:",o)}}async function A(){if(l(m,""),l(R,""),!r()||!r().id||!r().content){l(m,"Cannot save: Workflow data is incomplete."),console.error("Workflow ID or content is missing, cannot save.");return}let o=JSON.parse(JSON.stringify(r().content));for(const c in t(a))if(o[c]&&o[c].inputs)for(const S in t(a)[c].inputs)if(o[c].inputs.hasOwnProperty(S)){const L=r().content[c].inputs[S];typeof L=="string"||typeof L=="number"?o[c].inputs[S]=t(a)[c].inputs[S]:console.warn(`Skipping update for non-string/number input key ${S} in node ${c}`)}else console.warn(`Input key ${S} not found in original workflow inputs for node ${c}`);else console.warn(`Node ID ${c} not found in original workflow or has no inputs`);try{_r(r().id,o),l(R,"Workflow saved successfully!"),console.log("Workflow saved successfully!"),setTimeout(()=>l(R,""),3e3)}catch(c){console.error("Error saving workflow:",c),l(m,"Failed to save workflow changes.")}}function Y(o){return typeof o=="number"?"number":typeof o=="string"&&/\.(png|jpg|jpeg|webp)$/i.test(o)?"file":"text"}function J(o){if(!r()||!r().content)return o;const c=r().content[o];return c&&c.class_type?`${c.class_type} (${o})`:o}function U(o){return o.replace(/_/g," ").replace(/([A-Z])/g," $1").replace(/^\w/,c=>c.toUpperCase())}function q(o){he(u,t(u)[o]=!t(u)[o])}tt(()=>(St(r()),Xe),()=>{r()&&r().content&&(l(i,Xe(r().content)),E(),g())}),rt(),Ae();var v=Jr(),D=d(v);{var P=o=>{var c=Ur();T(o,c)},ne=o=>{var c=Gr(),S=nt(c),L=d(S);Oe(L,1,()=>Object.keys(t(i)),dt,(H,W)=>{var Z=Lr();let ue;var ie=d(Z),X=d(ie),se=d(X,!0);f(X);var ve=w(X,2),pe=d(ve,!0);f(ve),f(ie);var te=w(ie,2);{var le=ce=>{var fe=Rr();Oe(fe,5,()=>Object.keys(t(i)[t(W)].inputs),dt,(we,de)=>{var Pe=Hr();const Mt=ae(()=>t(i)[t(W)].inputs[t(de)]),at=ae(()=>Y(t(Mt)));var Be=d(Pe),Nt=d(Be,!0);f(Be);var Ut=w(Be,2);{var Bt=me=>{var xe=Br();ye(xe),G(()=>oe(xe,"id",`${t(W)}-${t(de)}`)),ke(xe,()=>t(a)[t(W)].inputs[t(de)],ze=>he(a,t(a)[t(W)].inputs[t(de)]=ze)),T(me,xe)},Ot=(me,xe)=>{{var ze=Se=>{var ge=Or();ye(ge),G(()=>oe(ge,"id",`${t(W)}-${t(de)}`)),ke(ge,()=>t(a)[t(W)].inputs[t(de)],Ge=>he(a,t(a)[t(W)].inputs[t(de)]=Ge)),T(Se,ge)},Ft=Se=>{var ge=Fr();ir(ge),G(()=>oe(ge,"id",`${t(W)}-${t(de)}`)),ke(ge,()=>t(a)[t(W)].inputs[t(de)],Ge=>he(a,t(a)[t(W)].inputs[t(de)]=Ge)),T(Se,ge)};$(me,Se=>{t(at)==="file"?Se(ze):Se(Ft,!1)},xe)}};$(Ut,me=>{t(at)==="number"?me(Bt):me(Ot,!1)})}f(Pe),G(me=>{oe(Be,"for",`${t(W)}-${t(de)}`),V(Nt,me)},[()=>U(t(de))],ae),T(we,Pe)}),f(fe),T(ce,fe)};$(te,ce=>{t(u)[t(W)]||ce(le)})}f(Z),G((ce,fe)=>{ue=Ie(Z,1,"form-group collapsible-group svelte-9iwu16",null,ue,ce),oe(ie,"aria-expanded",!t(u)[t(W)]),V(se,t(u)[t(W)]?"►":"▼"),V(pe,fe)},[()=>({collapsed:t(u)[t(W)]}),()=>J(t(W))],ae),z("click",ie,()=>q(t(W))),T(H,Z)});var Q=w(L,2),ee=d(Q),j=w(ee,2),K=d(j,!0);f(j),f(Q),f(S);var Me=w(S,2);{var Ne=H=>{var W=$r(),Z=d(W),ue=d(Z);f(Z);var ie=w(Z,2),X=d(ie),se=d(X);f(X);var ve=w(X,2);{var pe=te=>{var le=jr(),ce=d(le);f(le),G(()=>V(ce,`Processing: ${t(x)??""}`)),T(te,le)};$(ve,te=>{t(x)&&te(pe)})}f(ie),f(W),G(()=>{gr(ue,`width: ${t(b)??""}%`),V(se,`${t(b)??""}%`)}),T(H,W)};$(Me,H=>{t(p)&&H(Ne)})}var Ue=w(Me,2);{var je=H=>{var W=Pr(),Z=d(W,!0);f(W),G(()=>V(Z,t(m))),T(H,W)};$(Ue,H=>{t(m)&&H(je)})}var $e=w(Ue,2);{var M=H=>{var W=zr(),Z=d(W,!0);f(W),G(()=>V(Z,t(R))),T(H,W)};$($e,H=>{t(R)&&H(M)})}G(()=>{ee.disabled=t(p),j.disabled=t(p),V(K,t(p)?"Generating...":"Generate Image")}),z("click",ee,A),z("submit",S,Ct(h)),T(o,c)};$(D,o=>{!r()||!r().content||Object.keys(t(i)).length===0?o(P):o(ne,!1)})}f(v),T(e,v),Ce()}var Vr=Fe('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg> Exit Fullscreen',1),Yr=Fe('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg> Fullscreen',1),Kr=O('<div class="image-container svelte-10bns48"><img alt="Generated Image" class="svelte-10bns48"> <div class="image-info svelte-10bns48"><span> </span> <span> </span></div> <div class="image-actions svelte-10bns48"><button class="download-btn svelte-10bns48"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Download</button> <button class="fullscreen-btn svelte-10bns48"><!></button></div></div>'),Zr=O('<div class="no-image svelte-10bns48"><p>No image generated yet</p></div>'),Xr=O('<div class="fullscreen-overlay svelte-10bns48" role="dialog" aria-modal="true"><div class="fullscreen-content svelte-10bns48"><img alt="Generated Image (Fullscreen)" class="svelte-10bns48"> <button class="close-btn svelte-10bns48"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div></div>'),Qr=O("<div><!></div> <!>",1);function en(e,n){Ee(n,!1);let r=He(n,"image",8),s=B(!1);function i(){if(!r()||!r().url)return;const g=r().url;let k="png";r().type&&(r().type==="image/jpeg"?k="jpg":r().type==="image/png"&&(k="png"));const I=document.createElement("a");I.href=g,I.download=r().filename||`generated-image.${k}`,document.body.appendChild(I),I.click(),document.body.removeChild(I)}function a(){l(s,!t(s))}function u(){return!r()||!r().url?"":r().url}const p=g=>new Date(g).toLocaleString();Ae();var b=Qr(),x=nt(b);let m;var R=d(x);{var y=g=>{var k=Kr(),I=d(k),C=w(I,2),h=d(C),A=d(h,!0);f(h);var Y=w(h,2),J=d(Y,!0);f(Y),f(C);var U=w(C,2),q=d(U),v=w(q,2),D=d(v);{var P=o=>{var c=Vr();_e(),T(o,c)},ne=o=>{var c=Yr();_e(),T(o,c)};$(D,o=>{t(s)?o(P):o(ne,!1)})}f(v),f(U),f(k),G((o,c)=>{oe(I,"src",o),V(A,r().filename||"Untitled"),V(J,c)},[u,()=>p(r().timestamp)],ae),z("click",I,a),z("click",q,i),z("click",v,a),T(g,k)},N=g=>{var k=Zr();T(g,k)};$(R,g=>{r()&&r().url?g(y):g(N,!1)})}f(x);var _=w(x,2);{var E=g=>{var k=Xr(),I=d(k),C=d(I),h=w(C,2);f(I),f(k),G(A=>oe(C,"src",A),[u],ae),z("click",C,wt(()=>{})),z("click",h,a),z("click",I,wt(()=>{})),z("click",k,a),T(g,k)};$(_,g=>{t(s)&&g(E)})}G(g=>m=Ie(x,1,"image-viewer svelte-10bns48",null,m,g),[()=>({fullscreen:t(s)})],ae),T(e,b),Ce()}var tn=O("<button> </button>"),rn=O('<p class="no-history svelte-xaorkw">No images in history</p>'),nn=O('<div class="history-item svelte-xaorkw"><img loading="lazy" class="svelte-xaorkw"> <div class="image-meta svelte-xaorkw"><span class="image-name svelte-xaorkw"> </span> <span class="image-date svelte-xaorkw"> </span></div></div>'),sn=O('<div class="history-list svelte-xaorkw"></div>'),on=O('<div class="image-history svelte-xaorkw"><div class="history-header svelte-xaorkw"><h3 class="svelte-xaorkw">Image History</h3> <!></div> <!></div>');function an(e,n){Ee(n,!1);let r=He(n,"images",24,()=>[]),s=B([]),i=B(!1);Re(()=>{l(s,Tt())});function a(E){return!E||!E.url?"":E.url}function u(E){return new Date(E).toLocaleString()}function p(){t(i)?(Sr(),l(s,[]),l(i,!1)):(l(i,!0),setTimeout(()=>{l(i,!1)},3e3))}tt(()=>St(r()),()=>{if(r().length>0){const E=[...r()];l(s,E)}}),rt(),Ae();var b=on(),x=d(b),m=w(d(x),2);{var R=E=>{var g=tn();let k;var I=d(g,!0);f(g),G(C=>{k=Ie(g,1,"clear-btn svelte-xaorkw",null,k,C),V(I,t(i)?"Confirm Clear":"Clear History")},[()=>({confirm:t(i)})],ae),z("click",g,p),T(E,g)};$(m,E=>{t(s).length>0&&E(R)})}f(x);var y=w(x,2);{var N=E=>{var g=rn();T(E,g)},_=E=>{var g=sn();Oe(g,7,()=>t(s),k=>k.timestamp,(k,I,C)=>{var h=nn(),A=d(h),Y=w(A,2),J=d(Y),U=d(J,!0);f(J);var q=w(J,2),v=d(q,!0);f(q),f(Y),f(h),G((D,P)=>{oe(A,"src",D),oe(A,"alt",`Generated image ${t(C)+1}`),V(U,t(I).filename||"Untitled"),V(v,P)},[()=>a(t(I)),()=>u(t(I).timestamp)],ae),T(k,h)}),f(g),T(E,g)};$(y,E=>{t(s).length===0?E(N):E(_,!1)})}f(b),T(e,b),Ce()}var ln=Fe('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>'),cn=Fe('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>'),fn=O('<div class="form-group checkbox-group svelte-bdmrn4"><label class="checkbox-label svelte-bdmrn4"><input type="checkbox" class="svelte-bdmrn4"> <span>Auto Reconnect if Disconnected</span></label> <div class="hint svelte-bdmrn4">Automatically attempts to reconnect if the WebSocket connection is lost</div></div> <div class="form-group svelte-bdmrn4"><label for="reconnect-interval" class="svelte-bdmrn4">Reconnect Interval (ms)</label> <input type="number" id="reconnect-interval" min="500" max="30000" step="500" class="svelte-bdmrn4"> <div class="hint svelte-bdmrn4">Time to wait before reconnecting (500ms minimum, 30000ms maximum)</div></div>',1),dn=O(`<div class="advanced-settings svelte-bdmrn4"><div class="websocket-info svelte-bdmrn4"><p class="svelte-bdmrn4">ComfyUI uses WebSocket connections to provide real-time progress updates during image generation. The application will:</p> <ol class="svelte-bdmrn4"><li class="svelte-bdmrn4">Generate a unique client ID for your session</li> <li class="svelte-bdmrn4">Send your workflow with this client ID to ComfyUI</li> <li class="svelte-bdmrn4">Connect to WebSocket using the same client ID to receive progress updates</li></ol></div> <div class="form-group checkbox-group svelte-bdmrn4"><label class="checkbox-label svelte-bdmrn4"><input type="checkbox" class="svelte-bdmrn4"> <span>Enable WebSocket Connection</span></label> <div class="hint svelte-bdmrn4">WebSocket is used for real-time generation progress updates. Disable only if you're experiencing connection issues.</div></div> <!></div>`),un=O('<div class="success-message svelte-bdmrn4">Settings saved successfully!</div>'),vn=O("<div><!></div>"),pn=O('<div class="auth-settings svelte-bdmrn4"><h3 class="svelte-bdmrn4">ComfyUI Connection Settings</h3> <form><div class="form-group svelte-bdmrn4"><label for="server-url" class="svelte-bdmrn4">Server URL</label> <input type="url" id="server-url" placeholder="http://127.0.0.1:8188" required class="svelte-bdmrn4"></div> <div class="form-group svelte-bdmrn4"><label for="username" class="svelte-bdmrn4">Username (optional)</label> <input type="text" id="username" placeholder="Username if required" class="svelte-bdmrn4"></div> <div class="form-group password-group svelte-bdmrn4"><label for="password" class="svelte-bdmrn4">Password (optional)</label> <div class="password-input svelte-bdmrn4"><input id="password" placeholder="Password if required" class="svelte-bdmrn4"> <button type="button" class="toggle-password svelte-bdmrn4"><!></button></div></div> <div class="toggle-section svelte-bdmrn4"><button type="button" class="toggle-btn svelte-bdmrn4"> </button></div> <!> <div class="actions svelte-bdmrn4"><button type="submit" class="save-btn svelte-bdmrn4">Save Settings</button> <button type="button" class="test-btn svelte-bdmrn4"> </button></div></form> <!> <!></div>');function gn(e,n){Ee(n,!1);let r=B(""),s=B(""),i=B(""),a=B(!1),u=B(!1),p=B(!1),b=B("untested"),x=B(""),m=B(!0),R=B(!0),y=B(3e3),N=B(!1);Re(()=>{const M=ot();l(r,M.serverUrl),l(s,M.username),l(i,M.password),l(m,M.wsEnabled),l(R,M.wsAutoReconnect),l(y,M.wsReconnectInterval)});async function _(){t(r)||l(r,"http://127.0.0.1:8188"),t(y)<500&&l(y,500),xr({serverUrl:t(r),username:t(s),password:t(i),wsEnabled:t(m),wsAutoReconnect:t(R),wsReconnectInterval:t(y)}),l(u,!0),setTimeout(()=>{l(u,!1)},3e3),Tr(),De(),Dr({enabled:t(m),autoReconnect:t(R),reconnectInterval:t(y)})}async function E(){l(p,!0),l(b,"testing"),l(x,"");try{await _();const M=new Promise((Z,ue)=>{setTimeout(()=>ue(new Error("Connection timeout")),5e3)}),H=fetch(`${t(r)}/system_stats`),W=await Promise.race([H,M]);if(W.ok)l(b,"connected"),t(m)&&Dt();else throw new Error(`HTTP Error: ${W.status}`)}catch(M){l(b,"error"),l(x,M instanceof Error?M.message:"Unknown connection error"),console.error("Connection test failed:",M)}finally{l(p,!1)}}function g(){l(a,!t(a))}function k(){l(N,!t(N))}Ae();var I=pn(),C=w(d(I),2),h=d(C),A=w(d(h),2);ye(A),f(h);var Y=w(h,2),J=w(d(Y),2);ye(J),f(Y);var U=w(Y,2),q=w(d(U),2),v=d(q);ye(v);var D=w(v,2),P=d(D);{var ne=M=>{var H=ln();T(M,H)},o=M=>{var H=cn();T(M,H)};$(P,M=>{t(a)?M(ne):M(o,!1)})}f(D),f(q),f(U);var c=w(U,2),S=d(c),L=d(S);f(S),f(c);var Q=w(c,2);{var ee=M=>{var H=dn(),W=w(d(H),2),Z=d(W),ue=d(Z);ye(ue),_e(2),f(Z),_e(2),f(W);var ie=w(W,2);{var X=se=>{var ve=fn(),pe=nt(ve),te=d(pe),le=d(te);ye(le),_e(2),f(te),_e(2),f(pe);var ce=w(pe,2),fe=w(d(ce),2);ye(fe),_e(2),f(ce),gt(le,()=>t(R),we=>l(R,we)),ke(fe,()=>t(y),we=>l(y,we)),T(se,ve)};$(ie,se=>{t(m)&&se(X)})}f(H),gt(ue,()=>t(m),se=>l(m,se)),T(M,H)};$(Q,M=>{t(N)&&M(ee)})}var j=w(Q,2),K=w(d(j),2),Me=d(K,!0);f(K),f(j),f(C);var Ne=w(C,2);{var Ue=M=>{var H=un();T(M,H)};$(Ne,M=>{t(u)&&M(Ue)})}var je=w(Ne,2);{var $e=M=>{var H=vn();let W;var Z=d(H);{var ue=X=>{var se=Je("Testing connection...");T(X,se)},ie=(X,se)=>{{var ve=te=>{var le=Je("✓ Connected successfully to ComfyUI");T(te,le)},pe=(te,le)=>{{var ce=fe=>{var we=Je();G(()=>V(we,`✗ Connection failed: ${t(x)??""}`)),T(fe,we)};$(te,fe=>{t(b)==="error"&&fe(ce)},le)}};$(X,te=>{t(b)==="connected"?te(ve):te(pe,!1)},se)}};$(Z,X=>{t(b)==="testing"?X(ue):X(ie,!1)})}f(H),G(X=>W=Ie(H,1,"connection-status svelte-bdmrn4",null,W,X),[()=>({error:t(b)==="error",success:t(b)==="connected"})],ae),T(M,H)};$(je,M=>{t(b)!=="untested"&&M($e)})}f(I),G(()=>{oe(v,"type",t(a)?"text":"password"),oe(D,"aria-label",t(a)?"Hide password":"Show password"),V(L,`${(t(N)?"▼":"►")??""} WebSocket Settings`),K.disabled=t(p),V(Me,t(p)?"Testing...":"Test Connection")}),ke(A,()=>t(r),M=>l(r,M)),ke(J,()=>t(s),M=>l(s,M)),ke(v,()=>t(i),M=>l(i,M)),z("click",D,g),z("click",S,k),z("click",K,E),z("submit",C,Ct(_)),T(e,I),Ce()}var wn=O('<section class="settings svelte-5rsgzr"><!></section>'),mn=O('<main class="svelte-5rsgzr"><header class="svelte-5rsgzr"><h1 class="svelte-5rsgzr">ComfyWeb</h1> <button class="svelte-5rsgzr"> </button></header> <!> <div class="app-container svelte-5rsgzr"><section class="workflow-section svelte-5rsgzr"><h2 class="svelte-5rsgzr">Workflow</h2> <!> <!></section> <section class="result-section svelte-5rsgzr"><h2 class="svelte-5rsgzr">Generated Image</h2> <!></section> <section class="history-section svelte-5rsgzr"><h2 class="svelte-5rsgzr">History</h2> <!></section></div></main>');function Sn(e,n){Ee(n,!1);let r=B(null),s=B([]),i=B([]),a=B(!1);Re(()=>{l(s,Te()),t(s).length>0&&l(r,t(s)[0])});function u(U){l(r,U.detail.workflow),l(s,Te())}function p(U){l(i,[U.detail.image,...t(i)])}Ae();var b=mn(),x=d(b),m=w(d(x),2),R=d(m,!0);f(m),f(x);var y=w(x,2);{var N=U=>{var q=wn(),v=d(q);gn(v,{}),f(q),T(U,q)};$(y,U=>{t(a)&&U(N)})}var _=w(y,2),E=d(_),g=w(d(E),2);Wr(g,{get workflows(){return t(s)},$$events:{"workflow-uploaded":u}});var k=w(g,2);{var I=U=>{qr(U,{get workflow(){return t(r)},$$events:{"image-generated":p}})};$(k,U=>{t(r)&&U(I)})}f(E);var C=w(E,2),h=w(d(C),2);{var A=U=>{en(U,{get image(){return t(i)[0]}})};$(h,U=>{t(i).length>0&&U(A)})}f(C);var Y=w(C,2),J=w(d(Y),2);an(J,{get images(){return t(i)}}),f(Y),f(_),f(b),G(()=>V(R,t(a)?"Close Settings":"Settings")),z("click",m,()=>l(a,!t(a))),T(e,b),Ce()}export{Sn as component};
