"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2108],{44233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(85893),a=n(11151);const i={id:"nft-chain-keys",title:"NFT Chain Keys Smart Contract",sidebar_label:"NFT Chain Keys Contract"},r=void 0,o={id:"build/chain-abstraction/nft-chain-keys",title:"NFT Chain Keys Smart Contract",description:"The NFT Chain Keys smart contract makes the ownership of remote accounts both provable and transferrable. This new paradigm allows you to create new end-user experiences that leverage provable and transferrable remote accounts as a core primitive.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/1.chain-abstraction/nft-keys.md",sourceDirName:"2.build/1.chain-abstraction",slug:"/build/chain-abstraction/nft-chain-keys",permalink:"/zh-CN/build/chain-abstraction/nft-chain-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/1.chain-abstraction/nft-keys.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"nft-chain-keys",title:"NFT Chain Keys Smart Contract",sidebar_label:"NFT Chain Keys Contract"},sidebar:"build",previous:{title:"Implementing Chain Signatures",permalink:"/zh-CN/build/chain-abstraction/chain-signatures"},next:{title:"Overview",permalink:"/zh-CN/build/chain-abstraction/multichain-gas-relayer/overview"}},c={},l=[{value:"Contract overview",id:"contract-overview",level:2},{value:"Standards",id:"standards",level:3},{value:"Usage",id:"usage",level:2},{value:"Use Cases for NFT Keys",id:"use-cases-for-nft-keys",level:2},{value:"Remote Account Marketplace",id:"remote-account-marketplace",level:3},{value:"Bridgeless Multi-Chain DEX",id:"bridgeless-multi-chain-dex",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The NFT Chain Keys smart contract makes the ownership of remote accounts both provable and transferrable. This new paradigm allows you to create new end-user experiences that leverage provable and transferrable remote accounts as a core primitive."}),"\n",(0,s.jsx)(t.h2,{id:"contract-overview",children:"Contract overview"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/near/mpc-recovery",children:"MPC Account Recovery smart contract"})," provides a ",(0,s.jsx)(t.a,{href:"https://github.com/near/mpc-recovery#sign",children:(0,s.jsx)(t.code,{children:"sign"})})," method that accepts a ",(0,s.jsx)(t.code,{children:"path"})," parameter. This allows one predecessor account to have access to an effectively unlimited number of MPC keys."]}),"\n",(0,s.jsxs)(t.p,{children:["The NFT Chain Keys contract takes advantage of this property and allows secure transfers of MPC keys between users, using the ",(0,s.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP-171 NFT contract standard"}),".\nThe contract also implements new functionality to enable chain key management features."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"The essence of Multi-Party Computation (MPC) is to enable independent parties to perform shared computations on private information without revealing secrets to each other."})}),"\n",(0,s.jsx)(t.h3,{id:"standards",children:"Standards"}),"\n",(0,s.jsx)(t.p,{children:"Besides the NEP-171 contract standard, the NFT Chain Keys contract complies with a full suite of NEP standards:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"NEP-145: Storage Management"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP-171: NFT Core"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata",children:"NEP-177: Metadata"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/ApprovalManagement",children:"NEP-178: Approval Management"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"NEP-181: Enumeration"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:["Please refer to the smart contract ",(0,s.jsx)(t.a,{href:"https://github.com/near/multichain-gas-station-contract/blob/master/nft_key/README.md",children:"GitHub documentation"})," for usage information:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/near/multichain-gas-station-contract/tree/master/nft_key#creating-new-key-tokens",children:"Creating new key tokens"}),": mint unlimited new NFT chain keys, as long as the account has sufficient storage."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/near/multichain-gas-station-contract/tree/master/nft_key#issuing-signatures",children:"Issuing signatures"}),": generate new signatures based on a submitted payload."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/near/multichain-gas-station-contract/tree/master/nft_key#approvals",children:"Approvals"}),": implement a separate set of approval management functions for using NFTs, which operate similarly to NEP-178."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"testnet contract",type:"tip",children:(0,s.jsxs)(t.p,{children:["If you want to try things out, this smart contract is available on ",(0,s.jsx)(t.code,{children:"nft.kagi.testnet"}),"."]})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"use-cases-for-nft-keys",children:"Use Cases for NFT Keys"}),"\n",(0,s.jsx)(t.admonition,{title:"Disclaimer",type:"info",children:(0,s.jsx)(t.p,{children:"The ideas presented in this section are just initial concepts, and shouldn\u2019t be considered as fully fledged solutions."})}),"\n",(0,s.jsx)(t.h3,{id:"remote-account-marketplace",children:"Remote Account Marketplace"}),"\n",(0,s.jsxs)(t.p,{children:["NFT Keys enable users to buy, sell, and trade remote accounts within a marketplace-style application.\nFor instance, ",(0,s.jsx)(t.em,{children:"Alice"}),", possessing a set of remote accounts with value and history, can mint an NFT key and list these accounts for sale on the marketplace.\nPotential buyers, like ",(0,s.jsx)(t.em,{children:"Bob"}),", can browse the value of ",(0,s.jsx)(t.em,{children:"Alice\u2019s"})," accounts and choose to make a purchase.\nIf ",(0,s.jsx)(t.em,{children:"Bob"})," decides to proceed, they would simply need to acquire ownership of the original NFT key from ",(0,s.jsx)(t.em,{children:"Alice"})," in exchange for payment, such as in ",(0,s.jsx)(t.code,{children:"$NEAR"}),".\nOnce the transaction is completed, ownership of the accounts transfers to ",(0,s.jsx)(t.em,{children:"Bob"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"bridgeless-multi-chain-dex",children:"Bridgeless Multi-Chain DEX"}),"\n",(0,s.jsxs)(t.p,{children:["You can create a Multi-chain DEX without bridging by combining Chain Signatures with NFT Keys.\nUsers wishing to swap asset ",(0,s.jsx)(t.code,{children:"$A"})," for asset ",(0,s.jsx)(t.code,{children:"$B"})," would initiate the swap on the bridgeless DEX.\nSupported by liquidity providers (Automated Market Makers) across multiple chains, the DEX facilitates these swaps.\nHere's how it works:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A user proposes the swap, specifying asset ",(0,s.jsx)(t.code,{children:"$A"})," in remote ",(0,s.jsx)(t.code,{children:"account X"})," for asset ",(0,s.jsx)(t.code,{children:"$B"})," in remote ",(0,s.jsx)(t.code,{children:"account Y"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["The liquidity provider receives asset ",(0,s.jsx)(t.code,{children:"$A"})," from the user and sends the equivalent amount of asset ",(0,s.jsx)(t.code,{children:"$B"})," to a newly created remote ",(0,s.jsx)(t.code,{children:"account Y"}),", along with a minted NFT key."]}),"\n",(0,s.jsx)(t.li,{children:"The NFT key is then sent to the user to complete the swap."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Although liquidity providers still need to leverage bridging to settle assets between different pools, users of this exchange type are exposed to reduced bridge risk."})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(67294);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);