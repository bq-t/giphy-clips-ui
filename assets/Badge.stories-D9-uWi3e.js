import{_ as p}from"./Badge-C4VWV9JF.js";import"./vue.esm-bundler-22DNFjOf.js";const b={title:"Components/Badge",component:p},e={args:{color:"black",size:"md"},render:a=>({components:{Badge:p},setup:()=>({args:a}),template:'<Badge v-bind="args">Badge</Badge>'})},r={...e,render:a=>({...e.render(a),template:`
      <div style="display: flex; align-items: center; gap: 1rem;">
        <Badge v-bind="args" color="primary">Primary</Badge>
        <Badge v-bind="args" color="black">Black</Badge>
      </div>
    `})},s={...e,render:a=>({...e.render(a),template:`
      <div style="display: flex; align-items: center; gap: 1rem;">
        <Badge v-bind="args" size="sm">Small</Badge>
        <Badge v-bind="args" size="md">Medium</Badge>
        <Badge v-bind="args" size="lg">Large</Badge>
      </div>
    `})};var d,n,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    color: 'black',
    size: 'md'
  },
  render: (args: BadgeProps) => ({
    components: {
      Badge
    },
    setup: () => ({
      args
    }),
    template: '<Badge v-bind="args">Badge</Badge>'
  })
}`,...(g=(n=e.parameters)==null?void 0:n.docs)==null?void 0:g.source}}};var i,o,t;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Base,
  render: (args: BadgeProps) => ({
    ...Base.render(args),
    template: \`
      <div style="display: flex; align-items: center; gap: 1rem;">
        <Badge v-bind="args" color="primary">Primary</Badge>
        <Badge v-bind="args" color="black">Black</Badge>
      </div>
    \`
  })
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var m,l,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Base,
  render: (args: BadgeProps) => ({
    ...Base.render(args),
    template: \`
      <div style="display: flex; align-items: center; gap: 1rem;">
        <Badge v-bind="args" size="sm">Small</Badge>
        <Badge v-bind="args" size="md">Medium</Badge>
        <Badge v-bind="args" size="lg">Large</Badge>
      </div>
    \`
  })
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const u=["Base","Colors","Sizes"];export{e as Base,r as Colors,s as Sizes,u as __namedExportsOrder,b as default};
