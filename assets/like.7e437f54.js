import{_,s as d}from"./index.9c7d0cc8.js";import{r as u,o as a,f as l,F as p,g as h,h as t,k as b,w as k,t as o}from"./vendor.d79661e5.js";const m={name:"author_like",data(){return{blogPage:{nextPage:1},blogList:[]}},methods:{likeList(i){d({url:"/api/blog/like/list",method:"GET",params:{page:i}}).then(s=>{this.blogPage=s.data,this.blogList=this.blogList.concat(s.data.list)})},nextPage(){this.blogPage.isLastPage||this.likeList(this.blogPage.nextPage)}},mounted(){this.likeList(this.blogPage.nextPage)}},x={class:"list-group blog-list"},f=["textContent"],P={class:"blog-synopsis"},v={class:"float-end"},L={class:"list-group-item"};function y(i,s,C,B,n,r){const g=u("router-link");return a(),l("ul",x,[(a(!0),l(p,null,h(n.blogList,(e,c)=>(a(),l("li",{class:"list-group-item",key:c},[b(g,{to:{name:"blog_info",params:{id:e.blogId}},class:"blog-title"},{default:k(()=>[t("strong",null,[t("p",{textContent:o(e.title)},null,8,f)])]),_:2},1032,["to"]),t("div",P,o(e.synopsis),1),t("div",null,[t("span",null,o(e.createDate),1),t("a",v,o(e.nickname),1)])]))),128)),t("li",L,[t("a",{onClick:s[0]||(s[0]=e=>r.nextPage())},"\u83B7\u53D6")])])}var w=_(m,[["render",y]]);export{w as default};
