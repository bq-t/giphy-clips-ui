import{a as c}from"./ListItem-DhaRKgzF.js";import{w as p}from"./index-rbkji_WK.js";import"./vue.esm-bundler-D_7b7RA_.js";import"./Icon-CpqteINv.js";import"./useRouterLink-Dzaiw7ua.js";import"./v4-CtRu48qb.js";const v={title:"Components/List/ListItem",component:c},e={args:{title:"Dashboard",icon:"dashboard-outline"},decorators:[p()],render:r=>({components:{ListItem:c},setup:()=>({args:r}),template:'<ListItem v-bind="args" />'})},t={...e,render:r=>({...e.render(r),template:'<ListItem v-bind="args" active />'})};var s,a,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
