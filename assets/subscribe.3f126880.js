import{_,s as l}from"./index.11c52178.js";import{r as m,o as a,e as o,F as p,i as f,f as n,m as h,w as k,t as g}from"./vendor.610329c2.js";const v={name:"author_subscribe",data(){return{fansList:[]}},components:{},methods:{fansListMethod(){l({url:"/api/fans/list",method:"get"}).then(e=>{this.fansList=e.data.list})},deleteFansMethod(e,t){l({url:"/api/fans/"+e,method:"DELETE"}).then(r=>{r.data.code==200&&this.fansList.splice(t,1)})}},mounted(){this.fansListMethod()}},L={class:"list-group article-list"},b=["textContent"],C=["onClick"],x={class:"list-group-item"};function y(e,t,r,E,c,d){const u=m("router-link");return a(),o("ul",L,[(a(!0),o(p,null,f(c.fansList,(s,i)=>(a(),o("li",{class:"list-group-item",key:i},[h(u,{target:"_blank",to:{name:"author_article",params:{username:s.username}}},{default:k(()=>[n("strong",{textContent:g(s.nickname)},null,8,b)]),_:2},1032,["to"]),n("span",{class:"float-end",onClick:F=>d.deleteFansMethod(s.username,i)},"\u53D6\u6D88\u5173\u6CE8",8,C)]))),128)),n("li",x,[n("a",{class:"",onClick:t[0]||(t[0]=s=>e.loadArticle())},"\u83B7\u53D6")])])}var B=_(v,[["render",y]]);export{B as default};
