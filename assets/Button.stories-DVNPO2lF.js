import{_ as z}from"./Button-DsScnhMr.js";import{w as _}from"./index-rbkji_WK.js";import"./vue.esm-bundler-D_7b7RA_.js";import"./Icon-CpqteINv.js";import"./useRouterLink-Dzaiw7ua.js";import"./v4-CtRu48qb.js";const D={title:"Components/Button",component:z,argTypes:{prependIcon:{control:"select",options:["local-fire-department-outline","explore-outline"]},appendIcon:{control:"select",options:["local-fire-department-outline","explore-outline"]}}},e={decorators:[_()],render:r=>({components:{Button:z},setup:()=>({args:r}),template:'<Button v-bind="args">Button</Button>'})},t={...e,render:r=>({...e.render(r),template:`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" color="primary">Primary</Button>
        <Button v-bind="args" color="black">Black</Button>
      </div>
    `})},o={...e,render:r=>({...e.render(r),template:`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" size="sm">Small</Button>
        <Button v-bind="args" size="md">Medium</Button>
        <Button v-bind="args" size="lg">Large</Button>
      </div>
    `})},a={...e,render:r=>({...e.render(r),template:`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" prepend-icon="add">Add to cart</Button>
        <Button v-bind="args" append-icon="open-in-new">Explore</Button>
      </div>
    `})},n={...e,render:r=>({...e.render(r),template:`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" color="primary" loading>Primary</Button>
        <Button v-bind="args" color="black" loading>Black</Button>
      </div>
    `})},s={...e,render:r=>({...e.render(r),template:`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" color="primary" disabled>Primary</Button>
        <Button v-bind="args" color="black" disabled>Black</Button>
      </div>
    `})};var i,d,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  decorators: [vueRouter()],
  render: (args: ButtonProps) => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args">Button</Button>'
  })
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: \`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" color="primary">Primary</Button>
        <Button v-bind="args" color="black">Black</Button>
      </div>
    \`
  })
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,B,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: \`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" size="sm">Small</Button>
        <Button v-bind="args" size="md">Medium</Button>
        <Button v-bind="args" size="lg">Large</Button>
      </div>
    \`
  })
}`,...(g=(B=o.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var v,b,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: \`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" prepend-icon="add">Add to cart</Button>
        <Button v-bind="args" append-icon="open-in-new">Explore</Button>
      </div>
    \`
  })
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,x,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: \`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" color="primary" loading>Primary</Button>
        <Button v-bind="args" color="black" loading>Black</Button>
      </div>
    \`
  })
}`,...(I=(x=n.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var k,P,S;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: \`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" color="primary" disabled>Primary</Button>
        <Button v-bind="args" color="black" disabled>Black</Button>
      </div>
    \`
  })
}`,...(S=(P=s.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const M=["Base","Colors","Sizes","WithIcons","Loading","Disabled"];export{e as Base,t as Colors,s as Disabled,n as Loading,o as Sizes,a as WithIcons,M as __namedExportsOrder,D as default};
