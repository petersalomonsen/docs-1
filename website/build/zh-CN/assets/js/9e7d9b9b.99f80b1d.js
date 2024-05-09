"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6129],{18628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=t(85893),a=t(11151),s=t(71183);t(74866),t(85162);const l={id:"integrate-contracts",title:"Integrating Contracts"},i=void 0,o={id:"build/web3-apps/integrate-contracts",title:"Integrating Contracts",description:"To integrate NEAR to your frontend, you will leverage two tools:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/4.web3-apps/integrate-contracts.md",sourceDirName:"2.build/4.web3-apps",slug:"/build/web3-apps/integrate-contracts",permalink:"/zh-CN/build/web3-apps/integrate-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/4.web3-apps/integrate-contracts.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1713279052e3,frontMatter:{id:"integrate-contracts",title:"Integrating Contracts"},sidebar:"build",previous:{title:"\u2b50 Quickstart a WebApp",permalink:"/zh-CN/build/web3-apps/quickstart"},next:{title:"Integrating Components",permalink:"/zh-CN/build/web3-apps/integrate-components"}},c={},d=[{value:"Adding NEAR API JS and Wallet Selector",id:"adding-near-api-js-and-wallet-selector",level:2},{value:"Create a Wallet Object",id:"create-a-wallet-object",level:2},{value:"Wallet Start Up",id:"wallet-start-up",level:2},{value:"Calling View Methods",id:"calling-view-methods",level:2},{value:"User Sign-In / Sign-Out",id:"user-sign-in--sign-out",level:2},{value:"Function Call Key",id:"function-call-key",level:3},{value:"Calling Change Methods",id:"calling-change-methods",level:2},{value:"Wallet Redirection",id:"wallet-redirection",level:3},{value:"Handling Data Types",id:"handling-data-types",level:2},{value:"Time",id:"time",level:5},{value:"Money",id:"money",level:5},{value:"Leveraging NEAR API JS",id:"leveraging-near-api-js",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h5:"h5",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"To integrate NEAR to your frontend, you will leverage two tools:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Wallet Selector"}),": Enables the user to select their preferred NEAR wallet in your dApp."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NEAR API JS"}),": A suit of tools to interact with the NEAR RPC."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Using those tools you will implement the following flow:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Setup"})," a wallet selector."]}),"\n",(0,r.jsxs)(n.li,{children:["Load the wallet selector ",(0,r.jsx)(n.strong,{children:"on start-up"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Ask the user to ",(0,r.jsx)(n.strong,{children:"sign-in"})," using a NEAR wallet."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Call methods"})," in the contract."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"adding-near-api-js-and-wallet-selector",children:"Adding NEAR API JS and Wallet Selector"}),"\n",(0,r.jsxs)(n.p,{children:["In order to use ",(0,r.jsx)(n.code,{children:"near-api-js"})," and the ",(0,r.jsx)(n.code,{children:"wallet-selector"})," you will need to first add them to your project."]}),"\n",(0,r.jsxs)(n.p,{children:["The wallet selector has multiple wallet packages to select from, ",(0,r.jsx)(n.a,{href:"https://github.com/near/wallet-selector#installation-and-usage",children:"see in their website"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install \\\n  near-api-js \\\n  @near-wallet-selector/core \\\n  @near-wallet-selector/my-near-wallet \\\n  @near-wallet-selector/ledger \\\n  @near-wallet-selector/modal-ui\n"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsxs)("summary",{children:["Using ",(0,r.jsx)(n.code,{children:"near-api-js"})," in plain HTML"]}),(0,r.jsxs)(n.p,{children:["You can add ",(0,r.jsx)(n.code,{children:"near-api-js"})," as a script tag in your html."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'<script src="https://cdn.jsdelivr.net/npm/near-api-js@0.44.2/dist/near-api-js.min.js" integrity="sha256-W5o4c5DRZZXMKjuL41jsaoBpE/UHMkrGvIxN9HcjNSY=" crossorigin="anonymous"><\/script>\n'})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"create-a-wallet-object",children:"Create a Wallet Object"}),"\n",(0,r.jsxs)(n.p,{children:["In our examples we implement a ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:(0,r.jsx)(n.code,{children:"./near-wallet.js"})})," module, where we abstracted the ",(0,r.jsx)(n.code,{children:"wallet selector"})," into a ",(0,r.jsx)(n.code,{children:"Wallet"})," object to simplify using it."]}),"\n",(0,r.jsxs)(n.p,{children:["To create a wallet, simply import the ",(0,r.jsx)(n.code,{children:"Wallet"})," object from the module and initialize it. This ",(0,r.jsx)(n.code,{children:"wallet"})," will later allows the user to call any contract in NEAR."]}),"\n",(0,r.jsx)(s.O2,{children:(0,r.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,r.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/index.js",start:"2",end:"8"})})}),"\n",(0,r.jsxs)(n.p,{children:["When instantiating the wallet you can choose if you want to ",(0,r.jsxs)(n.strong,{children:["create a ",(0,r.jsx)(n.a,{href:"/zh-CN/concepts/protocol/access-keys#function-call-keys-function-call-keys",children:"FunctionCall Key"})]}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you create the key, then your dApp will be able to ",(0,r.jsx)(n.strong,{children:"automatically sign non-payable transactions"})," for the user on the specified contract."]}),"\n",(0,r.jsxs)(t,{markdown:"1",children:[(0,r.jsx)("summary",{children:" Setting customs RPC endpoints "}),(0,r.jsxs)(n.p,{children:["If you want to use a user-defined RPC endpoint with the Wallet Selector, you need to setup a ",(0,r.jsx)(n.a,{href:"https://github.com/near/wallet-selector/tree/main/packages/core#options",children:"network options"})," object with the custom URLs.\nFor example:"]}),(0,r.jsx)(s.O2,{children:(0,r.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'const CONTRACT_ADDRESS = process.env.CONTRACT_NAME;\n\nconst my_network = {\n    networkId: "my-custom-network",\n    nodeUrl: "https://rpc.custom-rpc.com",\n    helperUrl: "https://helper.custom-helper.com",\n    explorerUrl: "https://custom-explorer.com",\n    indexerUrl: "https://api.custom-indexer.com",\n  };\n\nconst wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS, network: my_network });\n'})})})}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["You can find the entire Wallet Selector ",(0,r.jsx)(n.a,{href:"https://github.com/near/wallet-selector/blob/main/packages/core/docs/api/selector.md",children:"API reference here"}),"."]})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"wallet-start-up",children:"Wallet Start Up"}),"\n",(0,r.jsx)(n.p,{children:"In our examples we always implement a simple flow where we start by checking if the user logged-in and act on it. We recommend you to do the same."}),"\n",(0,r.jsxs)(n.p,{children:["For this, override the ",(0,r.jsx)(n.code,{children:"window.onload"})," method with a function that calls the ",(0,r.jsx)(n.code,{children:"wallet.startUp()"})," method. Such method returns if the user is already signed-in:"]}),"\n",(0,r.jsx)(s.O2,{children:(0,r.jsxs)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:[(0,r.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/index.js",start:"10",end:"21"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'<Github fname="near-wallet.js"\n        url="https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/near-wallet.js"\n        start="36" end="52" />\n'})})]})}),"\n",(0,r.jsxs)(n.p,{children:["Under the hood (check the ",(0,r.jsx)(n.code,{children:"near-wallet"})," tab) you can see that we are actually setting up the wallet selector, and asking it if the user logged-in already."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"calling-view-methods",children:"Calling View Methods"}),"\n",(0,r.jsx)(n.p,{children:"Once the wallet is up we can start calling view methods, i.e. the methods that perform read-only operations."}),"\n",(0,r.jsxs)(n.p,{children:["Because of their read-only nature, view methods are ",(0,r.jsx)(n.strong,{children:"free"})," to call, and do ",(0,r.jsx)(n.strong,{children:"not require"})," the user to be ",(0,r.jsx)(n.strong,{children:"logged in"}),"."]}),"\n",(0,r.jsx)(s.O2,{children:(0,r.jsxs)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:[(0,r.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/index.js",start:"46",end:"46"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'<Github fname="near-wallet.js"\n        url="https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/near-wallet.js"\n        start="68" end="81" />\n'})})]})}),"\n",(0,r.jsxs)(n.p,{children:["The snippet above shows how we call view methods in our examples. Switch to the ",(0,r.jsx)(n.code,{children:"near-wallet"})," tab to see under the hood: we are actually making a ",(0,r.jsx)(n.strong,{children:"direct call to the RPC"})," using ",(0,r.jsx)(n.code,{children:"near-api-js"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"View methods have by default 200 TGAS for execution"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"user-sign-in--sign-out",children:"User Sign-In / Sign-Out"}),"\n",(0,r.jsx)(n.p,{children:"In order to interact with non-view methods it is necessary for the user to first sign in using a NEAR wallet."}),"\n",(0,r.jsxs)(n.p,{children:["Signing in is as simple as requesting the ",(0,r.jsx)(n.code,{children:"wallet"})," object to ",(0,r.jsx)(n.code,{children:"signIn"}),", the same simplicity applies to signing-out."]}),"\n",(0,r.jsx)(s.O2,{children:(0,r.jsxs)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,r.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/index.js",start:"25",end:"26"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'<Github fname="near-wallet.js"\n        url="https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/near-wallet.js"\n        start="54" end="66" />\n'})})]})}),"\n",(0,r.jsx)(n.p,{children:"When the user clicks in the button, it will be asked to select a wallet and use it to login."}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"function-call-key",children:"Function Call Key"}),"\n",(0,r.jsxs)(n.p,{children:["If you instantiated the ",(0,r.jsx)(n.code,{children:"Wallet"})," passing an account for the ",(0,r.jsx)(n.code,{children:"createAccessKeyFor"})," parameter, then the wallet will create a ",(0,r.jsx)(n.a,{href:"/zh-CN/concepts/protocol/access-keys#function-call-keys-function-call-keys",children:"FunctionCall Key"})," and store it in the web's local storage."]}),"\n",(0,r.jsx)(s.O2,{children:(0,r.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,r.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/index.js",start:"8",end:"8"})})}),"\n",(0,r.jsxs)(n.p,{children:["By default, such key enables to expend a maximum of ",(0,r.jsx)(n.code,{children:"0.25\u24c3"})," on GAS calling methods in ",(0,r.jsx)(n.strong,{children:"the specified"})," contract ",(0,r.jsx)(n.strong,{children:"without prompting"})," the user to sign them."]}),"\n",(0,r.jsxs)(n.p,{children:["If, on the contrary, you do not create an access key, then the user will be asked to sign every single transaction (except calls to ",(0,r.jsx)(n.code,{children:"view methods"}),", since those are always free)."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Please notice that this only applies for ",(0,r.jsx)(n.strong,{children:"non-payable"})," methods, if you attach money to any call the user will ",(0,r.jsx)(n.strong,{children:"always"})," be redirected to the wallet to confirm the transaction."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"calling-change-methods",children:"Calling Change Methods"}),"\n",(0,r.jsx)(n.p,{children:"Once the user logs-in they can start calling change methods. Programmatically, calling change methods is similar to calling view methods, only that now you can attach money to the call, and specify how much GAS you want to use."}),"\n",(0,r.jsx)(n.p,{children:"It is important to notice that, if you ask for money to be attached in the call, then the user will be redirected to the NEAR wallet to accept the transaction."}),"\n",(0,r.jsx)(s.O2,{children:(0,r.jsxs)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,r.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/index.js",start:"36",end:"36"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'<Github fname="near-wallet.js"\n        url="https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/near-wallet.js"\n        start="83" end="103" />\n'})})]})}),"\n",(0,r.jsxs)(n.p,{children:["Under the hood (see ",(0,r.jsx)(n.code,{children:"near-wallet"})," tab) we can see that we are actually asking the ",(0,r.jsx)(n.strong,{children:"wallet"})," to ",(0,r.jsx)(n.strong,{children:"sign a FunctionCall transaction"})," for us."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Remember that you can use the ",(0,r.jsx)(n.code,{children:"wallet"})," to call methods in ",(0,r.jsx)(n.strong,{children:"any"})," contract. If you did not asked for a function key to be created, the user will simply be prompt to confirm the transaction."]})}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"wallet-redirection",children:"Wallet Redirection"}),"\n",(0,r.jsxs)(n.p,{children:["If you attach money to a change call, then the user will be redirected to their wallet to accept the transaction. After accepting, the user will be brought back to your website, with the resulting transaction hash being pass as part of the url (i.e. ",(0,r.jsx)(n.code,{children:"your-website.com/?transactionHashes=..."}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["If the method invoked returned a result, you can use the transaction hash to retrieve the result from the network. Assuming you created the ",(0,r.jsx)(n.code,{children:"near"})," object as in the ",(0,r.jsx)(n.a,{href:"#connecting-to-a-contract",children:"example above"}),", then you query the result by doing:"]}),"\n",(0,r.jsx)(s.O2,{children:(0,r.jsxs)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,r.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/donation-examples/blob/main/frontend/src/index.js",start:"71",end:"92"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'<Github fname="utils.js"\n        url="https://github.com/near-examples/donation-examples/blob/main/frontend/src/near-wallet.js"\n        start="105" end="113" />\n'})})]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"handling-data-types",children:"Handling Data Types"}),"\n",(0,r.jsx)(n.p,{children:"When calling methods in a contract, or receiving results from them, you will need to correctly encode/decode parameters. For this, it is important to know how the contracts encode timestamps (u64) and money amounts (u128)."}),"\n",(0,r.jsx)(n.h5,{id:"time",children:"Time"}),"\n",(0,r.jsxs)(n.p,{children:["The block timestamp in a smart contract is encoded using nanoseconds (i.e. 19 digits: ",(0,r.jsx)(n.code,{children:"1655373910837593990"}),"). In contrast, ",(0,r.jsx)(n.code,{children:"Date.now()"})," from javascript returns a timestamp in milliseconds (i.e 13 digits: ",(0,r.jsx)(n.code,{children:"1655373910837"}),"). Make sure to convert between milliseconds and nanoseconds to properly handle time variables."]}),"\n",(0,r.jsx)(n.h5,{id:"money",children:"Money"}),"\n",(0,r.jsxs)(n.p,{children:["Smart contracts speak in yocto NEAR, where 1\u24c3 = 10^24yocto, and the values are always encoded as ",(0,r.jsx)(n.code,{children:"strings"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Convert from NEAR to yocto before sending it to the contract using ",(0,r.jsx)(n.code,{children:"near-api-js.utils.format.parseNearAmount(amount.toString())"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Convert a response in yoctoNEAR to NEAR using ",(0,r.jsx)(n.code,{children:"near-api-js.utils.format.formatNearAmount(amount)"})]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["If the contract returns a ",(0,r.jsx)(n.code,{children:"Balance"})," instead of a ",(0,r.jsx)(n.code,{children:"U128"}),', you will get a "scientific notation" ',(0,r.jsx)(n.code,{children:"number"})," instead of a ",(0,r.jsx)(n.code,{children:"string"})," (e.g. ",(0,r.jsx)(n.code,{children:"10^6"})," instead of ",(0,r.jsx)(n.code,{children:'"1000000"'}),"). In this case, you can convert the value to NEAR by doing:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function formatAmount(amount) {\n  let formatted = amount.toLocaleString('fullwide', { useGrouping: false })\n  formatted = utils.format.formatNearAmount(formatted)\n  return Math.floor(formatted * 100) / 100\n}\n"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"leveraging-near-api-js",children:"Leveraging NEAR API JS"}),"\n",(0,r.jsx)(n.p,{children:"NEAR API JS does not limit itself to simply calling methods in a contract. In fact, you can use it to transform your web-app into a rich user experience. While we will not cover these topics in depth, it is important for you to know that with NEAR API JS you can also:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/verify-signature.js",children:"Sign and verify messages"})}),": this is very useful to prove that a message was created by the user."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js/tree/master/packages/cookbook/transactions/batch-transactions.js",children:"Create batch transactions"})}),": this enables to link multiple ",(0,r.jsx)(n.a,{href:"/develop/contracts/actions",children:"actions"})," (e.g. multiple function calls). If one of the transactions fails, then they are all reverted."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js/tree/master/packages/cookbook/accounts/create-testnet-account.js",children:"Create accounts"})}),": deploy accounts for your users!"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Check the ",(0,r.jsx)(n.a,{href:"/tools/near-api-js/cookbook",children:"cookbook"})," to learn how to supercharge your webapp."]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function l(e){var n=e.children,t=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),a=t(36905),s=t(12466),l=t(16550),i=t(20469),o=t(91980),c=t(67392),d=t(50012);function h(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,s=(0,l.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[i,s])]}function j(e){var n,t,a,s,l=e.defaultValue,o=e.queryString,c=void 0!==o&&o,h=e.groupId,j=u(e),g=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:j})})),x=g[0],f=g[1],b=m({queryString:c,groupId:h}),w=b[0],v=b[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,d.Nk)(n),a=t[0],s=t[1],[a,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=y[0],S=y[1],A=function(){var e=null!=w?w:k;return p({value:e,tabValues:j})?e:null}();return(0,i.Z)((function(){A&&f(A)}),[A]),{selectedValue:x,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:j}))throw new Error("Can't select invalid tab value="+e);f(e),v(e),S(e)}),[v,S,j]),tabValues:j}}var g=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function b(e){var n=e.className,t=e.block,r=e.selectedValue,l=e.selectValue,i=e.tabValues,o=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(c(n),l(a))},h=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;t=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var s,l=o.indexOf(e.currentTarget)-1;t=null!=(s=o[l])?s:o[o.length-1]}null==(n=t)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return o.push(e)},onKeyDown:h,onClick:d},s,{className:(0,a.Z)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function w(e){var n=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=s.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function v(e){var n=j(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,f.jsx)(b,Object.assign({},n,e)),(0,f.jsx)(w,Object.assign({},n,e))]})}function y(e){var n=(0,g.Z)();return(0,f.jsx)(v,Object.assign({},e,{children:h(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>m,Ey:()=>g,SQ:()=>j});var r=t(67294),a=t(74866),s=t(85162),l=t(74165),i=t(15861),o=t(1841),c=t.n(o),d=t(85893);function h(){return(h=(0,i.Z)((0,l.Z)().mark((function e(n,t,r){var a,s,i,o;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(n+"-until"))&&s>Date.now())){e.next=5;break}a=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(n,a),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return i=a.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):i.length,i=i.slice(t,r),o=i.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",i.map((function(e){return e.slice(o)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const u=function(e){var n=e.url,t=e.start,a=e.end,s=e.language,l=e.fname,i=e.metastring,o=(0,r.useState)("Loading..."),u=o[0],p=o[1];return(0,r.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],r=(n[1],new URL(t).pathname.split("/").slice(1)),a=r[0],s=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+s+"/"+r[3]+"/"+r.slice(4).join("/")}(n),r=function(e,n,t){return h.apply(this,arguments)}(e,t,a);r.then((function(e){return p(e)}))})),(0,d.jsxs)("div",{fname:l,children:[(0,d.jsx)(c(),{language:s,metastring:i+" showLineNumbers",children:u}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,d.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,d.jsx)(s.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function j(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,s=t.end,l=t.fname;if(e.type===g)return g({url:r,start:a,end:s,language:n,fname:l});return e}(e,t)})),1==n.length?(0,d.jsx)(s.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,d.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,d.jsx)(s.Z,{value:n,label:e.props.fname,children:e})}))})}function g(e){var n=e.url,t=e.start,r=e.end,a=e.language,s=e.fname,l=e.metastring;return u({url:n,start:t,end:r,language:a,fname:s,metastring:l})}}}]);