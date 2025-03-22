import{d as c,u as d,c as p,e as u,j as i,n as m,o as g}from"./vue.esm-bundler-BnJXRzna.js";const _={class:"gc-progress"},r=c({__name:"Progress",props:{modelValue:{default:0},modelModifiers:{}},emits:["update:modelValue"],setup(s){const a=d(s,"modelValue"),l=p(()=>({width:a.value+"%"}));return(P,v)=>(g(),u("div",_,[i("div",{class:"gc-progress__track",style:m(l.value)},null,4)]))}});r.__docgenInfo={exportName:"default",displayName:"Progress",description:"",tags:{},sourceFiles:["/home/runner/work/giphy-clips-ui/giphy-clips-ui/src/components/Progress/Progress.vue"]};const h={title:"Progress",component:r},e={args:{modelValue:20},render:s=>({components:{Progress:r},setup(){return{args:s}},template:`
      <div style="width: 500px;">
        <Progress v-bind="args" />
      </div>
    `})};var o,n,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    modelValue: 20
  },
  render: args => ({
    components: {
      Progress
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="width: 500px;">
        <Progress v-bind="args" />
      </div>
    \`
  })
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const y=["DefaultProgress"];export{e as DefaultProgress,y as __namedExportsOrder,h as default};
