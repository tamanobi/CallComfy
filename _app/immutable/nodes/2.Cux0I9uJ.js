import{t as F,a as T,n as Me,d as Fe}from"../chunks/BqojQrKk.js";import{i as ke}from"../chunks/CySs4YIy.js";import{C as Oe,h as Q,a0 as xt,$ as St,z as It,b as At,k as r,O as se,A as Et,B as Xe,D as He,c as Ee,ae as Ct,F as ct,a as ft,G as jt,ah as ut,p as Wt,Z as N,an as Qe,ao as Re,a2 as et,ap as Ge,aq as tt,ar as Tt,a5 as Dt,as as Mt,d as Ut,at as Je,au as Bt,K as Nt,ac as Ft,av as dt,aw as Ot,ax as Ht,ay as Rt,az as Lt,aA as Pt,aB as $t,aC as Gt,i as vt,J as pt,s as xe,aD as ze,aE as qe,t as G,v as Se,T as c,w as v,y as _,x as f,aF as Ce,l as gt,f as Ve,aG as we}from"../chunks/BMO_-HKu.js";import{a as Jt,l as ht,e as $,s as Y,r as zt}from"../chunks/Dmv2FkYT.js";import{p as Ue,b as qt,i as L}from"../chunks/D9H7ofYV.js";import{c as wt,o as Be,a as Vt}from"../chunks/BlhkKNP9.js";function rt(e,t){return t}function Yt(e,t,s,n){for(var a=[],o=t.length,d=0;d<o;d++)Tt(t[d].e,a,!0);var p=o>0&&a.length===0&&s!==null;if(p){var w=s.parentNode;Dt(w),w.append(s),n.clear(),ve(e,t[0].prev,t[o-1].next)}Mt(a,()=>{for(var x=0;x<o;x++){var I=t[x];p||(n.delete(I.k),ve(e,I.prev,I.next)),Ut(I.e,!p)}})}function Te(e,t,s,n,a,o=null){var d=e,p={flags:t,items:new Map,first:null},w=(t&dt)!==0;if(w){var x=e;d=Q?Oe(xt(x)):x.appendChild(St())}Q&&It();var I=null,H=!1,m=se(()=>{var M=s();return Wt(M)?M:M==null?[]:ut(M)});At(()=>{var M=r(m),b=M.length;if(H&&b===0)return;H=b===0;let j=!1;if(Q){var g=d.data===Et;g!==(b===0)&&(d=Xe(),Oe(d),He(!1),j=!0)}if(Q){for(var k=null,A,E=0;E<b;E++){if(Ee.nodeType===8&&Ee.data===Ct){d=Ee,j=!0,He(!1);break}var y=M[E],S=n(y,E);A=mt(Ee,p,k,null,y,S,E,a,t,s),p.items.set(S,A),k=A}b>0&&Oe(Xe())}Q||Zt(M,p,d,a,t,n,s),o!==null&&(b===0?I?ct(I):I=ft(()=>o(d)):I!==null&&jt(I,()=>{I=null})),j&&He(!0),r(m)}),Q&&(d=Ee)}function Zt(e,t,s,n,a,o,d){var U,W,R,ce;var p=(a&Ot)!==0,w=(a&(Je|Ge))!==0,x=e.length,I=t.items,H=t.first,m=H,M,b=null,j,g=[],k=[],A,E,y,S;if(p)for(S=0;S<x;S+=1)A=e[S],E=o(A,S),y=I.get(E),y!==void 0&&((U=y.a)==null||U.measure(),(j??(j=new Set)).add(y));for(S=0;S<x;S+=1){if(A=e[S],E=o(A,S),y=I.get(E),y===void 0){var q=m?m.e.nodes_start:s;b=mt(q,t,b,b===null?t.first:b.next,A,E,S,n,a,d),I.set(E,b),g=[],k=[],m=b.next;continue}if(w&&Kt(y,A,S,a),(y.e.f&Re)!==0&&(ct(y.e),p&&((W=y.a)==null||W.unfix(),(j??(j=new Set)).delete(y))),y!==m){if(M!==void 0&&M.has(y)){if(g.length<k.length){var J=k[0],D;b=J.prev;var l=g[0],i=g[g.length-1];for(D=0;D<g.length;D+=1)st(g[D],J,s);for(D=0;D<k.length;D+=1)M.delete(k[D]);ve(t,l.prev,i.next),ve(t,b,l),ve(t,i,J),m=J,b=i,S-=1,g=[],k=[]}else M.delete(y),st(y,m,s),ve(t,y.prev,y.next),ve(t,y,b===null?t.first:b.next),ve(t,b,y),b=y;continue}for(g=[],k=[];m!==null&&m.k!==E;)(m.e.f&Re)===0&&(M??(M=new Set)).add(m),k.push(m),m=m.next;if(m===null)continue;y=m}g.push(y),b=y,m=y.next}if(m!==null||M!==void 0){for(var u=M===void 0?[]:ut(M);m!==null;)(m.e.f&Re)===0&&u.push(m),m=m.next;var C=u.length;if(C>0){var z=(a&dt)!==0&&x===0?s:null;if(p){for(S=0;S<C;S+=1)(R=u[S].a)==null||R.measure();for(S=0;S<C;S+=1)(ce=u[S].a)==null||ce.fix()}Yt(t,u,z,I)}}p&&Nt(()=>{var ue;if(j!==void 0)for(y of j)(ue=y.a)==null||ue.apply()}),et.first=t.first&&t.first.e,et.last=b&&b.e}function Kt(e,t,s,n){(n&Je)!==0&&tt(e.v,t),(n&Ge)!==0?tt(e.i,s):e.i=s}function mt(e,t,s,n,a,o,d,p,w,x){var I=(w&Je)!==0,H=(w&Bt)===0,m=I?H?N(a):Qe(a):a,M=(w&Ge)===0?d:Qe(d),b={i:M,v:m,k:o,a:null,e:null,prev:s,next:n};try{return b.e=ft(()=>p(e,m,M,x),Q),b.e.prev=s&&s.e,b.e.next=n&&n.e,s===null?t.first=b:(s.next=b,s.e.next=b.e),n!==null&&(n.prev=b,n.e.prev=b.e),b}finally{}}function st(e,t,s){for(var n=e.next?e.next.e.nodes_start:s,a=t?t.e.nodes_start:s,o=e.e.nodes_start;o!==n;){var d=Ft(o);a.before(o),o=d}}function ve(e,t,s){t===null?e.first=s:(t.next=s,t.e.next=s&&s.e),s!==null&&(s.prev=t,s.e.prev=t&&t.e)}const nt=[...` 	
\r\f \v\uFEFF`];function Xt(e,t,s){var n=e==null?"":""+e;if(s){for(var a in s)if(s[a])n=n?n+" "+a:a;else if(n.length)for(var o=a.length,d=0;(d=n.indexOf(a,d))>=0;){var p=d+o;(d===0||nt.includes(n[d-1]))&&(p===n.length||nt.includes(n[p]))?n=(d===0?"":n.substring(0,d))+n.substring(p+1):d=p}}return n===""?null:n}function Qt(e,t){return e==null?null:String(e)}function je(e,t,s,n,a,o){var d=e.__className;if(Q||d!==s){var p=Xt(s,n,o);(!Q||p!==e.getAttribute("class"))&&(p==null?e.removeAttribute("class"):e.className=p),e.__className=s}else if(o&&a!==o)for(var w in o){var x=!!o[w];(a==null||x!==!!a[w])&&e.classList.toggle(w,x)}return o}function er(e,t,s,n){var a=e.__style;if(Q||a!==t){var o=Qt(t);(!Q||o!==e.getAttribute("style"))&&(o==null?e.removeAttribute("style"):e.style.cssText=o),e.__style=t}return n}const tr=Symbol("is custom element"),rr=Symbol("is html");function pe(e){if(Q){var t=!1,s=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var n=e.value;oe(e,"value",null),e.value=n}if(e.hasAttribute("checked")){var a=e.checked;oe(e,"checked",null),e.checked=a}}};e.__on_r=s,Ht(s),Jt()}}function oe(e,t,s,n){var a=sr(e);Q&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||a[t]!==(a[t]=s)&&(t==="loading"&&(e[Rt]=s),s==null?e.removeAttribute(t):typeof s!="string"&&nr(e).includes(t)?e[t]=s:e.setAttribute(t,s))}function sr(e){return e.__attributes??(e.__attributes={[tr]:e.nodeName.includes("-"),[rr]:e.namespaceURI===Lt})}var at=new Map;function nr(e){var t=at.get(e.nodeName);if(t)return t;at.set(e.nodeName,t=[]);for(var s,n=e,a=Element.prototype;a!==n;){s=$t(n);for(var o in s)s[o].set&&t.push(o);n=Pt(n)}return t}function me(e,t,s=t){var n=Gt();ht(e,"input",a=>{var o=a?e.defaultValue:e.value;if(o=Le(e)?Pe(o):o,s(o),n&&o!==(o=t())){var d=e.selectionStart,p=e.selectionEnd;e.value=o??"",p!==null&&(e.selectionStart=d,e.selectionEnd=Math.min(p,e.value.length))}}),(Q&&e.defaultValue!==e.value||vt(t)==null&&e.value)&&s(Le(e)?Pe(e.value):e.value),pt(()=>{var a=t();Le(e)&&a===Pe(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function ot(e,t,s=t){ht(e,"change",n=>{var a=n?e.defaultChecked:e.checked;s(a)}),(Q&&e.defaultChecked!==e.checked||vt(t)==null)&&s(e.checked),pt(()=>{var n=t();e.checked=!!n})}function Le(e){var t=e.type;return t==="number"||t==="range"}function Pe(e){return e===""?null:+e}function it(e){return function(...t){var s=t[0];return s.stopPropagation(),e==null?void 0:e.apply(this,t)}}function yt(e){return function(...t){var s=t[0];return s.preventDefault(),e==null?void 0:e.apply(this,t)}}const Ye="comfyweb_workflows",_t="comfyweb_auth",Ze="comfyweb_history";function De(){if(typeof window>"u")return[];try{const e=localStorage.getItem(Ye);return e?JSON.parse(e):[]}catch(e){return console.error("Error getting stored workflows:",e),[]}}function ar(e){if(!(typeof window>"u"))try{const t=De(),s=t.findIndex(n=>n.id===e.id);s>=0?t[s]=e:t.push(e),localStorage.setItem(Ye,JSON.stringify(t))}catch(t){console.error("Error saving workflow:",t)}}function or(e){if(!(typeof window>"u"))try{let t=De();t=t.filter(s=>s.id!==e),localStorage.setItem(Ye,JSON.stringify(t))}catch(t){console.error("Error deleting workflow:",t)}}function Ke(){if(typeof window>"u")return{username:"",password:"",serverUrl:"",wsEnabled:!0,wsAutoReconnect:!0,wsReconnectInterval:3e3};try{const e=localStorage.getItem(_t),t={username:"",password:"",serverUrl:"http://127.0.0.1:8188",wsEnabled:!0,wsAutoReconnect:!0,wsReconnectInterval:3e3};if(!e)return t;const s=JSON.parse(e);return{...t,...s}}catch(e){return console.error("Error getting auth settings:",e),{username:"",password:"",serverUrl:"http://127.0.0.1:8188",wsEnabled:!0,wsAutoReconnect:!0,wsReconnectInterval:3e3}}}function ir(e){if(!(typeof window>"u"))try{localStorage.setItem(_t,JSON.stringify(e))}catch(t){console.error("Error saving auth settings:",t)}}function lt(e){if(!(typeof window>"u"))try{const t=bt();t.unshift(e),t.length>50&&t.pop(),localStorage.setItem(Ze,JSON.stringify(t))}catch(t){console.error("Error saving image to history:",t)}}function bt(){if(typeof window>"u")return[];try{const e=localStorage.getItem(Ze);return e?JSON.parse(e):[]}catch(e){return console.error("Error getting image history:",e),[]}}function lr(){if(!(typeof window>"u"))try{localStorage.setItem(Ze,JSON.stringify([]))}catch(e){console.error("Error clearing image history:",e)}}var cr=F('<p class="error svelte-g8n7xd"> </p>'),fr=F('<li tabindex="0"><span> </span> <button class="delete-btn svelte-g8n7xd" aria-label="Delete workflow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></li>'),ur=F('<div class="saved-workflows svelte-g8n7xd"><h3 class="svelte-g8n7xd">Saved Workflows</h3> <ul class="svelte-g8n7xd"></ul></div>'),dr=F('<div class="workflow-uploader svelte-g8n7xd"><div><input type="file" accept=".json" style="display: none;"> <div class="upload-icon svelte-g8n7xd"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg></div> <p class="svelte-g8n7xd">Drop workflow JSON file here or <button class="svelte-g8n7xd">browse</button></p> <!></div> <!></div>');function vr(e,t){xe(t,!1);const s=N();let n=Ue(t,"workflows",28,()=>[]);const a=wt();let o=N(),d=N(null),p=N(!1),w=N("");async function x(i){const u=i.target;if(!u.files||u.files.length===0)return;const C=u.files[0];await H(C),u.value=""}async function I(i){var C;if(i.preventDefault(),c(p,!1),!((C=i.dataTransfer)!=null&&C.files)||i.dataTransfer.files.length===0)return;const u=i.dataTransfer.files[0];await H(u)}async function H(i){try{if(!i.name.endsWith(".json"))throw new Error("Please upload a JSON file");const u=await i.text(),C=JSON.parse(u),z=Date.now().toString(),U=i.name.replace(".json",""),W={id:z,name:U,content:C};ar(W),c(d,W),a("workflow-uploaded",{workflow:W.content}),c(w,"")}catch(u){console.error("Error processing workflow file:",u),c(w,u instanceof Error?u.message:"Failed to process workflow file")}}function m(i){c(d,i),a("workflow-uploaded",{workflow:i.content})}function M(i,u){u.stopPropagation(),or(i),r(d)&&r(d).id===i&&c(d,null),n(n().filter(C=>C.id!==i))}function b(i){i.preventDefault(),c(p,!0)}function j(i){i.preventDefault(),c(p,!1)}ze(()=>r(d),()=>{var i;c(s,(i=r(d))==null?void 0:i.id)}),qe(),ke();var g=dr(),k=v(g);let A;var E=v(k);qt(E,i=>c(o,i),()=>r(o));var y=_(E,4),S=_(v(y));f(y);var q=_(y,2);{var J=i=>{var u=cr(),C=v(u,!0);f(u),G(()=>Y(C,r(w))),T(i,u)};L(q,i=>{r(w)&&i(J)})}f(k);var D=_(k,2);{var l=i=>{var u=ur(),C=_(v(u),2);Te(C,5,n,z=>z.id,(z,U)=>{var W=fr();let R;var ce=v(W),ue=v(ce,!0);f(ce);var Ie=_(ce,2);f(W),G(V=>{R=je(W,1,"svelte-g8n7xd",null,R,V),Y(ue,r(U).name)},[()=>({selected:r(U).id===r(s)})],se),$("click",Ie,V=>M(r(U).id,V)),$("click",W,()=>m(r(U))),$("keydown",W,V=>V.key==="Enter"&&m(r(U))),T(z,W)}),f(C),f(u),T(i,u)};L(D,i=>{n().length>0&&i(l)})}f(g),G(i=>A=je(k,1,"dropzone svelte-g8n7xd",null,A,i),[()=>({dragging:r(p)})],se),$("change",E,x),$("click",S,()=>r(o).click()),$("dragover",k,b),$("dragleave",k,j),$("drop",k,I),T(e,g),Se()}let B=null;function We(){if(typeof window>"u")return null;if(!B){const e=`
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
    `,t=new Blob([e],{type:"application/javascript"});B=new Worker(URL.createObjectURL(t))}if(B){const e=Ke();B.postMessage({type:"init",data:{serverUrl:e.serverUrl,credentials:{username:e.username,password:e.password},wsConfig:{enabled:e.wsEnabled,autoReconnect:e.wsAutoReconnect,reconnectInterval:e.wsReconnectInterval}}})}return B}function kt(){B||(B=We()),B&&B.postMessage({type:"connect_ws"})}function pr(){B&&B.postMessage({type:"disconnect_ws"})}function gr(e){B||(B=We()),B&&B.postMessage({type:"update_ws_config",data:{wsConfig:e}})}function hr(e,t){return new Promise((s,n)=>{if(B||(B=We()),!B){n(new Error("Failed to initialize API worker"));return}const a=o=>{const{type:d,data:p,error:w}=o.data;d==="workflow_sent"?(B==null||B.removeEventListener("message",a),s(p)):d==="error"&&(B==null||B.removeEventListener("message",a),n(new Error(w)))};B.addEventListener("message",a),B.postMessage({type:"send_workflow",data:{workflow:e,inputs:t}})})}function wr(e){if(B||(B=We()),!B)return()=>{};const t=s=>{const{type:n,data:a,error:o}=s.data;n==="ws_message"||n==="ws_connected"||n==="ws_disconnected"||n==="ws_error"||n==="ws_binary"?e({type:n,data:a,error:o}):console.log("unknown message type",n)};return B.addEventListener("message",t),()=>{B&&B.removeEventListener("message",t)}}function $e(e){const t={};for(const s in e)if(e.hasOwnProperty(s)&&e[s].inputs){t[s]={inputs:{}};const n=e[s].inputs;for(const a in n)if(n.hasOwnProperty(a)){const o=n[a];(typeof o=="string"||typeof o=="number")&&(t[s].inputs[a]=o)}}return t}var mr=F("<p>No editable inputs found in this workflow.</p>"),yr=F('<input type="number" step="any" class="svelte-1abrps9">'),_r=F('<input type="text" placeholder="File path" class="svelte-1abrps9">'),br=F('<textarea rows="8" class="svelte-1abrps9"></textarea>'),kr=F('<div class="form-field svelte-1abrps9"><label class="svelte-1abrps9"> </label> <!></div>'),xr=F('<div class="form-group svelte-1abrps9"><h4 class="svelte-1abrps9"> </h4> <!></div>'),Sr=F("<span> </span>"),Ir=F('<div class="progress-container svelte-1abrps9"><div class="progress-bar svelte-1abrps9"><div class="progress-fill svelte-1abrps9"></div></div> <div class="progress-info svelte-1abrps9"><span> </span> <!></div></div>'),Ar=F('<div class="error-message svelte-1abrps9"> </div>'),Er=F('<form><!> <div class="form-actions svelte-1abrps9"><button type="submit" class="generate-btn svelte-1abrps9"> </button></div></form> <!> <!>',1),Cr=F('<div class="dynamic-form svelte-1abrps9"><!></div>');function jr(e,t){xe(t,!1);let s=Ue(t,"workflow",8);const n=wt();let a=N({}),o=N({}),d=N(!1),p=N(0),w=N(""),x=N(""),I=null,H=!0,m=null;Be(()=>{H=Ke().wsEnabled,c(a,$e(s())),M(),H&&b()}),Vt(()=>{I&&I()});function M(){c(o,{});for(const l in r(a)){r(o)[l]||Ce(o,r(o)[l]={inputs:{}});for(const i in r(a)[l].inputs)Ce(o,r(o)[l].inputs[i]=r(a)[l].inputs[i])}}function b(){kt(),I=wr(l=>{l.type==="ws_message"?j(l.data):l.type==="ws_error"?c(x,"WebSocket error: "+l.error):l.type==="ws_disabled"?console.log("WebSocket is disabled in settings"):l.type==="ws_reconnecting"?console.log("Attempting to reconnect WebSocket..."):l.type==="ws_connected"?(console.log("WebSocket connected successfully"),c(x,"")):l.type==="ws_disconnected"?console.log("WebSocket disconnected:",l.data):l.type==="ws_binary"&&g(l.data)})}function j(l){if(l.type==="executing"){const i=l.data;m&&i.prompt_id===m&&(i.node===null?console.log("Workflow execution complete"):c(w,i.node||""))}else if(l.type==="progress")c(p,Math.floor(l.data.value*100)),l.data.node_name&&c(w,l.data.node_name);else if(l.type==="executed"){const i=l.data;if(i.node_type==="SaveImage"||i.node_type==="SaveImageWebsocket"||i.node_type&&i.node_type.includes("Image")){const u=i.images;if(u&&u.length>0){console.log("image url",u[0].url);let C="image/png";if(u[0].filename){const U=u[0].filename.toLowerCase();U.endsWith(".jpg")||U.endsWith(".jpeg")?C="image/jpeg":U.endsWith(".png")&&(C="image/png")}const z={url:u[0].url,filename:u[0].filename,type:u[0].type||C,timestamp:Date.now()};lt(z),n("image-generated",{image:z}),c(d,!1),c(p,0),c(w,"")}}}else l.type==="status"&&(l.data.status==="error"?(c(x,"Generation error: "+l.data.message),c(d,!1)):l.data.status==="success"&&console.log("Generation completed successfully"))}async function g(l){try{let i,u,C;if(l instanceof ArrayBuffer){const W=new Uint8Array(l,0,Math.min(8,l.byteLength));W[0]===137&&W[1]===80&&W[2]===78&&W[3]===71&&W[4]===13&&W[5]===10&&W[6]===26&&W[7]===10?(u="image/png",C="png"):(W[0]===255&&W[1]===216&&W[2],u="image/jpeg",C="jpg"),i=new Blob([l],{type:u})}else if(l.type==="image/png")u="image/png",C="png",i=l;else if(l.type==="image/jpeg")u="image/jpeg",C="jpg",i=l;else{const W=await l.slice(0,8).arrayBuffer(),R=new Uint8Array(W);R[0]===137&&R[1]===80&&R[2]===78&&R[3]===71&&R[4]===13&&R[5]===10&&R[6]===26&&R[7]===10?(u="image/png",C="png"):(R[0]===255&&R[1]===216&&R[2],u="image/jpeg",C="jpg"),i=new Blob([l],{type:u})}const z=URL.createObjectURL(i);console.log("blob length",i.size),console.log("detected image type",u);const U={url:z,filename:`image_${Date.now()}.${C}`,type:u,timestamp:Date.now()};console.log("image data",U),lt(U),n("image-generated",{image:U}),c(d,!1),c(p,0),c(w,"")}catch(i){console.error("Error processing binary data:",i),c(x,"Failed to process image data")}}async function k(){c(x,"");try{c(d,!0),c(p,0),c(w,"Starting..."),m=(await hr(s(),r(o))).prompt_id,console.log("Workflow sent, prompt ID:",m),H||c(x,"WebSocket is disabled. Generation has started, but progress updates are not available. Results will appear when completed.")}catch(l){c(x,l instanceof Error?l.message:"Failed to start generation"),c(d,!1),c(p,0),c(w,""),console.error("Error sending workflow:",l)}}function A(l){return typeof l=="number"?"number":typeof l=="string"&&/\.(png|jpg|jpeg|webp)$/i.test(l)?"file":"text"}function E(l){if(!s())return l;const i=s()[l];return i&&i.class_type?`${i.class_type} (${l})`:l}function y(l){return l.replace(/_/g," ").replace(/([A-Z])/g," $1").replace(/^\w/,i=>i.toUpperCase())}ze(()=>(gt(s()),$e),()=>{s()&&(c(a,$e(s())),M())}),qe(),ke();var S=Cr(),q=v(S);{var J=l=>{var i=mr();T(l,i)},D=l=>{var i=Er(),u=Ve(i),C=v(u);Te(C,1,()=>Object.keys(r(a)),rt,(V,O)=>{var ie=xr(),de=v(ie),ye=v(de,!0);f(de);var ge=_(de,2);Te(ge,1,()=>Object.keys(r(a)[r(O)].inputs),rt,(he,h)=>{var P=kr();const X=se(()=>r(a)[r(O)].inputs[r(h)]),ne=se(()=>A(r(X)));var te=v(P),Ae=v(te,!0);f(te);var ae=_(te,2);{var le=ee=>{var Z=yr();pe(Z),G(()=>oe(Z,"id",`${r(O)}-${r(h)}`)),me(Z,()=>r(o)[r(O)].inputs[r(h)],fe=>Ce(o,r(o)[r(O)].inputs[r(h)]=fe)),T(ee,Z)},_e=(ee,Z)=>{{var fe=re=>{var K=_r();pe(K),G(()=>oe(K,"id",`${r(O)}-${r(h)}`)),me(K,()=>r(o)[r(O)].inputs[r(h)],Ne=>Ce(o,r(o)[r(O)].inputs[r(h)]=Ne)),T(re,K)},be=re=>{var K=br();zt(K),G(()=>oe(K,"id",`${r(O)}-${r(h)}`)),me(K,()=>r(o)[r(O)].inputs[r(h)],Ne=>Ce(o,r(o)[r(O)].inputs[r(h)]=Ne)),T(re,K)};L(ee,re=>{r(ne)==="file"?re(fe):re(be,!1)},Z)}};L(ae,ee=>{r(ne)==="number"?ee(le):ee(_e,!1)})}f(P),G(ee=>{oe(te,"for",`${r(O)}-${r(h)}`),Y(Ae,ee)},[()=>y(r(h))],se),T(he,P)}),f(ie),G(he=>Y(ye,he),[()=>E(r(O))],se),T(V,ie)});var z=_(C,2),U=v(z),W=v(U,!0);f(U),f(z),f(u);var R=_(u,2);{var ce=V=>{var O=Ir(),ie=v(O),de=v(ie);f(ie);var ye=_(ie,2),ge=v(ye),he=v(ge);f(ge);var h=_(ge,2);{var P=X=>{var ne=Sr(),te=v(ne);f(ne),G(()=>Y(te,`Processing: ${r(w)??""}`)),T(X,ne)};L(h,X=>{r(w)&&X(P)})}f(ye),f(O),G(()=>{er(de,`width: ${r(p)??""}%`),Y(he,`${r(p)??""}%`)}),T(V,O)};L(R,V=>{r(d)&&V(ce)})}var ue=_(R,2);{var Ie=V=>{var O=Ar(),ie=v(O,!0);f(O),G(()=>Y(ie,r(x))),T(V,O)};L(ue,V=>{r(x)&&V(Ie)})}G(()=>{U.disabled=r(d),Y(W,r(d)?"Generating...":"Generate Image")}),$("submit",u,yt(k)),T(l,i)};L(q,l=>{Object.keys(r(a)).length===0?l(J):l(D,!1)})}f(S),T(e,S),Se()}var Wr=Me('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg> Exit Fullscreen',1),Tr=Me('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg> Fullscreen',1),Dr=F('<div class="image-container svelte-10bns48"><img alt="Generated Image" class="svelte-10bns48"> <div class="image-info svelte-10bns48"><span> </span> <span> </span></div> <div class="image-actions svelte-10bns48"><button class="download-btn svelte-10bns48"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Download</button> <button class="fullscreen-btn svelte-10bns48"><!></button></div></div>'),Mr=F('<div class="no-image svelte-10bns48"><p>No image generated yet</p></div>'),Ur=F('<div class="fullscreen-overlay svelte-10bns48" role="dialog" aria-modal="true"><div class="fullscreen-content svelte-10bns48"><img alt="Generated Image (Fullscreen)" class="svelte-10bns48"> <button class="close-btn svelte-10bns48"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div></div>'),Br=F("<div><!></div> <!>",1);function Nr(e,t){xe(t,!1);let s=Ue(t,"image",8),n=N(!1);function a(){if(!s()||!s().url)return;const g=s().url;let k="png";s().type&&(s().type==="image/jpeg"?k="jpg":s().type==="image/png"&&(k="png"));const A=document.createElement("a");A.href=g,A.download=s().filename||`generated-image.${k}`,document.body.appendChild(A),A.click(),document.body.removeChild(A)}function o(){c(n,!r(n))}function d(){return!s()||!s().url?"":s().url}const p=g=>new Date(g).toLocaleString();ke();var w=Br(),x=Ve(w);let I;var H=v(x);{var m=g=>{var k=Dr(),A=v(k),E=_(A,2),y=v(E),S=v(y,!0);f(y);var q=_(y,2),J=v(q,!0);f(q),f(E);var D=_(E,2),l=v(D),i=_(l,2),u=v(i);{var C=U=>{var W=Wr();we(),T(U,W)},z=U=>{var W=Tr();we(),T(U,W)};L(u,U=>{r(n)?U(C):U(z,!1)})}f(i),f(D),f(k),G((U,W)=>{oe(A,"src",U),Y(S,s().filename||"Untitled"),Y(J,W)},[d,()=>p(s().timestamp)],se),$("click",A,o),$("click",l,a),$("click",i,o),T(g,k)},M=g=>{var k=Mr();T(g,k)};L(H,g=>{s()&&s().url?g(m):g(M,!1)})}f(x);var b=_(x,2);{var j=g=>{var k=Ur(),A=v(k),E=v(A),y=_(E,2);f(A),f(k),G(S=>oe(E,"src",S),[d],se),$("click",E,it(()=>{})),$("click",y,o),$("click",A,it(()=>{})),$("click",k,o),T(g,k)};L(b,g=>{r(n)&&g(j)})}G(g=>I=je(x,1,"image-viewer svelte-10bns48",null,I,g),[()=>({fullscreen:r(n)})],se),T(e,w),Se()}var Fr=F("<button> </button>"),Or=F('<p class="no-history svelte-xaorkw">No images in history</p>'),Hr=F('<div class="history-item svelte-xaorkw"><img loading="lazy" class="svelte-xaorkw"> <div class="image-meta svelte-xaorkw"><span class="image-name svelte-xaorkw"> </span> <span class="image-date svelte-xaorkw"> </span></div></div>'),Rr=F('<div class="history-list svelte-xaorkw"></div>'),Lr=F('<div class="image-history svelte-xaorkw"><div class="history-header svelte-xaorkw"><h3 class="svelte-xaorkw">Image History</h3> <!></div> <!></div>');function Pr(e,t){xe(t,!1);let s=Ue(t,"images",24,()=>[]),n=N([]),a=N(!1);Be(()=>{c(n,bt())});function o(j){return!j||!j.url?"":j.url}function d(j){return new Date(j).toLocaleString()}function p(){r(a)?(lr(),c(n,[]),c(a,!1)):(c(a,!0),setTimeout(()=>{c(a,!1)},3e3))}ze(()=>gt(s()),()=>{if(s().length>0){const j=[...s()];c(n,j)}}),qe(),ke();var w=Lr(),x=v(w),I=_(v(x),2);{var H=j=>{var g=Fr();let k;var A=v(g,!0);f(g),G(E=>{k=je(g,1,"clear-btn svelte-xaorkw",null,k,E),Y(A,r(a)?"Confirm Clear":"Clear History")},[()=>({confirm:r(a)})],se),$("click",g,p),T(j,g)};L(I,j=>{r(n).length>0&&j(H)})}f(x);var m=_(x,2);{var M=j=>{var g=Or();T(j,g)},b=j=>{var g=Rr();Te(g,7,()=>r(n),k=>k.timestamp,(k,A,E)=>{var y=Hr(),S=v(y),q=_(S,2),J=v(q),D=v(J,!0);f(J);var l=_(J,2),i=v(l,!0);f(l),f(q),f(y),G((u,C)=>{oe(S,"src",u),oe(S,"alt",`Generated image ${r(E)+1}`),Y(D,r(A).filename||"Untitled"),Y(i,C)},[()=>o(r(A)),()=>d(r(A).timestamp)],se),T(k,y)}),f(g),T(j,g)};L(m,j=>{r(n).length===0?j(M):j(b,!1)})}f(w),T(e,w),Se()}var $r=Me('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>'),Gr=Me('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>'),Jr=F('<div class="form-group checkbox-group svelte-pho5kj"><label class="checkbox-label svelte-pho5kj"><input type="checkbox" class="svelte-pho5kj"> <span>Auto Reconnect if Disconnected</span></label> <div class="hint svelte-pho5kj">Automatically attempts to reconnect if the WebSocket connection is lost</div></div> <div class="form-group svelte-pho5kj"><label for="reconnect-interval" class="svelte-pho5kj">Reconnect Interval (ms)</label> <input type="number" id="reconnect-interval" min="500" max="30000" step="500" class="svelte-pho5kj"> <div class="hint svelte-pho5kj">Time to wait before reconnecting (500ms minimum, 30000ms maximum)</div></div>',1),zr=F(`<div class="advanced-settings svelte-pho5kj"><div class="websocket-info svelte-pho5kj"><p class="svelte-pho5kj">ComfyUI uses WebSocket connections to provide real-time progress updates during image generation. The application will:</p> <ol class="svelte-pho5kj"><li class="svelte-pho5kj">Generate a unique client ID for your session</li> <li class="svelte-pho5kj">Send your workflow with this client ID to ComfyUI</li> <li class="svelte-pho5kj">Connect to WebSocket using the same client ID to receive progress updates</li></ol></div> <div class="form-group checkbox-group svelte-pho5kj"><label class="checkbox-label svelte-pho5kj"><input type="checkbox" class="svelte-pho5kj"> <span>Enable WebSocket Connection</span></label> <div class="hint svelte-pho5kj">WebSocket is used for real-time generation progress updates. Disable only if you're experiencing connection issues.</div></div> <!></div>`),qr=F('<div class="success-message svelte-pho5kj">Settings saved successfully!</div>'),Vr=F("<div><!></div>"),Yr=F('<div class="auth-settings svelte-pho5kj"><h3 class="svelte-pho5kj">ComfyUI Connection Settings</h3> <form><div class="form-group svelte-pho5kj"><label for="server-url" class="svelte-pho5kj">Server URL</label> <input type="url" id="server-url" placeholder="http://127.0.0.1:8188" required class="svelte-pho5kj"></div> <div class="form-group svelte-pho5kj"><label for="username" class="svelte-pho5kj">Username (optional)</label> <input type="text" id="username" placeholder="Username if required" class="svelte-pho5kj"></div> <div class="form-group password-group svelte-pho5kj"><label for="password" class="svelte-pho5kj">Password (optional)</label> <div class="password-input svelte-pho5kj"><input id="password" placeholder="Password if required" class="svelte-pho5kj"> <button type="button" class="toggle-password svelte-pho5kj"><!></button></div></div> <div class="toggle-section svelte-pho5kj"><button type="button" class="toggle-btn svelte-pho5kj"> </button></div> <!> <div class="actions svelte-pho5kj"><button type="submit" class="save-btn svelte-pho5kj">Save Settings</button> <button type="button" class="test-btn svelte-pho5kj"> </button></div></form> <!> <!></div>');function Zr(e,t){xe(t,!1);let s=N(""),n=N(""),a=N(""),o=N(!1),d=N(!1),p=N(!1),w=N("untested"),x=N(""),I=N(!0),H=N(!0),m=N(3e3),M=N(!1);Be(()=>{const h=Ke();c(s,h.serverUrl),c(n,h.username),c(a,h.password),c(I,h.wsEnabled),c(H,h.wsAutoReconnect),c(m,h.wsReconnectInterval)});async function b(){r(s)||c(s,"http://127.0.0.1:8188"),r(m)<500&&c(m,500),ir({serverUrl:r(s),username:r(n),password:r(a),wsEnabled:r(I),wsAutoReconnect:r(H),wsReconnectInterval:r(m)}),c(d,!0),setTimeout(()=>{c(d,!1)},3e3),pr(),We(),gr({enabled:r(I),autoReconnect:r(H),reconnectInterval:r(m)})}async function j(){c(p,!0),c(w,"testing"),c(x,"");try{await b();const h=new Promise((ne,te)=>{setTimeout(()=>te(new Error("Connection timeout")),5e3)}),P=fetch(`${r(s)}/system_stats`),X=await Promise.race([P,h]);if(X.ok)c(w,"connected"),r(I)&&kt();else throw new Error(`HTTP Error: ${X.status}`)}catch(h){c(w,"error"),c(x,h instanceof Error?h.message:"Unknown connection error"),console.error("Connection test failed:",h)}finally{c(p,!1)}}function g(){c(o,!r(o))}function k(){c(M,!r(M))}ke();var A=Yr(),E=_(v(A),2),y=v(E),S=_(v(y),2);pe(S),f(y);var q=_(y,2),J=_(v(q),2);pe(J),f(q);var D=_(q,2),l=_(v(D),2),i=v(l);pe(i);var u=_(i,2),C=v(u);{var z=h=>{var P=$r();T(h,P)},U=h=>{var P=Gr();T(h,P)};L(C,h=>{r(o)?h(z):h(U,!1)})}f(u),f(l),f(D);var W=_(D,2),R=v(W),ce=v(R);f(R),f(W);var ue=_(W,2);{var Ie=h=>{var P=zr(),X=_(v(P),2),ne=v(X),te=v(ne);pe(te),we(2),f(ne),we(2),f(X);var Ae=_(X,2);{var ae=le=>{var _e=Jr(),ee=Ve(_e),Z=v(ee),fe=v(Z);pe(fe),we(2),f(Z),we(2),f(ee);var be=_(ee,2),re=_(v(be),2);pe(re),we(2),f(be),ot(fe,()=>r(H),K=>c(H,K)),me(re,()=>r(m),K=>c(m,K)),T(le,_e)};L(Ae,le=>{r(I)&&le(ae)})}f(P),ot(te,()=>r(I),le=>c(I,le)),T(h,P)};L(ue,h=>{r(M)&&h(Ie)})}var V=_(ue,2),O=_(v(V),2),ie=v(O,!0);f(O),f(V),f(E);var de=_(E,2);{var ye=h=>{var P=qr();T(h,P)};L(de,h=>{r(d)&&h(ye)})}var ge=_(de,2);{var he=h=>{var P=Vr();let X;var ne=v(P);{var te=ae=>{var le=Fe("Testing connection...");T(ae,le)},Ae=(ae,le)=>{{var _e=Z=>{var fe=Fe("✓ Connected successfully to ComfyUI");T(Z,fe)},ee=(Z,fe)=>{{var be=re=>{var K=Fe();G(()=>Y(K,`✗ Connection failed: ${r(x)??""}`)),T(re,K)};L(Z,re=>{r(w)==="error"&&re(be)},fe)}};L(ae,Z=>{r(w)==="connected"?Z(_e):Z(ee,!1)},le)}};L(ne,ae=>{r(w)==="testing"?ae(te):ae(Ae,!1)})}f(P),G(ae=>X=je(P,1,"connection-status svelte-pho5kj",null,X,ae),[()=>({error:r(w)==="error",success:r(w)==="connected"})],se),T(h,P)};L(ge,h=>{r(w)!=="untested"&&h(he)})}f(A),G(()=>{oe(i,"type",r(o)?"text":"password"),oe(u,"aria-label",r(o)?"Hide password":"Show password"),Y(ce,`${(r(M)?"▼":"►")??""} WebSocket Settings`),O.disabled=r(p),Y(ie,r(p)?"Testing...":"Test Connection")}),me(S,()=>r(s),h=>c(s,h)),me(J,()=>r(n),h=>c(n,h)),me(i,()=>r(a),h=>c(a,h)),$("click",u,g),$("click",R,k),$("click",O,j),$("submit",E,yt(b)),T(e,A),Se()}var Kr=F('<section class="settings svelte-1ri4ytp"><!></section>'),Xr=F('<main class="svelte-1ri4ytp"><header class="svelte-1ri4ytp"><h1 class="svelte-1ri4ytp">ComfyWeb</h1> <button class="svelte-1ri4ytp"> </button></header> <!> <div class="app-container svelte-1ri4ytp"><section class="workflow-section svelte-1ri4ytp"><h2 class="svelte-1ri4ytp">Workflow</h2> <!> <!></section> <section class="result-section svelte-1ri4ytp"><h2 class="svelte-1ri4ytp">Generated Image</h2> <!></section> <section class="history-section svelte-1ri4ytp"><h2 class="svelte-1ri4ytp">History</h2> <!></section></div></main>');function as(e,t){xe(t,!1);let s=N(null),n=N([]),a=N([]),o=N(!1);Be(()=>{c(n,De()),r(n).length>0&&c(s,r(n)[0])});function d(D){c(s,D.detail.workflow),c(n,De())}function p(D){c(a,[D.detail.image,...r(a)])}ke();var w=Xr(),x=v(w),I=_(v(x),2),H=v(I,!0);f(I),f(x);var m=_(x,2);{var M=D=>{var l=Kr(),i=v(l);Zr(i,{}),f(l),T(D,l)};L(m,D=>{r(o)&&D(M)})}var b=_(m,2),j=v(b),g=_(v(j),2);vr(g,{get workflows(){return r(n)},$$events:{"workflow-uploaded":d}});var k=_(g,2);{var A=D=>{jr(D,{get workflow(){return r(s)},$$events:{"image-generated":p}})};L(k,D=>{r(s)&&D(A)})}f(j);var E=_(j,2),y=_(v(E),2);{var S=D=>{Nr(D,{get image(){return r(a)[0]}})};L(y,D=>{r(a).length>0&&D(S)})}f(E);var q=_(E,2),J=_(v(q),2);Pr(J,{get images(){return r(a)}}),f(q),f(b),f(w),G(()=>Y(H,r(o)?"Close Settings":"Settings")),$("click",I,()=>c(o,!r(o))),T(e,w),Se()}export{as as component};
