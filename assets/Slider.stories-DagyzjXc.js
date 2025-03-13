import{_ as s}from"./Slider-Iym2O4X2.js";import"./vue.esm-bundler-D3d-ZV0z.js";const i={title:"Slider",component:s},e={args:{modelValue:20},render:a=>({components:{Slider:s},setup(){return{args:a}},template:`
      <div style="width: 500px;">
        <Slider v-bind="args" />
      </div>
    `})};var r,n,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    modelValue: 20
  },
  render: args => ({
    components: {
      Slider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="width: 500px;">
        <Slider v-bind="args" />
      </div>
    \`
  })
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const l=["DefaultSlider"];export{e as DefaultSlider,l as __namedExportsOrder,i as default};
