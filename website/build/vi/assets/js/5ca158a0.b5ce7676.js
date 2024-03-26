"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1416],{97054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(85893),a=n(11151);const s={id:"welcome",title:"Rollup Data Availability",sidebar_label:"Rollup Data Availability"},l=void 0,o={id:"data-availability/welcome",title:"Rollup Data Availability",description:"Utilizing NEAR as storage data availability with a focus on lowering rollup DA fees.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/data-availability/welcome.md",sourceDirName:"data-availability",slug:"/data-availability/welcome",permalink:"/vi/data-availability/welcome",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/data-availability/welcome.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",frontMatter:{id:"welcome",title:"Rollup Data Availability",sidebar_label:"Rollup Data Availability"},sidebar:"build",previous:{title:"Decentralized Exchanges (DEX)",permalink:"/vi/primitives/dex"},next:{title:"Blob Store Contract",permalink:"/vi/data-availability/blob-contract"}},r={},c=[{value:"System Context",id:"system-context",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Utilizing NEAR as storage data availability with a focus on lowering rollup DA fees."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"./blob-contract",children:"Blob Store Contract"}),": A contract that provides the store for arbitrary DA blobs."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"./light-client",children:"Light Client"}),": A trustless off-chain light client for NEAR with DA-enabled features."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"./rpc",children:"RPC Client"}),": The defacto client for submitting data blobs to NEAR."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"./integrations",children:"Integrations"}),": Proof of concept works for integrating with L2 rollups."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["For the latest information, please check the ",(0,i.jsx)(t.a,{href:"https://github.com/near/rollup-data-availability/",children:"Near DA"})," repository."]})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"system-context",children:"System Context"}),"\n",(0,i.jsx)(t.p,{children:"This outlines the system components that we build and how it interacts with external components."}),"\n",(0,i.jsx)(t.p,{children:"Red lines denote external flow of commitments.\nWhite lines denote flow of blob data."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Fisherman"})," is just an example how a rollup can work with the light client in the initial stage of DA, until we implement a more non-interactive approach, such as KZG."]})}),"\n",(0,i.jsx)(t.mermaid,{value:'C4Context\n    title NEAR Data Availability System Context\n\n    Enterprise_Boundary(b1, "Ethereum") {\n        System_Ext(SystemEth, "Ethereum")\n\n        System_Boundary(b2, "Rollup") {\n            System_Ext(SystemRollup, "Rollup", "Derives blocks, execute transactions, posts commitments & sequence data")\n            System(SystemNearDa, "NEAR DA Client", "Submits/Gets blob data, creates commitments")\n        }\n        BiRel(SystemRollup, SystemEth, "Posts sequences, proofs of execution, DA frame references")\n        BiRel(SystemRollup, SystemNearDa, "Post batches, retrieves commitments")\n        Rel(fisherman, SystemEth, "Looks for commitments, posts results")\n    }      \n    \n    Enterprise_Boundary(b0, "NEAR") {\n        \n        System(SystemLc, "Light Client", "Syncs headers, provides inclusion proofs")\n        System(SystemNear, "NEAR Protocol", "NEAR validators, archival nodes")\n        \n        Rel(SystemLc, SystemNear, "Syncs headers")    \n        Rel(SystemNearDa, SystemNear, "Submits/Gets blob")\n\n        %% This doesn\'t exist yet\n        %% System(SystemDas, "Data Availability Sampling", "Data redundancy, retrieval, sample responses")\n        %% BiRel(SystemDas, SystemLc, "Commitments")\n    }\n     \n    Person_Ext(fisherman, "Fisherman")\n    Rel(fisherman, SystemLc, "Requests inclusion proofs, validates inclusion proofs")\n      \n\n    UpdateRelStyle(fisherman, SystemEth, $offsetY="-10" $lineColor="red")\n    UpdateRelStyle(fisherman, SystemLc, $offsetY="-10", $lineColor="red")\n    UpdateRelStyle(SystemRollup, SystemEth, $offsetY="-30", $lineColor="white")\n    UpdateElementStyle(fisherman, $bgColor="grey", $borderColor="red")\n\n    UpdateRelStyle(SystemRollup, SystemNearDa, $offsetX="-200", $lineColor="white", $textColor="white")\n    UpdateRelStyle(SystemNearDa, SystemNear, $textColor="white", $lineColor="white", $offsetY="10")\n    UpdateRelStyle(SystemNearLc, SystemNear, $offsetX="30")'})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var i=n(67294);const a={},s=i.createContext(a);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);