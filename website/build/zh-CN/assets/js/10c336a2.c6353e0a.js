"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1778],{26192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var o=n(85893),s=n(11151);const r={},i=void 0,p={id:"primitives/linkdrop/bos/simple-drop",title:"simple-drop",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/linkdrop/bos/simple-drop.md",sourceDirName:"7.primitives/linkdrop/bos",slug:"/primitives/linkdrop/bos/simple-drop",permalink:"/zh-CN/primitives/linkdrop/bos/simple-drop",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/linkdrop/bos/simple-drop.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\u5e742\u670828\u65e5",frontMatter:{}},c={},d=[];function a(e){const t={code:"code",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const keypomContract = "v2.keypom.near";\nconst dropAmount = "10000000000000000000000";\n\nNear.call([\n  {\n    contractName: keypomContract,\n    methodName: "create_drop",\n    args: {\n      public_keys: state.publicKeys,\n      deposit_per_use: dropAmount,\n    },\n    deposit: "23000000000000000000000", // state.publicKeys.length * dropAmount + 3000000000000000000000,\n    gas: "100000000000000",\n  },\n]);\n'})})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>p,a:()=>i});var o=n(67294);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);