"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[489],{48326:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var c=s(85893),n=s(11151);const o={id:"account-model",title:"NEAR Accounts",sidebar_label:"Overview"},r=void 0,i={id:"concepts/protocol/account-model",title:"NEAR Accounts",description:"Users participate in the NEAR ecosystem through their NEAR accounts. These accounts are identified by a unique address, can optionally hold a smart contract, and are controlled through Access Keys.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/1.concepts/protocol/account-model.md",sourceDirName:"1.concepts/protocol",slug:"/concepts/protocol/account-model",permalink:"/vi/concepts/protocol/account-model",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/protocol/account-model.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"account-model",title:"NEAR Accounts",sidebar_label:"Overview"},sidebar:"build",previous:{title:"NEAR l\xe0 g\xec?",permalink:"/vi/concepts/basics/protocol"},next:{title:"Address (Account ID)",permalink:"/vi/concepts/protocol/account-id"}},a={},l=[{value:"Account Model Overview",id:"account-model-overview",level:2},{value:"Account ID",id:"account-id",level:4},{value:"Permissions Through Access Keys",id:"permissions-through-access-keys",level:4},{value:"Simple to Develop Smart Contracts",id:"simple-to-develop-smart-contracts",level:4},{value:"Comparison With Ethereum",id:"compared-to-ethereum",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:["Users participate in the NEAR ecosystem through their NEAR accounts. These accounts are identified by a ",(0,c.jsx)(t.a,{href:"/vi/concepts/protocol/account-id",children:"unique address"}),", can optionally hold a ",(0,c.jsx)(t.a,{href:"/vi/build/smart-contracts/what-is",children:"smart contract"}),", and are controlled through ",(0,c.jsx)(t.a,{href:"/vi/concepts/protocol/access-keys",children:"Access Keys"}),"."]}),"\n",(0,c.jsxs)(t.p,{children:["By signing ",(0,c.jsx)(t.a,{href:"/vi/concepts/protocol/transactions",children:"transactions"})," with their account, users can:"]}),"\n",(0,c.jsxs)(t.ol,{children:["\n",(0,c.jsxs)(t.li,{children:["Send and receive ",(0,c.jsx)(t.strong,{children:"digital assets"})," (such as tokens or collectibles)"]}),"\n",(0,c.jsxs)(t.li,{children:["Create and interact with on-chain applications known as ",(0,c.jsx)(t.strong,{children:"smart contracts"})]}),"\n",(0,c.jsxs)(t.li,{children:["Control accounts in ",(0,c.jsx)(t.strong,{children:"other chains"})," (such as Ethereum or Bitcoin) \u2728"]}),"\n",(0,c.jsxs)(t.li,{children:["Help onboard new users by ",(0,c.jsx)(t.strong,{children:"covering the costs"})," of their transactions (gas fees)"]}),"\n"]}),"\n",(0,c.jsx)(t.admonition,{title:"Want to create an account?",type:"tip",children:(0,c.jsxs)(t.p,{children:["You have multiple ways to create an account, you can ",(0,c.jsx)(t.a,{href:"https://dev.near.org/signup",children:"sign-up using your email"})," (note: email-based accounts currently have limited ability to transfer funds or sign transactions), get a mobile wallet through ",(0,c.jsx)(t.a,{href:"https://web.telegram.org/k/#@herewalletbot",children:"telegram"}),", or create a ",(0,c.jsx)(t.a,{href:"https://app.mynearwallet.com",children:"web wallet"}),"."]})}),"\n",(0,c.jsx)(t.hr,{}),"\n",(0,c.jsx)(t.h2,{id:"account-model-overview",children:"Account Model Overview"}),"\n",(0,c.jsx)(t.p,{children:"Let's take a closer look at the different elements that compose the NEAR account model."}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{alt:"img",src:s(77354).Z+"",width:"1282",height:"470"})}),"\n",(0,c.jsx)(t.h4,{id:"account-id",children:(0,c.jsx)(t.a,{href:"/vi/concepts/protocol/account-id",children:"Account ID"})}),"\n",(0,c.jsxs)(t.p,{children:["NEAR implements two types of accounts IDs: ",(0,c.jsx)(t.strong,{children:"named accounts"})," such as ",(0,c.jsx)(t.code,{children:"alice.near"}),", which are simple to remember and share, and the classic alphanumeric IDs (",(0,c.jsx)(t.code,{children:"fb9243ce..."}),") that other chains also implement."]}),"\n",(0,c.jsx)(t.h4,{id:"permissions-through-access-keys",children:(0,c.jsx)(t.a,{href:"/vi/concepts/protocol/access-keys",children:"Permissions Through Access Keys"})}),"\n",(0,c.jsxs)(t.p,{children:["NEAR accounts can have multiple ",(0,c.jsx)(t.a,{href:"/vi/concepts/protocol/access-keys",children:"keys"}),", each with their own set of permissions. This allows to easily swap keys if one gets compromised, and to use keys as authorization tokens for third-parties."]}),"\n",(0,c.jsx)(t.h4,{id:"simple-to-develop-smart-contracts",children:(0,c.jsx)(t.a,{href:"/vi/build/smart-contracts/what-is",children:"Simple to Develop Smart Contracts"})}),"\n",(0,c.jsxs)(t.p,{children:["NEAR accounts can optionally hold a simple program, known as a ",(0,c.jsx)(t.a,{href:"/vi/build/smart-contracts/what-is",children:"smart contract"}),". In NEAR, developers can create smart contracts using languages such as Javascript or Rust."]}),"\n",(0,c.jsx)(t.hr,{}),"\n",(0,c.jsx)(t.h2,{id:"compared-to-ethereum",children:"Comparison With Ethereum"}),"\n",(0,c.jsx)(t.p,{children:"If you're familiar with development on Ethereum, it's worth making a quick note about how accounts are different. The table below summarizes some key differences:"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{}),(0,c.jsx)(t.th,{children:"Ethereum Wallet"}),(0,c.jsx)(t.th,{children:"NEAR Account"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"Public Identifier"}),(0,c.jsxs)(t.td,{children:["Public Key (",(0,c.jsx)(t.code,{children:"0x123..."}),")"]}),(0,c.jsxs)(t.td,{children:["Named IDs (",(0,c.jsx)(t.code,{children:"alice.near"}),") and implicit accounts (Public Key ",(0,c.jsx)(t.code,{children:"0x123..."}),")"]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"Secret Key"}),(0,c.jsxs)(t.td,{children:["Private Key (",(0,c.jsx)(t.code,{children:"0x456..."}),")"]}),(0,c.jsxs)(t.td,{children:["Multiple key-pairs with permissions:",(0,c.jsx)("br",{}),"- ",(0,c.jsx)(t.code,{children:"FullAccess"})," key",(0,c.jsx)("br",{}),"- ",(0,c.jsx)(t.code,{children:"FunctionCall"})," key"]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"Characteristics"}),(0,c.jsxs)(t.td,{children:["- Private key gives full access",(0,c.jsx)("br",{}),"- Account doesn't have to be created via a transaction"]}),(0,c.jsxs)(t.td,{children:["* Permission-based keypair",(0,c.jsx)("br",{}),"- Account ID must be created via blockchain transaction"]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},77354:(e,t,s)=>{s.d(t,{Z:()=>c});const c=s.p+"assets/images/accounts-8956ef8d06a364d5efa419370ba6d13d.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>r});var c=s(67294);const n={},o=c.createContext(n);function r(e){const t=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),c.createElement(o.Provider,{value:t},e.children)}}}]);