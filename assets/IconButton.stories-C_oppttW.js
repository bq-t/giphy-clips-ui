import{_ as x}from"./Button-DsScnhMr.js";import{w as I}from"./index-rbkji_WK.js";import"./vue.esm-bundler-D_7b7RA_.js";import"./Icon-CpqteINv.js";import"./useRouterLink-Dzaiw7ua.js";import"./v4-CtRu48qb.js";const D={title:"Components/Button/IconButton",component:x,argTypes:{icon:{control:"select",options:["local-fire-department-outline","explore-outline"]}}},e={args:{icon:"add"},decorators:[I()],render:r=>({components:{Button:x},setup:()=>({args:r}),template:'<Button v-bind="args" />'})},s={...e,render:r=>({...e.render(r),template:`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" size="primary">Small</Button>
        <Button v-bind="args" size="black">Medium</Button>
      </div>
    `})},t={...e,render:r=>({...e.render(r),template:`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" size="sm" />
        <Button v-bind="args" size="md" />
        <Button v-bind="args" size="lg" />
      </div>
    `})},a={...e,render:r=>({...e.render(r),template:`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" size="primary" loading />
        <Button v-bind="args" size="black" loading />
      </div>
    `})},o={...e,render:r=>({...e.render(r),template:`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" size="primary" disabled />
        <Button v-bind="args" size="black" disabled />
      </div>
    `})};var n,i,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    icon: 'add'
  },
  decorators: [vueRouter()],
  render: (args: ButtonProps) => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args" />'
  })
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,m,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: \`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" size="primary">Small</Button>
        <Button v-bind="args" size="black">Medium</Button>
      </div>
    \`
  })
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,g,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: \`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" size="sm" />
        <Button v-bind="args" size="md" />
        <Button v-bind="args" size="lg" />
      </div>
    \`
  })
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var B,v,b;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: \`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" size="primary" loading />
        <Button v-bind="args" size="black" loading />
      </div>
    \`
  })
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,z,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: \`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" size="primary" disabled />
        <Button v-bind="args" size="black" disabled />
      </div>
    \`
  })
}`,...(f=(z=o.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};const L=["Base","Colors","Sizes","Loading","Disabled"];export{e as Base,s as Colors,o as Disabled,a as Loading,t as Sizes,L as __namedExportsOrder,D as default};
