"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6599],{81855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(85893),a=n(11151);const s={id:"what-is",title:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",sidebar_label:"What is a Contract?"},o=void 0,i={id:"build/smart-contracts/what-is",title:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",description:"Smart contracts are pieces of executable code that live in a NEAR account. They can store data, perform transactions in the account\u2019s name, and expose methods so other accounts can interact with them.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/what-is.md",sourceDirName:"2.build/2.smart-contracts",slug:"/build/smart-contracts/what-is",permalink:"/ko/build/smart-contracts/what-is",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/what-is.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"what-is",title:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",sidebar_label:"What is a Contract?"},sidebar:"build",previous:{title:"Rollup Data Availability",permalink:"/ko/build/chain-abstraction/data-availability"},next:{title:"Quickstart \u2728",permalink:"/ko/build/smart-contracts/quickstart"}},c={},l=[{value:"Where do contracts live?",id:"where-do-contracts-live",level:2},{value:"What can they do?",id:"what-can-they-do",level:2},{value:"What are they used for?",id:"what-are-they-used-for",level:2},{value:"Development flow",id:"development-flow",level:2},{value:"Supported Languages",id:"supported-languages",level:4},{value:"Contract primitives",id:"contract-primitives",level:2}];function d(e){const t={a:"a",admonition:"admonition",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Smart contracts are pieces of ",(0,r.jsx)(t.strong,{children:"executable code"})," that live in a NEAR account. They can ",(0,r.jsx)(t.strong,{children:"store data"}),", ",(0,r.jsx)(t.strong,{children:"perform transactions"})," in the account\u2019s name, and ",(0,r.jsx)(t.strong,{children:"expose methods"})," so other accounts can interact with them."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"img",src:n(41499).Z+"",width:"1282",height:"470"})}),"\n",(0,r.jsx)(t.p,{children:"Developers can choose between using Javascript or Rust to write smart contracts in NEAR. Indistinctly from the language chosen, the contract will be compiled into WebAssembly, from which point it can be deployed and executed on the NEAR platform."}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:" New to Smart Contract Development? "}),(0,r.jsx)(t.p,{children:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ube14\ub85d\uccb4\uc778\uc774 \uc5b4\ub5bb\uac8c \uc791\ub3d9\ud558\ub294\uc9c0 \ubaa8\ub974\ub354\ub77c\ub3c4 \uac71\uc815\ud558\uc9c0 \ub9c8\uc138\uc694. \uac1c\ubc1c\uc790\ub85c\uc11c NEAR \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc774\ud574\ud558\ub294 \uac83\ub9cc\uc73c\ub85c\ub3c4 \ucda9\ubd84\ud569\ub2c8\ub2e4."}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"\uc81c\ud55c\uc801\uc778"})," \ucef4\ud4e8\ud305 \ub9ac\uc18c\uc2a4\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"\ube44\ub3d9\uae30\uc801\uc778"})," \ubc29\uc2dd\uc73c\ub85c \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"\uc2e4\uc81c \ub3c8"}),"\uc744 \ub2e4\ub8e8\uae30 \ub54c\ubb38\uc5d0, \uc81c\uc77c \uc911\uc694\ud55c \uac83\uc740 \ubcf4\uc548\uc785\ub2c8\ub2e4."]}),"\n"]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"where-do-contracts-live",children:"Where do contracts live?"}),"\n",(0,r.jsxs)(t.p,{children:["Smart Contracts are deployed into ",(0,r.jsx)(t.a,{href:"/ko/concepts/protocol/account-model",children:(0,r.jsx)(t.strong,{children:"NEAR accounts"})}),". Any NEAR account can hold a contract, needing to pay for the ",(0,r.jsx)(t.strong,{children:"contract's code"})," and the ",(0,r.jsx)(t.strong,{children:"data it stores"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Once in an account, anyone can interact with the contract. Thanks to the underlying network structure, executing code from a contract is both ",(0,r.jsx)(t.strong,{children:"fast"})," (avg. 1.4s finality) and ",(0,r.jsx)(t.strong,{children:"cheap"}),". Moreover, ",(0,r.jsx)(t.strong,{children:"read-only"})," operations are ",(0,r.jsx)(t.strong,{children:"free for everyone"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Storing 100kb costs 1\u24c3, so deploying a contract generally costs only a few $NEARs."})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"what-can-they-do",children:"What can they do?"}),"\n",(0,r.jsxs)(t.p,{children:["Smart contracts have ",(0,r.jsx)(t.strong,{children:"complete control over the account"}),", and thus can perform ",(0,r.jsx)(t.strong,{children:"any action on its behalf"}),". For example, contracts can:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Transfer $NEAR Tokens"}),"\n",(0,r.jsx)(t.li,{children:"Call methods on other contracts"}),"\n",(0,r.jsx)(t.li,{children:"Create new accounts and deploy contracts on them"}),"\n",(0,r.jsx)(t.li,{children:"Update their own code"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Besides, smart contracts can store data in the account's storage. This allows contract's to create almost any type of application, from simple games to complex financial systems."}),"\n",(0,r.jsx)(t.admonition,{title:"What contracts cannot do",type:"danger",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Smart contracts cannot ",(0,r.jsx)(t.strong,{children:"access the internet"}),", so they cannot make HTTP requests or access external data"]}),"\n",(0,r.jsxs)(t.li,{children:["Smart contracts cannot ",(0,r.jsx)(t.strong,{children:"execute automatically"}),", they need to be called by an external account"]}),"\n"]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"what-are-they-used-for",children:"What are they used for?"}),"\n",(0,r.jsxs)(t.p,{children:["Smart contracts are useful to create ",(0,r.jsx)(t.strong,{children:"decentralized applications"}),". Some traditional examples include:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://dev.near.org/nearcatalog.near/widget/Index?cat=dao",children:"Decentralized Autonomous Organizations"}),", where users create and vote proposals"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://dev.near.org/nearcatalog.near/widget/Index?cat=marketplaces",children:"Marketplaces"}),", where users create and commercialize digital art pieces"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://dev.near.org/nearcatalog.near/widget/Index?cat=exchanges",children:"Decentralized exchanges"}),", where users can trade different currencies"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://dev.near.org/nearcatalog.near/widget/Index",children:"And many more..."})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"For instance, you can easily create a crowdfunding contract that accepts $NEAR. If the goal is met in time, the creator can claim the funds. Otherwise, the backers are refunded."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"development-flow",children:"Development flow"}),"\n",(0,r.jsx)(t.p,{children:"Just like any piece of software, smart contracts have a development flow - starting with its creation and ending with monitoring it, all of which we cover in our documentation."}),"\n",(0,r.jsx)(t.p,{children:"The development flow can be summarized as follows:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/ko/build/smart-contracts/quickstart",children:(0,r.jsx)(t.strong,{children:"Scaffold"})}),": The simplest way to create a project is by starting from a template."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/ko/build/smart-contracts/anatomy/",children:(0,r.jsx)(t.strong,{children:"Build"})}),": Write a contract using Rust or Javascript."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/ko/build/smart-contracts/testing/introduction",children:(0,r.jsx)(t.strong,{children:"Test"})}),": Our Sandbox enables to simulate interactions with one or multiple contracts in a realistic environment."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/ko/build/smart-contracts/release/deploy",children:(0,r.jsx)(t.strong,{children:"Deploy"})}),": After making sure the contract is secure, developers can deploy the contract into their accounts."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://mynearwallet.com",children:(0,r.jsx)(t.strong,{children:"Use"})}),": Any user can interact with the contract through their NEAR Wallet."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/ko/build/data-infrastructure/what-is",children:(0,r.jsx)(t.strong,{children:"Monitor"})}),": The contract's activity can be monitored through simple APIs."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"supported-languages",children:"Supported Languages"}),"\n",(0,r.jsxs)(t.p,{children:["During the whole cycle, developers can choose between ",(0,r.jsx)(t.a,{href:"https://www.learn-js.org/",children:"JavaScript"})," and ",(0,r.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"}),", allowing them to use their favorite language at each step of their journey."]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:" Other languages "}),(0,r.jsx)(t.p,{children:"Theoretically, you can use any language that compiles to Wasm for developing NEAR smart contract. However, in order to have a user-friendly experience we would need to provide a library that wraps around low-level runtime APIs, while also offering other high-level functionalities."}),(0,r.jsx)(t.p,{children:"We envision that in the future, more languages will be supported and the support will be done through the effort from the wider community, not just NEAR alone."})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"contract-primitives",children:"Contract primitives"}),"\n",(0,r.jsx)(t.p,{children:"Contract primitives such as FT, NFT, and DAOs are fundamental building blocks that can be combined to create awesome user experiences such as reward tokens, decision-making tools, and marketplaces."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Check our section on ",(0,r.jsx)(t.a,{href:"/ko/build/primitives/what-is",children:"primitives"})," to learn more about them"]})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},41499:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/contracts-landing-5a9c76a78e71b0e5f9a96033f1f23d23.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(67294);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);