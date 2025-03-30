import{_ as p}from"./Icon-kn0Px43-.js";import"./vue.esm-bundler-22DNFjOf.js";const l={title:"Components/Icon",component:p},r={args:{name:"star"},render:o=>({components:{Icon:p},setup:()=>({args:o}),template:'<Icon v-bind="args" />'})},e={...r,render:o=>({...r.render(o),template:`
      <div style="display: flex; align-items: center; gap: 1rem;">
        <Icon v-bind="args" color="black" />
        <Icon v-bind="args" color="white" />
        <Icon v-bind="args" color="primary" />
      </div>
    `})};var s,n,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    name: 'star'
  },
  render: (args: IconProps) => ({
    components: {
      Icon
    },
    setup: () => ({
      args
    }),
    template: '<Icon v-bind="args" />'
  })
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var c,t,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Base,
  render: (args: IconProps) => ({
    ...Base.render(args),
    template: \`
      <div style="display: flex; align-items: center; gap: 1rem;">
        <Icon v-bind="args" color="black" />
        <Icon v-bind="args" color="white" />
        <Icon v-bind="args" color="primary" />
      </div>
    \`
  })
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const g=["Base","Colors"];export{r as Base,e as Colors,g as __namedExportsOrder,l as default};
