"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[882],{96049:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var t=a(85893),r=a(11151),s=a(77229),l=a(74866),i=a(85162);const c={id:"upgrade",title:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8"},o=void 0,u={id:"develop/upgrade",title:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8",description:"NEAR \uacc4\uc815\uc740 \ub85c\uc9c1(\ucee8\ud2b8\ub799\ud2b8\uc758 \ucf54\ub4dc)\uc744 \uc0c1\ud0dc(\uc2a4\ud1a0\ub9ac\uc9c0)\uc640 \ubd84\ub9ac\ud558\uc5ec, \ucf54\ub4dc\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.develop/upgrade.md",sourceDirName:"2.develop",slug:"/develop/upgrade",permalink:"/ko/develop/upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/upgrade.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 28\uc77c",frontMatter:{id:"upgrade",title:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8"},sidebar:"build",previous:{title:"\ubc30\ud3ec \ubc0f \uc0ac\uc6a9",permalink:"/ko/develop/deploy"},next:{title:"\uacc4\uc815 \uc7a0\uae08",permalink:"/ko/develop/lock"}},d={},h=[{value:"Updating Through Tools",id:"updating-through-tools",level:2},{value:"\ud504\ub85c\uadf8\ub798\ubc0d\uc744 \ud1b5\ud55c \uc5c5\ub370\uc774\ud2b8",id:"\ud504\ub85c\uadf8\ub798\ubc0d\uc744-\ud1b5\ud55c-\uc5c5\ub370\uc774\ud2b8",level:2},{value:"How to Invoke Such Method?",id:"how-to-invoke-such-method",level:4},{value:"Migrating the State",id:"migrating-the-state",level:2},{value:"\ub9c8\uc774\uadf8\ub808\uc774\uc158 \uba54\uc11c\ub4dc",id:"\ub9c8\uc774\uadf8\ub808\uc774\uc158-\uba54\uc11c\ub4dc",level:3},{value:"\uc608\uc81c: \ubc29\uba85\ub85d \ub9c8\uc774\uadf8\ub808\uc774\uc158",id:"\uc608\uc81c-\ubc29\uba85\ub85d-\ub9c8\uc774\uadf8\ub808\uc774\uc158",level:3},{value:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8",id:"\ucee8\ud2b8\ub799\ud2b8-\uc5c5\ub370\uc774\ud2b8",level:4},{value:"\ud638\ud658\ub418\uc9c0 \uc54a\ub294 \uc0c1\ud0dc",id:"\ud638\ud658\ub418\uc9c0-\uc54a\ub294-\uc0c1\ud0dc",level:4},{value:"\uc0c1\ud0dc \ub9c8\uc774\uadf8\ub808\uc774\uc158",id:"\uc0c1\ud0dc-\ub9c8\uc774\uadf8\ub808\uc774\uc158",level:4}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"NEAR \uacc4\uc815\uc740 \ub85c\uc9c1(\ucee8\ud2b8\ub799\ud2b8\uc758 \ucf54\ub4dc)\uc744 \uc0c1\ud0dc(\uc2a4\ud1a0\ub9ac\uc9c0)\uc640 \ubd84\ub9ac\ud558\uc5ec, \ucf54\ub4dc\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\ucee8\ud2b8\ub799\ud2b8\ub294 \ub450 \uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Through tools"})," such as ",(0,t.jsx)(n.a,{href:"/ko/tools/near-cli",children:"NEAR CLI"})," or ",(0,t.jsx)(n.a,{href:"/ko/tools/near-api-js/quick-reference",children:"near-api-js"})," (if you hold the account's ",(0,t.jsx)(n.a,{href:"/ko/concepts/protocol/access-keys",children:"full access key"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Programmatically"}),", by implementing a method that ",(0,t.jsx)(n.a,{href:"#programmatic-update",children:"takes the new code and deploys it"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"updating-through-tools",children:"Updating Through Tools"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/ko/tools/near-cli",children:"NEAR CLI"})," \ub4f1 \uc120\ud638\ud558\ub294 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc7ac\ubc30\ud3ec\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(l.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,t.jsx)(i.Z,{value:"near-cli",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# (optional) If you don't have an account, create one\nnear create-account <account-id> --useFaucet\n\n# Deploy the contract\nnear deploy <account-id> <wasm-file>\n"})})}),(0,t.jsx)(i.Z,{value:"near-cli-rs",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# (optional) If you don't have an account, create one\nnear account create-account sponsor-by-faucet-service somrnd.testnet autogenerate-new-keypair save-to-keychain network-config testnet create\n\n# Deploy the contract\nnear contract deploy <accountId> use-file <route_to_wasm> without-init-call network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\ud504\ub85c\uadf8\ub798\ubc0d\uc744-\ud1b5\ud55c-\uc5c5\ub370\uc774\ud2b8",children:"\ud504\ub85c\uadf8\ub798\ubc0d\uc744 \ud1b5\ud55c \uc5c5\ub370\uc774\ud2b8"}),"\n",(0,t.jsx)(n.p,{children:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ub2e4\uc74c\uacfc \uac19\uc740 \ubc29\ubc95\uc744 \uad6c\ud604\ud558\uc5ec \uc790\uccb4\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\uc0c8 wasm \ucee8\ud2b8\ub799\ud2b8\ub97c \uc785\ub825\uac12\uc73c\ub85c \ubc1b\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"Promise\ub97c \uc0dd\uc131\ud558\uc5ec \uc790\uccb4\uc801\uc73c\ub85c \ubc30\ud3ec\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsx)(s.O2,{children:(0,t.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,t.jsx)(s.Ey,{fname:"update.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/self-updates/base/src/update.rs",start:"10",end:"28"})})}),"\n",(0,t.jsx)(n.h4,{id:"how-to-invoke-such-method",children:"How to Invoke Such Method?"}),"\n",(0,t.jsxs)(l.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,t.jsx)(i.Z,{value:"near-cli",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# Load the contract\'s raw bytes\nCONTRACT_BYTES=`cat ./path/to/wasm.wasm | base64`\n\n# Call the update_contract method\nnear call <contract-account> update_contract "$CONTRACT_BYTES" --base64 --accountId <manager-account> --gas 300000000000000\n'})})}),(0,t.jsx)(i.Z,{value:"near-cli-rs",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Load the contract's raw bytes\nCONTRACT_BYTES=`cat ./path/to/wasm.wasm | base64`\n\n# Call the update_contract method\nnear contract call-function as-transaction <contract-account> update_contract base64-args  \"$CONTRACT_BYTES\" prepaid-gas '300 TeraGas' attached-deposit '0 NEAR' sign-as <manager-account> network-config testnet sign-with-keychain send\n"})})}),(0,t.jsx)(i.Z,{value:"\ud83c\udf10 JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// Load the contract\'s raw bytes\nconst code = fs.readFileSync("./path/to/wasm.wasm");\n\n// Call the update_contract method\nawait wallet.callMethod({contractId: guestBook, method: "update_contract", args: code, gas: "300000000000000"});\n'})})})]}),"\n",(0,t.jsx)(n.admonition,{title:"DAO Factories",type:"tip",children:(0,t.jsxs)(n.p,{children:["This is how DAO factories ",(0,t.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract/blob/main/sputnikdao-factory2/src/factory_manager.rs#L60",children:"update their contracts"})]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"migrating-the-state",children:"Migrating the State"}),"\n",(0,t.jsxs)(n.p,{children:["Since the account's logic (smart contract) is separated from the account's state (storage), ",(0,t.jsx)(n.strong,{children:"the account's state persists"})," when re-deploying a contract."]}),"\n",(0,t.jsxs)(n.p,{children:["Because of this, ",(0,t.jsx)(n.strong,{children:"adding methods"})," or ",(0,t.jsx)(n.strong,{children:"modifying existing ones"})," will yield ",(0,t.jsx)(n.strong,{children:"no problems"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["However, deploying a contract that ",(0,t.jsx)(n.strong,{children:"modifies or removes structures"}),"  stored in the state will raise an error: ",(0,t.jsx)(n.code,{children:"Cannot deserialize the contract state"}),", in which case you can choose to:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\ub2e4\ub978 \uacc4\uc815 \uc0ac\uc6a9"}),"\n",(0,t.jsx)(n.li,{children:"\uc774\uc804 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub85c \ub864\ubc31"}),"\n",(0,t.jsx)(n.li,{children:"\ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc\ub97c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\ub294 \uba54\uc11c\ub4dc \ucd94\uac00"}),"\n"]}),"\n",(0,t.jsx)("hr",{className:"subsection"}),"\n",(0,t.jsx)(n.h3,{id:"\ub9c8\uc774\uadf8\ub808\uc774\uc158-\uba54\uc11c\ub4dc",children:"\ub9c8\uc774\uadf8\ub808\uc774\uc158 \uba54\uc11c\ub4dc"}),"\n",(0,t.jsx)(n.p,{children:"\uc0c1\ud0dc\ub97c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\ub294 \uac83 \uc678\uc5d0 \ub2e4\ub978 \uc635\uc158\uc774 \uc5c6\ub294 \uacbd\uc6b0 \ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc11c\ub4dc\ub97c \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\ucee8\ud2b8\ub799\ud2b8\uc758 \ud604\uc7ac \uc0c1\ud0dc\ub97c \uc77d\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"\uc0c8\ub85c\uc6b4 \uc0c1\ud0dc\ub85c \ubcc0\ud658\ud558\uae30 \uc704\ud574 \ub2e4\ub978 \ud568\uc218\ub97c \uc801\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"\uc0c8\ub85c\uc6b4 \uc0c1\ud0dc\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\uc774\uac83\uc774 DAO\uac00 ",(0,t.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract/blob/main/sputnikdao2/src/upgrade.rs#L59",children:"\uc2a4\uc2a4\ub85c\ub97c \uc5c5\ub370\uc774\ud2b8"}),"\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.\n:::"]}),"\n",(0,t.jsx)("hr",{className:"subsection"}),"\n",(0,t.jsx)(n.h3,{id:"\uc608\uc81c-\ubc29\uba85\ub85d-\ub9c8\uc774\uadf8\ub808\uc774\uc158",children:"\uc608\uc81c: \ubc29\uba85\ub85d \ub9c8\uc774\uadf8\ub808\uc774\uc158"}),"\n",(0,t.jsx)(n.p,{children:'\uba54\uc2dc\uc9c0\ub97c \uc800\uc7a5\ud558\ub294 \ubc29\uba85\ub85d\uc774 \uc788\uace0, \uc0ac\uc6a9\uc790\uac00 \uc774\ub7ec\ud55c \uba54\uc2dc\uc9c0\uc5d0 \ub300\ud574 "\ud504\ub9ac\ubbf8\uc5c4"\uc73c\ub85c \uc9c0\ubd88\ud560 \uc218 \uc788\ub2e4\uace0 \uc0c1\uc0c1\ud574 \ubcf4\uc138\uc694. \ub2e4\uc74c\uacfc \uac19\uc740 \uc0c1\ud0dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uba54\uc2dc\uc9c0 \ubc0f \uacb0\uc81c\ub97c \ucd94\uc801\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'}),"\n",(0,t.jsx)(s.O2,{children:(0,t.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,t.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/basic-updates/base/src/lib.rs",start:"9",end:"23"})})}),"\n",(0,t.jsx)(n.h4,{id:"\ucee8\ud2b8\ub799\ud2b8-\uc5c5\ub370\uc774\ud2b8",children:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8"}),"\n",(0,t.jsxs)(n.p,{children:["\ub9cc\uc57d \uc5b4\ub290 \uc2dc\uc810\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:"PostedMessage"})," \ub0b4 ",(0,t.jsx)(n.code,{children:"payments"}),"\ub97c \ucd94\uc801\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \uae68\ub2ec\uc544\uc11c, \ucee8\ud2b8\ub799\ud2b8\ub97c \ub2e4\uc74c\uacfc \uac19\uc774 \ubcc0\uacbd\ud588\ub2e4\uace0 \ud574\ubd05\uc2dc\ub2e4."]}),"\n",(0,t.jsx)(s.O2,{children:(0,t.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,t.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/basic-updates/update/src/lib.rs",start:"11",end:"25"})})}),"\n",(0,t.jsx)(n.h4,{id:"\ud638\ud658\ub418\uc9c0-\uc54a\ub294-\uc0c1\ud0dc",children:"\ud638\ud658\ub418\uc9c0 \uc54a\ub294 \uc0c1\ud0dc"}),"\n",(0,t.jsx)(n.p,{children:"\ucd08\uae30\ud654\ub41c \uacc4\uc815\uc5d0 \uc5c5\ub370\uc774\ud2b8\ub97c \ubc30\ud3ec\ud558\uba74, \ub2e4\uc74c\uacfc \uac19\uc740 \uc774\uc720\ub85c \ucee8\ud2b8\ub799\ud2b8\ub294 \uacc4\uc815 \u200b\u200b\uc0c1\ud0dc\ub97c \uc5ed\uc9c1\ub82c\ud654\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["(\uc774\uc804 \ucee8\ud2b8\ub799\ud2b8\ub85c\ubd80\ud130) \uc0c1\ud0dc\uc5d0 \uc800\uc7a5\ub41c \ucd94\uac00 ",(0,t.jsx)(n.code,{children:"payments"})," \ubca1\ud130\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:["\uc800\uc7a5\ub41c ",(0,t.jsx)(n.code,{children:"PostedMessages"}),"\uc5d0\ub294 (\uc774\uc804 \ucee8\ud2b8\ub799\ud2b8\uc640 \uac19\uc774) ",(0,t.jsx)(n.code,{children:"payment"})," \ud544\ub4dc\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h4,{id:"\uc0c1\ud0dc-\ub9c8\uc774\uadf8\ub808\uc774\uc158",children:"\uc0c1\ud0dc \ub9c8\uc774\uadf8\ub808\uc774\uc158"}),"\n",(0,t.jsxs)(n.p,{children:["\uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub824\uba74, \uc774\uc804 \uc0c1\ud0dc\ub97c \uac70\uccd0 ",(0,t.jsx)(n.code,{children:"payments"})," \ubca1\ud130\ub97c \uc81c\uac70\ud558\uace0, ",(0,t.jsx)(n.code,{children:"PostedMessages"}),"\uc5d0 \uc815\ubcf4\ub97c \ucd94\uac00\ud558\ub294 \uba54\uc11c\ub4dc\ub97c \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(s.O2,{children:(0,t.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,t.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/basic-updates/update/src/migrate.rs",start:"3",end:"45"})})}),"\n",(0,t.jsxs)(n.p,{children:["\uc2e4\uc81c\ub85c ",(0,t.jsx)(n.code,{children:"migrate"}),"\ub294 \uae30\uc874 \uc0c1\ud0dc(",(0,t.jsx)(n.code,{children:"[#init(ignore_state)]"}),")\ub97c ",(0,t.jsx)(n.strong,{children:"\ubb34\uc2dc\ud558\ub294"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/near-examples/update-migrate-rust/tree/main/contracts/basic-updates/base",children:"\uacf5\uc2dd \ub9c8\uc774\uadf8\ub808\uc774\uc158 \uc608\uc81c"}),"\uc5d0\uc11c \ub2e8\uacc4\ubcc4\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc744 \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n:::"]})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>l});a(67294);var t=a(36905);const r={tabItem:"tabItem_Ymn6"};var s=a(85893);function l(e){var n=e.children,a=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,l),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>w});var t=a(67294),r=a(36905),s=a(12466),l=a(16550),i=a(20469),c=a(91980),o=a(67392),u=a(50012);function d(e){var n,a;return null!=(n=null==(a=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function h(e){var n=e.values,a=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(a);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,a=void 0!==n&&n,r=e.groupId,s=(0,l.k6)(),i=function(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:r});return[(0,c._X)(i),(0,t.useCallback)((function(e){if(i){var n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[i,s])]}function m(e){var n,a,r,s,l=e.defaultValue,c=e.queryString,o=void 0!==c&&c,d=e.groupId,m=h(e),x=(0,t.useState)((function(){return function(e){var n,a=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:m})})),f=x[0],j=x[1],v=g({queryString:o,groupId:d}),b=v[0],y=v[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),a=(0,u.Nk)(n),r=a[0],s=a[1],[r,(0,t.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=w[0],T=w[1],N=function(){var e=null!=b?b:k;return p({value:e,tabValues:m})?e:null}();return(0,i.Z)((function(){N&&j(N)}),[N]),{selectedValue:f,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);j(e),y(e),T(e)}),[y,T,m]),tabValues:m}}var x=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(85893);function v(e){var n=e.className,a=e.block,t=e.selectedValue,l=e.selectValue,i=e.tabValues,c=[],o=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,a=c.indexOf(n),r=i[a].value;r!==t&&(o(n),l(r))},d=function(e){var n,a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,r=c.indexOf(e.currentTarget)+1;a=null!=(t=c[r])?t:c[0];break;case"ArrowLeft":var s,l=c.indexOf(e.currentTarget)-1;a=null!=(s=c[l])?s:c[c.length-1]}null==(n=a)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:i.map((function(e){var n=e.value,a=e.label,s=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return c.push(e)},onKeyDown:d,onClick:u},s,{className:(0,r.Z)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===n}),children:null!=a?a:n}),n)}))})}function b(e){var n=e.lazy,a=e.children,r=e.selectedValue,s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var l=s.find((function(e){return e.props.value===r}));return l?(0,t.cloneElement)(l,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function y(e){var n=m(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(v,Object.assign({},e,n)),(0,j.jsx)(b,Object.assign({},e,n))]})}function w(e){var n=(0,x.Z)();return(0,j.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},77229:(e,n,a)=>{a.d(n,{Ey:()=>u,O2:()=>c,SQ:()=>o});a(67294);var t=a(74866),r=a(85162),s=a(95665),l=a.n(s),i=a(85893);function c(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,i.jsx)(t.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,i.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function o(e){var n=e.children,a=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var a=e.props,t=(a.children,a.url),r=a.start,s=a.end,l=a.fname;if(e.type===u)return u({url:t,start:r,end:s,language:n,fname:l});return e}(e,a)})),1==n.length?(0,i.jsx)(r.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,i.jsx)(t.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,i.jsx)(r.Z,{value:n,label:e.props.fname,children:e})}))})}function u(e){var n=e.url,a=e.start,t=e.end,r=e.language,s=e.fname,c=n+"#";return a&&t&&(c+="L"+a+"-L"+t+"#"),(0,i.jsx)(l(),{language:r,fname:s,children:c})}}}]);