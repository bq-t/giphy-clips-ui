import{a,_ as o}from"./ListItem-DAdElTod.js";import"./vue.esm-bundler-D3d-ZV0z.js";import"./Icon-BgMhhbLX.js";import"./useRouterLink-Bvn7xSTg.js";const p={title:"ListItem",component:a},t={args:{title:"Editable item",icon:"star-outline",active:!1},render:r=>({components:{List:o,ListItem:a},setup(){return{args:r}},template:`
      <List>
        <ListItem v-bind="args" />
        <ListItem
          title="Example list item"
          icon="favorite-outline"
        />
        <ListItem
          title="Example active list item"
          icon="favorite-outline"
          :active="true"
        />
      </List>
    `})};var e,i,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    title: 'Editable item',
    icon: 'star-outline',
    active: false
  },
  render: args => ({
    components: {
      List,
      ListItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <List>
        <ListItem v-bind="args" />
        <ListItem
          title="Example list item"
          icon="favorite-outline"
        />
        <ListItem
          title="Example active list item"
          icon="favorite-outline"
          :active="true"
        />
      </List>
    \`
  })
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const u=["DefaultListItem"];export{t as DefaultListItem,u as __namedExportsOrder,p as default};
