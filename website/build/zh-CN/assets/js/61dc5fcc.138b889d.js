"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8485],{26772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=n(85893),r=n(11151);const a={},s=void 0,c={id:"primitives/dao/web-app/create-proposal",title:"create-proposal",description:"The Wallet object comes from our quickstart template",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/dao/web-app/create-proposal.md",sourceDirName:"7.primitives/dao/web-app",slug:"/primitives/dao/web-app/create-proposal",permalink:"/zh-CN/primitives/dao/web-app/create-proposal",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/dao/web-app/create-proposal.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\u5e742\u670828\u65e5",frontMatter:{}},i={},p=[];function l(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst DAO_CONTRACT_ADDRESS = "primitives.sputnik-dao.near";\nconst wallet = new Wallet({ createAccessKeyFor: DAO_CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'add_proposal\',\n  args: {\n    proposal: {\n      description: "My first proposal$$$$https://docs.near.org/",\n      kind: {\n        Transfer: {\n          token_id: "",\n          receiver_id: "bob.near",\n          amount: "10000000000000000000000000",\n        },\n      },\n    },\n  },\n  contractId: DAO_CONTRACT_ADDRESS,\n  gas: 300000000000000,\n  deposit: 100000000000000000000000\n});\n'})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["The ",(0,o.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,o.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var o=n(67294);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);