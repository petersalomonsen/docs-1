"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8215],{97253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(85893),a=n(11151);const s={title:"It's gonna be Legen... wait for it...",authors:["gagdiez"],slug:"yield-resume",tags:["protocol","updates"],hide_table_of_contents:!0},r=void 0,o={permalink:"/vi/blog/yield-resume",source:"@site/i18n/vi/docusaurus-plugin-content-blog/2024-05-30.md",title:"It's gonna be Legen... wait for it...",description:"dary! Legendary! NEAR protocol is getting updated with the ability to yield and resume computations",date:"2024-05-30T00:00:00.000Z",tags:[{inline:!0,label:"protocol",permalink:"/vi/blog/tags/protocol"},{inline:!0,label:"updates",permalink:"/vi/blog/tags/updates"}],readingTime:4.09,hasTruncateMarker:!0,authors:[{name:"Guille",title:"Docs Maintainer",url:"https://github.com/gagdiez",imageURL:"https://github.com/gagdiez.png",key:"gagdiez"}],frontMatter:{title:"It's gonna be Legen... wait for it...",authors:["gagdiez"],slug:"yield-resume",tags:["protocol","updates"],hide_table_of_contents:!0},unlisted:!1,prevItem:{title:"Getting Started on NEAR Using Windows",permalink:"/vi/blog/getting-started-on-windows"},nextItem:{title:"Use cases for Chain Signatures",permalink:"/vi/blog/chain-signatures-use-cases"}},l={authorsImageUrls:[void 0]},c=[{value:"The problem of waiting",id:"the-problem-of-waiting",level:2},{value:"Yield and Resume",id:"yield-and-resume",level:2},{value:"What is exactly being yielded?",id:"what-is-exactly-being-yielded",level:3},{value:"How does it change for the user?",id:"how-does-it-change-for-the-user",level:3},{value:"How I can use yield/resume in my contract?",id:"how-i-can-use-yieldresume-in-my-contract",level:2},{value:"Simplified Example",id:"simplified-example",level:4},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"dary! Legendary! NEAR protocol is getting updated with the ability to yield and resume computations"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"waiting on a loop",src:n(20470).Z+"",width:"798",height:"347"})}),"\n",(0,i.jsx)(t.h2,{id:"the-problem-of-waiting",children:"The problem of waiting"}),"\n",(0,i.jsx)(t.p,{children:"Currently, smart contracts have no way to wait for an external event to happen. This can be a problem when the contract relies on an external service to provide a result."}),"\n",(0,i.jsxs)(t.p,{children:["We encountered this issue while implementing ",(0,i.jsx)(t.a,{href:"/concepts/abstraction/chain-signatures",children:"Chain Signatures"}),", which work by requiring an external service to provide a signature."]}),"\n",(0,i.jsx)(t.p,{children:"Until now, the only workaround has been to make the contract call itself in a loop, checking on each iteration if the result is ready. Each call delays the result by one block (~1 second), allowing the contract to wait almost a minute before running out of gas."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"waiting on a loop",src:n(56677).Z+"",width:"1346",height:"842"}),"\n",(0,i.jsx)(t.em,{children:"Until now, contracts had to wait by calling themselves until a external service replies... more often than not the contract will run out of gas waiting"})]}),"\n",(0,i.jsx)(t.p,{children:"While this method works, it's far from ideal. It wastes a lot of gas on looping and - more often than not - runs out of gas, forcing the user to retry the transaction."}),"\n",(0,i.jsx)(t.h2,{id:"yield-and-resume",children:"Yield and Resume"}),"\n",(0,i.jsxs)(t.p,{children:["Starting from version ",(0,i.jsx)(t.code,{children:"1.40"})," of the protocol, developers can ",(0,i.jsx)(t.strong,{children:"delay the execution"})," of a function until certain conditions are met (e.g. an external service provides a result)."]}),"\n",(0,i.jsxs)(t.p,{children:["This way, instead of the contract calling itself on a loop waiting, the contract can simply ",(0,i.jsx)(t.strong,{children:"yield"})," calling the function that gives the result. When an external response is provided, the contract will ",(0,i.jsx)(t.strong,{children:"resume"})," and return the result."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"waiting on a yield",src:n(60628).Z+"",width:"1355",height:"842"}),"\n",(0,i.jsx)(t.em,{children:"Contracts can now yield the execution of a function until an external service signals that the result is ready"})]}),"\n",(0,i.jsx)(t.h3,{id:"what-is-exactly-being-yielded",children:"What is exactly being yielded?"}),"\n",(0,i.jsxs)(t.p,{children:["It is important to notice that the contract is not ",(0,i.jsx)(t.strong,{children:"halting"})," or ",(0,i.jsx)(t.strong,{children:"blocking"})," its ability to execute, nor ",(0,i.jsx)(t.strong,{children:"halting in the middle of a function"})," to later resume it."]}),"\n",(0,i.jsxs)(t.p,{children:["In the same way that a function can return a promise to call another contract, now a function can return a ",(0,i.jsx)(t.strong,{children:"yield"})," to call another function."]}),"\n",(0,i.jsxs)(t.p,{children:["Indeed, the contract is not halting, but simply ",(0,i.jsx)(t.strong,{children:"delaying the execution of a callback"})," until an external agent signals that it is ok to resume."]}),"\n",(0,i.jsx)(t.p,{children:'If the contract does not trigger a resume after 200 blocks - around 4 minutes - the yielded function will resume receiving a "timeout error" as input.'}),"\n",(0,i.jsxs)(t.admonition,{title:"State Changes",type:"warning",children:[(0,i.jsxs)(t.p,{children:["The state ",(0,i.jsx)(t.strong,{children:"can change"})," between the ",(0,i.jsx)(t.code,{children:"yield"})," and the ",(0,i.jsx)(t.code,{children:"resume"}),", since people can keep interacting with the contract."]}),(0,i.jsx)(t.p,{children:"Moreover, since the function used to signal is public, developers must make sure to guard it properly to avoid unwanted calls. This can be done by simply checking the caller of the function."})]}),"\n",(0,i.jsx)(t.h3,{id:"how-does-it-change-for-the-user",children:"How does it change for the user?"}),"\n",(0,i.jsxs)(t.p,{children:["Between the ",(0,i.jsx)(t.code,{children:"yield"})," and ",(0,i.jsx)(t.code,{children:"resume"})," the user will simply be waiting to receive the result. But, in contrast with waiting on a loop, the user will not pay GAS just for having the contract waiting!"]}),"\n",(0,i.jsx)(t.h2,{id:"how-i-can-use-yieldresume-in-my-contract",children:"How I can use yield/resume in my contract?"}),"\n",(0,i.jsxs)(t.p,{children:["While we have not created any official ",(0,i.jsx)(t.code,{children:"yield/resume"})," example, you can refer to ",(0,i.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/pull/1133/files",children:"Saketh Are's example"}),", who has been working on the ",(0,i.jsx)(t.code,{children:"yield/resume"})," implementation."]}),"\n",(0,i.jsx)(t.p,{children:"The basic idea is that the SDK now exposes two functions:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(t.code,{children:"yield(function_to_yield)"})," that returns a ",(0,i.jsx)(t.code,{children:"yield_ID"})," which identifies the yield"]}),"\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(t.code,{children:"resume(yield_ID)"})," that signals which instance of ",(0,i.jsx)(t.code,{children:"function_to_yield"})," can now execute"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"simplified-example",children:"Simplified Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'// const DATA_ID_REGISTER: u64 = 0;\n\npub fn request_weather(&mut self, city: String) {\n    let index = self.next_available_request_index;\n    self.next_available_request_index += 1;\n\n    let yield_promise = env::promise_yield_create(\n        "callback_return_result",\n        &serde_json::to_vec(&(index,)).unwrap(),\n        SIGN_ON_FINISH_CALL_GAS,\n        GasWeight(0),\n        DATA_ID_REGISTER,\n    );\n\n    // Store the request, so an external service can easily fetch it\n    // This is optional, as an indexer could simply observe it in the receipts\n    let data_id: CryptoHash =\n        env::read_register(DATA_ID_REGISTER).expect("").try_into().expect("");\n    self.requests.insert(&index, WeatherRequest{&data_id, &city});\n\n    // The return will be the result of "callback_return_result" (defined below)\n    env::promise_return(yield_promise);\n}\n\n/// Called by external participants to submit a response\npub fn respond(&mut self, data_id: String, weather: String) {\n    let mut data_id_buf = [0u8; 32];\n    hex::decode_to_slice(data_id, &mut data_id_buf).expect("");\n    let data_id = data_id_buf;\n\n    // check that caller is allowed to respond, weather is valid, etc.\n    // ...\n\n    log!("submitting response {} for data id {:?}", &weather, &data_id);\n    env::promise_yield_resume(&data_id, &serde_json::to_vec(&weather).unwrap());\n}\n\n/// Callback receiving the external data (or a PromiseError in case of timeout)\npub fn callback_return_result(\n    &mut self,\n    request_index: u64,\n    #[callback_result] weather: Result<String, PromiseError>,\n) -> String {\n    // Clean up the local state\n    self.requests.remove(&request_index);\n\n    match weather {\n        Ok(weather) => "weather received: ".to_owned() + &weather,\n        Err(_) => "request timed out".to_string(),\n    }\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(t.p,{children:["The ability to ",(0,i.jsx)(t.code,{children:"yield"})," and ",(0,i.jsx)(t.code,{children:"resume"})," computations is a big step forward for the NEAR protocol, as it enables developers to create contracts that rely on external services."]}),"\n",(0,i.jsxs)(t.p,{children:["Currently, the feature is only ",(0,i.jsx)(t.strong,{children:"available on testnet"}),", and we are looking for feedback on how to improve it."]}),"\n",(0,i.jsxs)(t.p,{children:["We expect to have a more user-friendly way to use ",(0,i.jsx)(t.code,{children:"yield"})," and ",(0,i.jsx)(t.code,{children:"resume"})," in the future, so stay tuned!"]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},56677:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/contract-wait-loop-c7b128ab1982ad80e9f40a7dfe4ddaea.png"},60628:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/contract-wait-yield-6820c700955fe4e6942fb9fdc619aa77.png"},20470:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/legendary-c6675258ceadd49e3a9be41e3681b136.jpg"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var i=n(67294);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);