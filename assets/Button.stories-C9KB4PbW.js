import{d as v,c as q,k as c,l as h,p as n,q as V,o,s as z,e as p,t as i,x as d,j as C,y as N}from"./vue.esm-bundler-D3d-ZV0z.js";import{_ as u}from"./Icon-BgMhhbLX.js";import{u as w}from"./useRouterLink-Bvn7xSTg.js";const S={key:0,class:"gc-button__prepend"},D={class:"gc-button__content"},T={key:1,class:"gc-button__append"},s=v({__name:"Button",props:{prependIcon:{},appendIcon:{},icon:{},color:{default:"black"},size:{default:"md"},tag:{default:"button"},href:{},target:{},append:{type:Boolean},exact:{type:Boolean},disabled:{type:Boolean},custom:{type:Boolean},activeClass:{},exactActiveClass:{},ariaCurrentValue:{},viewTransition:{type:Boolean},to:{},replace:{type:Boolean}},setup(t){const l=t,{computedTag:_,computedLinkAttributes:k}=w(l),I=q(()=>[{sm:"gc-button_size-sm",md:"gc-button_size-md",lg:"gc-button_size-lg"}[l.size],{"gc-button_icon":l.icon}]);return(e,A)=>(o(),c(V(n(_)),h(n(k),{class:["gc-button",I.value]}),{default:z(()=>[e.prependIcon&&!e.icon?(o(),p("span",S,[i(n(u),{class:"gc-button__prepend-icon",name:e.prependIcon},null,8,["name"])])):d("",!0),C("span",D,[e.icon?(o(),c(n(u),{key:0,name:e.icon,color:e.color==="primary"?"primary":"white",size:"sm"},null,8,["name","color"])):N(e.$slots,"default",{key:1})]),e.appendIcon&&!e.icon?(o(),p("span",T,[i(n(u),{class:"gc-button__append-icon",name:e.appendIcon},null,8,["name"])])):d("",!0)]),_:3},16,["class"]))}});s.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"disabled",required:!1,type:{name:"boolean"}},{name:"exact",required:!1,type:{name:"boolean"}},{name:"append",required:!1,type:{name:"boolean"}},{name:"target",required:!1,type:{name:"string"}},{name:"href",required:!1,type:{name:"string"}},{name:"tag",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"prependIcon",required:!1,type:{name:"string"}},{name:"appendIcon",required:!1,type:{name:"string"}},{name:"icon",required:!1,type:{name:"string"}},{name:"color",required:!1,type:{name:"ButtonColor"},defaultValue:{func:!1,value:"'black'"}},{name:"size",required:!1,type:{name:"ButtonSize"},defaultValue:{func:!1,value:"'md'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/giphy-clips-ui/giphy-clips-ui/src/components/Button/Button.vue"]};const j={title:"Button",component:s,argTypes:{prependIcon:{control:{type:"select"},options:["local-fire-department-outline","explore-outlined"],defaultValue:null},appendIcon:{control:{type:"select"},options:["local-fire-department-outline","explore-outline"],defaultValue:null},color:{control:{type:"select"},options:["primary","black"],defaultValue:"black"},size:{control:{type:"select"},options:["sm","md","lg"],defaultValue:"md"}}},a={args:{prependIcon:"star-outline",color:"black"},render:t=>({components:{Button:s},setup(){return{args:t}},template:'<Button v-bind="args">Button</Button>'})},r={args:{icon:"star-outline",color:"black"},render:t=>({components:{Button:s},setup(){return{args:t}},template:'<Button v-bind="args" />'})};var m,f,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    prependIcon: 'star-outline',
    color: 'black'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Button</Button>'
  })
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,B,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    icon: 'star-outline',
    color: 'black'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" />'
  })
}`,...(b=(B=r.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};const x=["DefaultButton","IconButton"];export{a as DefaultButton,r as IconButton,x as __namedExportsOrder,j as default};
