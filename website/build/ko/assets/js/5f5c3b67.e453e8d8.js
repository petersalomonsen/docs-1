"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1803],{12072:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var r=t(85893),a=t(11151),s=t(74866),c=t(85162),i=t(71183);const o={id:"quickstart",title:"Hello Contract",sidebar_label:"Quickstart \u2728"},l=void 0,d={id:"build/smart-contracts/quickstart",title:"Hello Contract",description:"NEAR accounts can host programs known as smart contracts. Smart contracts can store data, and expose methods so other users and contracts interact with them.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/quickstart.md",sourceDirName:"2.build/2.smart-contracts",slug:"/build/smart-contracts/quickstart",permalink:"/ko/build/smart-contracts/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/quickstart.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1713353002e3,frontMatter:{id:"quickstart",title:"Hello Contract",sidebar_label:"Quickstart \u2728"},sidebar:"build",previous:{title:"What is a Contract?",permalink:"/ko/build/smart-contracts/what-is"},next:{title:"The Contract Class",permalink:"/ko/build/smart-contracts/anatomy/"}},u={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating the Contract",id:"creating-the-contract",level:2},{value:"The Contract",id:"the-contract",level:2},{value:"Build and Test",id:"build-and-test",level:2},{value:"Create a Testnet Account",id:"create-a-testnet-account",level:2},{value:"Deploy the Contract",id:"deploy-the-contract",level:2},{value:"Interacting with the Contract",id:"interacting-with-the-contract",level:2},{value:"Get Greeting",id:"get-greeting",level:3},{value:"Set Greeting",id:"set-greeting",level:3},{value:"Moving Forward",id:"moving-forward",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/ko/concepts/protocol/account-model",children:"NEAR accounts"})," can host programs known as smart contracts. Smart contracts can ",(0,r.jsx)(n.strong,{children:"store data"}),", and ",(0,r.jsx)(n.strong,{children:"expose methods"})," so other users and contracts interact with them."]}),"\n",(0,r.jsxs)(n.p,{children:["In this quickstart tutorial, we will guide you in creating your first smart contract in the NEAR ",(0,r.jsx)(n.strong,{children:"testnet"})," that stores and retrieves a greeting."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(s.Z,{groupId:"code-tabs",children:[(0,r.jsxs)(c.Z,{value:"\ud83c\udf10 JavaScript",children:[(0,r.jsx)(n.p,{children:"Before starting, make sure you have the following installed:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://nodejs.org/en/download",children:"Node.js"}),", to use our scaffolding tool."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/tools/near-cli#installation",children:"NEAR CLI"}),", to deploy and interact with the contract."]}),"\n"]}),(0,r.jsx)(n.admonition,{title:"Easy Install",type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NEAR-CLI:"})," Install ",(0,r.jsx)(n.code,{children:"near-cli"})," tools using"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm i -g near-cli\n"})}),"\n"]}),"\n"]})})]}),(0,r.jsxs)(c.Z,{value:"\ud83e\udd80 Rust",children:[(0,r.jsx)(n.p,{children:"Before starting, make sure you have the following installed:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/tools/near-cli-rs",children:"NEAR CLI-RS"}),", to deploy and interact with the contract."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/near/cargo-near",children:"cargo-near"}),", to easily create testnet accounts."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.Rust-lang.org/tools/install",children:"Rust"}),", to create Rust contracts."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://nodejs.org/en/download",children:"Node.js"}),"(Optional), to install the tools."]}),"\n"]}),(0,r.jsxs)(n.admonition,{title:"Easy Install",type:"tip",children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"NEAR-CLI-RS:"})," Install both ",(0,r.jsx)(n.code,{children:"near-cli-rs"})," and ",(0,r.jsx)(n.code,{children:"cargo-near"})," tools using"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Using node\nnpm i -g near-cli-rs cargo-near\n\n# Using macOS, Linux, WSL\ncurl --proto '=https' --tlsv1.2 -LsSf https://github.com/near/near-cli-rs/releases/latest/download/near-cli-rs-installer.sh | sh\ncurl --proto '=https' --tlsv1.2 -LsSf https://github.com/near/cargo-near/releases/latest/download/cargo-near-installer.sh | sh\n"})})]})]})]}),"\n",(0,r.jsxs)(n.admonition,{title:"Testnet Account",type:"info",children:[(0,r.jsxs)(n.p,{children:["There is no need to have a ",(0,r.jsx)(n.code,{children:"testnet"})," account to follow this tutorial."]}),(0,r.jsxs)(n.p,{children:["However, if you want to create one, you can do so through ",(0,r.jsx)(n.a,{href:"https://testnet.mynearwallet.com",children:"a wallet"}),", and use it from the ",(0,r.jsx)(n.code,{children:"near-cli"})," by invoking ",(0,r.jsx)(n.code,{children:"near login"}),"."]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"creating-the-contract",children:"Creating the Contract"}),"\n",(0,r.jsxs)(s.Z,{groupId:"code-tabs",children:[(0,r.jsxs)(c.Z,{value:"\ud83c\udf10 JavaScript",children:[(0,r.jsxs)(n.p,{children:["Create a smart contract by running our ",(0,r.jsx)(n.code,{children:"create-near-app"})," scaffolding tool and following the interactive menu."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["What do you want to build? \u203a ",(0,r.jsx)(n.code,{children:"A Near Smart Contract"})]}),"\n",(0,r.jsxs)(n.li,{children:["Select a smart contract template for your project \u203a ",(0,r.jsx)(n.code,{children:"JS/TS Contract"})]}),"\n",(0,r.jsxs)(n.li,{children:["Name your project \u203a ",(0,r.jsx)(n.code,{children:"hello-near"})]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  npx create-near-app@latest\n"})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"img",src:t(85553).Z+"",width:"868",height:"604"}),"\n",(0,r.jsx)(n.em,{children:"create-near-app in action"})]}),(0,r.jsx)(n.p,{children:"The resulting folder structure will change slightly depending on the chosen language. Here is the general structure you can expect to see:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\u251c\u2500\u2500 sandbox-ts      # sanbox testing\n\u2502   \u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500  \u2514\u2500\u2500 main.ava.ts\n\u2502   \u251c\u2500\u2500 ava.config.cjs\n\u2502   \u2514\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 contract.ts # contract's code\n\u251c\u2500\u2500 package.json    # package manager\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 tsconfig.json\n"})})]}),(0,r.jsxs)(c.Z,{value:"\ud83e\udd80 Rust",children:[(0,r.jsxs)(n.p,{children:["Create a smart contract by running our ",(0,r.jsx)(n.code,{children:"near"})," Rust CLI tool and following the interactive menu."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  cargo near new <project_name>\n"})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"img",src:t(71134).Z+"",width:"868",height:"604"}),"\n",(0,r.jsx)(n.em,{children:"create-near-app in action"})]}),(0,r.jsx)(n.p,{children:"The resulting folder structure will change slightly depending on the chosen language. Here is the general structure you can expect to see:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 lib.rs # contract's code\n\u251c\u2500\u2500 test \n\u2502   \u2514\u2500\u2500 test_basics.rs # testing code\n\u251c\u2500\u2500 Cargo.toml # package manager\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 rust-toolchain.toml\n"})})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"the-contract",children:"The Contract"}),"\n",(0,r.jsxs)(n.p,{children:["Your new smart contract stores a ",(0,r.jsx)(n.code,{children:"greeting: string"})," attribute in their state, and exposes two methods to interact with it (",(0,r.jsx)(n.code,{children:"set_greeting"}),", ",(0,r.jsx)(n.code,{children:"get_greeting"}),")."]}),"\n",(0,r.jsxs)(i.O2,{children:[(0,r.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,r.jsx)(i.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-ts/src/contract.ts",start:"4",end:"18"})}),(0,r.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-rs/src/lib.rs",start:"6",end:"35"})})]}),"\n",(0,r.jsx)(n.p,{children:"There are 3 important things to notice:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"get_greeting"})," method is a ",(0,r.jsx)(n.a,{href:"/ko/build/smart-contracts/anatomy/#public-methods",children:(0,r.jsx)(n.code,{children:"view"})})," method, meaning it only reads from the contract and can be called for free by anyone."]}),"\n",(0,r.jsxs)(n.li,{children:["By default, the contract is initialized with the ",(0,r.jsx)(n.code,{children:"greeting"})," attribute set to ",(0,r.jsx)(n.code,{children:'"Hello"'}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"set_greeting"})," method is a ",(0,r.jsx)(n.a,{href:"/ko/build/smart-contracts/anatomy/#public-methods",children:(0,r.jsx)(n.code,{children:"change"})})," method, meaning it modifies the contract's state and requires a user to sign a transaction in order to be executed."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"build-and-test",children:"Build and Test"}),"\n",(0,r.jsx)(n.p,{children:"Building and testing the contract is as simple as running two commands."}),"\n",(0,r.jsxs)(i.O2,{children:[(0,r.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run build\nnpm run test\n\n# Expected:\n# returns the default greeting \u2705\n# changes the greeting \u2705\n"})})}),(0,r.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo build\ncargo test\n\n# Expected:\n# Passed \u2705 gets default greeting\n# Passed \u2705 changes the greeting\n"})})})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:" Failing tests? "}),(0,r.jsxs)(n.p,{children:["If the tests are failing, make sure that you are using ",(0,r.jsx)(n.code,{children:"node v16"})," and the ",(0,r.jsx)(n.code,{children:"toolchain v1.69"})," in ",(0,r.jsx)(n.code,{children:"rust"}),". You can always use"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nvm use 16"})," to switch to ",(0,r.jsx)(n.code,{children:"node v16"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"rustup default 1.68"})," to switch to ",(0,r.jsx)(n.code,{children:"toolchain v1.69"})]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["In the background, these commands are calling the build tools for each language and invoking the ",(0,r.jsx)(n.a,{href:"/ko/build/smart-contracts/testing/integration-test",children:"Sandbox"})," tests from the ",(0,r.jsx)(n.code,{children:"sandbox-ts/rs"})," directory."]}),"\n",(0,r.jsx)(n.admonition,{title:"Sandbox",type:"tip",children:(0,r.jsx)(n.p,{children:"Testing the contracts within a Sandbox allows you to understand how the contract will behave once deployed to the network while having total control over the testing environment."})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"create-a-testnet-account",children:"Create a Testnet Account"}),"\n",(0,r.jsx)(n.p,{children:"Now that we know the contract is passing the tests, let's create a testnet account in which to deploy the contract."}),"\n",(0,r.jsxs)(n.p,{children:["While there are different ways to create accounts in NEAR, in this quickstart we will use the ",(0,r.jsx)(n.code,{children:"cargo-near"})," tool to create a new random ",(0,r.jsx)(n.a,{href:"/concepts/protocol/account-id",children:(0,r.jsx)(n.code,{children:"named account"})}),"."]}),"\n",(0,r.jsxs)(s.Z,{groupId:"code-tabs",children:[(0,r.jsxs)(c.Z,{value:"\ud83c\udf10 JavaScript",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Create a new testnet account\n# Replace <created-account> with a custom name\nnear create-account <created-account> --useFaucet\n"})}),(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:" Example Result "}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'> near create-account lovely-event.testnet --useFaucet\n# Console response\nNew account "lovely-event.testnet" created successfully. # Response\n'})})]})]}),(0,r.jsxs)(c.Z,{value:"\ud83e\udd80 Rust",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Create a new testnet account with a random name\ncargo-near near create-dev-account use-random-account-id autogenerate-new-keypair save-to-legacy-keychain network-config testnet create\n\n# Create a new testnet account\n# Replace <lovely-event.testnet> with a custom name\ncargo-near near create-dev-account use-specific-account-id lovely-event.testnet autogenerate-new-keypair save-to-keychain network-config testnet create\n"})}),(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:" Example Result "}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# If you want to create account with a random name\n> cargo-near near create-dev-account use-random-account-id autogenerate-new-keypair save-to-legacy-keychain network-config testnet create\n\nNew account "lovely-event.testnet" created successfully. # Response\n\n# If you want to create account with a custom name\n> cargo-near near create-dev-account use-specific-account-id lovely-event.testnet autogenerate-new-keypair save-to-keychain network-config testnet create\n\nNew account "lovely-event.testnet" created successfully. # Response\n'})})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Here we are creating a random account since we do not care about the account's name. Remember that you can create a named account through any wallet (i.e. ",(0,r.jsx)(n.a,{href:"https://testnet.mynearwallet.com",children:"MyNearWallet"}),") and then use it from the ",(0,r.jsx)(n.code,{children:"near-cli"})," by invoking ",(0,r.jsx)(n.code,{children:"near login"}),"."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"deploy-the-contract",children:"Deploy the Contract"}),"\n",(0,r.jsx)(n.p,{children:"Having our account created, we can now deploy the contract into it:"}),"\n",(0,r.jsxs)(i.O2,{children:[(0,r.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near deploy <created-account> build/release/hello.wasm\n"})})}),(0,r.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near contract deploy <created-account> use-file ./target/wasm32-unknown-unknown/release/contract_rs.wasm without-init-call network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Congrats"}),"! your contract now lives in the NEAR testnet network."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"interacting-with-the-contract",children:"Interacting with the Contract"}),"\n",(0,r.jsxs)(n.p,{children:["To interact with your deployed smart contract, you can call its methods using the ",(0,r.jsx)(n.code,{children:"near-cli"})," or ",(0,r.jsx)(n.code,{children:"near-cli-rs"})," tools."]}),"\n",(0,r.jsx)(n.h3,{id:"get-greeting",children:"Get Greeting"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"get_greeting"})," method is a ",(0,r.jsx)(n.a,{href:"/ko/build/smart-contracts/anatomy/#public-methods",children:(0,r.jsx)(n.code,{children:"view"})})," method, meaning it only reads from the contract's state, and can thus be called for ",(0,r.jsx)(n.strong,{children:"free"}),"."]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c.Z,{value:"near-cli",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'> near view <created-account> get_greeting\n\n"Hello" # Response\n'})})}),(0,r.jsx)(c.Z,{value:"near-cli-rs",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'> near contract call-function as-read-only <created-account> get_greeting json-args {} network-config testnet now\n\n"Hello" # Response\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"set-greeting",children:"Set Greeting"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"set_greeting"})," method is a ",(0,r.jsx)(n.a,{href:"/ko/build/smart-contracts/anatomy/#public-methods",children:(0,r.jsx)(n.code,{children:"change"})})," method, meaning it modifies the contract's state, and thus requires a user to sign a transaction in order to be executed."]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(c.Z,{value:"near-cli",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'> near call <created-account> set_greeting \'{"greeting": "Hola"}\' --accountId <created-account>\n\nLog: Saving greeting "Hola" # Response\n'})}),(0,r.jsxs)(n.p,{children:["In this case we are asking the account that stores the contract to call its own contract's method (",(0,r.jsx)(n.code,{children:"--accountId <created-account>"}),")."]})]}),(0,r.jsxs)(c.Z,{value:"near-cli-rs",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"> near contract call-function as-transaction <created-account> set_greeting json-args '{\"greeting\": \"Hola\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' sign-as <created-account> network-config testnet sign-with-keychain send\n\nLog: Saving greeting \"Hola\" # Response\n"})}),(0,r.jsxs)(n.p,{children:["In this case, we are asking the account that stores the contract to call its own contract's method (",(0,r.jsx)(n.code,{children:"sign-as <created-account>"}),")."]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"moving-forward",children:"Moving Forward"}),"\n",(0,r.jsx)(n.p,{children:"That's it for the quickstart tutorial. You have now seen a fully functional contract with a minimal user interface and testing."}),"\n",(0,r.jsxs)(n.p,{children:["Go ahead and check other ",(0,r.jsx)(n.a,{href:"/tutorials/examples/guest-book",children:"examples"})," or proceed straight to the ",(0,r.jsx)(n.a,{href:"/ko/build/smart-contracts/anatomy/",children:"Develop section"})," to know how to write your own contract."]}),"\n",(0,r.jsxs)(n.p,{children:["If you have any questions, do not hesitate to join us on ",(0,r.jsx)(n.a,{href:"https://near.chat",children:"Discord"}),". We regularly host Office Hours, in which you can join our voice channel and ask questions."]}),"\n",(0,r.jsx)(n.p,{children:"Happy coding! \ud83d\ude80"}),"\n",(0,r.jsxs)(n.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(n.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["near-cli: ",(0,r.jsx)(n.code,{children:"4.0.13"})]}),"\n",(0,r.jsxs)(n.li,{children:["node: ",(0,r.jsx)(n.code,{children:"18.19.1"})]}),"\n",(0,r.jsxs)(n.li,{children:["rustc: ",(0,r.jsx)(n.code,{children:"1.77.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["near-cli-rs: ",(0,r.jsx)(n.code,{children:"0.8.1"})]}),"\n",(0,r.jsxs)(n.li,{children:["cargo-near: ",(0,r.jsx)(n.code,{children:"0.6.1"})]}),"\n"]})]})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>c});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function c(e){var n=e.children,t=e.hidden,c=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,c),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),a=t(36905),s=t(12466),c=t(16550),i=t(20469),o=t(91980),l=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function g(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function x(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,s=(0,c.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[i,s])]}function p(e){var n,t,a,s,c=e.defaultValue,o=e.queryString,l=void 0!==o&&o,u=e.groupId,p=h(e),j=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:c,tabValues:p})})),m=j[0],f=j[1],v=x({queryString:l,groupId:u}),b=v[0],w=v[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Nk)(n),a=t[0],s=t[1],[a,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=y[0],N=y[1],S=function(){var e=null!=b?b:k;return g({value:e,tabValues:p})?e:null}();return(0,i.Z)((function(){S&&f(S)}),[S]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!g({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);f(e),w(e),N(e)}),[w,N,p]),tabValues:p}}var j=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function v(e){var n=e.className,t=e.block,r=e.selectedValue,c=e.selectValue,i=e.tabValues,o=[],l=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(l(n),c(a))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;t=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var s,c=o.indexOf(e.currentTarget)-1;t=null!=(s=o[c])?s:o[o.length-1]}null==(n=t)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return o.push(e)},onKeyDown:u,onClick:d},s,{className:(0,a.Z)("tabs__item",m.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function b(e){var n=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var c=s.find((function(e){return e.props.value===a}));return c?(0,r.cloneElement)(c,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function w(e){var n=p(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(v,Object.assign({},n,e)),(0,f.jsx)(b,Object.assign({},n,e))]})}function y(e){var n=(0,j.Z)();return(0,f.jsx)(w,Object.assign({},e,{children:u(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>x,Ey:()=>j,SQ:()=>p});var r=t(67294),a=t(74866),s=t(85162),c=t(74165),i=t(15861),o=t(1841),l=t.n(o),d=t(85893);function u(){return(u=(0,i.Z)((0,c.Z)().mark((function e(n,t,r){var a,s,i,o;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(n+"-until"))&&s>Date.now())){e.next=5;break}a=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(n,a),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return i=a.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):i.length,i=i.slice(t,r),o=i.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",i.map((function(e){return e.slice(o)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var n=e.url,t=e.start,a=e.end,s=e.language,c=e.fname,i=e.metastring,o=(0,r.useState)("Loading..."),h=o[0],g=o[1];return(0,r.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],r=(n[1],new URL(t).pathname.split("/").slice(1)),a=r[0],s=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+s+"/"+r[3]+"/"+r.slice(4).join("/")}(n),r=function(e,n,t){return u.apply(this,arguments)}(e,t,a);r.then((function(e){return g(e)}))})),(0,d.jsxs)("div",{fname:c,children:[(0,d.jsx)(l(),{language:s,metastring:i+" showLineNumbers",children:h}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var g={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function x(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,d.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,d.jsx)(s.Z,{value:e.props.value,label:g[e.props.value],children:e})}))})}function p(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,s=t.end,c=t.fname;if(e.type===j)return j({url:r,start:a,end:s,language:n,fname:c});return e}(e,t)})),1==n.length?(0,d.jsx)(s.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,d.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,d.jsx)(s.Z,{value:n,label:e.props.fname,children:e})}))})}function j(e){var n=e.url,t=e.start,r=e.end,a=e.language,s=e.fname,c=e.metastring;return h({url:n,start:t,end:r,language:a,fname:s,metastring:c})}},71134:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/hello-near-rs-133661298b01d21abdea4b47d224658f.gif"},85553:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/hello-near-ts-8f1c5c5f2390b1d4552e8c07de22e3f8.gif"}}]);