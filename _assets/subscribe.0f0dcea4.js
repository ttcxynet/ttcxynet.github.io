let t=document.createElement("style");t.innerHTML="body{overflow-y:scroll}",document.head.appendChild(t);import{s as e,o as s,c as a,F as n,e as o,b as l,r as i,i as r,t as d}from"./index.5e95bf68.js";var u={name:"author_subscribe",data:()=>({fansList:[]}),components:{},methods:{fansListMethod(){e({url:"/api/fans/list",method:"get"}).then((t=>{this.fansList=t.data.list}))},deleteFansMethod(t,s){e({url:"/api/fans/"+t,method:"DELETE"}).then((t=>{200==t.code&&this.fansList.splice(s,1)}))}},mounted(){this.fansListMethod()}};const c={class:"list-group blog-list"},m={class:"list-group-item "};u.render=function(t,e,u,h,f,p){const g=i("router-link");return s(),a("ul",c,[(s(!0),a(n,null,o(f.fansList,((t,e)=>(s(),a("li",{class:"list-group-item",key:e},[l(g,{target:"_blank",to:{name:"author_blog",params:{username:t.username}}},{default:r((()=>[l("strong",{textContent:d(t.nickname)},null,8,["textContent"])])),_:2},1032,["to"]),l("span",{class:"float-end",onClick:s=>p.deleteFansMethod(t.username,e)},"取消关注",8,["onClick"])])))),128)),l("li",m,[l("a",{class:"",onClick:e[1]||(e[1]=e=>t.loadBlog())},"获取")])])};export default u;
