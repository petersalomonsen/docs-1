"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7879],{62251:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=i(85893),s=i(11151);const a={id:"getting-started",title:"Getting Started with Chain Signatures"},r=void 0,o={id:"build/chain-abstraction/chain-signatures/getting-started",title:"Getting Started with Chain Signatures",description:"Chain Signatures is a groundbreaking technology built on NEAR that enables all accounts, including smart contracts, to sign and execute transactions across multiple blockchains.",source:"@site/../docs/2.build/1.chain-abstraction/chain-signatures/getting-started.md",sourceDirName:"2.build/1.chain-abstraction/chain-signatures",slug:"/build/chain-abstraction/chain-signatures/getting-started",permalink:"/zh-CN/build/chain-abstraction/chain-signatures/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/1.chain-abstraction/chain-signatures/getting-started.md",tags:[],version:"current",lastUpdatedBy:"Guille",lastUpdatedAt:1723133135e3,frontMatter:{id:"getting-started",title:"Getting Started with Chain Signatures"},sidebar:"build",previous:{title:"Meta Transaction Relayers",permalink:"/zh-CN/build/chain-abstraction/meta-transactions"},next:{title:"What are Chain Signatures?",permalink:"/zh-CN/concepts/abstraction/chain-signatures"}},c={},l=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"1. Deriving Foreign Addresses",id:"1-deriving-foreign-addresses",level:4},{value:"2. Creating the Transaction",id:"2-creating-the-transaction",level:4},{value:"3. Requesting the Signature",id:"3-requesting-the-signature",level:4},{value:"4. Relaying the Signature",id:"4-relaying-the-signature",level:4},{value:"Use Cases",id:"use-cases",level:2},{value:"How to Get Started?",id:"how-to-get-started",level:2},{value:"Where to Learn More?",id:"where-to-learn-more",level:2}];function h(e){const n={a:"a",admonition:"admonition",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Chain Signatures is a groundbreaking technology built on NEAR that enables all accounts, including smart contracts, to sign and execute transactions across multiple blockchains."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://pages.near.org/wp-content/uploads/2024/02/acct-abstraction-blog-1.png",alt:"img"})}),"\n",(0,t.jsx)(n.p,{children:"This innovation leverages Multi-Party Computation (MPC) and a distributed network of node operators to create joint signatures from arbitrary payloads, allowing NEAR users to control external blockchain accounts."}),"\n",(0,t.jsx)(n.p,{children:"Chain Signatures enhances blockchain interoperability, giving ownership of diverse assets, cross-chain accounts, and data to a single NEAR account."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,t.jsxs)(n.p,{children:["When a NEAR account - could be a user or a ",(0,t.jsx)(n.strong,{children:"smart contract"})," - wants to interact with a foreign blockchain, it just need to follow four simple steps."]}),"\n",(0,t.jsx)(n.h4,{id:"1-deriving-foreign-addresses",children:"1. Deriving Foreign Addresses"}),"\n",(0,t.jsxs)(n.p,{children:["Chain Signatures uses ",(0,t.jsx)(n.a,{href:"../../../1.concepts/abstraction/chain-signatures.md#derivation-paths-one-account-multiple-chains",children:"derivation paths"})," to represent accounts on foreign blockchains"]}),"\n",(0,t.jsx)(n.p,{children:"The NEAR account\u2019s name and the derivation path are used to mathematically derive a unique address for the user on the foreign blockchain"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:" Derivation Paths "}),(0,t.jsx)(n.p,{children:"A NEAR account will always derive the same address on the foreign blockchain using the same derivation path"}),(0,t.jsx)(n.p,{children:"Notice that, since the foreign address is derived from the NEAR account name, it is not possible for another NEAR account to control the same address"})]}),"\n",(0,t.jsx)(n.h4,{id:"2-creating-the-transaction",children:"2. Creating the Transaction"}),"\n",(0,t.jsx)(n.p,{children:"The client constructs the foreign transaction to be signed, which varies depending on the target blockchain"}),"\n",(0,t.jsx)(n.h4,{id:"3-requesting-the-signature",children:"3. Requesting the Signature"}),"\n",(0,t.jsxs)(n.p,{children:["A NEAR account or contract calls the sign method of the MPC smart contract (",(0,t.jsx)(n.a,{href:"https://nearblocks.io/address/v1.signer",children:"v1.signer"}),") to sign the transaction and waits while our MPC service generates the signature"]}),"\n",(0,t.jsx)(n.h4,{id:"4-relaying-the-signature",children:"4. Relaying the Signature"}),"\n",(0,t.jsx)(n.p,{children:"Once the signature is ready, the client reconstructs the signed transaction using the signature and broadcasts it to the destination blockchain"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Using Chain Signatures, developers can build cross-chain DeFi applications with seamless user experiences, eliminating the need for traditional bridges. This process eliminates the need for traditional bridges and enables developers to build innovative cross-chain DeFi applications with seamless user experiences."})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,t.jsx)(n.p,{children:"Chain Signatures can be used to build a wide range of applications that leverage blockchain interoperability. Here are some examples:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DeFi on Bitcoin (and other chain without smart contracts)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Chain signatures allow NEAR smart contract to program assets on Bitcoin"}),"\n",(0,t.jsx)(n.li,{children:"Build lending, swaps, runes launchpads, passkey-based Bitcoin wallets, and more"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Chain agnostic applications"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Since chain signatures can sign transactions for all blockchains, developers can support every single chain with just one smart contract"}),"\n",(0,t.jsx)(n.li,{children:"Multichain DEXs, lending protocols, oracles, derivatives, and more"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Multichain account abstraction"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Users can control assets on all chains with just their NEAR account, and can utilize account abstraction features on any chain including passkeys, key rotation, etc"}),"\n",(0,t.jsx)(n.li,{children:"Using the multichain gas relayer, users can pay for gas fees on any chain using USDC"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Privacy"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Chain signatures can be used to encrypt and decrypt information in a programmatic way"}),"\n",(0,t.jsx)(n.li,{children:"This enables privacy applications, and even decrypting information based on ownership of assets/NFTs"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"how-to-get-started",children:"How to Get Started?"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Familiarize Yourself with Chain Signatures:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Understand the ",(0,t.jsx)(n.a,{href:"https://docs.near.org/concepts/abstraction/chain-signatures",children:"basics of Chain Signatures"})," and how they simplify blockchain interactions."]}),"\n",(0,t.jsxs)(n.li,{children:["Review the technical ",(0,t.jsx)(n.a,{href:"https://near.org/blog/unlocking-web3-usability-with-account-aggregation",children:"explainer"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Explore the Use Cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Review ",(0,t.jsx)(n.a,{href:"https://pages.near.org/blog/unlocking-multichain-web3-with-near-chain-signatures/",children:"examples of use cases for Chain Signatures"}),", such as Multichain DAO, Multichain NFT Minter, and Bitcoin Runes Airdrop."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Access Resources and Documentation:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Visit the ",(0,t.jsx)(n.a,{href:"https://docs.near.org/build/chain-abstraction/chain-signatures",children:"Chain Signatures documentation"})," for detailed technical information and code snippets."]}),"\n",(0,t.jsxs)(n.li,{children:["Check out the ",(0,t.jsx)(n.a,{href:"https://linktr.ee/chainsignatures",children:"Linktree for Chain Signatures"})," for various resources, including demos and tutorials."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Try the Demos:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.a,{href:"https://github.com/near-examples/chainsig-script",children:"command-line-based demo"})," to derive accounts and send transactions on Bitcoin, Ethereum, Doge, and Ripple."]}),"\n",(0,t.jsxs)(n.li,{children:["Check out the ",(0,t.jsx)(n.a,{href:"https://github.com/near-examples/near-multichain/tree/main",children:"web app demo"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Engage with the Community:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Join the ",(0,t.jsx)(n.a,{href:"https://t.me/chain_abstraction",children:"Chain Abstraction developers\u2019 channel on Telegram"})," to connect with other developers and get support."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"where-to-learn-more",children:"Where to Learn More?"}),"\n",(0,t.jsx)(n.p,{children:"To dive deeper into Chain Signatures and its applications, you can explore the following resources:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Technical Blogs and Deep Dives:"})," Read ",(0,t.jsx)(n.a,{href:"https://pages.near.org/blog/unlocking-multichain-web3-with-near-chain-signatures",children:"high-level use cases"})," and technical ",(0,t.jsx)(n.a,{href:"https://near.org/blog/unlocking-web3-usability-with-account-aggregation",children:"explainer"})," posts on the NEAR blog"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Community and Support:"})," Engage with the NEAR community on social media platforms like Twitter and participate in discussions to stay updated on the latest developments"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(67294);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);