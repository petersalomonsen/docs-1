"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2050],{59698:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=a(85893),n=a(11151),l=a(74866),o=a(85162);const s={},i=void 0,u={id:"primitives/nft/near-cli/list-for-sale",title:"list-for-sale",description:"Method nftapprove of a NFT contract also calls the nfton_approve method in marketplace.paras.near as a callback.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/7.primitives/nft/near-cli/list-for-sale.md",sourceDirName:"7.primitives/nft/near-cli",slug:"/primitives/nft/near-cli/list-for-sale",permalink:"/vi/primitives/nft/near-cli/list-for-sale",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/nft/near-cli/list-for-sale.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"28 thg 2, 2024",frontMatter:{}},c={},d=[];function f(e){const t={code:"code",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(l.Z,{groupId:"nft-contract-tabs",className:"file-tabs",children:[(0,r.jsxs)(o.Z,{value:"Paras",label:"Paras",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near call marketplace.paras.near storage_deposit \'{"receiver_id": "bob.near"}\' --accountId bob.near --deposit 0.00939\n\nnear call nft.primitives.near nft_approve \'{"token_id": "1e95238d266e5497d735eb30", "account_id": "marketplace.paras.near", "msg": {"price": "200000000000000000000000", "market_type": "sale", "ft_token_id": "near"}}\' --accountId bob.near\n'})}),(0,r.jsxs)(t.p,{children:["Method ",(0,r.jsx)(t.code,{children:"nft_approve"})," of a NFT contract also calls the ",(0,r.jsx)(t.code,{children:"nft_on_approve"})," method in ",(0,r.jsx)(t.code,{children:"marketplace.paras.near"})," as a callback."]})]}),(0,r.jsxs)(o.Z,{value:"Mintbase",label:"Mintbase",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near call simple.market.mintbase1.near deposit_storage \'{"autotransfer": "true"}\' --accountId bob.near --deposit 0.00939\n\nnear call nft.primitives.near nft_approve \'{"token_id": "3c46b76cbd48e65f2fc88473", "account_id": "simple.market.mintbase1.near", "msg": {"price": "200000000000000000000000"}}\' --accountId bob.near\n'})}),(0,r.jsxs)(t.p,{children:["Method ",(0,r.jsx)(t.code,{children:"nft_approve"})," of a NFT contract also calls the ",(0,r.jsx)(t.code,{children:"nft_on_approve"})," method in ",(0,r.jsx)(t.code,{children:"simple.market.mintbase1.near"})," as a callback."]})]})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>o});a(67294);var r=a(36905);const n={tabItem:"tabItem_Ymn6"};var l=a(85893);function o(e){var t=e.children,a=e.hidden,o=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,o),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(67294),n=a(36905),l=a(12466),o=a(16550),s=a(20469),i=a(91980),u=a(67392),c=a(50012);function d(e){var t,a;return null!=(t=null==(a=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}function f(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,l=(0,o.k6)(),s=function(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:a,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((function(e){if(s){var t=new URLSearchParams(l.location.search);t.set(s,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[s,l])]}function b(e){var t,a,n,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,d=e.groupId,b=f(e),m=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var n=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:o,tabValues:b})})),h=m[0],g=m[1],x=v({queryString:u,groupId:d}),j=x[0],k=x[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),a=(0,c.Nk)(t),n=a[0],l=a[1],[n,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),_=y[0],w=y[1],I=function(){var e=null!=j?j:_;return p({value:e,tabValues:b})?e:null}();return(0,s.Z)((function(){I&&g(I)}),[I]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),w(e)}),[k,w,b]),tabValues:b}}var m=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function x(e){var t=e.className,a=e.block,r=e.selectedValue,o=e.selectValue,s=e.tabValues,i=[],u=(0,l.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,a=i.indexOf(t),n=s[a].value;n!==r&&(u(t),o(n))},d=function(e){var t,a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,n=i.indexOf(e.currentTarget)+1;a=null!=(r=i[n])?r:i[0];break;case"ArrowLeft":var l,o=i.indexOf(e.currentTarget)-1;a=null!=(l=i[o])?l:i[i.length-1]}null==(t=a)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:s.map((function(e){var t=e.value,a=e.label,l=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return i.push(e)},onKeyDown:d,onClick:c},l,{className:(0,n.Z)("tabs__item",h.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===t}),children:null!=a?a:t}),t)}))})}function j(e){var t=e.lazy,a=e.children,n=e.selectedValue,l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})}))})}function k(e){var t=b(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",h.tabList),children:[(0,g.jsx)(x,Object.assign({},e,t)),(0,g.jsx)(j,Object.assign({},e,t))]})}function y(e){var t=(0,m.Z)();return(0,g.jsx)(k,Object.assign({},e,{children:d(e.children)}),String(t))}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>o});var r=a(67294);const n={},l=r.createContext(n);function o(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);