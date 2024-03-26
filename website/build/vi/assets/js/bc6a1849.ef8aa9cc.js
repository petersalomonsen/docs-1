"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1006],{3064:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var c=t(85893),i=t(11151);const s={id:"accounts",title:"Account",sidebar_label:"Accounts"},r=void 0,o={id:"integrator/accounts",title:"Account",description:"Gi\u1edbi thi\u1ec7u",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/6.integrator/accounts.md",sourceDirName:"6.integrator",slug:"/integrator/accounts",permalink:"/vi/integrator/accounts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrator/accounts.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"28 thg 2, 2024",frontMatter:{id:"accounts",title:"Account",sidebar_label:"Accounts"},sidebar:"exchanges",previous:{title:"Balance Changes",permalink:"/vi/integrator/balance-changes"},next:{title:"T\u1ea1o Transaction",permalink:"/vi/integrator/create-transactions"}},a={},d=[{value:"Gi\u1edbi thi\u1ec7u",id:"introduction",level:2},{value:"Transfer t\u1eeb Function Call",id:"transfer-from-function-call",level:2}];function h(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components},{Details:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"introduction",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,c.jsxs)(e.p,{children:["Please see the ",(0,c.jsx)(e.a,{href:"/concepts/protocol/account-model",children:"documentation for accounts"})," for basic information."]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u0110\u1ed1i v\u1edbi c\xe1c s\xe0n giao d\u1ecbch, NEAR h\u1ed7 tr\u1ee3 t\u1ea1o ",(0,c.jsx)(e.a,{href:"https://nomicon.io/DataStructures/Account.html#implicit-account-ids",children:"implicit account"})," cho ph\xe9p vi\u1ec7c t\u1ea1o c\xe1c account m\xe0 kh\xf4ng c\u1ea7n tr\u1ea3 ph\xed cho b\u1ea5t k\u1ef3 transaction n\xe0o."]}),"\n",(0,c.jsxs)(e.li,{children:["B\u1ea1n c\xf3 th\u1ec3 t\u1ea1o m\u1ed9t implicit account b\u1eb1ng c\xe1ch l\xe0m theo c\xe1c b\u01b0\u1edbc trong ",(0,c.jsx)(e.a,{href:"/docs/roles/integrator/implicit-accounts",children:"h\u01b0\u1edbng d\u1eabn n\xe0y"}),"."]}),"\n",(0,c.jsxs)(e.li,{children:["Accounts must have enough tokens to cover its storage which currently costs ",(0,c.jsx)(e.code,{children:"0.0001 NEAR"})," per byte. This equates to a minimum balance of ",(0,c.jsx)(e.code,{children:"0.00182 NEAR"})," for an account with one access key. B\u1ea1n c\xf3 th\u1ec3 truy v\u1ea5n gi\xe1 storage tr\u1ef1c ti\u1ebfp b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ",(0,c.jsx)(e.a,{href:"https://docs.near.org/api/rpc/setup#protocol-config",children:(0,c.jsx)(e.code,{children:"protocol-config"})})," RPC endpoint. For more details on storage fees see ",(0,c.jsx)(e.a,{href:"https://pages.near.org/papers/economics-in-sharded-blockchain/#transaction-and-storage-fees",children:"this section of the economics paper"}),"."]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"transfer-from-function-call",children:"Transfer t\u1eeb Function Call"}),"\n",(0,c.jsx)(e.p,{children:"NEAR cho ph\xe9p c\xe1c transfer di\u1ec5n ra trong m\u1ed9t function call. Quan tr\u1ecdng h\u01a1n, khi m\u1ed9t account \u0111\u01b0\u1ee3c deploy v\u1edbi m\u1ed9t contract n\xe0o \u0111\xf3, c\xf3 th\u1ec3 c\xe1ch duy nh\u1ea5t \u0111\u1ec3 transfer c\xe1c token t\u1eeb account \u0111\xf3 l\xe0 th\xf4ng qua m\u1ed9t function call. Tuy nhi\xean, c\xe1c s\xe0n giao d\u1ecbch c\u0169ng c\u1ea7n ph\u1ea3i h\u1ed7 tr\u1ee3 vi\u1ec7c transfer th\xf4ng qua c\xe1c function call t\u01b0\u01a1ng t\u1ef1. Ch\xfang t\xf4i \u0111\u1ec1 xu\u1ea5t c\xe1ch ti\u1ebfp c\u1eadn sau:"}),"\n",(0,c.jsxs)(e.p,{children:["S\xe0n giao d\u1ecbch c\xf3 th\u1ec3 ",(0,c.jsx)(e.a,{href:"/api/rpc/setup#block",children:"truy v\u1ea5n block by height"})," \u0111\u1ec3 l\u1ea5y th\xf4ng tin c\xe1c block tr\xean m\u1ed7i height, v\xe0 \u0111\u1ed1i v\u1edbi m\u1ed7i block, ",(0,c.jsx)(e.a,{href:"/api/rpc/setup#chunk",children:"truy v\u1ea5n chunk c\u1ee7a n\xf3"})," \u0111\u1ec3 thu th\xe2p \u0111\u01b0\u1ee3c c\xe1c transtraction \u0111\u01b0\u1ee3c \u0111\xednh k\xe8m trong m\u1ed7i block. \u0110\u1ed1i v\u1edbi m\u1ed7i transaction, ",(0,c.jsx)(e.a,{href:"/api/rpc/setup#transaction-status-with-receipts",children:"truy v\u1ea5n status c\u1ee7a n\xf3"})," \u0111\u1ec3 th\u1ea5y \u0111\u01b0\u1ee3c c\xe1c receipt \u0111\u01b0\u1ee3c t\u1ea1o ra t\u1eeb c\xe1c transaction. B\u1edfi v\xec c\xe1c s\xe0n giao d\u1ecbch ch\u1ec9 quan t\xe2m \u0111\u1ebfn c\xe1c transfer \u0111\u1ebfn \u0111\u1ecba ch\u1ec9 c\u1ee7a h\u1ecd, h\u1ecd ch\u1ec9 c\u1ea7n l\u1ecdc c\xe1c receipt m\xe0 ch\u1ec9 ch\u1ee9a action ",(0,c.jsx)(e.code,{children:"Transfer"})," v\xe0 ",(0,c.jsx)(e.code,{children:"predecessor_id"})," kh\xf4ng ph\u1ea3i l\xe0 ",(0,c.jsx)(e.code,{children:"system"})," (c\xe1c receipts v\u1edbi ",(0,c.jsx)(e.code,{children:"predecessor_id"})," b\u1eb1ng ",(0,c.jsx)(e.code,{children:"system"})," l\xe0 ",(0,c.jsx)(e.a,{href:"https://nomicon.io/RuntimeSpec/Refunds.html",children:"c\xe1c refund"}),"). Sau \u0111\xf3, \u0111\u1ec3 ki\u1ec3m tra receipt c\xf3 th\xe0nh c\xf4ng hay kh\xf4ng, ch\u1ec9 c\u1ea7n t\xecm ",(0,c.jsx)(e.code,{children:"receipt_id"})," trong ",(0,c.jsx)(e.code,{children:"receipts_outcome"})," v\xe0 xem status c\u1ee7a n\xf3 l\xe0 ",(0,c.jsx)(e.code,{children:"SuccessValue"}),"."]}),"\n",(0,c.jsxs)(e.p,{children:["Ngo\xe0i ra, s\xe0n giao d\u1ecbch c\xf3 th\u1ec3 s\u1eed d\u1ee5ng ",(0,c.jsx)(e.a,{href:"https://github.com/near/nearcore/tree/master/chain/indexer",children:"indexer framework"})," \u0111\u1ec3 gi\xfap index on-chain data bao g\u1ed3m c\xe1c receipt. M\u1ed9t v\xed d\u1ee5 s\u1eed d\u1ee5ng indexer c\xf3 th\u1ec3 t\xecm th\u1ea5y ",(0,c.jsx)(e.a,{href:"https://github.com/near/nearcore/tree/master/tools/indexer/example",children:"t\u1ea1i \u0111\xe2y"}),"."]}),"\n",(0,c.jsx)(e.p,{children:"D\u01b0\u1edbi \u0111\xe2y, ch\xfang t\xf4i k\u1ec3 ra c\xe1c v\xed d\u1ee5 t\u1eeb c\xe1c contract c\xf3 kh\u1ea3 n\u0103ng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 th\u1ef1c hi\u1ec7n transfer th\xf4ng qua c\xe1c function call."}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"V\xed d\u1ee5 v\u1ec1 transfer t\u1eeb m\u1ed9t lockup contract"})}),"\n",(0,c.jsxs)(e.p,{children:["M\u1ed9t contract ",(0,c.jsx)(e.code,{children:"evgeny.lockup.near"})," \u0111\xe3 \u0111\u01b0\u1ee3c deploy v\xe0 ch\xfang ta c\xf3 th\u1ec3 ki\u1ec3m tra ch\u1ee7 s\u1edf h\u1eefu c\u1ee7a n\xf3 b\u1eb1ng c\xe1ch"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"> near view evgeny.lockup.near get_owner_account_id\nView call: evgeny.lockup.near.get_owner_account_id()\n'evgeny.near'\n"})}),"\n",(0,c.jsx)(e.p,{children:"B\xe2y gi\u1edd ch\xfang ta mu\u1ed1n chuy\u1ec3n m\u1ed9t s\u1ed1 c\xe1c unlocked token (1 NEAR) b\u1eb1ng l\u1ec7nh call sau"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:'near call evgeny.lockup.near transfer \'{"amount":"1000000000000000000000000", "receiver_id": "evgeny.near"}\' --accountId=evgeny.near\n'})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"L\u01b0u \xfd"}),": response d\u01b0\u1edbi \u0111\xe2y c\xf3 th\u1ec3 nh\u1eadn \u0111\u01b0\u1ee3c b\u1eb1ng c\xe1ch th\u1ef1c hi\u1ec7n RPC v\u1edbi transaction hash v\xe0 NEAR account nh\u01b0 sau:"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:'http post https://rpc.testnet.near.org jsonrpc=2.0 id=txstatus method=EXPERIMENTAL_tx_status \\\n  params:=\'[ "GXP8YaSonoN2eBY6dB3FbMN2NyYD2JeJJvKdvbL4Jmb2", "evgeny.near"]\'\n'})}),"\n",(0,c.jsxs)(t,{children:[(0,c.jsx)("summary",{children:(0,c.jsx)(e.strong,{children:"V\xed d\u1ee5 v\u1ec1 response nh\u01b0 sau:"})}),(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",children:'{\n  "id": "123",\n  "jsonrpc": "2.0",\n  "result": {\n    "receipts": [\n      {\n        "predecessor_id": "evgeny.near",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "FunctionCall": {\n                  "args": "eyJhbW91bnQiOiIxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIiwicmVjZWl2ZXJfaWQiOiJldmdlbnkubmVhciJ9",\n                  "deposit": "0",\n                  "gas": 100000000000000,\n                  "method_name": "transfer"\n                }\n              }\n            ],\n            "gas_price": "186029458",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "evgeny.near",\n            "signer_public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq"\n          }\n        },\n        "receipt_id": "CyJL22SYqt26qgh2XVnk9MGfvzgyiiq5Lny7DdbTdTWU",\n        "receiver_id": "evgeny.lockup.near"\n      },\n      {\n        "predecessor_id": "evgeny.lockup.near",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "1000000000000000000000000"\n                }\n              }\n            ],\n            "gas_price": "186029458",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "evgeny.near",\n            "signer_public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq"\n          }\n        },\n        "receipt_id": "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC",\n        "receiver_id": "evgeny.near"\n      },\n      {\n        "predecessor_id": "system",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "19200274886926125000"\n                }\n              }\n            ],\n            "gas_price": "0",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "evgeny.near",\n            "signer_public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq"\n          }\n        },\n        "receipt_id": "J1bBKH43nXHYg4NuS97R1PFzdZchrJboVAdRsK5NRrAv",\n        "receiver_id": "evgeny.near"\n      },\n      {\n        "predecessor_id": "system",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "18655658845681462514128"\n                }\n              }\n            ],\n            "gas_price": "0",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "evgeny.near",\n            "signer_public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq"\n          }\n        },\n        "receipt_id": "6PFaxnNvK5r6qxBq5WfV9uGjoNM6qjhHwLehLP1qak9d",\n        "receiver_id": "evgeny.near"\n      }\n    ],\n    "receipts_outcome": [\n      {\n        "block_hash": "9boEKq9G1UFsEuzmuQrxh5dkRc8xsv8PSPGEkYiTyRLj",\n        "id": "CyJL22SYqt26qgh2XVnk9MGfvzgyiiq5Lny7DdbTdTWU",\n        "outcome": {\n          "executor_id": "evgeny.lockup.near",\n          "gas_burnt": 3574640311481,\n          "logs": [\n            "Transferring 1000000000000000000000000 to account @evgeny.near"\n          ],\n          "receipt_ids": [\n            "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC",\n            "6PFaxnNvK5r6qxBq5WfV9uGjoNM6qjhHwLehLP1qak9d"\n          ],\n          "status": {\n            "SuccessReceiptId": "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC"\n          },\n          "tokens_burnt": "357464031148100000000"\n        },\n        "proof": []\n      },\n      {\n        "block_hash": "7qn4BjmMD4QbyVvMa8QEzm7h5YuhoGTFTgLeNMUp85UQ",\n        "id": "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC",\n        "outcome": {\n          "executor_id": "evgeny.near",\n          "gas_burnt": 223182562500,\n          "logs": [],\n          "receipt_ids": ["J1bBKH43nXHYg4NuS97R1PFzdZchrJboVAdRsK5NRrAv"],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "22318256250000000000"\n        },\n        "proof": [\n          {\n            "direction": "Right",\n            "hash": "AwHdk5dushTSXHFBt3R5MiexjiXybwdnEaB7L9iJ5F6t"\n          }\n        ]\n      },\n      {\n        "block_hash": "46788Ay85YGnQaH5tfbboQNWJs3gyXsPbcWzRyxqw56K",\n        "id": "J1bBKH43nXHYg4NuS97R1PFzdZchrJboVAdRsK5NRrAv",\n        "outcome": {\n          "executor_id": "evgeny.near",\n          "gas_burnt": 0,\n          "logs": [],\n          "receipt_ids": [],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "0"\n        },\n        "proof": []\n      },\n      {\n        "block_hash": "7qn4BjmMD4QbyVvMa8QEzm7h5YuhoGTFTgLeNMUp85UQ",\n        "id": "6PFaxnNvK5r6qxBq5WfV9uGjoNM6qjhHwLehLP1qak9d",\n        "outcome": {\n          "executor_id": "evgeny.near",\n          "gas_burnt": 0,\n          "logs": [],\n          "receipt_ids": [],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "0"\n        },\n        "proof": [\n          {\n            "direction": "Left",\n            "hash": "9RRJpH5VdDxsHpp323EshcAauV5wUNDyW9FpEJBRXXq8"\n          }\n        ]\n      }\n    ],\n    "status": {\n      "SuccessValue": ""\n    },\n    "transaction": {\n      "actions": [\n        {\n          "FunctionCall": {\n            "args": "eyJhbW91bnQiOiIxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIiwicmVjZWl2ZXJfaWQiOiJldmdlbnkubmVhciJ9",\n            "deposit": "0",\n            "gas": 100000000000000,\n            "method_name": "transfer"\n          }\n        }\n      ],\n      "hash": "GXP8YaSonoN2eBY6dB3FbMN2NyYD2JeJJvKdvbL4Jmb2",\n      "nonce": 6,\n      "public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq",\n      "receiver_id": "evgeny.lockup.near",\n      "signature": "ed25519:4nfzTMpQJKCY3KaqUTFig4Xy9uxwbMeQpMJjtNKsXmwiVqgcVSWRguZEgZM8L2x1jvdpZHsYjLCxc9cSBamXuXPH",\n      "signer_id": "evgeny.near"\n    },\n    "transaction_outcome": {\n      "block_hash": "4u7maz2U43W4DPxqQE8KoRNi5dTRHrAsKsFk2qDQsQEw",\n      "id": "GXP8YaSonoN2eBY6dB3FbMN2NyYD2JeJJvKdvbL4Jmb2",\n      "outcome": {\n        "executor_id": "evgeny.near",\n        "gas_burnt": 2428086459116,\n        "logs": [],\n        "receipt_ids": ["CyJL22SYqt26qgh2XVnk9MGfvzgyiiq5Lny7DdbTdTWU"],\n        "status": {\n          "SuccessReceiptId": "CyJL22SYqt26qgh2XVnk9MGfvzgyiiq5Lny7DdbTdTWU"\n        },\n        "tokens_burnt": "242808645911600000000"\n      },\n      "proof": []\n    }\n  }\n}\n'})})]}),"\n",(0,c.jsxs)(e.p,{children:["Nh\u01b0 ch\xfang ta c\xf3 th\u1ec3 th\u1ea5y, c\xf3 b\u1ed1n receipt \u0111\u01b0\u1ee3c t\u1ea1o ra trong function call n\xe0y. N\u1ebfu ch\xfang ta \xe1p d\u1ee5ng c\xe1c ti\xeau ch\xed \u0111\xe3 \u0111\u1ec1 c\u1eadp \u1edf tr\xean, ch\xfang ta c\xf3 th\u1ec3 t\xecm trong ",(0,c.jsx)(e.code,{children:"c\xe1c receipt"})," field object n\xe0y"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",children:'{\n  "predecessor_id": "evgeny.lockup.near",\n  "receipt": {\n    "Action": {\n      "actions": [\n        {\n          "Transfer": {\n            "deposit": "1000000000000000000000000"\n          }\n        }\n      ],\n      "gas_price": "186029458",\n      "input_data_ids": [],\n      "output_data_receivers": [],\n      "signer_id": "evgeny.near",\n      "signer_public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq"\n    }\n  },\n  "receipt_id": "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC",\n  "receiver_id": "evgeny.near"\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["ch\u1ec9 ch\u1ee9a ",(0,c.jsx)(e.code,{children:"Transfer"})," action v\xe0 c\xf3 ",(0,c.jsx)(e.code,{children:"predecessor_id"})," kh\xf4ng ph\u1ea3i l\xe0 ",(0,c.jsx)(e.code,{children:"system"}),". B\xe2y gi\u1edd ch\xfang ta c\xf3 th\u1ec3 ki\u1ec3m tra status c\u1ee7a qu\xe1 tr\xecnh th\u1ef1c thi b\u1eb1ng c\xe1ch t\xecm m\u1ed9t receipt id t\u01b0\u01a1ng t\u1ef1 ",(0,c.jsx)(e.code,{children:"EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC"})," trong ",(0,c.jsx)(e.code,{children:"receipts_outcome"})," field c\u1ee7a k\u1ebft qu\u1ea3 \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 t\u1eeb rpc, \u0111i\u1ec1u n\xe0y d\u1eabn ch\xfang ta \u0111\u1ebfn k\u1ebft qu\u1ea3 th\u1ef1c thi n\xe0y"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",children:'{\n  "block_hash": "7qn4BjmMD4QbyVvMa8QEzm7h5YuhoGTFTgLeNMUp85UQ",\n  "id": "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC",\n  "outcome": {\n    "executor_id": "evgeny.near",\n    "gas_burnt": 223182562500,\n    "logs": [],\n    "receipt_ids": ["J1bBKH43nXHYg4NuS97R1PFzdZchrJboVAdRsK5NRrAv"],\n    "status": {\n      "SuccessValue": ""\n    },\n    "tokens_burnt": "22318256250000000000"\n  },\n  "proof": [\n    {\n      "direction": "Right",\n      "hash": "AwHdk5dushTSXHFBt3R5MiexjiXybwdnEaB7L9iJ5F6t"\n    }\n  ]\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["v\xe0 status c\u1ee7a n\xf3 ch\u1ee9a ",(0,c.jsx)(e.code,{children:"SuccessValue"}),", \u0111i\u1ec1u n\xe0y cho bi\u1ebft r\u1eb1ng receipt \u0111\xe3 th\xe0nh c\xf4ng. Do \u0111\xf3 ch\xfang ta bi\u1ebft r\u1eb1ng ",(0,c.jsx)(e.code,{children:"1000000000000000000000000"})," yoctoNEAR, hay 1 NEAR \u0111\xe3 \u0111\u01b0\u1ee3c chuy\u1ec3n th\xe0nh c\xf4ng."]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"V\xed d\u1ee5 v\u1ec1 transfer t\u1eeb m\u1ed9t multisig contract"})}),"\n",(0,c.jsx)(e.p,{children:"Mutisig contract, gi\u1ed1ng nh\u01b0 t\xean c\u1ee7a n\xf3, s\u1eed d\u1ee5ng nhi\u1ec1u ch\u1eef k\xfd \u0111\u1ec3 x\xe1c nh\u1eadn m\u1ed9t transaction v\xe0 do \u0111\xf3, c\xe1c h\xe0nh \u0111\u1ed9ng \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n b\u1edfi multisig contract bao g\u1ed3m nhi\u1ec1u transaction. In the following example, we will show how a transfer is done from a multisig contract that requires two confirmations."}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["B\u01b0\u1edbc \u0111\u1ea7u ti\xean: ",(0,c.jsx)(e.code,{children:"add_request_and_confirm"}),". Vi\u1ec7c n\xe0y b\u1eaft \u0111\u1ea7u h\xe0nh \u0111\u1ed9ng m\xe0 multisig contract mu\u1ed1n th\u1ef1c hi\u1ec7n v\u1edbi m\u1ed9t x\xe1c nh\u1eadn. Multisig contract ",(0,c.jsx)(e.code,{children:"multsigtest.testnet"})," mu\u1ed1n transfer 1 NEAR t\u1edbi ",(0,c.jsx)(e.code,{children:"bowen"})," v\xe0 \u0111\u1ea7u ti\xean n\xf3 g\u1eedi m\u1ed9t transaction, call ",(0,c.jsx)(e.code,{children:"add_request_and_confirm"})," v\u1edbi m\u1ed9t request"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",children:'{\n  "request": {\n    "receiver_id": "bowen",\n    "actions": [\n      {\n        "type": "Transfer",\n        "amount": "1000000000000000000000000"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u0111i\u1ec1u \u0111\xf3 cho th\u1ea5y n\xf3 mu\u1ed1n chuy\u1ec3n 1 NEAR t\u1edbi ",(0,c.jsx)(e.code,{children:"bowen"}),". L\u01b0u \xfd r\u1eb1ng transaction n\xe0y ch\u1ec9 ghi l\u1ea1i h\xe0nh \u0111\u1ed9ng m\xe0 kh\xf4ng th\u1ef1c hi\u1ec7n transfer th\u1ef1c t\u1ebf. K\u1ebft qu\u1ea3 transaction nh\u01b0 sau:"]}),"\n",(0,c.jsxs)(t,{children:[(0,c.jsx)("summary",{children:(0,c.jsx)(e.strong,{children:"V\xed d\u1ee5 v\u1ec1 response nh\u1eadn \u0111\u01b0\u1ee3c:"})}),(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",children:'{\n  "id": "123",\n  "jsonrpc": "2.0",\n  "result": {\n    "receipts": [\n      {\n        "predecessor_id": "system",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "3069687780141648922140"\n                }\n              }\n            ],\n            "gas_price": "0",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "multisigtest.testnet",\n            "signer_public_key": "ed25519:JDewsbE7nz6orFD4zJ3mVzqhfcaoSD6Hmi5as3AHHiTt"\n          }\n        },\n        "receipt_id": "4qgDptd7Wm6vswAhWMCsVpTjBEkmLJEUxSNVQS1wu3rD",\n        "receiver_id": "multisigtest.testnet"\n      }\n    ],\n    "receipts_outcome": [\n      {\n        "block_hash": "6uJWHTvUrtFQAurUyfuAfy9EdoR9FhLodGh44aHJta6m",\n        "id": "94LiYwKJEDherHMNg9fqLy9ShFTDiQiUN3nDaGmLZwth",\n        "outcome": {\n          "executor_id": "multisigtest.testnet",\n          "gas_burnt": 8024094920263,\n          "logs": [],\n          "receipt_ids": ["4qgDptd7Wm6vswAhWMCsVpTjBEkmLJEUxSNVQS1wu3rD"],\n          "status": {\n            "SuccessValue": "OA=="\n          },\n          "tokens_burnt": "802409492026300000000"\n        },\n        "proof": [\n          {\n            "direction": "Left",\n            "hash": "GedzmwRkxA5VkT8GLBCnrPUmnEhWPXadPmiq4Ho1s9pH"\n          },\n          {\n            "direction": "Right",\n            "hash": "GirkzdS9YpsAz5fXuL5T3rXd93aRcnXNAdXYi241qpWK"\n          }\n        ]\n      },\n      {\n        "block_hash": "4JyQ6guJKeWZxxXrKndLDuSa5URuirmBi6RzsbKYFsBE",\n        "id": "4qgDptd7Wm6vswAhWMCsVpTjBEkmLJEUxSNVQS1wu3rD",\n        "outcome": {\n          "executor_id": "multisigtest.testnet",\n          "gas_burnt": 0,\n          "logs": [],\n          "receipt_ids": [],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "0"\n        },\n        "proof": []\n      }\n    ],\n    "status": {\n      "SuccessValue": "OA=="\n    },\n    "transaction": {\n      "actions": [\n        {\n          "FunctionCall": {\n            "args": "eyJyZXF1ZXN0Ijp7InJlY2VpdmVyX2lkIjoiYm93ZW4iLCJhY3Rpb25zIjpbeyJ0eXBlIjoiVHJhbnNmZXIiLCJhbW91bnQiOiIxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIn1dfX0=",\n            "deposit": "0",\n            "gas": 30000000000000,\n            "method_name": "add_request_and_confirm"\n          }\n        }\n      ],\n      "hash": "FGREJkC1e8y95Rc35iD1LVRiDy1WcAZhAxxkSinfb2mL",\n      "nonce": 10,\n      "public_key": "ed25519:JDewsbE7nz6orFD4zJ3mVzqhfcaoSD6Hmi5as3AHHiTt",\n      "receiver_id": "multisigtest.testnet",\n      "signature": "ed25519:3NUKXd4uj2eEBqGQtRAxkTFW7UfG44tjvQNNHBDvN9ZswTTMRsDrMJSd1U3GqWF7QToqWQR9J8atNEVTemSWYw41",\n      "signer_id": "multisigtest.testnet"\n    },\n    "transaction_outcome": {\n      "block_hash": "6uJWHTvUrtFQAurUyfuAfy9EdoR9FhLodGh44aHJta6m",\n      "id": "FGREJkC1e8y95Rc35iD1LVRiDy1WcAZhAxxkSinfb2mL",\n      "outcome": {\n        "executor_id": "multisigtest.testnet",\n        "gas_burnt": 2428204963618,\n        "logs": [],\n        "receipt_ids": ["94LiYwKJEDherHMNg9fqLy9ShFTDiQiUN3nDaGmLZwth"],\n        "status": {\n          "SuccessReceiptId": "94LiYwKJEDherHMNg9fqLy9ShFTDiQiUN3nDaGmLZwth"\n        },\n        "tokens_burnt": "242820496361800000000"\n      },\n      "proof": [\n        {\n          "direction": "Right",\n          "hash": "AsNAQabPFkmaugRGhCbzcEcR8Gnd22WXxPM2fb2cwHiv"\n        },\n        {\n          "direction": "Right",\n          "hash": "GirkzdS9YpsAz5fXuL5T3rXd93aRcnXNAdXYi241qpWK"\n        }\n      ]\n    }\n  }\n}\n'})})]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["B\u01b0\u1edbc th\u1ee9 2: ",(0,c.jsx)(e.code,{children:"confirm"}),". Transaction th\u1ee9 hai \u0111\u01b0\u1ee3c g\u1eedi \u0111\u1ec3 x\xe1c nh\u1eadn transfer. Transaction n\xe0y s\u1eed d\u1ee5ng request id \u0111\u01b0\u1ee3c tr\u1ea3 l\u1ea1i b\u1edfi transaction \u0111\u1ea7u ti\xean v\xe0 th\u1ef1c hi\u1ec7n actual transfer. K\u1ebft qu\u1ea3 transaction nh\u01b0 sau"]}),"\n"]}),"\n",(0,c.jsxs)(t,{children:[(0,c.jsx)("summary",{children:"** V\xed d\u1ee5 v\u1ec1 response nh\u1eadn \u0111\u01b0\u1ee3c:**"}),(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",children:'{\n  "id": "123",\n  "jsonrpc": "2.0",\n  "result": {\n    "receipts": [\n      {\n        "predecessor_id": "multisigtest.testnet",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "1000000000000000000000000"\n                }\n              }\n            ],\n            "gas_price": "451542320",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "multisigtest.testnet",\n            "signer_public_key": "ed25519:BmVX32jhvEd8d8outiQdjf66GGYV3pb7kaxrKTdNisCz"\n          }\n        },\n        "receipt_id": "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy",\n        "receiver_id": "bowen"\n      },\n      {\n        "predecessor_id": "system",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "78458115804795000000"\n                }\n              }\n            ],\n            "gas_price": "0",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "multisigtest.testnet",\n            "signer_public_key": "ed25519:BmVX32jhvEd8d8outiQdjf66GGYV3pb7kaxrKTdNisCz"\n          }\n        },\n        "receipt_id": "6SxC9GfYdjqm7Ao5EAw51XUAjgoN8Lj2X9xJfxjDQYXd",\n        "receiver_id": "multisigtest.testnet"\n      },\n      {\n        "predecessor_id": "system",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "112870156274913516718240"\n                }\n              }\n            ],\n            "gas_price": "0",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "multisigtest.testnet",\n            "signer_public_key": "ed25519:BmVX32jhvEd8d8outiQdjf66GGYV3pb7kaxrKTdNisCz"\n          }\n        },\n        "receipt_id": "CHfzz6NLcQMyiLHBQoczhgm5BFjLVfv9B7eCyXKLhhcT",\n        "receiver_id": "multisigtest.testnet"\n      }\n    ],\n    "receipts_outcome": [\n      {\n        "block_hash": "9JEiMrZ1SpAUEbQswde3Diptzwy35Vrvd41VZWG9hYVE",\n        "id": "FfuhYhsgFL7sLC8pk1tuRnMHJdqycE6gEcfgZLW9fmFB",\n        "outcome": {\n          "executor_id": "multisigtest.testnet",\n          "gas_burnt": 10109796553814,\n          "logs": [],\n          "receipt_ids": [\n            "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy",\n            "CHfzz6NLcQMyiLHBQoczhgm5BFjLVfv9B7eCyXKLhhcT"\n          ],\n          "status": {\n            "SuccessReceiptId": "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy"\n          },\n          "tokens_burnt": "1010979655381400000000"\n        },\n        "proof": [\n          {\n            "direction": "Left",\n            "hash": "9e2UcG6qBRahBh3V2Z8bGJLh5c4jXfZdP3WBJkCpJCfj"\n          }\n        ]\n      },\n      {\n        "block_hash": "4LkVfqyhhrxDdVFmow6NxLf1jTaj6XVr7CVcUxxySd1R",\n        "id": "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy",\n        "outcome": {\n          "executor_id": "bowen",\n          "gas_burnt": 223182562500,\n          "logs": [],\n          "receipt_ids": ["6SxC9GfYdjqm7Ao5EAw51XUAjgoN8Lj2X9xJfxjDQYXd"],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "22318256250000000000"\n        },\n        "proof": [\n          {\n            "direction": "Right",\n            "hash": "FFWaWUFt6sNx5XNHzGYsYBSYFWtGPoww5XQz1QmLVc8i"\n          }\n        ]\n      },\n      {\n        "block_hash": "G6LDdnAa2b38TB4KZ89HAyVgfgyiRPDDgSxoZypbUYpx",\n        "id": "6SxC9GfYdjqm7Ao5EAw51XUAjgoN8Lj2X9xJfxjDQYXd",\n        "outcome": {\n          "executor_id": "multisigtest.testnet",\n          "gas_burnt": 0,\n          "logs": [],\n          "receipt_ids": [],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "0"\n        },\n        "proof": []\n      },\n      {\n        "block_hash": "4LkVfqyhhrxDdVFmow6NxLf1jTaj6XVr7CVcUxxySd1R",\n        "id": "CHfzz6NLcQMyiLHBQoczhgm5BFjLVfv9B7eCyXKLhhcT",\n        "outcome": {\n          "executor_id": "multisigtest.testnet",\n          "gas_burnt": 0,\n          "logs": [],\n          "receipt_ids": [],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "0"\n        },\n        "proof": [\n          {\n            "direction": "Left",\n            "hash": "DpDYAEKZTtSomgyeNcJ2i4qjvfqnCtf1CXa83Cz5wvEy"\n          }\n        ]\n      }\n    ],\n    "status": {\n      "SuccessValue": ""\n    },\n    "transaction": {\n      "actions": [\n        {\n          "FunctionCall": {\n            "args": "eyJyZXF1ZXN0X2lkIjo4fQ==",\n            "deposit": "0",\n            "gas": 250000000000000,\n            "method_name": "confirm"\n          }\n        }\n      ],\n      "hash": "Fu39vwxC4mu9ks1DZA5Cib63RnBMHpFonk2DcbpioEYc",\n      "nonce": 9,\n      "public_key": "ed25519:BmVX32jhvEd8d8outiQdjf66GGYV3pb7kaxrKTdNisCz",\n      "receiver_id": "multisigtest.testnet",\n      "signature": "ed25519:2raQq7t3cmzSL2krE2xaNqXhAw7cKMoXrBjT2ZhAGfCVtGwzbbQ8zkB17vrCSFZDbFmPWSJpoqsw8qPZZiorwSzS",\n      "signer_id": "multisigtest.testnet"\n    },\n    "transaction_outcome": {\n      "block_hash": "9JEiMrZ1SpAUEbQswde3Diptzwy35Vrvd41VZWG9hYVE",\n      "id": "Fu39vwxC4mu9ks1DZA5Cib63RnBMHpFonk2DcbpioEYc",\n      "outcome": {\n        "executor_id": "multisigtest.testnet",\n        "gas_burnt": 2427972426482,\n        "logs": [],\n        "receipt_ids": ["FfuhYhsgFL7sLC8pk1tuRnMHJdqycE6gEcfgZLW9fmFB"],\n        "status": {\n          "SuccessReceiptId": "FfuhYhsgFL7sLC8pk1tuRnMHJdqycE6gEcfgZLW9fmFB"\n        },\n        "tokens_burnt": "242797242648200000000"\n      },\n      "proof": [\n        {\n          "direction": "Right",\n          "hash": "B6hN48qeVP8J3hP8XGcANShM264QkNjgJAfMtsuknqex"\n        }\n      ]\n    }\n  }\n}\n'})})]}),"\n",(0,c.jsxs)(e.p,{children:["L\u01b0u \xfd r\u1eb1ng t\u01b0\u01a1ng t\u1ef1 nh\u01b0 transfer t\u1eeb lockup contract, c\u0169ng c\xf3 m\u1ed9t receipt trong ",(0,c.jsx)(e.code,{children:"receipts"})," field \u0111\xe1p \u1ee9ng y\xeau c\u1ea7u c\u1ee7a ch\xfang ta:"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",children:'{\n  "predecessor_id": "multisigtest.testnet",\n  "receipt": {\n    "Action": {\n      "actions": [\n        {\n          "Transfer": {\n            "deposit": "1000000000000000000000000"\n          }\n        }\n      ],\n      "gas_price": "451542320",\n      "input_data_ids": [],\n      "output_data_receivers": [],\n      "signer_id": "multisigtest.testnet",\n      "signer_public_key": "ed25519:BmVX32jhvEd8d8outiQdjf66GGYV3pb7kaxrKTdNisCz"\n    }\n  },\n  "receipt_id": "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy",\n  "receiver_id": "bowen"\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["v\xe0 ch\xfang ta c\xf3 th\u1ec3 t\xecm th\u1ea5y k\u1ebft qu\u1ea3 c\u1ee7a n\xf3 trong ",(0,c.jsx)(e.code,{children:"receipts_outcome"}),":"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",children:'{\n  "block_hash": "4LkVfqyhhrxDdVFmow6NxLf1jTaj6XVr7CVcUxxySd1R",\n  "id": "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy",\n  "outcome": {\n    "executor_id": "bowen",\n    "gas_burnt": 223182562500,\n    "logs": [],\n    "receipt_ids": ["6SxC9GfYdjqm7Ao5EAw51XUAjgoN8Lj2X9xJfxjDQYXd"],\n    "status": {\n      "SuccessValue": ""\n    },\n    "tokens_burnt": "22318256250000000000"\n  },\n  "proof": [\n    {\n      "direction": "Right",\n      "hash": "FFWaWUFt6sNx5XNHzGYsYBSYFWtGPoww5XQz1QmLVc8i"\n    }\n  ]\n}\n'})}),"\n",(0,c.jsx)(e.p,{children:"cho bi\u1ebft r\u1eb1ng transaction \u0111\xe3 th\xe0nh c\xf4ng."}),"\n",(0,c.jsx)(e.admonition,{title:"Got a question?",type:"tip",children:(0,c.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol",children:" Ask it on StackOverflow! "})})]})}function u(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(h,{...n})}):h(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>r});var c=t(67294);const i={},s=c.createContext(i);function r(n){const e=c.useContext(s);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),c.createElement(s.Provider,{value:e},n.children)}}}]);