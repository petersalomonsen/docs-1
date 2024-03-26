"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6086],{97722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=r(85893),a=r(11151),u=r(74866),o=r(85162);const s={},i=void 0,l={id:"primitives/linkdrop/bos/get-key-pairs",title:"get-key-pairs",description:"",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/7.primitives/linkdrop/bos/get-key-pairs.md",sourceDirName:"7.primitives/linkdrop/bos",slug:"/primitives/linkdrop/bos/get-key-pairs",permalink:"/vi/primitives/linkdrop/bos/get-key-pairs",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/linkdrop/bos/get-key-pairs.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"28 thg 2, 2024",frontMatter:{}},c={},d=[];function p(e){const t={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsx)(u.Z,{className:"file-tabs",children:(0,n.jsx)(o.Z,{value:"Keypom API",label:"Keypom API",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'const dropsNumber = "2";\nconst keysGeneratorUrl = "https://keypom.sctuts.com/keypair/";\nconst rootEntrophy = "my-password"; //If not provided, the keypair will be completely random. see: https://docs.keypom.xyz/docs/next/keypom-sdk/Core/modules \nasyncFetch(keysGeneratorUrl + dropsNumber + "/" + rootEntrophy).then((res) => {\n  const keyPairs = JSON.parse(res.body);\n  const pubKeys = [];\n  const privKeys = [];\n\n  keyPairs.forEach((e) => {\n    pubKeys.push(e.pub);\n    privKeys.push(e.priv);\n  });\n\n  const obj = {\n    publicKeys: pubKeys,\n    privKeys: privKeys,\n  };\n\n  State.update(obj);\n});\n'})})})})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>o});r(67294);var n=r(36905);const a={tabItem:"tabItem_Ymn6"};var u=r(85893);function o(e){var t=e.children,r=e.hidden,o=e.className;return(0,u.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,o),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(67294),a=r(36905),u=r(12466),o=r(16550),s=r(20469),i=r(91980),l=r(67392),c=r(50012);function d(e){var t,r;return null!=(t=null==(r=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}function p(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(r);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId,u=(0,o.k6)(),s=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:a});return[(0,i._X)(s),(0,n.useCallback)((function(e){if(s){var t=new URLSearchParams(u.location.search);t.set(s,e),u.replace(Object.assign({},u.location,{search:t.toString()}))}}),[s,u])]}function b(e){var t,r,a,u,o=e.defaultValue,i=e.queryString,l=void 0!==i&&i,d=e.groupId,b=p(e),m=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:b})})),h=m[0],y=m[1],g=v({queryString:l,groupId:d}),k=g[0],w=g[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,c.Nk)(t),a=r[0],u=r[1],[a,(0,n.useCallback)((function(e){t&&u.set(e)}),[t,u])]),j=x[0],I=x[1],V=function(){var e=null!=k?k:j;return f({value:e,tabValues:b})?e:null}();return(0,s.Z)((function(){V&&y(V)}),[V]),{selectedValue:h,selectValue:(0,n.useCallback)((function(e){if(!f({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);y(e),w(e),I(e)}),[w,I,b]),tabValues:b}}var m=r(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(85893);function g(e){var t=e.className,r=e.block,n=e.selectedValue,o=e.selectValue,s=e.tabValues,i=[],l=(0,u.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,r=i.indexOf(t),a=s[r].value;a!==n&&(l(t),o(a))},d=function(e){var t,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,a=i.indexOf(e.currentTarget)+1;r=null!=(n=i[a])?n:i[0];break;case"ArrowLeft":var u,o=i.indexOf(e.currentTarget)-1;r=null!=(u=i[o])?u:i[i.length-1]}null==(t=r)||t.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:s.map((function(e){var t=e.value,r=e.label,u=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return i.push(e)},onKeyDown:d,onClick:c},u,{className:(0,a.Z)("tabs__item",h.tabItem,null==u?void 0:u.className,{"tabs__item--active":n===t}),children:null!=r?r:t}),t)}))})}function k(e){var t=e.lazy,r=e.children,a=e.selectedValue,u=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var o=u.find((function(e){return e.props.value===a}));return o?(0,n.cloneElement)(o,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:u.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function w(e){var t=b(e);return(0,y.jsxs)("div",{className:(0,a.Z)("tabs-container",h.tabList),children:[(0,y.jsx)(g,Object.assign({},e,t)),(0,y.jsx)(k,Object.assign({},e,t))]})}function x(e){var t=(0,m.Z)();return(0,y.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>o});var n=r(67294);const a={},u=n.createContext(a);function o(e){const t=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(u.Provider,{value:t},e.children)}}}]);