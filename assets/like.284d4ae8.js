import{_ as d,s as u}from"./index.d11b5b67.js";import{r as p,o as i,f as l,F as g,g as h,h as t,k,w as m,t as a}from"./vendor.3451bb13.js";const x={name:"author_like",data(){return{articlePage:{nextPage:1},articleList:[]}},methods:{likeList(n){u({url:"/api/article/like/list",method:"GET",params:{page:n}}).then(s=>{this.articlePage=s.data,this.articleList=this.articleList.concat(s.data.list)})},nextPage(){this.articlePage.isLastPage||this.likeList(this.articlePage.nextPage)}},mounted(){this.likeList(this.articlePage.nextPage)}},f={class:"list-group article-list"},P=["textContent"],v={class:"article-synopsis"},L={class:"float-end"},y={class:"list-group-item"};function C(n,s,b,B,r,o){const c=p("router-link");return i(),l("ul",f,[(i(!0),l(g,null,h(r.articleList,(e,_)=>(i(),l("li",{class:"list-group-item",key:_},[k(c,{to:{name:"article_info",params:{id:e.articleId}},class:"article-title"},{default:m(()=>[t("strong",null,[t("p",{textContent:a(e.title)},null,8,P)])]),_:2},1032,["to"]),t("div",v,a(e.synopsis),1),t("div",null,[t("span",null,a(e.createDate),1),t("a",L,a(e.nickname),1)])]))),128)),t("li",y,[t("a",{onClick:s[0]||(s[0]=e=>o.nextPage())},"\u83B7\u53D6")])])}var w=d(x,[["render",C]]);export{w as default};
