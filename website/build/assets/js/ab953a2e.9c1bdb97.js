"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5521],{12837:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var r=t(85893),a=t(11151),s=t(74866),c=t(85162),o=t(71183);const i={id:"count-near",title:"Count on NEAR"},l=void 0,u={id:"tutorials/examples/count-near",title:"Count on NEAR",description:"Our counter example is a friendly decentralized app that stores a number and exposes methods to increment,",source:"@site/../docs/3.tutorials/examples/count-near.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/count-near",permalink:"/tutorials/examples/count-near",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/count-near.md",tags:[],version:"current",lastUpdatedBy:"Guille",lastUpdatedAt:1715263781e3,frontMatter:{id:"count-near",title:"Count on NEAR"},sidebar:"tutorials",previous:{title:"Home",permalink:"/tutorials/welcome"},next:{title:"Guest Book",permalink:"/tutorials/examples/guest-book"}},d={},h=[{value:"Obtaining the Counter Example",id:"obtaining-the-counter-example",level:2},{value:"Structure of the Example",id:"structure-of-the-example",level:2},{value:"Frontend",id:"frontend",level:2},{value:"Running the Frontend",id:"running-the-frontend",level:3},{value:"Understanding the Frontend",id:"understanding-the-frontend",level:3},{value:"Smart Contract",id:"smart-contract",level:2},{value:"Testing the Contract",id:"testing-the-contract",level:3},{value:"Deploying the Contract to the NEAR network",id:"deploying-the-contract-to-the-near-network",level:3},{value:"CLI: Interacting with the Contract",id:"cli-interacting-with-the-contract",level:3},{value:"Moving Forward",id:"moving-forward",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Our counter example is a friendly decentralized app that stores a number and exposes methods to ",(0,r.jsx)(n.code,{children:"increment"}),",\n",(0,r.jsx)(n.code,{children:"decrement"}),", and ",(0,r.jsx)(n.code,{children:"reset"})," it."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(82193).Z+"",width:"935",height:"248"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"obtaining-the-counter-example",children:"Obtaining the Counter Example"}),"\n",(0,r.jsx)(n.p,{children:"You have two options to start the Counter Example."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["You can use the app through ",(0,r.jsx)(n.code,{children:"GitHub Codespaces"}),", which will open a web-based interactive environment."]}),"\n",(0,r.jsx)(n.li,{children:"Clone the repository locally and use it from your computer."}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Codespaces"}),(0,r.jsx)(n.th,{children:"Clone locally"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://codespaces.new/near-examples/counters",children:(0,r.jsx)(n.img,{src:"https://github.com/codespaces/badge.svg",alt:"Open in GitHub Codespaces"})})}),(0,r.jsxs)(n.td,{children:["\ud83c\udf10 ",(0,r.jsx)(n.code,{children:"https://github.com/near-examples/counters"})]})]})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"structure-of-the-example",children:"Structure of the Example"}),"\n",(0,r.jsx)(n.p,{children:"The example is divided in two main components:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"The smart contract, available in two flavors: Rust and JavaScript"}),"\n",(0,r.jsx)(n.li,{children:"The frontend, that interacts with an already deployed contract."}),"\n"]}),"\n",(0,r.jsxs)(s.Z,{groupId:"code-tabs",children:[(0,r.jsx)(c.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\u250c\u2500\u2500 sandbox-ts # sandbox testing\n\u2502    \u251c\u2500\u2500 src\n\u2502    \u2502    \u2514\u2500\u2500 main.ava.ts\n\u2502    \u251c\u2500\u2500 ava.config.cjs\n\u2502    \u2514\u2500\u2500 package.json\n\u251c\u2500\u2500 src # contract's code\n\u2502    \u2514\u2500\u2500 contract.ts\n\u251c\u2500\u2500 package.json # package manager\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 tsconfig.json # test script\n"})})}),(0,r.jsx)(c.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\u250c\u2500\u2500 src # contract's code\n\u2502    \u2514\u2500\u2500 lib.rs\n\u251c\u2500\u2500 tests # sandbox test\n\u2502    \u2514\u2500\u2500 test_basics.rs\n\u251c\u2500\u2500 Cargo.toml # package manager\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 rust-toolchain.toml\n"})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"frontend",children:"Frontend"}),"\n",(0,r.jsx)(n.p,{children:"The counter example includes a frontend interface designed to interact seamlessly with an existing smart contract that has been deployed. This interface allows users to increase or decrease the counter as needed."}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"running-the-frontend",children:"Running the Frontend"}),"\n",(0,r.jsx)(n.p,{children:"To start the frontend you will need to install the dependencies and start the server."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd frontend\nyarn\nyarn start\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Go ahead and login with your NEAR account. If you don't have one, you will be able to create one in the moment. Once logged in, use the ",(0,r.jsx)(n.code,{children:"+"})," and ",(0,r.jsx)(n.code,{children:"-"})," buttons to increase and decrease the counter. Then, use the Gameboy buttons to reset it and make the counter blink an eye!"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"img",src:t(12770).Z+"",width:"935",height:"526"}),"\n",(0,r.jsx)(n.em,{children:"Frontend of the Counter"})]}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"understanding-the-frontend",children:"Understanding the Frontend"}),"\n",(0,r.jsxs)(n.p,{children:["The frontend is composed by a single HTML file (",(0,r.jsx)(n.code,{children:"/index.html"}),"). This file defines the components displayed in the screen."]}),"\n",(0,r.jsxs)(n.p,{children:["The website's logic lives in ",(0,r.jsx)(n.code,{children:"/index.js"}),", which communicates with the contract through ",(0,r.jsx)(n.code,{children:"/near-wallet.js"}),". You will notice in ",(0,r.jsx)(n.code,{children:"/index.js"})," the following code:"]}),"\n",(0,r.jsx)(o.O2,{children:(0,r.jsx)(o.SQ,{value:"js",language:"ts",children:(0,r.jsx)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/counters/blob/main/frontend/index.js",start:"10",end:"21"})})}),"\n",(0,r.jsxs)(n.p,{children:["It indicates our app, when it starts, to check if the user is already logged in and execute either ",(0,r.jsx)(n.code,{children:"signedInFlow()"})," or ",(0,r.jsx)(n.code,{children:"signedOutFlow()"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"smart-contract",children:"Smart Contract"}),"\n",(0,r.jsxs)(n.p,{children:["The contract presents 4 methods: ",(0,r.jsx)(n.code,{children:"get_num"}),", ",(0,r.jsx)(n.code,{children:"increment"}),", ",(0,r.jsx)(n.code,{children:"decrement"}),", and ",(0,r.jsx)(n.code,{children:"reset"}),". The method ",(0,r.jsx)(n.code,{children:"get_num"})," retrieves the current value, and the rest modify it."]}),"\n",(0,r.jsxs)(o.O2,{children:[(0,r.jsx)(o.SQ,{value:"js",language:"ts",children:(0,r.jsx)(o.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/counters/blob/main/contract-ts/src/contract.ts",start:"3",end:"29"})}),(0,r.jsx)(o.SQ,{value:"rust",language:"rust",children:(0,r.jsx)(o.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/counters/blob/main/contract-rs/src/lib.rs",start:"5",end:"39"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"testing-the-contract",children:"Testing the Contract"}),"\n",(0,r.jsx)(n.p,{children:"The contract readily includes a set of unit and sandbox testing to validate its functionality. To execute the tests, run the following commands:"}),"\n",(0,r.jsxs)(s.Z,{groupId:"code-tabs",children:[(0,r.jsx)(c.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd contract-ts\nyarn\nyarn test\n"})})}),(0,r.jsx)(c.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd contract-rs\ncargo test\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"integration tests"})," use a sandbox to create NEAR users and simulate interactions with the contract."]})}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"deploying-the-contract-to-the-near-network",children:"Deploying the Contract to the NEAR network"}),"\n",(0,r.jsx)(n.p,{children:"In order to deploy the contract you will need to create a NEAR account."}),"\n",(0,r.jsxs)(s.Z,{groupId:"code-tabs",children:[(0,r.jsx)(c.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Optional - create an account\nnear create-account <accountId> --useFaucet\n\n# Deploy the contract\ncd contract-ts\nyarn build\nnear deploy <accountId> ./build/counter.wasm\n"})})}),(0,r.jsx)(c.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Optional - create an account\nnear create-account <accountId> --useFaucet\n\n# Deploy the contract\ncd contract-rs\ncargo build\nnear deploy <accountId> ./target/wasm32-unknown-unknown/release/counter.wasm\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["To interact with your contract from the ",(0,r.jsx)(n.a,{href:"#frontend",children:"frontend"}),", simply replace the variable ",(0,r.jsx)(n.code,{children:"CONTRACT_NAME"})," in the ",(0,r.jsx)(n.code,{children:"index.js"})," file."]})}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"cli-interacting-with-the-contract",children:"CLI: Interacting with the Contract"}),"\n",(0,r.jsx)(n.p,{children:"To interact with the contract through the console, you can use the following commands"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Get the current number of the counter\nnear view counter.near-examples.testnet get_num\n\n# Increment the counter \n# Replace <accountId> with your account ID\nnear call counter.near-examples.testnet increment --accountId <accountId>\n\n# Decrement the counter\n# Replace <accountId> with your account ID\nnear call counter.near-examples.testnet decrement --accountId <accountId>\n\n# Reset the counter to zero \n# Replace <accountId> with your account ID\nnear call counter.near-examples.testnet reset --accountId <accountId>\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If you're using your own account, replace ",(0,r.jsx)(n.code,{children:"counter.near-examples.testnet"})," with your ",(0,r.jsx)(n.code,{children:"accountId"}),"."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"moving-forward",children:"Moving Forward"}),"\n",(0,r.jsxs)(n.p,{children:["A nice way to learn is by trying to expand the contract. Modify it by adding a parameter to ",(0,r.jsx)(n.code,{children:"increment"})," and ",(0,r.jsx)(n.code,{children:"decrement"}),",\nso the user can choose by how much to change the value. For this, you will need to use knowledge from the ",(0,r.jsx)(n.a,{href:"/build/smart-contracts/anatomy/",children:"anatomy"}),"\nand ",(0,r.jsx)(n.a,{href:"/build/smart-contracts/anatomy/storage",children:"storage"})," sections."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(n.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["near-cli: ",(0,r.jsx)(n.code,{children:"4.0.13"})]}),"\n",(0,r.jsxs)(n.li,{children:["node: ",(0,r.jsx)(n.code,{children:"18.19.1"})]}),"\n",(0,r.jsxs)(n.li,{children:["rustc: ",(0,r.jsx)(n.code,{children:"1.77.0"})]}),"\n"]})]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>c});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function c(e){var n=e.children,t=e.hidden,c=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,c),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(36905),s=t(12466),c=t(16550),o=t(20469),i=t(91980),l=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,s=(0,c.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function x(e){var n,t,a,s,c=e.defaultValue,i=e.queryString,l=void 0!==i&&i,d=e.groupId,x=h(e),g=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:c,tabValues:x})})),f=g[0],j=g[1],b=m({queryString:l,groupId:d}),v=b[0],y=b[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),a=t[0],s=t[1],[a,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),I=w[0],k=w[1],T=function(){var e=null!=v?v:I;return p({value:e,tabValues:x})?e:null}();return(0,o.Z)((function(){T&&j(T)}),[T]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);j(e),y(e),k(e)}),[y,k,x]),tabValues:x}}var g=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function b(e){var n=e.className,t=e.block,r=e.selectedValue,c=e.selectValue,o=e.tabValues,i=[],l=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(l(n),c(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=i.indexOf(e.currentTarget)+1;t=null!=(r=i[a])?r:i[0];break;case"ArrowLeft":var s,c=i.indexOf(e.currentTarget)-1;t=null!=(s=i[c])?s:i[i.length-1]}null==(n=t)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return i.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var c=s.find((function(e){return e.props.value===a}));return c?(0,r.cloneElement)(c,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=x(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(b,Object.assign({},n,e)),(0,j.jsx)(v,Object.assign({},n,e))]})}function w(e){var n=(0,g.Z)();return(0,j.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>m,Ey:()=>g,SQ:()=>x});var r=t(67294),a=t(74866),s=t(85162),c=t(74165),o=t(15861),i=t(1841),l=t.n(i),u=t(85893);function d(){return(d=(0,o.Z)((0,c.Z)().mark((function e(n,t,r){var a,s,o,i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(n+"-until"))&&s>Date.now())){e.next=5;break}a=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(n,a),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=a.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):o.length,o=o.slice(t,r),i=o.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(i)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var n=e.url,t=e.start,a=e.end,s=e.language,c=e.fname,o=e.metastring,i=(0,r.useState)("Loading..."),h=i[0],p=i[1];return(0,r.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],r=(n[1],new URL(t).pathname.split("/").slice(1)),a=r[0],s=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+s+"/"+r[3]+"/"+r.slice(4).join("/")}(n),r=function(e,n,t){return d.apply(this,arguments)}(e,t,a);r.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:c,children:[(0,u.jsx)(l(),{language:s,metastring:o+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,u.jsx)(s.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function x(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,s=t.end,c=t.fname;if(e.type===g)return g({url:r,start:a,end:s,language:n,fname:c});return e}(e,t)})),1==n.length?(0,u.jsx)(s.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,u.jsx)(s.Z,{value:n,label:e.props.fname,children:e})}))})}function g(e){var n=e.url,t=e.start,r=e.end,a=e.language,s=e.fname,c=e.metastring;return h({url:n,start:t,end:r,language:a,fname:s,metastring:c})}},82193:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/count-on-near-banner-2df2978ef988be400aafd5e0f99878be.png"},12770:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/count-on-near-4c3bca89fb498ba9e02547eeb320d02a.png"}}]);