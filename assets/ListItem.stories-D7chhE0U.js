import{a as c}from"./ListItem-BMcX1wM-.js";import{w as p}from"./index-Cr4duuyA.js";import"./vue.esm-bundler-22DNFjOf.js";import"./Icon-kn0Px43-.js";import"./useRouterLink-DK_zrrsf.js";import"./v4-CtRu48qb.js";const v={title:"Components/List/ListItem",component:c},e={args:{title:"Dashboard",icon:"dashboard-outline"},decorators:[p()],render:r=>({components:{ListItem:c},setup:()=>({args:r}),template:'<ListItem v-bind="args" />'})},t={...e,render:r=>({...e.render(r),template:'<ListItem v-bind="args" active />'})};var s,a,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Dashboard',
    icon: 'dashboard-outline'
  },
  decorators: [vueRouter()],
  render: (args: ListItemProps) => ({
    components: {
      ListItem
    },
    setup: () => ({
      args
    }),
    template: '<ListItem v-bind="args" />'
  })
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var i,m,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Base,
  render: (args: ListItemProps) => ({
    ...Base.render(args),
    template: '<ListItem v-bind="args" active />'
  })
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const b=["Base","Active"];export{t as Active,e as Base,b as __namedExportsOrder,v as default};
