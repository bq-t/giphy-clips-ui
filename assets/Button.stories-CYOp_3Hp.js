import{d as V,c as h,k as i,l as z,p as n,q as C,o,s as D,e as p,t as c,x as m,j as g,y as N}from"./vue.esm-bundler-BnJXRzna.js";import{_ as u}from"./Icon-DYgGmahP.js";import{u as w}from"./useRouterLink-C8XhPVqx.js";const L={key:0,class:"gc-button__prepend"},S={class:"gc-button__content"},x={key:1,class:"gc-button__append"},r=V({__name:"Button",props:{prependIcon:{},appendIcon:{},icon:{},color:{default:"black"},size:{default:"md"},loading:{type:Boolean,default:!1},tag:{default:"button"},href:{},target:{},append:{type:Boolean},exact:{type:Boolean},disabled:{type:Boolean,default:!1},custom:{type:Boolean},activeClass:{},exactActiveClass:{},ariaCurrentValue:{},viewTransition:{type:Boolean},to:{},replace:{type:Boolean}},setup(t){const a=t,{computedTag:k,computedLinkAttributes:I}=w(a),q=h(()=>[{sm:"gc-button_size-sm",md:"gc-button_size-md",lg:"gc-button_size-lg"}[a.size],{"gc-button_loading":a.loading},{"gc-button_disabled":a.disabled},{"gc-button_icon":a.icon}]);return(e,d)=>(o(),i(C(n(k)),z(n(I),{class:["gc-button",q.value],disabled:e.disabled||e.loading}),{default:D(()=>[e.prependIcon&&!e.icon?(o(),p("span",L,[c(n(u),{class:"gc-button__prepend-icon",name:e.prependIcon},null,8,["name"])])):m("",!0),g("span",S,[e.icon?(o(),i(n(u),{key:0,name:e.icon,color:e.color==="primary"?"primary":"white",size:"sm"},null,8,["name","color"])):N(e.$slots,"default",{key:1})]),e.appendIcon&&!e.icon?(o(),p("span",x,[c(n(u),{class:"gc-button__append-icon",name:e.appendIcon},null,8,["name"])])):m("",!0),d[0]||(d[0]=g("div",{class:"gc-button__overlay"},null,-1))]),_:3},16,["class","disabled"]))}});r.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"exact",required:!1,type:{name:"boolean"}},{name:"append",required:!1,type:{name:"boolean"}},{name:"target",required:!1,type:{name:"string"}},{name:"href",required:!1,type:{name:"string"}},{name:"tag",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"prependIcon",required:!1,type:{name:"string"}},{name:"appendIcon",required:!1,type:{name:"string"}},{name:"icon",required:!1,type:{name:"string"}},{name:"color",required:!1,type:{name:"ButtonColor"},defaultValue:{func:!1,value:"'black'"}},{name:"size",required:!1,type:{name:"ButtonSize"},defaultValue:{func:!1,value:"'md'"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/giphy-clips-ui/giphy-clips-ui/src/components/Button/Button.vue"]};const $={title:"Button",component:r,argTypes:{prependIcon:{control:{type:"select"},options:["local-fire-department-outline","explore-outlined"],defaultValue:null},appendIcon:{control:{type:"select"},options:["local-fire-department-outline","explore-outline"],defaultValue:null},color:{control:{type:"select"},options:["primary","black"],defaultValue:"black"},size:{control:{type:"select"},options:["sm","md","lg"],defaultValue:"md"}}},s={args:{prependIcon:"star-outline",color:"black",disabled:!1},render:t=>({components:{Button:r},setup(){return{args:t}},template:`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args">Button</Button>
        <Button v-bind="args" loading>Loading Button</Button>
        <Button v-bind="args" disabled>Disabled Button</Button>
      </div>
    `})},l={args:{icon:"star-outline",color:"black",loading:!1,disabled:!1},render:t=>({components:{Button:r},setup(){return{args:t}},template:`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" />
        <Button v-bind="args" loading />
        <Button v-bind="args" disabled />
      </div>
    `})};var f,b,B;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    template: \`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args">Button</Button>
        <Button v-bind="args" loading>Loading Button</Button>
        <Button v-bind="args" disabled>Disabled Button</Button>
      </div>
    \`
  })
}`,...(B=(b=s.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var y,v,_;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    icon: 'star-outline',
    color: 'black',
    loading: false,
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
    template: \`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" />
        <Button v-bind="args" loading />
        <Button v-bind="args" disabled />
      </div>
    \`
  })
}`,...(_=(v=l.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const j=["DefaultButton","IconButton"];export{s as DefaultButton,l as IconButton,j as __namedExportsOrder,$ as default};
