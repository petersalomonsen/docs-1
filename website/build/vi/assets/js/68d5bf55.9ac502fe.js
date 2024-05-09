"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3605],{70352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var r=n(85893),a=n(11151),s=n(71183);const c=n.p+"assets/images/create-mainnet-account-d624261d742f39effc6ff8e351d22b75.png",o=n.p+"assets/images/create-testnet-wallet-account-6bcfc4b15c7ff93126ae723be2ab3701.png",l={sidebar_position:4,sidebar_label:"Linkdrop contract",title:"Introducing the linkdrop contract we can use"},i="The linkdrop contract",u={id:"tutorials/crosswords/intermediate/linkdrop",title:"Introducing the linkdrop contract we can use",description:"We're going to take a small detour to talk about the linkdrop smart contract.  It's best that we first understand this contract and its purpose, then discuss calling a method on this contract.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/crosswords/03-intermediate/03-linkdrop.md",sourceDirName:"3.tutorials/crosswords/03-intermediate",slug:"/tutorials/crosswords/intermediate/linkdrop",permalink:"/vi/tutorials/crosswords/intermediate/linkdrop",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/03-intermediate/03-linkdrop.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1705914809e3,sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Linkdrop contract",title:"Introducing the linkdrop contract we can use"},sidebar:"tutorials",previous:{title:"Seed phrase logic",permalink:"/vi/tutorials/crosswords/intermediate/use-seed-phrase"},next:{title:"Cross-contract calls, etc.",permalink:"/vi/tutorials/crosswords/intermediate/cross-contract-calls"}},d={},h=[{value:"Testnet",id:"testnet",level:2},{value:"Mainnet",id:"mainnet",level:2},{value:"A simple callback",id:"a-simple-callback",level:2},{value:"The <code>create_account</code> method",id:"the-create_account-method",level:3},{value:"The callback",id:"the-callback",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"the-linkdrop-contract",children:"The linkdrop contract"}),"\n",(0,r.jsx)(t.p,{children:"We're going to take a small detour to talk about the linkdrop smart contract.  It's best that we first understand this contract and its purpose, then discuss calling a method on this contract."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/near/near-linkdrop",children:"The linkdrop contract"})," is deployed to the accounts ",(0,r.jsx)(t.code,{children:"testnet"})," and ",(0,r.jsx)(t.code,{children:"near"}),", which are known as the top-level accounts of the testnet and mainnet network, respectively. (Anyone can create a linkdrop-style contract elsewhere, but the one shown here is the main one that others are patterned off of.)"]}),"\n",(0,r.jsx)(t.h2,{id:"testnet",children:"Testnet"}),"\n",(0,r.jsx)(t.p,{children:"There\u2019s nothing special about testnet accounts; there is no real-world cost to you as a developer when creating testnet accounts, so feel free to create or delete at your convenience."}),"\n",(0,r.jsx)(t.p,{children:"When a user signs up for a testnet account on NEAR Wallet, they'll see this:"}),"\n",(0,r.jsx)("img",{src:o,width:"400"}),"\n",(0,r.jsx)(t.p,{children:"Let's discuss how this testnet account gets created."}),"\n",(0,r.jsxs)(t.p,{children:["Notice the new account will end in ",(0,r.jsx)(t.code,{children:".testnet"}),". This is because the account ",(0,r.jsx)(t.code,{children:"testnet"})," will create a subaccount (like we learned about ",(0,r.jsx)(t.a,{href:"/vi/tutorials/crosswords/basics/add-functions-call#create-a-subaccount",children:"earlier in this tutorial"}),") called ",(0,r.jsx)(t.code,{children:"vacant-name.testnet"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"There are two ways to create this subaccount:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Use a full-access key for the account ",(0,r.jsx)(t.code,{children:"testnet"})," to sign a transaction with the ",(0,r.jsx)(t.code,{children:"CreateAccount"})," Action."]}),"\n",(0,r.jsxs)(t.li,{children:["In a smart contract deployed to the ",(0,r.jsx)(t.code,{children:"testnet"})," account, call the ",(0,r.jsx)(t.code,{children:"CreateAccount"})," Action, which is an async method that returns a Promise. (More info about writing a ",(0,r.jsxs)(t.a,{href:"/sdk/rust/promises/create-account",children:[(0,r.jsx)(t.code,{children:"CreateAccount"})," Promise"]}),".)"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["(In the example below that uses NEAR CLI to create a new account, it's calling ",(0,r.jsx)(t.code,{children:"CreateAccount"}),' on the linkdrop contract that is deployed to the top level "near" account on mainnet.)']}),"\n",(0,r.jsx)(t.h2,{id:"mainnet",children:"Mainnet"}),"\n",(0,r.jsxs)(t.p,{children:["On mainnet, the account ",(0,r.jsx)(t.code,{children:"near"})," also has the linkdrop contract deployed to it."]}),"\n",(0,r.jsx)(t.p,{children:"Using NEAR CLI, a person can create a mainnet account by calling the linkdrop contract, like shown below:"}),"\n",(0,r.jsx)("img",{src:c}),"\n",(0,r.jsxs)(t.p,{children:["The above command calls the ",(0,r.jsx)(t.code,{children:"create_account"})," method on the account ",(0,r.jsx)(t.code,{children:"near"}),", and would create ",(0,r.jsx)(t.code,{children:"aloha.near"})," ",(0,r.jsx)(t.strong,{children:"if it's available"}),", funding it with 15 \u24c3."]}),"\n",(0,r.jsxs)(t.p,{children:["We'll want to write a smart contract that calls that same method. However, things get interesting because it's possible ",(0,r.jsx)(t.code,{children:"aloha.near"})," is already taken, so we'll need to learn how to handle that."]}),"\n",(0,r.jsx)(t.h2,{id:"a-simple-callback",children:"A simple callback"}),"\n",(0,r.jsxs)(t.h3,{id:"the-create_account-method",children:["The ",(0,r.jsx)(t.code,{children:"create_account"})," method"]}),"\n",(0,r.jsxs)(t.p,{children:["Here, we'll show the implementation of the ",(0,r.jsx)(t.code,{children:"create_account"})," method. Note the ",(0,r.jsx)(t.code,{children:"#[payable]"})," macro, which allows this function to accept an attached deposit. (Remember in the CLI command we were attaching 15 \u24c3.)"]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"125",end:"149",url:"https://github.com/near/near-linkdrop/blob/ba94a9c7292d3b48a0a8ba380fb0e7ff6b24efc6/src/lib.rs"}),"\n",(0,r.jsx)(t.p,{children:"The most important part of the snippet above is around the middle where there's:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rs",children:"Promise::new(...)\n    ...\n    .then(\n        Self::ext(env::current_account_id())\n            .on_account_created(...)\n    )\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This translates to, \"we're going to attempt to perform an Action, and when we're done, please call myself at the method ",(0,r.jsx)(t.code,{children:"on_account_created"}),' so we can see how that went."']}),"\n",(0,r.jsxs)(t.admonition,{title:"This doesn't work",type:"caution",children:[(0,r.jsx)(t.p,{children:"Not infrequently, developers will attempt to do this in a smart contract:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'let creation_result = Promise::new("aloha.mike.near")\n  .create_account();\n\n// Check creation_result variable (can\'t do it!)\nif creation_result {...}\n\n'})}),(0,r.jsx)(t.p,{children:"In other programming languages promises might work like this, but we must use callbacks instead. :::"}),(0,r.jsx)(t.h3,{id:"the-callback",children:"The callback"}),(0,r.jsx)(t.p,{children:"Now let's look at the callback:"}),(0,r.jsx)(s.Ey,{language:"rust",start:"151",end:"164",url:"https://github.com/near/near-linkdrop/blob/ba94a9c7292d3b48a0a8ba380fb0e7ff6b24efc6/src/lib.rs"}),(0,r.jsxs)(t.p,{children:["This calls the private helper method ",(0,r.jsx)(t.code,{children:"is_promise_success"}),", which basically checks to see that there was only one promise result, because we only attempted one Promise:"]}),(0,r.jsx)(s.Ey,{language:"rust",start:"32",end:"42",url:"https://github.com/near/near-linkdrop/blob/ba94a9c7292d3b48a0a8ba380fb0e7ff6b24efc6/src/lib.rs"}),(0,r.jsxs)(t.p,{children:["Note that the callback returns a boolean. This means when we modify our crossword puzzle to call the linkdrop contract on ",(0,r.jsx)(t.code,{children:"testnet"}),", we'll be able to determine if the account creation succeeded or failed."]}),(0,r.jsx)(t.p,{children:"V\xe0 ch\u1ec9 v\u1eady th\xf4i! Now we've seen a method and a callback in action for a simple contract."}),(0,r.jsxs)(t.admonition,{title:"This is important Understanding cross-contract calls and callbacks is quite important in smart contract development.",type:"tip",children:[(0,r.jsx)(t.p,{children:"Since NEAR's transactions are asynchronous, the use of callbacks may be a new paradigm shift for smart contract developers from other ecosystems."}),(0,r.jsx)(t.p,{children:"Feel free to dig into the linkdrop contract and play with the ideas presented in this section."}),(0,r.jsx)(t.p,{children:"There are two additional examples that are helpful to look at:"}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/master/examples/cross-contract-calls/high-level/src/lib.rs",children:"High-level cross-contract calls"})," \u2014 this is similar what we've seen in the linkdrop contract."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/master/examples/cross-contract-calls/low-level/src/lib.rs",children:"Low-level cross-contract calls"})," \u2014 a different approach where you don't use the traits we mentioned. :::"]}),"\n"]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.p,{children:"Next we'll modify the crossword puzzle contract to check for the signer's public key, which is how we now determine if they solved the puzzle correctly."})]})]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function c(e){var t=e.children,n=e.hidden,c=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,c),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),a=n(36905),s=n(12466),c=n(16550),o=n(20469),l=n(91980),i=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,c.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(s.location.search);t.set(o,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[o,s])]}function f(e){var t,n,a,s,c=e.defaultValue,l=e.queryString,i=void 0!==l&&l,d=e.groupId,f=h(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:c,tabValues:f})})),g=b[0],v=b[1],x=m({queryString:i,groupId:d}),w=x[0],j=x[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),y=k[0],T=k[1],I=function(){var e=null!=w?w:y;return p({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){I&&v(I)}),[I]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),j(e),T(e)}),[j,T,f]),tabValues:f}}var b=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function x(e){var t=e.className,n=e.block,r=e.selectedValue,c=e.selectValue,o=e.tabValues,l=[],i=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(i(t),c(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;n=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var s,c=l.indexOf(e.currentTarget)-1;n=null!=(s=l[c])?s:l[l.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function w(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var c=s.find((function(e){return e.props.value===a}));return c?(0,r.cloneElement)(c,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function j(e){var t=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,Object.assign({},t,e)),(0,v.jsx)(w,Object.assign({},t,e))]})}function k(e){var t=(0,b.Z)();return(0,v.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>m,Ey:()=>b,SQ:()=>f});var r=n(67294),a=n(74866),s=n(85162),c=n(74165),o=n(15861),l=n(1841),i=n.n(l),u=n(85893);function d(){return(d=(0,o.Z)((0,c.Z)().mark((function e(t,n,r){var a,s,o,l;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(t+"-until"))&&s>Date.now())){e.next=5;break}a=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(t,a),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=a.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):o.length,o=o.slice(n,r),l=o.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,a=e.end,s=e.language,c=e.fname,o=e.metastring,l=(0,r.useState)("Loading..."),h=l[0],p=l[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),a=r[0],s=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+s+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return d.apply(this,arguments)}(e,n,a);r.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:c,children:[(0,u.jsx)(i(),{language:s,metastring:o+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function f(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,s=n.end,c=n.fname;if(e.type===b)return b({url:r,start:a,end:s,language:t,fname:c});return e}(e,n)})),1==t.length?(0,u.jsx)(s.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:t,label:e.props.fname,children:e})}))})}function b(e){var t=e.url,n=e.start,r=e.end,a=e.language,s=e.fname,c=e.metastring;return h({url:t,start:n,end:r,language:a,fname:s,metastring:c})}}}]);