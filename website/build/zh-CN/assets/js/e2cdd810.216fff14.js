"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[853],{5225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var o=n(85893),s=n(11151);const c={id:"overview",title:"Quick Overview"},a=void 0,r={id:"concepts/basics/overview",title:"Quick Overview",description:"Lets start with a quick overview of the different elements that compose the NEAR blockchain.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/1.concepts/basics/overview.md",sourceDirName:"1.concepts/basics",slug:"/concepts/basics/overview",permalink:"/zh-CN/concepts/basics/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/overview.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\u5e742\u670828\u65e5",frontMatter:{id:"overview",title:"Quick Overview"}},i={},l=[{value:"Accounts",id:"accounts",level:2},{value:"Keys",id:"keys",level:2},{value:"Contracts",id:"contracts",level:3},{value:"Storage",id:"storage",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Lets start with a quick overview of the different elements that compose the NEAR blockchain."}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"accounts",children:"Accounts"}),"\n",(0,o.jsxs)(t.p,{children:["NEAR uses human-readable account names such as ",(0,o.jsx)(t.code,{children:"alice.near"})," or ",(0,o.jsx)(t.code,{children:"bob.near"})," instead of a public hash such as",(0,o.jsx)(t.code,{children:"0x71C7656EC7ab88b098defB751B7401B5f6d8976F"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["These accounts also have the permission to create subaccounts such as ",(0,o.jsx)(t.code,{children:"nft.alice.near"})," or ",(0,o.jsx)(t.code,{children:"example2.bob.near"}),". It's important to know that only the root account can create the subaccount. So only ",(0,o.jsx)(t.code,{children:"alice.near"})," can create ",(0,o.jsx)(t.code,{children:"nft.alice.near"})," and only ",(0,o.jsx)(t.code,{children:"nft.alice.near"})," can create ",(0,o.jsx)(t.code,{children:"example.nft.alice.near"}),". Note that ",(0,o.jsx)(t.code,{children:"alice.near"})," ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"does not"})})," have permission to create ",(0,o.jsx)(t.code,{children:"example.nft.alice.near"}),". Only the direct parent account has permission to create a subaccount."]}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsxs)(t.mdxAdmonitionTitle,{children:["For more information see the ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"/concepts/protocol/account-model",children:"accounts section"})}),". :::"]}),(0,o.jsx)("hr",{className:"subsection"}),(0,o.jsx)(t.h2,{id:"keys",children:"Keys"}),(0,o.jsxs)(t.p,{children:["On most blockchains, there is one ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Public-key_cryptography",children:"public/private key pair"}),' per account. On NEAR, each account can have many key pairs associated with them which we call "Access Keys". There are two types of "Access Keys":']}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/concepts/protocol/access-keys#full-access-keys",children:"Full Access"})," ",(0,o.jsx)(t.em,{children:"(Grants full control to the account)"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/concepts/protocol/access-keys#function-call-keys",children:"Function Call"})," ",(0,o.jsx)(t.em,{children:"(Allows for only non-monetary transaction signing)"})]}),"\n"]}),(0,o.jsxs)(t.p,{children:["Full access keys allow for full control of the account. You can send funds, create sub-accounts, delete the account, and more. Function call keys only allow for calling certain methods on a specific smart contract that ",(0,o.jsx)(t.strong,{children:"do not"})," allow the transferring of funds. These keys can be used by dApp developers to allow users to sign simple transactions that mutate state on the blockchain without having to constantly re-direct to the user's wallet to prompt for authorization. They can be widely or narrowly scoped depending on the use case."]}),(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsxs)(t.mdxAdmonitionTitle,{children:["For more information see the ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"/concepts/protocol/access-keys",children:"access keys section"})}),". :::"]}),(0,o.jsx)("hr",{className:"subsection"}),(0,o.jsx)(t.h3,{id:"contracts",children:"Contracts"}),(0,o.jsxs)(t.p,{children:["Every NEAR account can hold ",(0,o.jsx)(t.strong,{children:"a"})," smart contract, which is a small piece of logic embedded directly in the account. Smart contracts in NEAR can be developed using either Javascript or ",(0,o.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"}),". Smart contracts that have been deployed can be ",(0,o.jsx)(t.a,{href:"/sdk/rust/building/prototyping",children:"updated"})," at any time but not removed. This is where ",(0,o.jsx)(t.a,{href:"#concepts/protocol/account-model#subaccounts",children:"sub-accounts"})," can come in handy. NEAR allows users to organize and create a hierarchy for their accounts."]}),(0,o.jsxs)(t.p,{children:["As an example, benji could have the root account ",(0,o.jsx)(t.code,{children:"benji.near"}),". He then stores all his NFT contracts as sub-accounts of ",(0,o.jsx)(t.code,{children:"nft.benji.near"}),". For example, he worked on a cool lazy minting contract deployed to ",(0,o.jsx)(t.code,{children:"lazy.nft.benji.near"}),". This not only allows for better organization but it allows developers to easily delete and re-create accounts in order to clear state."]}),(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsxs)(t.mdxAdmonitionTitle,{children:["For more information see a guide on ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"/sdk/rust/promises/deploy-contract",children:"deploying contracts"})}),". :::"]}),(0,o.jsx)("hr",{className:"subsection"}),(0,o.jsx)(t.h3,{id:"storage",children:"Storage"}),(0,o.jsxs)(t.p,{children:["Any information that is stored on NEAR is accounted for using a mechanism called ",(0,o.jsx)(t.a,{href:"/concepts/storage/storage-staking",children:"storage staking"}),". In short, an account must maintain a certain balance that is locked in order to cover the cost of storage. If that storage is released, the funds become available once again. This is why named account IDs on NEAR cost an initial deposit to create. If you attempt to store state on-chain without having the necessary balance in your account to cover the cost, an error will be thrown which will tell you to add more NEAR to your account."]}),(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.mdxAdmonitionTitle,{children:["For more information on storage staking, see the ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"/concepts/storage/storage-staking",children:"storage staking section"})}),". :::"]})})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var o=n(67294);const s={},c=o.createContext(s);function a(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);