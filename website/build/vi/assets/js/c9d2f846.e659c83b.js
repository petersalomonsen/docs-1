"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5035],{72661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var r=n(85893),a=n(11151),i=n(74866),s=n(85162),l=n(77229);const o={id:"build-relayer",title:"Building a Meta Transaction Relayer",sidebar_label:"Building a Relayer"},c=void 0,u={id:"develop/relayers/build-relayer",title:"Building a Meta Transaction Relayer",description:"Relayers serve to delegate gas fees to a web service, allowing users to transact on NEAR without the need to acquire the token themselves while still retaining the security of signing their own transactions. This guide will lead you through the components necessary to construct a relayer capable of handling meta transactions.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.develop/relayers/welcome.md",sourceDirName:"2.develop/relayers",slug:"/develop/relayers/build-relayer",permalink:"/vi/develop/relayers/build-relayer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/relayers/welcome.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",frontMatter:{id:"build-relayer",title:"Building a Meta Transaction Relayer",sidebar_label:"Building a Relayer"},sidebar:"build",previous:{title:"What is Chain Abstraction?",permalink:"/vi/abstraction/what-is"},next:{title:"FastAuth (Email Login)",permalink:"/vi/tools/fastauth-sdk"}},d={},h=[{value:"How it works",id:"how-it-works",level:2},{value:"Relayer (server)",id:"relayer-server",level:2},{value:"Client",id:"client",level:2},{value:"Gating the relayer",id:"gating-the-relayer",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Relayers serve to delegate gas fees to a web service, allowing users to transact on NEAR without the need to acquire the token themselves while still retaining the security of signing their own transactions. This guide will lead you through the components necessary to construct a relayer capable of handling meta transactions."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["If you're already acquainted with the technology, you can fast track to a ",(0,r.jsx)(t.a,{href:"https://github.com/SurgeCode/near-relay-example",children:"working open source example"})]})}),"\n",(0,r.jsxs)(t.p,{children:["For other languages you can check out ",(0,r.jsx)(t.a,{href:"https://github.com/here-wallet/near-relay",children:"Python"}),", ",(0,r.jsx)(t.a,{href:"https://github.com/near/pagoda-relayer-rs",children:"Rust"})]}),"\n",(0,r.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"relayer-overview-technical",src:n(20899).Z+"",width:"1024",height:"768"})}),"\n",(0,r.jsxs)(t.p,{children:["A basic relayer consists of a web server housing a funded NEAR account. This account receives an encoded signed transaction, which can subsequently be decoded into a ",(0,r.jsx)(t.code,{children:"SignedDelegate"})," format and transmitted on-chain."]}),"\n",(0,r.jsxs)(t.p,{children:["The client can then generate a ",(0,r.jsx)(t.code,{children:"SignedDelegateAction"})," (a signed message that hasn't yet been sent), encode it, and transmit it to this server, where it will be relayed onto the blockchain."]}),"\n",(0,r.jsx)(t.h2,{id:"relayer-server",children:"Relayer (server)"}),"\n",(0,r.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,r.jsxs)(s.Z,{value:"near-api-js",children:[(0,r.jsx)(t.p,{children:"Here's a simple express endpoint deserializes the body, instantiates the relayer account and then sends the transaction."}),(0,r.jsx)(l.Ey,{language:"typescript",url:"https://github.com/SurgeCode/near-relay-example/blob/main/server.ts",start:"16",end:"27"}),(0,r.jsx)(t.p,{children:"You can easily get the account object used to send the transactions from its private key using this snippet"}),(0,r.jsx)(l.Ey,{language:"typescript",url:"https://github.com/SurgeCode/near-relay-example/blob/main/util.ts",start:"5",end:"17"}),(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsx)(t.p,{children:"The code in the example only works from the following versions onwards"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'"near-api-js": "3.0.4"\n"@near-js/transactions": "1.1.2",\n"@near-js/accounts": "1.0.4"\n'})})]})]}),(0,r.jsxs)(s.Z,{value:"@near-relay/server",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"@near-relay"})," simplifies meta transactions making it easier to get started for a beginner."]}),(0,r.jsx)(t.p,{children:"To start, call the relay method inside an endpoint to automatically deserialize the transaction and send it with the account defined in the environment variables."}),(0,r.jsx)(l.Ey,{language:"typescript",url:"https://github.com/SurgeCode/near-relay/blob/main/server/server.ts",start:"8",end:"12"}),(0,r.jsx)(t.p,{children:"If you're interested in relaying account creation as well, it's quite straightforward. Simply create another endpoint and directly call the createAccount method with the accountId and publicKey. These parameters are automatically included in the body when using the corresponding client library."}),(0,r.jsx)(l.Ey,{language:"typescript",url:"https://github.com/SurgeCode/near-relay/blob/main/server/server.ts",start:"14",end:"18"})]})]}),"\n",(0,r.jsx)(t.h2,{id:"client",children:"Client"}),"\n",(0,r.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,r.jsxs)(s.Z,{value:"near-api-js",children:[(0,r.jsx)(t.p,{children:"In this method we are creating an arbitrary smart contract call, instantiating an account and using it to sign but not send the transaction. We can then serialize it and send it to the relayer where it will be delegated via the previously created endpoint."}),(0,r.jsx)(l.Ey,{language:"typescript",url:"https://github.com/SurgeCode/near-relay-example/blob/main/client.ts",start:"10",end:"30"})]}),(0,r.jsxs)(s.Z,{value:"@near-relay/client",children:[(0,r.jsx)(t.p,{children:"As mentioned in the above note in order to be able to relay on the client side it's necessary to have access to signing transactions directly on the client. Luckily leveraging the near biometric library it's possible to do so in a non custodial way."}),(0,r.jsxs)(t.p,{children:["By calling this method and passing in the URL for the account creation endpoint (mentioned in the server section) as well as the ",(0,r.jsx)(t.code,{children:"accoundId"})," everything is handled under the hood to successfully create an account."]}),(0,r.jsx)(l.Ey,{language:"typescript",url:"https://github.com/SurgeCode/near-relay/blob/main/example/src/app/page.tsx",start:"17",end:"23"}),(0,r.jsxs)(t.p,{children:["On the client side, you just need to create an ",(0,r.jsx)(t.code,{children:"Action"})," and pass it into the ",(0,r.jsx)(t.code,{children:"relayTransaction"})," method along with the URL of the relayer endpoint discussed in the server section and the id of the ",(0,r.jsx)(t.code,{children:"receiverId"}),"."]}),(0,r.jsx)(l.Ey,{language:"typescript",url:"https://github.com/SurgeCode/near-relay/blob/main/example/src/app/page.tsx",start:"25",end:"36"})]})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:" Relaying with wallets "}),(0,r.jsx)(t.p,{children:"At the moment, wallet selector standard doesn't support signing transactions without immediately sending them. This functionality is essential for routing transactions to a relayer. Therefore, to smoothly integrate relaying on the client side, it's necessary to be able to sign transactions without relying on wallets. Progress is being made to make this possible in the future."})]}),"\n",(0,r.jsx)(t.h3,{id:"gating-the-relayer",children:"Gating the relayer"}),"\n",(0,r.jsxs)(t.p,{children:["In most production applications it's expected that you want to be able to gate the relayer to only be used in certain cases. By taking apart the ",(0,r.jsx)(t.code,{children:"delegateAction"})," object inside the ",(0,r.jsx)(t.code,{children:"SignedDelegate"}),"on the server this can be done simply."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export declare class DelegateAction extends Assignable {\n    senderId: string;\n    receiverId: string;\n    actions: Array<Action>;\n    nonce: BN;\n    maxBlockHeight: BN;\n    publicKey: PublicKey;\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"You can, for example, gate by some particular user or contract:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"  const serializedTx: Buffer = req.body;\n  const deserializedTx: SignedDelegate = deserialize(SCHEMA.SignedDelegate, Buffer.from(serializedTx)) as SignedDelegate;\n  const relayerAccount: Account = await getAccount(NETWORK_ID, RELAYER_ID, RELAYER_PRIVATE_KEY);\n  const delegateAction = deserializedTx?.delegateAction\n\n  if(delegateAction.senderId == 'someUserId' || delegateAction.receiverId == 'someContractId' ){\n       const receipt = await relayerAccount.signAndSendTransaction({\n       actions: [actionCreators.signedDelegate(deserializedTx)],\n       receiverId: deserializedTx.delegateAction.senderId\n  });\n  }\n"})}),"\n",(0,r.jsx)(t.p,{children:"Other examples could be looking into the actions and seeing if there is deposit or gas and limiting them, gating by particular smart contract methods or even args."}),"\n",(0,r.jsx)(t.p,{children:"You can decode the args using:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'JSON.parse(Buffer.from(args_base64 || "", "base64").toString())\n'})})]})}function g(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),i=n(12466),s=n(16550),l=n(20469),o=n(91980),c=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,s.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function m(e){var t,n,a,i,s=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,m=h(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:m})})),y=b[0],f=b[1],v=g({queryString:c,groupId:d}),x=v[0],j=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),A=w[0],k=w[1],I=function(){var e=null!=x?x:A;return p({value:e,tabValues:m})?e:null}();return(0,l.Z)((function(){I&&f(I)}),[I]),{selectedValue:y,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);f(e),j(e),k(e)}),[j,k,m]),tabValues:m}}var b=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function v(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,l=e.tabValues,o=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(c(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;n=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var i,s=o.indexOf(e.currentTarget)-1;n=null!=(i=o[s])?i:o[o.length-1]}null==(t=n)||t.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},i,{className:(0,a.Z)("tabs__item",y.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function x(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=i.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function j(e){var t=m(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",y.tabList),children:[(0,f.jsx)(v,Object.assign({},e,t)),(0,f.jsx)(x,Object.assign({},e,t))]})}function w(e){var t=(0,b.Z)();return(0,f.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>u,O2:()=>o,SQ:()=>c});n(67294);var r=n(74866),a=n(85162),i=n(95665),s=n.n(i),l=n(85893);function o(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,l.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,l.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,i=n.end,s=n.fname;if(e.type===u)return u({url:r,start:a,end:i,language:t,fname:s});return e}(e,n)})),1==t.length?(0,l.jsx)(a.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,l.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,l.jsx)(a.Z,{value:t,label:e.props.fname,children:e})}))})}function u(e){var t=e.url,n=e.start,r=e.end,a=e.language,i=e.fname,o=t+"#";return n&&r&&(o+="L"+n+"-L"+r+"#"),(0,l.jsx)(s(),{language:a,fname:i,children:o})}},20899:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/relayer-overview-technical-33422610bd3401f2e8e8241e0f81f74f.png"}}]);