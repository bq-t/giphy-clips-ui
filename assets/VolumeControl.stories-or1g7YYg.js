import{d as y,m as b,u as h,c as S,z as M,e as N,t as c,p as i,f as k,A as x,j as B,o as A}from"./vue.esm-bundler-D3d-ZV0z.js";import{_ as D}from"./Icon-BgMhhbLX.js";import{_ as E}from"./Slider-Iym2O4X2.js";const I={class:"gc-volume-control__slider"},s=y({__name:"VolumeControl",props:b({alwaysShowVolume:{type:Boolean,default:!1}},{modelValue:{default:50},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const l=h(e,"modelValue"),t=e,C=S(()=>l.value<=0?"volume-off":"volume-up-outline");function w(){l.value=l.value>0?0:50}const u=M(t.alwaysShowVolume);function n(m){t.alwaysShowVolume||(u.value=m)}return(m,o)=>(A(),N("div",{class:"gc-volume-control",onMouseenter:o[1]||(o[1]=()=>n(!0)),onMouseleave:o[2]||(o[2]=()=>n(!1))},[c(i(D),{class:"gc-volume-control__icon",role:"button",name:C.value,onClick:w},null,8,["name"]),k(B("div",I,[c(i(E),{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=_=>l.value=_)},null,8,["modelValue"])],512),[[x,u.value]])],32))}});s.__docgenInfo={exportName:"default",displayName:"VolumeControl",description:"",tags:{},props:[{name:"alwaysShowVolume",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/giphy-clips-ui/giphy-clips-ui/src/components/VolumeControl/VolumeControl.vue"]};const z={title:"VolumeControl",component:s},a={args:{modelValue:20},render:e=>({components:{VolumeControl:s},setup(){return{args:e}},template:'<VolumeControl v-bind="args" />'})},r={args:{modelValue:20,alwaysShowVolume:!0},render:e=>({components:{VolumeControl:s},setup(){return{args:e}},template:'<VolumeControl v-bind="args" />'})};var d,p,V;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    modelValue: 20
  },
  render: args => ({
    components: {
      VolumeControl
    },
    setup() {
      return {
        args
      };
    },
    template: '<VolumeControl v-bind="args" />'
  })
}`,...(V=(p=a.parameters)==null?void 0:p.docs)==null?void 0:V.source}}};var f,v,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    modelValue: 20,
    alwaysShowVolume: true
  },
  render: args => ({
    components: {
      VolumeControl
    },
    setup() {
      return {
        args
      };
    },
    template: '<VolumeControl v-bind="args" />'
  })
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const F=["DefaultVolumeControl","AlwaysVisibleVolumeControl"];export{r as AlwaysVisibleVolumeControl,a as DefaultVolumeControl,F as __namedExportsOrder,z as default};
