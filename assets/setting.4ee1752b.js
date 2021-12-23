import{_ as u,s as i}from"./index.9c7d0cc8.js";import{o as m,f as d,h as o,s as a,u as r}from"./vendor.d79661e5.js";const c={name:"author_setting",data(){return{author:{username:"",nickname:"",mail:""}}},components:{},methods:{logout(){localStorage.removeItem("token"),localStorage.removeItem("author"),this.$store.state.username="",window.location.href="/"},save(){i({url:"/api/author",method:"PUT",data:this.author}).then(n=>{this.selectAuthorLoad()})},selectAuthorLoad(){i({url:"/api/author/"+this.$route.params.username,method:"GET"}).then(n=>{this.author=n.data})}},mounted(){this.selectAuthorLoad()}},h={style:{margin:"10px"}},_={class:"row mb-3"},p=o("label",{class:"col-sm-2 col-form-label"},"\u7528\u6237\u540D",-1),v={class:"col-sm-10"},b={class:"row mb-3"},f=o("label",{class:"col-sm-2 col-form-label",disabled:""},"\u90AE\u7BB1",-1),g={class:"col-sm-10"},x={class:"row mb-3"},k=o("label",{class:"col-sm-2 col-form-label"},"\u6635\u79F0",-1),w={class:"col-sm-10"},y={class:"row mb-3"},U=o("label",{class:"col-sm-2 col-form-label"},"\u7B7E\u540D",-1),V={class:"col-sm-10"};function A(n,s,B,L,e,l){return m(),d("div",h,[o("div",_,[p,o("div",v,[a(o("input",{class:"form-control",disabled:"","onUpdate:modelValue":s[0]||(s[0]=t=>e.author.username=t)},null,512),[[r,e.author.username]])])]),o("div",b,[f,o("div",g,[a(o("input",{type:"text",class:"form-control",disabled:"","onUpdate:modelValue":s[1]||(s[1]=t=>e.author.mail=t)},null,512),[[r,e.author.mail]])])]),o("div",x,[k,o("div",w,[a(o("input",{type:"text",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=t=>e.author.nickname=t)},null,512),[[r,e.author.nickname]])])]),o("div",y,[U,o("div",V,[a(o("input",{class:"form-control",id:"inputPassword3","onUpdate:modelValue":s[3]||(s[3]=t=>e.author.signature=t)},null,512),[[r,e.author.signature]])])]),o("div",null,[o("button",{class:"btn btn-primary",onClick:s[4]||(s[4]=(...t)=>l.save&&l.save(...t))},"\u4FDD\u5B58\u4FE1\u606F"),o("button",{class:"btn btn-primary float-end",onClick:s[5]||(s[5]=(...t)=>l.logout&&l.logout(...t))},"\u9000\u51FA\u767B\u5F55")])])}var C=u(c,[["render",A]]);export{C as default};
