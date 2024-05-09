"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5153],{29407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(85893),a=n(11151),l=(n(74866),n(85162),n(71183));const s={id:"frontend-multiple-contracts",title:"Frontend Interacting with Multiple Contracts",sidebar_label:"Frontend & Multiple Contracts"},i=void 0,o={id:"tutorials/examples/frontend-multiple-contracts",title:"Frontend Interacting with Multiple Contracts",description:"This example showcases how to interact with multiple contracts from a single frontend.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/examples/frontend-multiple-contracts.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/frontend-multiple-contracts",permalink:"/zh-CN/tutorials/examples/frontend-multiple-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/frontend-multiple-contracts.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"frontend-multiple-contracts",title:"Frontend Interacting with Multiple Contracts",sidebar_label:"Frontend & Multiple Contracts"},sidebar:"tutorials",previous:{title:"Self Upgrade & State Migration",permalink:"/zh-CN/tutorials/examples/update-contract-migrate-state"},next:{title:"NFT minter",permalink:"/zh-CN/tutorials/templates/minter"}},u={},c=[{value:"Query Data from Multiple Contracts",id:"query-data-from-multiple-contracts",level:2},{value:"Dispatching Multiple Transactions",id:"dispatching-multiple-transactions",level:2},{value:"Batch Actions",id:"batch-actions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This example showcases how to interact with multiple contracts from a single frontend."}),"\n",(0,r.jsx)(t.p,{children:"Particularly, this example shows how to:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Query data from multiple contracts."}),"\n",(0,r.jsx)(t.li,{children:"Call methods in multiple contracts simultaneously."}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"query-data-from-multiple-contracts",children:"Query Data from Multiple Contracts"}),"\n",(0,r.jsxs)(t.p,{children:["To query multiple contracts simply perform multiple ",(0,r.jsx)(t.code,{children:"view"})," calls:"]}),"\n",(0,r.jsx)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,r.jsx)(l.Ey,{fname:"index.js",url:"https://github.com/near-examples/frontend-multiple-contracts/blob/main/frontend/index.js",start:"70",end:"76"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"dispatching-multiple-transactions",children:"Dispatching Multiple Transactions"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"wallet"})," object enables to dispatch multiple transactions simultaneously. However, please notice that the transactions execute independently."]}),"\n",(0,r.jsx)(t.p,{children:"Dispatching multiple transactions at once is just a nice way to improve UX, because the user interacts with the wallet only once."}),"\n",(0,r.jsx)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,r.jsx)(l.Ey,{fname:"index.js",url:"https://github.com/near-examples/frontend-multiple-contracts/blob/main/frontend/index.js",start:"39",end:"66"})}),"\n",(0,r.jsx)(t.p,{children:"In this example, the user signs two independent transactions:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["A transaction to call ",(0,r.jsx)(t.code,{children:"set_greeting"})," in our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples",children:"Hello NEAR example"})]}),"\n",(0,r.jsxs)(t.li,{children:["A transaction to call ",(0,r.jsx)(t.code,{children:"add_message"})," in our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/guest-book-examples",children:"GuestBook example"})]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["Even when the user accepts signing the transactions at the same time, the transactions remain ",(0,r.jsx)(t.strong,{children:"independent"}),". This is, if one fails, the other is ",(0,r.jsx)(t.strong,{children:"NOT"})," rolled back."]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"batch-actions",children:"Batch Actions"}),"\n",(0,r.jsxs)(t.p,{children:["You can aggregate multiple ",(0,r.jsx)(t.a,{href:"/zh-CN/build/smart-contracts/anatomy/actions",children:"actions"})," directed towards a same contract into a single transaction. Batched actions execute ",(0,r.jsx)(t.strong,{children:"sequentially"}),", with the added benefit that, if ",(0,r.jsx)(t.strong,{children:"one fails"})," then they ",(0,r.jsx)(t.strong,{children:"all"})," get reverted."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"  // Register a user and transfer them FT on a single take\n  const REGISTER_DEPOSIT = \"1250000000000000000000\";\n\n  const ftTx = {\n    receiverId: FT_ADDRESS,\n    actions: [\n      {\n        type: 'FunctionCall',\n        params: {\n          methodName: 'storage_deposit',\n          args: { account_id: \"<receiver-account>\" },\n          gas: THIRTY_TGAS, deposit: REGISTER_DEPOSIT\n        }\n      },\n      {\n        type: 'FunctionCall',\n        params: {\n          methodName: 'ft_transfer',\n          args: { receiver_id: \"<receiver-account>\", amount: amount_in_yocto },\n          gas: THIRTY_TGAS, deposit: 1 }\n      }\n    ]\n  }\n\n  // Ask the wallet to sign and send the transaction\n  await wallet.signAndSendTransactions({ transactions: [ ftTx ] })\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var l=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),l=n(12466),s=n(16550),i=n(20469),o=n(91980),u=n(67392),c=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,o._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function f(e){var t,n,a,l,s=e.defaultValue,o=e.queryString,u=void 0!==o&&o,d=e.groupId,f=h(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:f})})),v=g[0],b=g[1],x=m({queryString:u,groupId:d}),j=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),T=w[0],I=w[1],S=function(){var e=null!=j?j:T;return p({value:e,tabValues:f})?e:null}();return(0,i.Z)((function(){S&&b(S)}),[S]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),I(e)}),[y,I,f]),tabValues:f}}var g=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function x(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,i=e.tabValues,o=[],u=(0,l.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(u(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;n=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var l,s=o.indexOf(e.currentTarget)-1;n=null!=(l=o[s])?l:o[o.length-1]}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,l=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:c},l,{className:(0,a.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=l.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(x,Object.assign({},t,e)),(0,b.jsx)(j,Object.assign({},t,e))]})}function w(e){var t=(0,g.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>m,Ey:()=>g,SQ:()=>f});var r=n(67294),a=n(74866),l=n(85162),s=n(74165),i=n(15861),o=n(1841),u=n.n(o),c=n(85893);function d(){return(d=(0,i.Z)((0,s.Z)().mark((function e(t,n,r){var a,l,i,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((l=localStorage.getItem(t+"-until"))&&l>Date.now())){e.next=5;break}a=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(t,a),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return i=a.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):i.length,i=i.slice(n,r),o=i.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",i.map((function(e){return e.slice(o)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,a=e.end,l=e.language,s=e.fname,i=e.metastring,o=(0,r.useState)("Loading..."),h=o[0],p=o[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),a=r[0],l=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+l+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return d.apply(this,arguments)}(e,n,a);r.then((function(e){return p(e)}))})),(0,c.jsxs)("div",{fname:s,children:[(0,c.jsx)(u(),{language:l,metastring:i+" showLineNumbers",children:h}),(0,c.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,c.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,c.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,c.jsx)(l.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function f(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,l=n.end,s=n.fname;if(e.type===g)return g({url:r,start:a,end:l,language:t,fname:s});return e}(e,n)})),1==t.length?(0,c.jsx)(l.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,c.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,c.jsx)(l.Z,{value:t,label:e.props.fname,children:e})}))})}function g(e){var t=e.url,n=e.start,r=e.end,a=e.language,l=e.fname,s=e.metastring;return h({url:t,start:n,end:r,language:a,fname:l,metastring:s})}}}]);