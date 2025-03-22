import{_ as r,a as g}from"./ListItem-C95UiDZg.js";import"./vue.esm-bundler-BnJXRzna.js";import"./Icon-DYgGmahP.js";import"./useRouterLink-C8XhPVqx.js";const v={title:"List",component:r,argTypes:{type:{control:{type:"select"},options:["column","row"],defaultValue:"column"}}},i=[{title:"First item",icon:"star-outline"},{title:"Second item",icon:"local-fire-department-outline"},{title:"Third item",icon:"favorite-outline"}],e={args:{items:i,type:"column"},render:t=>({components:{List:r},setup(){return{args:t}},template:'<List v-bind="args" />'})},s={args:{items:i,type:"column"},render:t=>({components:{List:r,ListItem:g},setup(){return{args:t}},template:`
      <List v-bind="args">
        <template #item="{ props }">
          <ListItem
            :title="props.title"
            :icon="props.icon"
          />
        </template>
      </List>
    `})},n={args:{items:i,type:"row"},render:t=>({components:{List:r,ListItem:g},setup(){return{args:t}},template:`
      <List v-bind="args">
        <template #item="{ props }">
          <ListItem
            :title="props.title"
            :icon="props.icon"
          />
        </template>
      </List>
    `})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    type: 'column'
  },
  render: args => ({
    components: {
      List
    },
    setup() {
      return {
        args
      };
    },
    template: '<List v-bind="args" />'
  })
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var m,c,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    type: 'column'
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
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,d,L;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    type: 'row'
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
}`,...(L=(d=n.parameters)==null?void 0:d.docs)==null?void 0:L.source}}};const b=["DefaultList","ColumnList","RowList"];export{s as ColumnList,e as DefaultList,n as RowList,b as __namedExportsOrder,v as default};
