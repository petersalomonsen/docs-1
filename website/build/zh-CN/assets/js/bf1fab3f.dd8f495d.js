"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7253],{87671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=n(85893),r=n(11151),i=n(74866),s=n(85162),l=n(71183);const c={id:"anatomy",title:"The Contract Class"},o=void 0,d={id:"build/smart-contracts/anatomy/anatomy",title:"The Contract Class",description:"Your contract's logic and state (storage) is defined by the main class, in which:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/anatomy/anatomy.md",sourceDirName:"2.build/2.smart-contracts/anatomy",slug:"/build/smart-contracts/anatomy/",permalink:"/zh-CN/build/smart-contracts/anatomy/",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/anatomy/anatomy.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1713279052e3,frontMatter:{id:"anatomy",title:"The Contract Class"},sidebar:"build",previous:{title:"Quickstart \u2728",permalink:"/zh-CN/build/smart-contracts/quickstart"},next:{title:"State & Data Structures",permalink:"/zh-CN/build/smart-contracts/anatomy/storage"}},u={},h=[{value:"Defining the Contract",id:"defining-the-contract",level:2},{value:"The State",id:"the-state",level:3},{value:"Initializing the State",id:"initializing-the-state",level:2},{value:"Initialization Method",id:"initialization-method",level:3},{value:"Default State",id:"default-state",level:3},{value:"Interface",id:"interface",level:2},{value:"Public Methods",id:"public-methods",level:3},{value:"Private Methods",id:"private-methods",level:3},{value:"Payable Methods",id:"payable-methods",level:3},{value:"Input &amp; Return Types",id:"input--return-types",level:3}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Your contract's logic and state (storage) is defined by the ",(0,a.jsx)(t.a,{href:"#near-bindgen",children:"main class"}),", in which:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["The attributes define the ",(0,a.jsx)(t.a,{href:"#defining-the-state",children:"contract's state"})]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.a,{href:"#initializing-the-state",children:"initialization methods"})," define how to initialize the contract's state"]}),"\n",(0,a.jsx)(t.li,{children:"The public methods act as the contract's interface with the rest of the network"}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"defining-the-contract",children:"Defining the Contract"}),"\n",(0,a.jsxs)(t.p,{children:["The contract is just another class, with its own attributes and methods. To ",(0,a.jsx)(t.strong,{children:"differentiate it"})," from other internal classes simply decorate it using the ",(0,a.jsxs)(t.a,{href:"#decorators--macros",children:[(0,a.jsx)(t.code,{children:"NEAR Bindgen"})," decorator/macro"]}),"."]}),"\n",(0,a.jsxs)(l.O2,{children:[(0,a.jsx)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,a.jsx)(l.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/donation-examples/blob/main/contract-ts/src/contract.ts",start:"6",end:"9"})}),(0,a.jsx)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,a.jsx)(l.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/donation-examples/blob/main/contract-rs/src/lib.rs",start:"13",end:"16"})})]}),"\n",(0,a.jsxs)(t.p,{children:["Under the hood, the ",(0,a.jsx)(t.code,{children:"NEAR Bindgen"})," decorator/macro traverses the class, generating the necessary code to:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Transform the code into a valid NEAR contract."}),"\n",(0,a.jsx)(t.li,{children:"Expose public methods, so they can be called externally."}),"\n",(0,a.jsx)(t.li,{children:"Serialize objects for internal storage and communication with external actors."}),"\n"]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"the-state",children:"The State"}),"\n",(0,a.jsxs)(t.p,{children:["Each account has its own state (storage), which ",(0,a.jsx)(t.strong,{children:"only they can modify"})," but ",(0,a.jsx)(t.a,{href:"../../4.tools/cli.md#near-view-state-near-view-state",children:"anyone can see"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The state is defined and modified through the ",(0,a.jsx)(t.strong,{children:"main class' attributes"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Contracts ",(0,a.jsx)(t.a,{href:"/zh-CN/build/smart-contracts/anatomy/storage#storage-cost",children:(0,a.jsx)(t.strong,{children:"pay for their storage"})})," by locking part of their balance. Currently it costs ",(0,a.jsx)(t.strong,{children:"~1 \u24c3"})," to store ",(0,a.jsx)(t.strong,{children:"100kb"})]}),"\n",(0,a.jsx)(t.admonition,{title:"Key-Value Storage",type:"info",children:(0,a.jsxs)(t.p,{children:["The contract actually uses a ",(0,a.jsx)(t.code,{children:"key-value"})," storage to persist values. This however is abstracted from you by the SDK through ",(0,a.jsx)(t.a,{href:"/zh-CN/build/smart-contracts/anatomy/serialization",children:"serialization"}),"."]})}),"\n",(0,a.jsx)(t.admonition,{title:"Prefer SDK Collections",type:"tip",children:(0,a.jsxs)(t.p,{children:["When defining attributes, ",(0,a.jsxs)(t.strong,{children:["always prefer ",(0,a.jsx)(t.a,{href:"/zh-CN/build/smart-contracts/anatomy/storage",children:"SDK collections"})]})," over native ones, since they are optimized for ",(0,a.jsx)(t.a,{href:"/zh-CN/build/smart-contracts/anatomy/serialization",children:"serialization"}),"."]})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"initializing-the-state",children:"Initializing the State"}),"\n",(0,a.jsx)(t.p,{children:"There are two ways to initialize the account's state, and they can co-exist:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["An ",(0,a.jsx)(t.strong,{children:"initialization method"})," that receives the attributes needed for the state"]}),"\n",(0,a.jsxs)(t.li,{children:["A ",(0,a.jsx)(t.strong,{children:"default state"}),", which will be used until ",(0,a.jsx)(t.code,{children:"init"})," is invoked, or a method writes into the state"]}),"\n"]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"initialization-method",children:"Initialization Method"}),"\n",(0,a.jsxs)(t.p,{children:["To define an initialization method simply decorate it with the ",(0,a.jsx)(t.a,{href:"#decorators--macros",children:"initialization macro"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The method will now be able to define the initial state's values, raising an error if invoked while ",(0,a.jsx)(t.strong,{children:"the state is already initialized"}),"."]}),"\n",(0,a.jsxs)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsxs)(s.Z,{value:"\ud83c\udf10 JavaScript",children:[(0,a.jsx)(l.Ey,{fname:"contract.ts",language:"ts",url:"https://github.com/near-examples/donation-examples/blob/main/contract-ts/src/contract.ts",start:"11",end:"14"}),(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["To make the initialization mandatory use ",(0,a.jsx)(t.code,{children:"@NearBindgen({requireInit: true})"})]})}),(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:["In JavaScript you ",(0,a.jsx)(t.strong,{children:"must always"})," define a ",(0,a.jsx)(t.a,{href:"#default-state",children:"default state"})]})})]}),(0,a.jsxs)(s.Z,{value:"\ud83e\udd80 Rust",children:[(0,a.jsx)(l.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/donation-examples/blob/main/contract-rs/src/lib.rs",start:"35",end:"40"}),(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["To make the initialization mandatory use ",(0,a.jsx)(t.code,{children:"#[derive(PanicOnDefault)]"})," in the contract's structure"]})})]})]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"default-state",children:"Default State"}),"\n",(0,a.jsxs)(t.p,{children:["Contracts can define a ",(0,a.jsx)(t.strong,{children:"default state"})," to use if no initialize method is called. This is, if any method is invoked before an ",(0,a.jsx)(t.code,{children:"init"})," happens, the contract will use the default values."]}),"\n",(0,a.jsx)(t.p,{children:"Once any method writes into the state, the state will be considered initialized."}),"\n",(0,a.jsxs)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsxs)(s.Z,{value:"\ud83c\udf10 JavaScript",children:[(0,a.jsx)(l.Ey,{fname:"contract.ts",language:"ts",url:"https://github.com/near-examples/donation-examples/blob/main/contract-ts/src/contract.ts",start:"6",end:"9"}),(0,a.jsx)(t.p,{children:"\ud83c\udf10 In JavaScript, the default state is defined by the initialization parameters in the class definition."}),(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:["In Javascript you ",(0,a.jsx)(t.strong,{children:"must always"})," assign values to ",(0,a.jsx)(t.strong,{children:"all the class' parameters"}),". This ensures they get correctly ",(0,a.jsx)(t.a,{href:"/zh-CN/build/smart-contracts/anatomy/serialization",children:"deserialized"})," to their intended type."]})})]}),(0,a.jsx)(s.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(l.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/donation-examples/blob/main/contract-rs/src/lib.rs",start:"19",end:"26"})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsxs)(t.p,{children:["All the ",(0,a.jsx)(t.strong,{children:"public methods"})," are exposed to the network as the contract's interface."]}),"\n",(0,a.jsxs)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"@NearBindgen({})\nclass Contract {\n\n  @initialize({ ... })\n  init({ ... }) { /* public `init` method */ }\n\n  @view({})\n  get_message({ ...  }) { /* public `view` method */ }\n\n  @call({})\n  add_message({ ... }) { /* public `call` method */ }\n\n  private internal_search( ... ) { /* private internal method */ }\n\n  @call({privateFunction: true})\n  set_owner({ ... }) { /* public, panics when caller is not the contract's account */ }\n}\n"})})}),(0,a.jsx)(s.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"#[near_bindgen]\nimpl Contract {\n  #[init]\n  pub fn init( ... ) -> Self { /* public `init` method */ }\n  pub fn get_message(&self, ... ) { /* public `view` method */ }\n  pub fn add_message(&mut self, ... ) { /* public `call` method */ }\n  fn internal_search(&self, ... ) { /* private internal method */ }\n\n  #[private]\n  pub fn set_owner(&mut self, ... ) { /* public, panics when caller is not the contract's account */ }\n}\n"})})})]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"public-methods",children:"Public Methods"}),"\n",(0,a.jsxs)(t.p,{children:["Public methods can be categorized in three types: ",(0,a.jsx)(t.code,{children:"init"})," methods, ",(0,a.jsx)(t.code,{children:"view"})," methods, and ",(0,a.jsx)(t.code,{children:"call"})," methods."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Init Methods"}),": They define how to initialize the state of the contract."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"View Methods"}),": Do ",(0,a.jsx)(t.strong,{children:"not mutate"})," the state ",(0,a.jsx)(t.strong,{children:"nor call"})," other contracts. They can be called for free by everyone, ",(0,a.jsx)(t.strong,{children:"without needing"})," a NEAR account."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Call Methods"}),": They can mutate the state and perform ",(0,a.jsx)(t.a,{href:"/zh-CN/build/smart-contracts/anatomy/actions",children:"actions"})," such as calling other contracts."]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.mdxAdmonitionTitle,{children:["By default ",(0,a.jsx)(t.code,{children:"view"})," methods have ",(0,a.jsx)(t.code,{children:"200TGas"})," to execute, to increase this you can simply invoke them as ",(0,a.jsx)(t.code,{children:"call"})," methods."]})})}),"\n",(0,a.jsx)(t.admonition,{type:"danger",children:(0,a.jsx)(t.admonition,{type:"danger",children:(0,a.jsxs)(t.mdxAdmonitionTitle,{children:["By default ",(0,a.jsx)(t.code,{children:"init"})," methods are public, make sure to ",(0,a.jsxs)(t.a,{href:"#private-methods",children:["decorate them as ",(0,a.jsx)(t.code,{children:"private"})]}),", or ",(0,a.jsx)(t.a,{href:"../deploy.md#initializing-the-contract",children:"batch call the initialization on deploy"})," :::"]})})}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"private-methods",children:"Private Methods"}),"\n",(0,a.jsxs)(t.p,{children:["Sometimes you will want some methods to remain public, but only be callable by the contract's account. Such is the case for example of ",(0,a.jsx)(t.a,{href:"/zh-CN/build/smart-contracts/anatomy/crosscontract#callback-method",children:"cross-contract callbacks"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["For this, you can use the ",(0,a.jsx)(t.code,{children:"private"})," macro/decorator."]}),"\n",(0,a.jsxs)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"@call({privateFunction: true})\ncallback( ... ){\n  // this method can only be called by the contract's account\n}\n"})})}),(0,a.jsx)(s.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"#[private]\npub fn callback(&mut self, ... ){\n  // this method can only be called by the contract's account\n}\n"})})})]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"payable-methods",children:"Payable Methods"}),"\n",(0,a.jsxs)(t.p,{children:["By default ",(0,a.jsx)(t.strong,{children:"all methods panic"})," if a user ",(0,a.jsx)(t.strong,{children:"attaches money"})," while calling them. To enable a method to receive money use the payable decorator."]}),"\n",(0,a.jsxs)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"@call({payableFunction: true})\ndeposit_and_stake( ... ){\n  // this method can receive money from the user\n}\n"})})}),(0,a.jsx)(s.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"#[payable]\npub fn deposit_and_stake(&mut self, ... ){\n  // this method can receive money from the user\n}\n"})})})]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"input--return-types",children:"Input & Return Types"}),"\n",(0,a.jsxs)(t.p,{children:["The contract can receive and return any ",(0,a.jsx)(t.code,{children:"native type"}),", including complex structures. However, since contracts communicate through their interface ",(0,a.jsx)(t.a,{href:"/zh-CN/build/smart-contracts/anatomy/serialization",children:"using JSON"}),":"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Always prefer ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"native types"})})," over ",(0,a.jsx)(t.code,{children:"SDK Collections"})," in the input & return types."]}),"\n",(0,a.jsxs)(t.li,{children:["Replace ",(0,a.jsx)(t.code,{children:"u64"}),"/",(0,a.jsx)(t.code,{children:"u128"})," for ",(0,a.jsx)(t.code,{children:"strings"})," (",(0,a.jsx)(t.code,{children:"U64"}),"/",(0,a.jsx)(t.code,{children:"U128"})," in the Rust SDK)."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),i=n(12466),s=n(16550),l=n(20469),c=n(91980),o=n(67392),d=n(50012);function u(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,s.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,c._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function x(e){var t,n,r,i,s=e.defaultValue,c=e.queryString,o=void 0!==c&&c,u=e.groupId,x=h(e),f=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:x})})),b=f[0],j=f[1],g=p({queryString:o,groupId:u}),v=g[0],y=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),N=w[0],z=w[1],S=function(){var e=null!=v?v:N;return m({value:e,tabValues:x})?e:null}();return(0,l.Z)((function(){S&&j(S)}),[S]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);j(e),y(e),z(e)}),[y,z,x]),tabValues:x}}var f=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function g(e){var t=e.className,n=e.block,a=e.selectedValue,s=e.selectValue,l=e.tabValues,c=[],o=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=l[n].value;r!==a&&(o(t),s(r))},u=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var i,s=c.indexOf(e.currentTarget)-1;n=null!=(i=c[s])?i:c[c.length-1]}null==(t=n)||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return c.push(e)},onKeyDown:u,onClick:d},i,{className:(0,r.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=i.find((function(e){return e.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=x(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(g,Object.assign({},t,e)),(0,j.jsx)(v,Object.assign({},t,e))]})}function w(e){var t=(0,f.Z)();return(0,j.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>p,Ey:()=>f,SQ:()=>x});var a=n(67294),r=n(74866),i=n(85162),s=n(74165),l=n(15861),c=n(1841),o=n.n(c),d=n(85893);function u(){return(u=(0,l.Z)((0,s.Z)().mark((function e(t,n,a){var r,i,l,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(t+"-until"))&&i>Date.now())){e.next=5;break}r=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(t,r),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return l=r.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):l.length,l=l.slice(n,a),c=l.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",l.map((function(e){return e.slice(c)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,r=e.end,i=e.language,s=e.fname,l=e.metastring,c=(0,a.useState)("Loading..."),h=c[0],m=c[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),r=a[0],i=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+i+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return u.apply(this,arguments)}(e,n,r);a.then((function(e){return m(e)}))})),(0,d.jsxs)("div",{fname:s,children:[(0,d.jsx)(o(),{language:i,metastring:l+" showLineNumbers",children:h}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var m={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,d.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,d.jsx)(i.Z,{value:e.props.value,label:m[e.props.value],children:e})}))})}function x(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,i=n.end,s=n.fname;if(e.type===f)return f({url:a,start:r,end:i,language:t,fname:s});return e}(e,n)})),1==t.length?(0,d.jsx)(i.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,d.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,d.jsx)(i.Z,{value:t,label:e.props.fname,children:e})}))})}function f(e){var t=e.url,n=e.start,a=e.end,r=e.language,i=e.fname,s=e.metastring;return h({url:t,start:n,end:a,language:r,fname:i,metastring:s})}}}]);