import{S as t,i as e,s as n,e as a,t as r,c as s,a as i,b as o,d as c,f as l,g as d,h,j as u,k as w,l as g,m as f,n as p,o as m,p as v,q as x,r as C,u as $,v as b,w as E,x as k,y as V,z as y,A as B,B as z,C as D,D as H,E as L,F as I,G as S,H as M}from"./client.add68c09.js";const{window:q}=m;function A(t){let e,n;return{c(){e=a("style"),n=r(".text {\n\t\t\tbackground-image: linear-gradient(transparent 10%, currentColor 30%, currentColor 70%, transparent 90%);\n\t\t\t-webkit-background-clip: text;\n\t\t\tbackground-clip: text;\n\t\t\tbackground-attachment: fixed;\n\t\t\tpadding: 3%;\n\t\t}\n\n\t\t.text > * {\n\t\t\tcolor: transparent;\n\t\t}")},l(t){e=s(t,"STYLE",{});var a=i(e);n=o(a,".text {\n\t\t\tbackground-image: linear-gradient(transparent 10%, currentColor 30%, currentColor 70%, transparent 90%);\n\t\t\t-webkit-background-clip: text;\n\t\t\tbackground-clip: text;\n\t\t\tbackground-attachment: fixed;\n\t\t\tpadding: 3%;\n\t\t}\n\n\t\t.text > * {\n\t\t\tcolor: transparent;\n\t\t}"),a.forEach(c)},m(t,a){l(t,e,a),d(e,n)},d(t){t&&c(e)}}}function F(t){let e,n,m,v,x,C,$,b,E,k,V,y=t[0]&&!!t[0].chrome&&A();return{c(){e=a("div"),n=a("h1"),m=r("Feliz Cumple"),v=h(),x=a("p"),C=h(),$=a("div"),b=h(),y&&y.c(),E=u(),this.h()},l(t){e=s(t,"DIV",{class:!0});var a=i(e);n=s(a,"H1",{class:!0});var r=i(n);m=o(r,"Feliz Cumple"),r.forEach(c),v=w(a),x=s(a,"P",{}),i(x).forEach(c),C=w(a),$=s(a,"DIV",{class:!0}),i($).forEach(c),a.forEach(c),b=w(t),y&&y.l(t),E=u(),this.h()},h(){g(n,"class","svelte-1x4eup3"),g($,"class","end-spacer svelte-1x4eup3"),g(e,"class","text svelte-1x4eup3")},m(a,r){l(a,e,r),d(e,n),d(n,m),d(e,v),d(e,x),d(e,C),d(e,$),l(a,b,r),y&&y.m(a,r),l(a,E,r),k||(V=f(q,"scroll",t[1]),k=!0)},p(t,[e]){t[0]&&t[0].chrome?y||(y=A(),y.c(),y.m(E.parentNode,E)):y&&(y.d(1),y=null)},i:p,o:p,d(t){t&&c(e),t&&c(b),y&&y.d(t),t&&c(E),k=!1,V()}}}function N(t,e,n){let{win:a}=e;return t.$$set=t=>{"win"in t&&n(0,a=t.win)},[a,t=>{document.documentElement.scrollHeight<window.scrollY+2*window.innerHeight&&(smile_and_wave=!0)}]}class Y extends t{constructor(t){super(),e(this,t,N,F,n,{win:0})}}function j(t){let e,n;return{c(){e=v("svg"),n=v("path"),this.h()},l(t){e=s(t,"svg",{width:!0,height:!0,viewBox:!0},1);var a=i(e);n=s(a,"path",{d:!0,fill:!0},1),i(n).forEach(c),a.forEach(c),this.h()},h(){g(n,"d","M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.5 6.5,20.5C8.45,20.5 10.55,20.9 12,22C13.35,21.15 15.8,20.5 17.5,20.5C19.15,20.5 20.85,20.81 22.25,21.56C22.35,21.61 22.4,21.59 22.5,21.59C22.75,21.59 23,21.34 23,21.09V6.5C22.4,6.05 21.75,5.75 21,5.5V7.5L21,13V19C19.9,18.65 18.7,18.5 17.5,18.5C15.8,18.5 13.35,19.15 12,20V13L12,8.5V6.5C10.55,5.4 8.45,5 6.5,5V5Z"),g(n,"fill",t[2]),g(e,"width",t[0]),g(e,"height",t[1]),g(e,"viewBox",t[3])},m(t,a){l(t,e,a),d(e,n)},p(t,[a]){4&a&&g(n,"fill",t[2]),1&a&&g(e,"width",t[0]),2&a&&g(e,"height",t[1]),8&a&&g(e,"viewBox",t[3])},i:p,o:p,d(t){t&&c(e)}}}function P(t,e,n){let{size:a="1em"}=e,{width:r=a}=e,{height:s=a}=e,{color:i="currentColor"}=e,{viewBox:o="0 0 24 24"}=e;return t.$$set=t=>{"size"in t&&n(4,a=t.size),"width"in t&&n(0,r=t.width),"height"in t&&n(1,s=t.height),"color"in t&&n(2,i=t.color),"viewBox"in t&&n(3,o=t.viewBox)},[r,s,i,o,a]}class _ extends t{constructor(t){super(),e(this,t,P,j,n,{size:4,width:0,height:1,color:2,viewBox:3})}}function G(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}function R(t,{delay:e=0,duration:n=400,easing:a=x}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:a,css:t=>"opacity: "+t*r}}const{document:T,window:W}=m;function X(t){let e,n,r,o;return{c(){e=a("div"),this.h()},l(t){e=s(t,"DIV",{class:!0}),i(e).forEach(c),this.h()},h(){g(e,"class","end svelte-1rwcxwe")},m(t,n){l(t,e,n),o=!0},p(t,e){},i(t){o||(L((()=>{r&&r.end(1),n||(n=I(e,R,{duration:1200,ease:G})),n.start()})),o=!0)},o(t){n&&n.invalidate(),r=C(e,R,{duration:100,ease:G}),o=!1},d(t){t&&c(e),t&&r&&r.end()}}}function Z(t){let e,n,r,o,p,m,v,x,C,H,M,q,A;p=new _({}),v=new Y({props:{win:t[0]}});let F=t[2]&&X();return{c(){e=h(),n=a("div"),r=a("div"),o=a("span"),$(p.$$.fragment),m=h(),$(v.$$.fragment),C=h(),F&&F.c(),H=u(),this.h()},l(t){b('[data-svelte="svelte-9ich8g"]',T.head).forEach(c),e=w(t),n=s(t,"DIV",{class:!0});var a=i(n);r=s(a,"DIV",{class:!0});var l=i(r);o=s(l,"SPAN",{class:!0});var d=i(o);E(p.$$.fragment,d),d.forEach(c),l.forEach(c),m=w(a),E(v.$$.fragment,a),a.forEach(c),C=w(t),F&&F.l(t),H=u(),this.h()},h(){T.title="A Strongly Worded Letter for the Road",g(o,"class","svelte-1rwcxwe"),g(r,"class","toggle-read svelte-1rwcxwe"),g(n,"class","overlay svelte-1rwcxwe")},m(a,s){l(a,e,s),l(a,n,s),d(n,r),d(r,o),k(p,o,null),d(n,m),k(v,n,null),t[5](n),l(a,C,s),F&&F.m(a,s),l(a,H,s),M=!0,q||(A=[f(W,"scroll",t[4]),f(o,"click",t[3])],q=!0)},p(e,[n]){t=e;const a={};1&n&&(a.win=t[0]),v.$set(a),t[2]?F?(F.p(t,n),4&n&&V(F,1)):(F=X(),F.c(),V(F,1),F.m(H.parentNode,H)):F&&(S(),y(F,1,1,(()=>{F=null})),B())},i(t){M||(V(p.$$.fragment,t),V(v.$$.fragment,t),x||L((()=>{x=I(n,R,{duration:1200,ease:G,delay:1200}),x.start()})),V(F),M=!0)},o(t){y(p.$$.fragment,t),y(v.$$.fragment,t),y(F),M=!1},d(a){a&&c(e),a&&c(n),z(p),z(v),t[5](null),a&&c(C),F&&F.d(a),a&&c(H),q=!1,D(A)}}}function J(t,e,n){let a,r,s;H((()=>n(0,r=window)));return n(2,a=!1),[r,s,a,()=>{if(!(window.clientX<900)){let t=s.style["background-color"];n(1,s.style["background-color"]="rgba(0, 0, 0, 0.5)"===t?"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0.5)",s)}},t=>{n(2,a=document.documentElement.scrollHeight<window.scrollY+window.innerHeight*(4/3))},function(t){M[t?"unshift":"push"]((()=>{s=t,n(1,s)}))}]}export default class extends t{constructor(t){super(),e(this,t,J,Z,n,{})}}
