import{_ as g}from"./Progressbar-DZHZZHFR.js";import"./vue.esm-bundler-D_7b7RA_.js";const P={title:"Components/Progressbar",component:g},e={args:{modelValue:0},render:u=>({components:{Progressbar:g},setup:()=>({args:u}),template:`
      <div style="width: 500px;">
        <Progressbar v-bind="args" />
      </div>
    `})},r={...e,args:{...e.args,modelValue:50}},s={...e,args:{...e.args,modelValue:100}};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    modelValue: 0
  },
  render: (args: ProgressbarProps) => ({
    components: {
      Progressbar
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="width: 500px;">
        <Progressbar v-bind="args" />
      </div>
    \`
  })
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var t,d,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Base,
  args: {
    ...Base.args,
    modelValue: 50
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,l,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Base,
  args: {
    ...Base.args,
    modelValue: 100
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const v=["Base","HalfLoaded","FullLoaded"];export{e as Base,s as FullLoaded,r as HalfLoaded,v as __namedExportsOrder,P as default};
