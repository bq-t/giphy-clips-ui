import{g}from"./vue.esm-bundler-D_7b7RA_.js";import{c as y,a as E}from"./useRouterLink-Dzaiw7ua.js";import{v as b}from"./v4-CtRu48qb.js";const{addons:v}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:P}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:f}=__STORYBOOK_MODULE_GLOBAL__;var w="storybook/actions",A=`${w}/action-event`,D={depth:10,clearOnStoryChange:!0,limit:50},m=(t,e)=>{let r=Object.getPrototypeOf(t);return!r||e(r)?r:m(r,e)},S=t=>!!(typeof t=="object"&&t&&m(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),I=t=>{if(S(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let r=Object.getOwnPropertyDescriptor(e,"view"),o=r==null?void 0:r.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...r,value:Object.create(o.constructor.prototype)}),e}return t},k=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?b():Date.now().toString(36)+Math.random().toString(36).substring(2);function d(t,e={}){let r={...D,...e},o=function(...n){var s,l;if(e.implicit){let u=(s="__STORYBOOK_PREVIEW__"in f?f.__STORYBOOK_PREVIEW__:void 0)==null?void 0:s.storyRenders.find(i=>i.phase==="playing"||i.phase==="rendering");if(u){let i=!((l=window==null?void 0:window.FEATURES)!=null&&l.disallowImplicitActionsInRenderV8),p=new P({phase:u.phase,name:t,deprecated:i});if(i)console.warn(p);else throw p}}let a=v.getChannel(),O=k(),R=5,c=n.map(I),_=n.length>1?c:c[0],h={id:O,count:0,data:{name:t,args:_},options:{...r,maxDepth:R+(r.depth||3),allowFunction:r.allowFunction||!1}};a.emit(A,h)};return o.isAction=!0,o.implicit=e.implicit,o}const j={template:`
    <div>
      <h2>Home</h2>
      
      <div style="display: flex; gap: 1em">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
  `},T={template:`
    <div>
      <h2>About</h2>

      <div style="display: flex; gap: 1em">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
  `},V=[{path:"/",name:"home",component:j,beforeEnter:(t,e)=>d("beforeEnter")({to:t.fullPath,from:e.fullPath})},{path:"/about",name:"about",component:T,beforeEnter:(t,e)=>d("beforeEnter")({to:t.fullPath,from:e.fullPath})}];function x(t,e){t.replace("/")}function B(t,e){t.getRoutes().forEach(o=>{t.removeRoute(o.name)}),e.forEach(o=>{t.addRoute(o)})}function C(t=V,e){return()=>({setup(){const{app:r}=g().appContext;let o;const n=r.config.globalProperties.$router,a=r.config.globalProperties.$route;(!n||n.isMocked===!0)&&(!a||a.isMocked===!0)?(o=y({history:E(),routes:t,...e==null?void 0:e.vueRouterOptions}),r.use(o)):(o=n,B(o,t)),x(o)},template:"<story/>"})}export{C as w};
