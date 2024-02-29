"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[637],{41331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(85893),o=n(11151);const i={},s=void 0,c={id:"primitives/dex/web-app/get-price",title:"get-price",description:"The Wallet object comes from our quickstart template",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/dex/web-app/get-price.md",sourceDirName:"7.primitives/dex/web-app",slug:"/primitives/dex/web-app/get-price",permalink:"/zh-CN/primitives/dex/web-app/get-price",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/dex/web-app/get-price.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\u5e742\u670828\u65e5",frontMatter:{}},a={},p=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'const tokenContract = "token.v2.ref-finance.near";\nconst tokenPriceResult = await fetch(\n  `https://indexer.ref.finance/get-token-price?token_id=${tokenContract}`\n);\nconst tokenPriceValue = await tokenPriceResult.json();\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["The ",(0,r.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Example response"}),(0,r.jsx)("p",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "token_contract_id": "token.v2.ref-finance.near",\n  "price": "0.08153090"\n}\n'})})})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Ref Finance has a method to ",(0,r.jsx)(t.a,{href:"https://indexer.ref.finance/list-token-price",children:"get all token prices at once"}),"."]})})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(67294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);