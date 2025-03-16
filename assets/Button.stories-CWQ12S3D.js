import{d as V,c as h,k as p,l as z,p as a,q as C,o as n,s as N,e as d,t as i,x as m,j as f,y as w}from"./vue.esm-bundler-D3d-ZV0z.js";import{_ as u}from"./Icon-BgMhhbLX.js";import{u as S}from"./useRouterLink-Bvn7xSTg.js";const D={key:0,class:"gc-button__prepend"},T={class:"gc-button__content"},A={key:1,class:"gc-button__append"},r=V({__name:"Button",props:{prependIcon:{},appendIcon:{},icon:{},color:{default:"black"},size:{default:"md"},tag:{default:"button"},href:{},target:{},append:{type:Boolean},exact:{type:Boolean},disabled:{type:Boolean,default:!1},custom:{type:Boolean},activeClass:{},exactActiveClass:{},ariaCurrentValue:{},viewTransition:{type:Boolean},to:{},replace:{type:Boolean}},setup(t){const l=t,{computedTag:v,computedLinkAttributes:I}=S(l),q=h(()=>[{sm:"gc-button_size-sm",md:"gc-button_size-md",lg:"gc-button_size-lg"}[l.size],{"gc-button_icon":l.icon}]);return(e,c)=>(n(),p(C(a(v)),z(a(I),{class:["gc-button",q.value],disabled:e.disabled}),{default:N(()=>[e.prependIcon&&!e.icon?(n(),d("span",D,[i(a(u),{class:"gc-button__prepend-icon",name:e.prependIcon},null,8,["name"])])):m("",!0),f("span",T,[e.icon?(n(),p(a(u),{key:0,name:e.icon,color:e.color==="primary"?"primary":"white",size:"sm"},null,8,["name","color"])):w(e.$slots,"default",{key:1})]),e.appendIcon&&!e.icon?(n(),d("span",A,[i(a(u),{class:"gc-button__append-icon",name:e.appendIcon},null,8,["name"])])):m("",!0),c[0]||(c[0]=f("div",{class:"gc-button__overlay"},null,-1))]),_:3},16,["class","disabled"]))}});r.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"exact",required:!1,type:{name:"boolean"}},{name:"append",required:!1,type:{name:"boolean"}},{name:"target",required:!1,type:{name:"string"}},{name:"href",required:!1,type:{name:"string"}},{name:"tag",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"prependIcon",required:!1,type:{name:"string"}},{name:"appendIcon",required:!1,type:{name:"string"}},{name:"icon",required:!1,type:{name:"string"}},{name:"color",required:!1,type:{name:"ButtonColor"},defaultValue:{func:!1,value:"'black'"}},{name:"size",required:!1,type:{name:"ButtonSize"},defaultValue:{func:!1,value:"'md'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/giphy-clips-ui/giphy-clips-ui/src/components/Button/Button.vue"]};const j={title:"Button",component:r,argTypes:{prependIcon:{control:{type:"select"},options:["local-fire-department-outline","explore-outlined"],defaultValue:null},appendIcon:{control:{type:"select"},options:["local-fire-department-outline","explore-outline"],defaultValue:null},color:{control:{type:"select"},options:["primary","black"],defaultValue:"black"},size:{control:{type:"select"},options:["sm","md","lg"],defaultValue:"md"}}},o={args:{prependIcon:"star-outline",color:"black",disabled:!1},render:t=>({components:{Button:r},setup(){return{args:t}},template:'<Button v-bind="args">Button</Button>'})},s={args:{icon:"star-outline",color:"black",disabled:!1},render:t=>({components:{Button:r},setup(){return{args:t}},template:'<Button v-bind="args" />'})};var g,b,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    prependIcon: 'star-outline',
    color: 'black',
    disabled: false
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
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var B,_,k;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    icon: 'star-outline',
    color: 'black',
    disabled: false
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
}`,...(k=(_=s.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const F=["DefaultButton","IconButton"];export{o as DefaultButton,s as IconButton,F as __namedExportsOrder,j as default};
