"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4514],{52028:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=s(85893),a=s(11151);const r={id:"relayers",title:"Relayers"},o=void 0,i={id:"concepts/abstraction/relayers",title:"Relayers",description:"A relayer is a simple web service that receives signed transactions from NEAR users, and relays them to the network while attaching tokens to sponsor their GAS expenses. This can be useful to create applications in which the users are not required to purchase NEAR in order to be able to transact. In this document we present a high-level overview on how relayers work. Please check the build a relayer page if you want to learn how to build your own relayer.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/1.concepts/abstraction/relayers.md",sourceDirName:"1.concepts/abstraction",slug:"/concepts/abstraction/relayers",permalink:"/vi/concepts/abstraction/relayers",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/abstraction/relayers.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"relayers",title:"Relayers"},sidebar:"build",previous:{title:"NEP-366",permalink:"/vi/concepts/abstraction/meta-transactions"},next:{title:"Meta Transaction Relayers",permalink:"/vi/build/chain-abstraction/meta-transactions"}},c={},l=[{value:"How it works",id:"how-it-works",level:2},{value:"Why use a Relayer?",id:"why-use-a-relayer",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["A relayer is a simple web service that receives signed transactions from NEAR users, and relays them to the network while attaching tokens to sponsor their GAS expenses. This can be useful to create applications in which the users are not required to purchase NEAR in order to be able to transact. In this document we present a high-level overview on how relayers work. Please check the ",(0,n.jsx)(t.a,{href:"/vi/build/chain-abstraction/meta-transactions",children:"build a relayer"})," page if you want to learn how to build your own relayer."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"relayer-overview",src:s(46377).Z+"",width:"656",height:"350"})}),"\n",(0,n.jsxs)(t.p,{children:["Relayers are a natural consequence of ",(0,n.jsx)(t.a,{href:"/vi/concepts/abstraction/meta-transactions",children:"Meta Transactions"})," (",(0,n.jsx)(t.a,{href:"https://github.com/near/NEPs/blob/master/neps/nep-0366.md",children:"NEP-366"}),"), a special type of transaction that can be best understood as an intent."]}),"\n",(0,n.jsxs)(t.p,{children:["The user expresses: ",(0,n.jsx)(t.em,{children:'"I want to do a specific action on chain"'})," and signs this intent ",(0,n.jsx)(t.strong,{children:"off-chain"}),", but does not send it to the network. Instead, they send the intent to a ",(0,n.jsx)(t.code,{children:"Relayer"}),", which wraps the message into an actual transaction, attaches the necessary funds, and sends it to the network."]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:" Technical Details "}),(0,n.jsxs)(t.p,{children:["Technically, the end user (client) creates a ",(0,n.jsx)(t.code,{children:"SignedDelegateAction"})," that contains the data necessary to construct a ",(0,n.jsx)(t.code,{children:"Transaction"}),", signs the ",(0,n.jsx)(t.code,{children:"SignedDelegateAction"})," using their key, and send it to  the relayer service."]}),(0,n.jsxs)(t.p,{children:["When the request is received, the relayer uses its own key to sign a ",(0,n.jsx)(t.code,{children:"Transaction"})," using the fields in the ",(0,n.jsx)(t.code,{children:"SignedDelegateAction"})," as input to create a ",(0,n.jsx)(t.code,{children:"SignedTransaction"}),"."]}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"SignedTransaction"})," is then sent to the network via RPC call, and the result is sent back to the client. The ",(0,n.jsx)(t.code,{children:"Transaction"})," is executed in such a way that the relayer pays the GAS fees, but all actions are executed as if the user had sent the transaction."]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"why-use-a-relayer",children:"Why use a Relayer?"}),"\n",(0,n.jsx)(t.p,{children:"There are multiple reasons to use a relayer:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Your users are new to NEAR and don't have any gas to cover transactions"}),"\n",(0,n.jsx)(t.li,{children:"Your users have an account on NEAR, but only have a Fungible Token Balance. They can now use the FT to pay for gas"}),"\n",(0,n.jsx)(t.li,{children:"As an enterprise or a large startup you want to seamlessly onboard your existing users onto NEAR without needing them to worry about gas costs and seed phrases"}),"\n",(0,n.jsx)(t.li,{children:"As an enterprise or large startup you have a user base that can generate large spikes of user activity that would congest the network. In this case, the relayer acts as a queue for low urgency transactions"}),"\n",(0,n.jsx)(t.li,{children:"In exchange for covering the gas fee costs, relayer operators can limit where users spend their assets while allowing users to have custody and ownership of their assets"}),"\n",(0,n.jsx)(t.li,{children:"Capital Efficiency: Without relayer if your business has 1M users they would have to be allocated 0.25 NEAR to cover their gas costs totalling 250k NEAR. However, only ~10% of the users would actually use the full allowance and a large amount of the 250k NEAR is just sitting there unused. So using the relayer, you can allocate 50k NEAR as a global pool of capital for your users, which can refilled on an as needed basis."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},46377:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/relayer-overview-5b70502e41b35076efb203cab7c68697.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>o});var n=s(67294);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);