import{_ as a}from"./Icon-BgMhhbLX.js";import"./vue.esm-bundler-D3d-ZV0z.js";const p={title:"Icon",component:a,argTypes:{color:{controls:{type:"select"},options:["black","white","primary"],defaultValue:"black"},size:{controls:{type:"select"},options:["sm","md","lg"],defaultValue:"md"}}},e={args:{name:"star",color:"black",size:"lg",rounded:!0},render:o=>({components:{Icon:a},setup(){return{args:o}},template:`
      <div :style="{ display: 'flex', alignItems: 'center' }">
        <Icon v-bind="args" />
        <Icon name="star" color="black" size="md" />
        <Icon name="star" color="black" size="sm" />
      </div>
    `})},r={args:{name:"local-fire-department-outline",color:"primary",size:"lg",rounded:!0},render:o=>({components:{Icon:a},setup(){return{args:o}},template:`
      <div :style="{ display: 'flex', alignItems: 'center' }">
        <Icon v-bind="args" />
        <Icon name="local-fire-department-outline" color="primary" size="md" />
        <Icon name="local-fire-department-outline" color="primary" size="sm" />
      </div>
    `})};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    name: 'star',
    color: 'black',
    size: 'lg',
    rounded: true
  },
  render: args => ({
    components: {
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div :style="{ display: 'flex', alignItems: 'center' }">
        <Icon v-bind="args" />
        <Icon name="star" color="black" size="md" />
        <Icon name="star" color="black" size="sm" />
      </div>
    \`
  })
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var c,l,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'local-fire-department-outline',
    color: 'primary',
    size: 'lg',
    rounded: true
  },
  render: args => ({
    components: {
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div :style="{ display: 'flex', alignItems: 'center' }">
        <Icon v-bind="args" />
        <Icon name="local-fire-department-outline" color="primary" size="md" />
        <Icon name="local-fire-department-outline" color="primary" size="sm" />
      </div>
    \`
  })
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const u=["DefaultIcon","PrimaryIcon"];export{e as DefaultIcon,r as PrimaryIcon,u as __namedExportsOrder,p as default};
