import{j as H,o as L,z as Z,E as z,H as V,A as $,B as j,C as w,D as Y,F as q,k as B,G as U,U as y,p as J,I as K,J as Q,b as N,K as W,S as F,L as X,M as k,N as p,f as m,O as x,P as aa,g as A,Q as ea,R as ra,T as sa,V as fa,W as ia,l as na,X as ta,Y as ua,Z as la,_ as _a}from"./BoRT0E4S.js";function Ia(a,e,[i,f]=[0,0]){L&&i===0&&Z();var n=a,r=null,t=null,d=y,E=i>0?z:0,l=!1;const b=(u,_=!0)=>{l=!0,I(_,u)},I=(u,_)=>{if(d===(d=u))return;let S=!1;if(L&&f!==-1){if(i===0){const c=n.data;c===V?f=0:c===$?f=1/0:(f=parseInt(c.substring(1)),f!==f&&(f=d?1/0:-1))}const R=f>i;!!d===R&&(n=j(),w(n),Y(!1),S=!0,f=-1)}d?(r?q(r):_&&(r=B(()=>_(n))),t&&U(t,()=>{t=null})):(t?q(t):_&&(t=B(()=>_(n,[i+1,f]))),r&&U(r,()=>{r=null})),S&&Y(!0)};H(()=>{l=!1,e(b),l||I(null,null)},E),L&&(n=J)}function C(a,e){return a===e||(a==null?void 0:a[F])===e}function da(a={},e,i,f){return K(()=>{var n,r;return Q(()=>{n=r,r=[],N(()=>{a!==i(...r)&&(e(a,...r),n&&C(i(...n),a)&&e(null,...n))})}),()=>{W(()=>{r&&C(i(...r),a)&&e(null,...r)})}}),a}let T=!1;function ca(a){var e=T;try{return T=!1,[a(),T]}finally{T=e}}function M(a){var e;return((e=a.ctx)==null?void 0:e.d)??!1}function Sa(a,e,i,f){var D;var n=(i&ua)!==0,r=!na||(i&ta)!==0,t=(i&fa)!==0,d=(i&_a)!==0,E=!1,l;t?[l,E]=ca(()=>a[e]):l=a[e];var b=F in a||ia in a,I=t&&(((D=X(a,e))==null?void 0:D.set)??(b&&e in a&&(s=>a[e]=s)))||void 0,u=f,_=!0,S=!1,R=()=>(S=!0,_&&(_=!1,d?u=N(f):u=f),u);l===void 0&&f!==void 0&&(I&&r&&k(),l=R(),I&&I(l));var c;if(r)c=()=>{var s=a[e];return s===void 0?R():(_=!0,S=!1,s)};else{var o=(n?m:x)(()=>a[e]);o.f|=p,c=()=>{var s=A(o);return s!==void 0&&(u=void 0),s===void 0?u:s}}if((i&aa)===0)return c;if(I){var G=a.$$legacy;return function(s,P){return arguments.length>0?((!r||!P||G||E)&&I(P?c():s),s):c()}}var g=!1,O=la(l),v=m(()=>{var s=c(),P=A(O);return g?(g=!1,P):O.v=s});return t&&A(v),n||(v.equals=ea),function(s,P){if(arguments.length>0){const h=P?A(v):r&&t?ra(s):s;if(!v.equals(h)){if(g=!0,sa(O,h),S&&u!==void 0&&(u=h),M(v))return s;N(()=>A(v))}return s}return M(v)?v.v:A(v)}}export{da as b,Ia as i,Sa as p};
