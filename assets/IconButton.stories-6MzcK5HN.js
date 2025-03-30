import{_ as I}from"./Button-CYivVhGd.js";import{w as z}from"./index-Cr4duuyA.js";import"./vue.esm-bundler-22DNFjOf.js";import"./Icon-kn0Px43-.js";import"./useRouterLink-DK_zrrsf.js";import"./v4-CtRu48qb.js";const D={title:"Components/Button/IconButton",component:I,argTypes:{icon:{control:"select",options:["local-fire-department-outline","explore-outline"]}}},e={args:{icon:"add"},decorators:[z()],render:r=>({components:{Button:I},setup:()=>({args:r}),template:'<Button v-bind="args" />'})},t={...e,render:r=>({...e.render(r),template:`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" color="primary" />
        <Button v-bind="args" color="black" />
      </div>
    `})},a={...e,render:r=>({...e.render(r),template:`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" size="sm" />
        <Button v-bind="args" size="md" />
        <Button v-bind="args" size="lg" />
      </div>
    `})},s={...e,render:r=>({...e.render(r),template:`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" color="primary" loading />
        <Button v-bind="args" color="black" loading />
      </div>
    `})},o={...e,render:r=>({...e.render(r),template:`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" color="primary" disabled />
        <Button v-bind="args" color="black" disabled />
      </div>
    `})};var n,d,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,c,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: \`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" color="primary" />
        <Button v-bind="args" color="black" />
      </div>
    \`
  })
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,g,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var B,v,b;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: \`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" color="primary" loading />
        <Button v-bind="args" color="black" loading />
      </div>
    \`
  })
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,f,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: \`
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" color="primary" disabled />
        <Button v-bind="args" color="black" disabled />
      </div>
    \`
  })
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const L=["Base","Colors","Sizes","Loading","Disabled"];export{e as Base,t as Colors,o as Disabled,s as Loading,a as Sizes,L as __namedExportsOrder,D as default};
