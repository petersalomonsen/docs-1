"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6104],{58143:(n,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var e=i(85893),c=i(11151);const r={id:"introduction",title:"Gi\u1edbi thi\u1ec7u",sidebar_label:"Gi\u1edbi thi\u1ec7u"},o=void 0,a={id:"integrator/errors/introduction",title:"Gi\u1edbi thi\u1ec7u",description:"did you know?",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/6.integrator/errors/introduction.md",sourceDirName:"6.integrator/errors",slug:"/integrator/errors/introduction",permalink:"/vi/integrator/errors/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrator/errors/introduction.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"28 thg 2, 2024",frontMatter:{id:"introduction",title:"Gi\u1edbi thi\u1ec7u",sidebar_label:"Gi\u1edbi thi\u1ec7u"},sidebar:"exchanges",previous:{title:"Implicit Account",permalink:"/vi/integrator/implicit-accounts"},next:{title:"\u0110\xe1nh Gi\xe1 Source Code",permalink:"/vi/integrator/errors/error-implementation"}},h={},s=[{value:"V\xf2ng \u0111\u1eddi c\u1ee7a m\u1ed9t transaction:",id:"the-life-of-a-transaction",level:2},{value:"C\xe1c l\u1ed7i c\u1ee7a n\u1ec1n t\u1ea3ng NEAR",id:"near-platform-errors",level:2},{value:"RuntimeError v\xe0 c\xe1c subtype",id:"runtimeerror-and-subtypes",level:3},{value:"TxExecutionError v\xe0 c\xe1c subtype",id:"txexecutionerror-and-subtypes",level:3},{value:"VMerror v\xe0 c\xe1c subtype",id:"vmerror-and-subtypes",level:3}];function d(n){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("blockquote",{className:"info",children:[(0,e.jsx)("strong",{children:"did you know?"}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsxs)(t.p,{children:["The ",(0,e.jsx)(t.a,{href:"/concepts/welcome",children:"NEAR Platform overview"})," clarifies much of the language in this section."]})]}),"\n",(0,e.jsx)(t.h2,{id:"the-life-of-a-transaction",children:"V\xf2ng \u0111\u1eddi c\u1ee7a m\u1ed9t transaction:"}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsx)(t.li,{children:"M\u1ed9t client t\u1ea1o ra transaction, t\xednh to\xe1n transaction hash v\xe0 sign hash n\xe0y \u0111\u1ec3 c\xf3 \u0111\u01b0\u1ee3c m\u1ed9t transaction \u0111\xe3 sign. B\xe2y gi\u1edd transaction \u0111\xe3 sign n\xe0y c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c g\u1eedi \u0111\u1ebfn m\u1ed9t node."}),"\n",(0,e.jsxs)(t.li,{children:["RPC interface nh\u1eadn transaction n\xe0y v\xe0 \u0111i\u1ec1u h\u01b0\u1edbng n\xf3 t\u1edbi ch\xednh x\xe1c m\u1ed9t node v\u1eadt l\xfd th\xf4ng qua ",(0,e.jsx)(t.code,{children:"signer_id"}),".  B\u1edfi v\xec ",(0,e.jsx)(t.code,{children:"signer_id"})," ph\u1ea3i l\xe0 m\u1ed9t NEAR Account ID, n\u1eb1m tr\xean m\u1ed9t shard duy nh\u1ea5t, account n\xe0y \u0111\u01b0\u1ee3c \xe1nh x\u1ea1 t\u1edbi m\u1ed9t shard theo sau b\u1edfi t\u1ed1i thi\u1ec3u m\u1ed9t validator \u0111ang ch\u1ea1y t\u1ed1i thi\u1ec3u m\u1ed9t m\xe1y v\u1edbi m\u1ed9t \u0111\u1ecba ch\u1ec9 IP."]}),"\n",(0,e.jsxs)(t.li,{children:["Khi m\u1ed9t node nh\u1eadn m\u1ed9t transaction \u0111\xe3 sign m\u1edbi, n\xf3 s\u1ebd x\xe1c nh\u1eadn transaction n\xe0y v\u1edbi c\xe1c th\xf4ng s\u1ed1 signer, receiver, s\u1ed1 d\u01b0 t\xe0i kho\u1ea3n, cost overflow, signature, v.v. (",(0,e.jsx)(t.a,{href:"https://nomicon.io/RuntimeSpec/Scenarios/FinancialTransaction.html#transaction-to-receipt",children:"xem t\u1ea1i \u0111\xe2y"}),") v\xe0 \u0111\u01b0a n\xf3 cho t\u1ea5t c\u1ea3 c\xe1c peer theo c\xf9ng m\u1ed9t shard. N\u1ebfu m\u1ed9t transaction c\xf3 signature kh\xf4ng h\u1ee3p l\u1ec7 ho\u1eb7c state m\u1edbi nh\u1ea5t kh\xf4ng h\u1ee3p l\u1ec7, n\xf3 s\u1ebd nhanh ch\xf3ng b\u1ecb t\u1eeb ch\u1ed1i v\xe0 tr\u1ea3 v\u1ec1 l\u1ed7i cho RPC call ban \u0111\u1ea7u."]}),"\n",(0,e.jsx)(t.li,{children:"C\xe1c transaction h\u1ee3p l\u1ec7 \u0111\u01b0\u1ee3c th\xeam v\xe0o m\u1ed9t transaction pool (m\u1ecdi node x\xe1c th\u1ef1c \u0111\u1ec1u c\xf3 m\u1ed9t b\u1ea3n sao \u0111\u1ed9c l\u1eadp ri\xeang c\u1ee7a transaction pool). Transaction pool duy tr\xec c\xe1c transaction ch\u01b0a \u0111\u01b0\u1ee3c lo\u1ea1i b\u1ecf v\xe0 ch\u01b0a \u0111\u01b0\u1ee3c \u0111\u01b0a v\xe0o chain."}),"\n",(0,e.jsxs)(t.li,{children:["T\u1ea1i m\u1ed9t th\u1eddi \u0111i\u1ec3m, m\u1ed9t pool iterator \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 ch\u1ecdn c\xe1c transaction t\u1eeb m\u1ed9t pool, theo th\u1ee9 t\u1ef1 t\u1eeb nonce nh\u1ecf nh\u1ea5t \u0111\u1ebfn l\u1edbn nh\u1ea5t, cho \u0111\u1ebfn khi h\u1ebft pool ho\u1eb7c \u0111\u1ea1t \u0111\u1ebfn m\u1ed9t s\u1ed1 gi\u1edbi h\u1ea1n c\u1ee7a chunk (s\u1ed1 l\u01b0\u1ee3ng transaction t\u1ed1i \u0111a m\u1ed7i chunk ho\u1eb7c s\u1ed1 gas t\u1ed1i \u0111a \u0111\u01b0\u1ee3c \u0111\u1ed1t m\u1ed7i chunk \u0111\u1ec3 x\u1eed l\xfd c\xe1c transaction n\xe0y).  Please refer to articles on the ",(0,e.jsx)(t.a,{href:"https://nomicon.io/ChainSpec/Transactions.html?highlight=pool#pool-iterator",children:"pool iterator"})," and ",(0,e.jsx)(t.a,{href:"/concepts/protocol/gas",children:"gas"})," for more details."]}),"\n",(0,e.jsx)(t.li,{children:"\u0110\u1ec3 ph\xf9 h\u1ee3p v\u1edbi b\u1ea3n ch\u1ea5t ph\xe2n t\xe1n c\u1ee7a m\u1ed9t sharded blockchain, t\u1ea5t c\u1ea3 c\xe1c transaction \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 l\u1ea7n l\u01b0\u1ee3t cho m\u1ed9t ph\xe2n \u0111o\u1ea1n transaction pool c\xf3 3 l\u1edbp ri\xeang bi\u1ec7t: c\xe1c transaction \u0111\u01b0\u1ee3c ch\u1ea5p nh\u1eadn (s\u1ebd \u0111\u01b0\u1ee3c x\u1eed l\xfd tr\xean chunk ti\u1ebfp theo), c\xe1c transaction \u0111ang ch\u1edd x\u1eed l\xfd (\u0111\xe3 v\u01b0\u1ee3t qu\xe1 c\xe1c gi\u1edbi h\u1ea1n c\u1ee7a chunk hi\u1ec7n t\u1ea1i v\xe0 s\u1ebd \u0111\u01b0\u1ee3c th\xeam v\xe0o chu tr\xecnh x\u1eed l\xfd sau) v\xe0 c\xe1c transaction kh\xf4ng h\u1ee3p l\u1ec7 (s\u1ebd b\u1ecb t\u1eeb ch\u1ed1i t\u1ea1i th\u1eddi \u0111i\u1ec3m kh\u1ea3 d\u1ee5ng ti\u1ebfp theo)."}),"\n",(0,e.jsx)(t.li,{children:"Tr\u01b0\u1edbc khi t\u1ea1o m\u1ed9t chunk, c\xe1c transaction \u0111\u01b0\u1ee3c s\u1eafp x\u1ebfp v\xe0 x\xe1c nh\u1eadn l\u1ea1i m\u1ed9t l\u1ea7n n\u1eefa. \u0110i\u1ec1u n\xe0y \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n \u0111\u1ec3 t\u1ea1o ra c\xe1c chunk ch\u1ec9 c\xf3 c\xe1c transaction h\u1ee3p l\u1ec7 tr\xean to\xe0n h\u1ec7 th\u1ed1ng ph\xe2n t\xe1n."}),"\n",(0,e.jsx)(t.li,{children:"Trong khi m\u1ed9t transaction \u0111ang \u0111\u01b0\u1ee3c x\u1eed l\xfd tr\xean m\u1ed9t chunk, b\u1ea5t k\xec l\u1ed7i n\xe0o ph\xe1t sinh t\u1eeb c\xe1c action c\u1ee7a \u1ee9ng d\u1ee5ng c\u0169ng \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 th\xf4ng qua RPC."}),"\n"]}),"\n",(0,e.jsx)(t.h2,{id:"near-platform-errors",children:"C\xe1c l\u1ed7i c\u1ee7a n\u1ec1n t\u1ea3ng NEAR"}),"\n",(0,e.jsxs)(t.p,{children:["C\xe1c l\u1ed7i do n\u1ec1n t\u1ea3ng NEAR \u0111\u01b0a ra \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n \u1edf c\xe1c file sau trong ",(0,e.jsx)(t.code,{children:"nearcore"}),":"]}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsx)(t.li,{children:(0,e.jsx)(t.a,{href:"https://github.com/near/nearcore/blob/master/core/primitives/src/errors.rs",children:"nearcore/core/primitives/src/errors.rs"})}),"\n",(0,e.jsx)(t.li,{children:(0,e.jsx)(t.a,{href:"https://github.com/near/nearcore/blob/master/runtime/near-vm-errors/src/lib.rs",children:"nearcore/runtime/near-vm-errors/src/lib.rs"})}),"\n"]}),"\n",(0,e.jsx)(t.p,{children:"Trang n\xe0y bao g\u1ed3m:"}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"RuntimeError v\xe0 c\xe1c subtype"}),": c\xe1c l\u1ed7i ph\xe1t sinh khi m\u1ed9t transaction \u0111\u01b0\u1ee3c node \u0111\xedch nh\u1eadn \u0111\u01b0\u1ee3c \u0111\u1ea7u ti\xean v\xe0 m\u1ed9t l\u1ea7n n\u1eefa, tr\u01b0\u1edbc khi n\xf3 \u0111\u01b0\u1ee3c x\u1eed l\xfd v\xe0 \xe1p d\u1ee5ng cho m\u1ed9t chunk"]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"TxExecutionError v\xe0 c\xe1c subtype"}),": c\xe1c l\u1ed7i ph\xe1t sinh khi m\u1ed9t transaction v\xe0 (c\xe1c) component action c\u1ee7a n\xf3 \u0111ang \u0111\u01b0\u1ee3c x\xe1c nh\u1eadn v\xe0 \xe1p d\u1ee5ng cho m\u1ed9t chunk"]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"VMerror and v\xe0 c\xe1c subtype"}),": c\xe1c l\u1ed7i ph\xe1t sinh trong qu\xe1 tr\xecnh th\u1ef1c thi Wasm contract b\u1edfi NEAR VM"]}),"\n"]}),"\n",(0,e.jsx)(t.h3,{id:"runtimeerror-and-subtypes",children:"RuntimeError v\xe0 c\xe1c subtype"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-text",children:"RuntimeError                                              L\u1ed7i \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 t\u1eeb `Runtime::apply  \n  StorageError                                            L\u1ed7i kh\xf4ng mong mu\u1ed1n th\u01b0\u1eddng li\xean quan \u0111\u1ebfn l\u1ed7i storage c\u1ee7a node.\n  BalanceMismatchError                                    L\u1ed7i x\u1ea3y ra n\u1ebfu `check_balance` th\u1ea5t b\u1ea1i, n\xf3 c\xf3 th\u1ec3 l\xe0 d\u1ea5u hi\u1ec7u c\u1ee7a m\u1ed9t state kh\xf4ng h\u1ee3p l\u1ec7\n  InvalidTxError                                          L\u1ed7i \u0111\xe3 x\u1ea3y ra trong qu\xe1 tr\xecnh x\xe1c th\u1ef1c TX v\xe0 t\xednh ph\xed account\n    InvalidAccessKeyError                                 M\xf4 t\u1ea3 l\u1ed7i cho vi\u1ec7c x\xe1c nh\u1eadn access key\n    ActionsValidationError                                M\xf4 t\u1ea3 l\u1ed7i cho vi\u1ec7c x\xe1c nh\u1eadn m\u1ed9t danh s\xe1ch c\xe1c action    \n      TotalPrepaidGasExceeded                             T\u1ed5ng gas tr\u1ea3 tr\u01b0\u1edbc (cho t\u1ea5t c\u1ea3 c\xe1c action cho tr\u01b0\u1edbc) \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n.\n      TotalNumberOfActionsExceeded                        S\u1ed1 l\u01b0\u1ee3ng c\xe1c action \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n cho tr\u01b0\u1edbc.\n      AddKeyMethodNamesNumberOfBytesExceeded              T\u1ed5ng s\u1ed1 byte c\u1ee7a c\xe1c t\xean method \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n trong m\u1ed9t action Add Key.\n      AddKeyMethodNameLengthExceeded                      Chi\u1ec1u d\xe0i c\u1ee7a m\u1ed9t s\u1ed1 t\xean method \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n trong m\u1ed9t action Add Key.\n      IntegerOverflow                                     L\u1ed7i tr\xe0n s\u1ed1 integer trong qu\xe1 tr\xecnh t\xednh to\xe1n.\n      InvalidAccountId                                    Account ID kh\xf4ng h\u1ee3p l\u1ec7.\n      ContractSizeExceeded                                K\xedch th\u01b0\u1edbc code c\u1ee7a contract \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n trong m\u1ed9t action DeployContract.\n      FunctionCallMethodNameLengthExceeded                Chi\u1ec1u d\xe0i c\u1ee7a t\xean method \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n trong m\u1ed9t action Function Call.\n      FunctionCallArgumentsLengthExceeded                 Chi\u1ec1u d\xe0i c\u1ee7a c\xe1c tham s\u1ed1 \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n trong m\u1ed9t action Function Call.\n"})}),"\n",(0,e.jsx)(t.h3,{id:"txexecutionerror-and-subtypes",children:"TxExecutionError v\xe0 c\xe1c subtype"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-text",children:"TxExecutionError                                          L\u1ed7i tr\u1ea3 v\u1ec1 c\u1ee7a ExecutionOutcome trong tr\u01b0\u1eddng h\u1ee3p th\u1ea5t b\u1ea1i\n  InvalidTxError                                          L\u1ed7i x\u1ea3y ra trong qu\xe1 tr\xecnh th\u1ef1c thi Transaction\n    InvalidAccessKeyError                                 M\xf4 t\u1ea3 l\u1ed7i cho vi\u1ec7c x\xe1c nh\u1eadn access key\n    ActionsValidationError                                M\xf4 t\u1ea3 l\u1ed7i cho vi\u1ec7c x\xe1c nh\u1eadn danh s\xe1ch c\xe1c action\n      TotalPrepaidGasExceeded                             T\u1ed5ng gas tr\u1ea3 tr\u01b0\u1edbc (cho t\u1ea5t c\u1ea3 c\xe1c action cho tr\u01b0\u1edbc) \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n.\n      TotalNumberOfActionsExceeded                        S\u1ed1 l\u01b0\u1ee3ng c\xe1c action \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n cho tr\u01b0\u1edbc.\n      AddKeyMethodNamesNumberOfBytesExceeded              T\u1ed5ng s\u1ed1 byte c\u1ee7a c\xe1c t\xean method \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n trong m\u1ed9t action Add Key.\n      AddKeyMethodNameLengthExceeded                      Chi\u1ec1u d\xe0i c\u1ee7a m\u1ed9t s\u1ed1 t\xean method \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n trong m\u1ed9t action Add Key.\n      IntegerOverflow                                     L\u1ed7i tr\xe0n s\u1ed1 integer trong qu\xe1 tr\xecnh t\xednh to\xe1n.\n      InvalidAccountId                                    Account ID kh\xf4ng h\u1ee3p l\u1ec7.\n      ContractSizeExceeded                                K\xedch th\u01b0\u1edbc code c\u1ee7a contract \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n trong m\u1ed9t action DeployContract.\n      FunctionCallMethodNameLengthExceeded                Chi\u1ec1u d\xe0i c\u1ee7a t\xean method \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n trong m\u1ed9t action Function Call.\n      FunctionCallArgumentsLengthExceeded                 Chi\u1ec1u d\xe0i c\u1ee7a c\xe1c tham s\u1ed1 \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n trong m\u1ed9t action Function Call.\n  ActionError                                             L\u1ed7i x\u1ea3y ra trong qu\xe1 tr\xecnh th\u1ef1c thi Action\n    ActionErrorKind                                       Lo\u1ea1i ActionError \u0111\xe3 x\u1ea3y ra\n      RuntimeCallError \n      ReceiptValidationError                              M\xf4 t\u1ea3 l\u1ed7i cho vi\u1ec7c x\xe1c nh\u1eadn m\u1ed9t receipt\n        ActionsValidationError                            M\xf4 t\u1ea3 l\u1ed7i cho vi\u1ec7c x\xe1c nh\u1eadn danh s\xe1ch c\xe1c action    \n          TotalPrepaidGasExceeded                         T\u1ed5ng gas tr\u1ea3 tr\u01b0\u1edbc (cho t\u1ea5t c\u1ea3 c\xe1c action cho tr\u01b0\u1edbc) \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n.\n          TotalNumberOfActionsExceeded                    S\u1ed1 l\u01b0\u1ee3ng c\xe1c action \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n cho tr\u01b0\u1edbc.\n          AddKeyMethodNamesNumberOfBytesExceeded          T\u1ed5ng s\u1ed1 byte c\u1ee7a c\xe1c t\xean method \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n trong m\u1ed9t action Add Key.\n          AddKeyMethodNameLengthExceeded                  Chi\u1ec1u d\xe0i c\u1ee7a m\u1ed9t s\u1ed1 t\xean method \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n trong m\u1ed9t action Add Key.\n          IntegerOverflow                                 L\u1ed7i tr\xe0n s\u1ed1 integer trong qu\xe1 tr\xecnh t\xednh to\xe1n.\n          InvalidAccountId                                Account ID kh\xf4ng h\u1ee3p l\u1ec7.\n          ContractSizeExceeded                            K\xedch th\u01b0\u1edbc code c\u1ee7a contract \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n trong m\u1ed9t action DeployContract.\n          FunctionCallMethodNameLengthExceeded            Chi\u1ec1u d\xe0i c\u1ee7a t\xean method \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n trong m\u1ed9t action Function Call.\n          FunctionCallArgumentsLengthExceeded             Chi\u1ec1u d\xe0i c\u1ee7a c\xe1c tham s\u1ed1 \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n trong m\u1ed9t action Function Call.\n"})}),"\n",(0,e.jsx)(t.h3,{id:"vmerror-and-subtypes",children:"VMerror v\xe0 c\xe1c subtype"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-text",children:"VMerror                                                   L\u1ed7i x\u1ea3y ra b\xean trong m\xe1y \u1ea3o NEAR\n  ExternalError                                           L\u1ed7i b\xean ngo\xe0i t\u1eeb vi\u1ec7c th\u1ef1c hi\u1ec7n External trait \u0111\u01b0\u1ee3c serialize\n  InconsistentStateError                                  L\u1ed7i x\u1ea3y ra b\u1edfi m\u1ed9t ho\u1ea1t \u0111\u1ed9ng tr\xean m\u1ed9t state kh\xf4ng \u0111\u1ed3ng nh\u1ea5t (v\xed d\u1ee5: l\u1ed7i tr\xe0n s\u1ed1 integer x\u1ea3y ra khi s\u1eed d\u1ee5ng m\u1ed9t gi\xe1 tr\u1ecb trong m\u1ed9t context cho tr\u01b0\u1edbc\n    IntegerOverflow                                       Ho\u1ea1t \u0111\u1ed9ng t\xednh to\xe1n v\u1edbi gi\xe1 tr\u1ecb t\u1eeb state \u0111\xe3 tr\u1ea3 v\u1ec1 m\u1ed9t l\u1ed7i tr\xe0n s\u1ed1 integer\n  FunctionCallError \n    LinkError \n    WasmTrap \n    MethodResolveError \n      MethodEmptyName \n      MethodUTF8Error \n      MethodNotFound \n      MethodInvalidSignature \n    HostError \n      BadUTF16                                            String encoding kh\xf4ng ph\u1ea3i l\xe0 m\u1ed9t chu\u1ed7i UTF-16\n      BadUTF8                                             String encoding kh\xf4ng ph\u1ea3i l\xe0 m\u1ed9t chu\u1ed7i UTF-8\n      GasExceeded                                         \u0110\xe3 v\u01b0\u1ee3t qu\xe1 s\u1ed1 gas tr\u1ea3 tr\u01b0\u1edbc\n      GasLimitExceeded                                    \u0110\xe3 v\u01b0\u1ee3t qu\xe1 s\u1ed1 gas t\u1ed1i \u0111a \u0111\u01b0\u1ee3c cho ph\xe9p \u0111\u1ec3 \u0111\u1ed1t cho m\u1ed7i contract\n      BalanceExceeded                                     \u0110\xe3 v\u01b0\u1ee3t qu\xe1 s\u1ed1 d\u01b0 t\xe0i kho\u1ea3n\n      EmptyMethodName                                     C\u1ed1 g\u1eafng call m\u1ed9t t\xean method r\u1ed7ng\n      GuestPanic                                          Smart contract panic\n      IntegerOverflow                                     IntegerOverflow \u0111\xe3 x\u1ea3y ra trong qu\xe1 tr\xecnh th\u1ef1c thi contract\n      InvalidPromiseIndex                                 `promise_idx` kh\xf4ng t\u01b0\u01a1ng \u1ee9ng v\u1edbi c\xe1c promise hi\u1ec7n c\xf3\n      CannotAppendActionToJointPromise                    C\xe1c action ch\u1ec9 c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c n\u1ed1i v\u1edbi non-joint promise.\n      CannotReturnJointPromise                            Tr\u1ea3 v\u1ec1 joint promise \u0111ang b\u1ecb c\u1ea5m\n      InvalidPromiseResultIndex                           \u0110\xe3 truy c\u1eadp v\xe0o index kh\xf4ng h\u1ee3p l\u1ec7 c\u1ee7a k\u1ebft qu\u1ea3 promise\n      InvalidRegisterId                                   \u0110\xe3 truy c\u1eadp v\xe0o register id kh\xf4ng h\u1ee3p l\u1ec7\n      IteratorWasInvalidated                              Iterator `iterator_index` Iterator `iterator_index` \u0111\xe3 b\u1ecb v\xf4 hi\u1ec7u sau khi n\xf3 \u0111\u01b0\u1ee3c t\u1ea1o ra b\u1eb1ng c\xe1ch th\u1ef1c thi m\u1ed9t h\xe0nh \u0111\u1ed9ng mutable tr\xean trie\n      MemoryAccessViolation                               \u0110\xe3 truy c\u1eadp ngo\xe0i v\xf9ng nh\u1edb\n      InvalidReceiptIndex                                 VM Logic \u0111\xe3 tr\u1ea3 v\u1ec1 m\u1ed9t receipt index kh\xf4ng h\u1ee3p l\u1ec7\n      InvalidIteratorIndex                                Iterator index `iterator_index` kh\xf4ng t\u1ed3n t\u1ea1i\n      InvalidAccountId                                    VM Logic \u0111\xe3 tr\u1ea3 v\u1ec1 account id kh\xf4ng h\u1ee3p l\u1ec7\n      InvalidMethodName                                   VM Logic \u0111\xe3 tr\u1ea3 v\u1ec1 t\xean method kh\xf4ng h\u1ee3p l\u1ec7\n      InvalidPublicKey                                    VM Logic \u0111\xe3 cung c\u1ea5p public key kh\xf4ng h\u1ee3p l\u1ec7\n      ProhibitedInView                                    `method_name` kh\xf4ng \u0111\u01b0\u1ee3c cho ph\xe9p trong view call\n      NumberOfLogsExceeded                                T\u1ed5ng s\u1ed1 l\u01b0\u1ee3ng log s\u1ebd v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n.\n      KeyLengthExceeded                                   Chi\u1ec1u d\xe0i c\u1ee7a storage key \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n.\n      ValueLengthExceeded                                 Chi\u1ec1u d\xe0i c\u1ee7a storage value \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n.\n      TotalLogLengthExceeded                              T\u1ed5ng s\u1ed1 chi\u1ec1u d\xe0i c\u1ee7a log \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n.\n      NumberPromisesExceeded                              S\u1ed1 l\u01b0\u1ee3ng promise t\u1ed1i \u0111a trong m\u1ed9t FunctionCall \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n.\n      NumberInputDataDependenciesExceeded                 S\u1ed1 l\u01b0\u1ee3ng dependency t\u1ed1i \u0111a c\u1ee7a d\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n.\n      ReturnedValueLengthExceeded                         Chi\u1ec1u d\xe0i c\u1ee7a gi\xe1 tr\u1ecb tr\u1ea3 v\u1ec1 \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n.\n      ContractSizeExceeded                                K\xedch th\u01b0\u1edbc contract cho action DeployContract \u0111\xe3 v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n.\n    CompilationError \n      CodeDoesNotExist \n      WasmerCompileError \n      PrepareError                                        L\u1ed7i x\u1ea3y ra khi chu\u1ea9n b\u1ecb ho\u1eb7c th\u1ef1c thi Wasm smart-contract.\n        Serialization                                     L\u1ed7i \u0111\xe3 x\u1ea3y ra trong khi serialize module.\n        Deserialization                                   L\u1ed7i \u0111\xe3 x\u1ea3y ra trong khi deserialize module.\n        InternalMemoryDeclared                            Khai b\xe1o b\u1ed9 nh\u1edb b\xean trong \u0111\xe3 \u0111\u01b0\u1ee3c t\xecm th\u1ea5y trong module.\n        GasInstrumentation                                Th\u1ea5t b\u1ea1i trong vi\u1ec7c \u0111o \u0111\u1ea1c gas.  \u0110i\u1ec1u n\xe0y cho th\u1ea5y r\u1ea5t c\xf3 th\u1ec3 module kh\xf4ng h\u1ee3p l\u1ec7\n        StackHeightInstrumentation                        Th\u1ea5t b\u1ea1i trong vi\u1ec7c \u0111o \u0111\u1ea1c stack.  \u0110i\u1ec1u n\xe0y cho th\u1ea5y r\u1ea5t c\xf3 th\u1ec3 module kh\xf4ng h\u1ee3p l\u1ec7\n        Instantiate                                       L\u1ed7i \u0111\xe3 x\u1ea3y ra trong qu\xe1 tr\xecnh kh\u1edfi t\u1ea1o.  \u0110i\u1ec1u n\xe0y ch\u1ec9 ra r\u1eb1ng c\xf3 th\u1ec3 function `start` b\u1ecb k\u1eb9t, ho\u1eb7c module kh\xf4ng th\u1ec3 kh\u1edfi t\u1ea1o v\xe0/ho\u1eb7c kh\xf4ng th\u1ec3 k\u1ebft n\u1ed1i \u0111\u01b0\u1ee3c.\n        Memory                                            L\u1ed7i khi t\u1ea1o b\u1ed9 nh\u1edb\n"})}),"\n",(0,e.jsx)(t.admonition,{title:"Got a question?",type:"tip",children:(0,e.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol",children:" Ask it on StackOverflow! "})})]})}function l(n={}){const{wrapper:t}={...(0,c.a)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},11151:(n,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var e=i(67294);const c={},r=e.createContext(c);function o(n){const t=e.useContext(r);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:o(n.components),e.createElement(r.Provider,{value:t},n.children)}}}]);