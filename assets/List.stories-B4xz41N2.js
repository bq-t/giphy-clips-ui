import{_ as i,a as L}from"./ListItem-BMcX1wM-.js";import{w as g}from"./index-Cr4duuyA.js";import"./vue.esm-bundler-22DNFjOf.js";import"./Icon-kn0Px43-.js";import"./useRouterLink-DK_zrrsf.js";import"./v4-CtRu48qb.js";const B={title:"Components/List",component:i},e={args:{items:[{title:"First item",icon:"star-outline"},{title:"Second item",icon:"local-fire-department-outline"},{title:"Third item",icon:"favorite-outline"}]},decorators:[g()],render:t=>({components:{List:i},setup:()=>({args:t}),template:'<List v-bind="args" />'})},r={...e,render:t=>({...e.render(t),template:`
      <div style="display: flex; gap: 1.5rem;">
        <List v-bind="args" type="column" />
        <List v-bind="args" type="row" />
      </div>
    `})},s={...e,render:t=>({...e.render(t),components:{List:i,ListItem:L},template:`
      <List v-bind="args">
        <template #item="{ props }">
          <ListItem
            :title="props.title"
            :icon="props.icon"
          />
        </template>
      </List>
    `})};var n,o,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'First item',
      icon: 'star-outline'
    }, {
      title: 'Second item',
      icon: 'local-fire-department-outline'
    }, {
      title: 'Third item',
      icon: 'favorite-outline'
    }]
  },
  decorators: [vueRouter()],
  render: (args: ListProps) => ({
    components: {
      List
    },
    setup: () => ({
      args
    }),
    template: '<List v-bind="args" />'
  })
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Base,
  render: (args: ListProps) => ({
    ...Base.render(args),
    template: \`
      <div style="display: flex; gap: 1.5rem;">
        <List v-bind="args" type="column" />
        <List v-bind="args" type="row" />
      </div>
    \`
  })
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,d,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Base,
  render: (args: ListProps) => ({
    ...Base.render(args),
    components: {
      List,
      ListItem
    },
    template: \`
      <List v-bind="args">
        <template #item="{ props }">
          <ListItem
            :title="props.title"
            :icon="props.icon"
          />
        </template>
      </List>
    \`
  })
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const h=["Base","Types","WithSlot"];export{e as Base,r as Types,s as WithSlot,h as __namedExportsOrder,B as default};
