import{d as k,E as I,C as _,b as x,A as w,e as q,q as i,u as m,F as B,H as N,f as C,o as E}from"./vue.esm-bundler-22DNFjOf.js";import"./Badge-C4VWV9JF.js";import"./Button-CYivVhGd.js";import{_ as P}from"./Icon-kn0Px43-.js";import"./ListItem-BMcX1wM-.js";import"./Progressbar-DCIi9hIS.js";import{_ as M}from"./RangeInput-CbMtXzHU.js";import"./useRouterLink-DK_zrrsf.js";const R={class:"gc-volume-input__slider"},t=k({__name:"VolumeInput",props:I({modelValue:{},expanded:{type:Boolean,default:!1}},{modelValue:{default:50},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const o=_(e,"modelValue"),d=e,V=x(()=>o.value<=0?"volume-off":"volume-up-outline");function b(){o.value=o.value>0?0:50}const r=w(d.expanded);function u(l){d.expanded||(r.value=l)}return(l,n)=>(E(),q("div",{class:"gc-volume-input",onMouseenter:n[1]||(n[1]=()=>u(!0)),onMouseleave:n[2]||(n[2]=()=>u(!1))},[i(m(P),{class:"gc-volume-input__icon",role:"button",name:V.value,onClick:b},null,8,["name"]),B(C("div",R,[i(m(M),{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=h=>o.value=h)},null,8,["modelValue"])],512),[[N,r.value]])],32))}});t.__docgenInfo={exportName:"default",displayName:"VolumeInput",type:1,props:[{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"expanded",global:!1,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: number]",signature:'(event: "update:modelValue", value: number): void',declarations:[],schema:["number"]}],slots:[],exposed:[{name:"expanded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"modelValue",type:"number | undefined",description:"",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}}],sourceFiles:"/home/runner/work/giphy-clips-ui/giphy-clips-ui/src/components/VolumeInput/VolumeInput.vue"};const U={title:"Forms/VolumeInput",component:t},a={args:{modelValue:0},render:e=>({components:{VolumeInput:t},setup:()=>({args:e}),template:`
      <div style="width: 130px;">
        <VolumeInput v-bind="args" />
      </div>
    `})},s={...a,render:e=>({...a.render(e),template:'<VolumeInput v-bind="args" expanded />'})};var p,c,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    modelValue: 0
  },
  render: (args: VolumeInputProps) => ({
    components: {
      VolumeInput
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="width: 130px;">
        <VolumeInput v-bind="args" />
      </div>
    \`
  })
}`,...(f=(c=a.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var y,g,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Base,
  render: (args: VolumeInputProps) => ({
    ...Base.render(args),
    template: '<VolumeInput v-bind="args" expanded />'
  })
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const j=["Base","Expanded"];export{a as Base,s as Expanded,j as __namedExportsOrder,U as default};
