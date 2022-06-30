import{_ as L,s as n,a as I,b as T}from"./index.3c783bdb.js";import{r as j,o as i,e as l,f as t,j as d,t as r,F as _,i as f,n as a,m as b,w as p,p as v,d as g}from"./vendor.610329c2.js";const C={name:"article_info",data(){return{fans:2,loginUsername:this.$store.state.username,articleId:this.$route.params.id,loading:!0,recommendList:null,commentList:[],article:{},commentText:"",subject:[],articleList:[],showSubject:!1,collect:0}},components:{},methods:{fansClick(s){this.fans==2?n({url:"/api/fans/"+s,method:"POST"}).then(c=>{this.fans=1}):n({url:"/api/fans/"+s,method:"DELETE"}).then(c=>{this.fans=2})},isFans(){n({url:"/api/fans/username/"+this.article.username,method:"get"}).then(s=>{s.data==1?this.fans=1:this.fans=2})},collectClick(){this.collect==1?n({url:"/api/collect/"+this.articleId,method:"DELETE"}).then(s=>{this.collect=0}):n({url:"/api/collect/"+this.articleId,method:"POST"}).then(s=>{this.collect=1})},isLike(){n({url:"/api/collect/"+this.articleId,method:"GET"}).then(s=>{this.collect=s.data})},loadArticleInfo(){n({url:"/api/article/load/"+this.articleId,method:"GET"}).then(s=>{this.article=s.data,this.$store.state.username!=""&&this.isFans(),this.loading=!1})},selectSubjectArticleList(){n({url:"/api/subject/article/"+this.articleId,method:"GET"}).then(s=>{this.subject=s.data,this.subject!=""&&(this.articleList=s.data.articleList,this.showSubject=!0)})},loadRecommend(){n({url:"/api/article/recommend",method:"GET"}).then(s=>{this.recommendList=s.data})},load(){this.articleId=this.$route.params.id,this.$store.state.username!=""&&this.isLike(),this.selectSubjectArticleList(),this.loadArticleInfo()}},mounted(){this.load(),this.loadRecommend()},watch:{$route:"load"}},x={class:"row"},E={class:"col-md-3 col-lg-3 d-md-inline d-none"},w={key:0,class:"list-group mb-2"},S={class:"list-group-item active"},N=t("span",{class:"float-end"},"\u4E13\u9898",-1),A={key:1,class:"card mb-2"},B=t("div",{class:"card-body"},[t("div",{class:"spinner-border",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")])],-1),D=[B],F={class:"list-group mb-2"},G=t("a",{class:"list-group-item active"},[d("\u63A8\u8350"),t("span",{class:"float-end"},"\u{1F387}")],-1),V=["href"],O={class:"col-md-9 col-lg-9 pb-5"},P={class:"row"},H={class:"col-lg-8 move-p-lr-0"},M={class:"card mb-2 article-body"},R={key:0,class:"card-body"},U={key:0,class:"classColor"},z=d(" . "),q={style:{color:"rgb(180, 180, 180)"}},J=["innerHTML"],K={key:1,class:"card-body"},Q={class:"col-lg-4 move-p-lr-0"},W={class:"list-group mb-2 move-b-lr-0"},X={class:"card move-b-lr-0"},Y={class:"navbar fixed-bottom navbar-light bg-light",style:{"border-top":"1px solid rgb(206, 206, 206)"}},Z={class:"container-fluid"},$={class:"col-md-12 col-lg-12"},tt=t("a",{disabled:"",class:"btn btn-outline-primary btn-sm mini-but"},"\u4E3E\u62A5",-1),et=["href"],st=d("\u4FEE\u6539"),it=t("a",{class:"btn btn-outline-primary btn-sm mini-but",onclick:"document.body.scrollTop = document.documentElement.scrollTop = 0"},"\u2B06TOP",-1);function lt(s,c,ot,nt,e,m){const u=j("router-link"),k=I,y=T;return i(),l(_,null,[t("div",x,[t("div",E,[e.showSubject?(i(),l("div",w,[t("a",S,[d(r(e.subject.subjectName),1),N]),(i(!0),l(_,null,f(e.articleList,(o,h)=>(i(),g(u,{class:v([o.articleId==e.article.articleId?"active2":"","list-group-item"]),key:h,to:{name:"article_info",params:{id:o.articleId}}},{default:p(()=>[d(r(o.title),1)]),_:2},1032,["class","to"]))),128))])):a("",!0),e.recommendList==null?(i(),l("div",A,D)):a("",!0),t("div",F,[G,(i(!0),l(_,null,f(e.recommendList,(o,h)=>(i(),l("a",{class:"list-group-item",key:h,href:"/article/"+o.articleId},r(o.title),9,V))),128))])]),t("div",O,[t("div",P,[t("div",H,[t("div",M,[e.loading?a("",!0):(i(),l("div",R,[t("div",null,[t("strong",null,[b(u,{to:{name:"author_article",params:{username:e.article.username}}},{default:p(()=>[d(r(e.article.nickname),1)]),_:1},8,["to"])]),e.article.className!=null?(i(),l("strong",U," . "+r(e.article.className),1)):a("",!0),z,t("span",q,r(e.article.createDate),1),e.fans==2?(i(),l("button",{key:1,class:"btn btn-outline-warning float-end t-b-m-1",onClick:c[0]||(c[0]=o=>m.fansClick(e.article.username))}," \u8BA2\u9605 ")):a("",!0),e.fans==1?(i(),l("button",{key:2,class:"btn btn-outline-warning float-end t-b-m-1",onClick:c[1]||(c[1]=o=>m.fansClick(e.article.username))}," \u53D6\u6D88\u8BA2\u9605 ")):a("",!0)]),t("h3",null,[t("strong",null,r(e.article.title),1)]),t("div",{class:"markdown-body",innerHTML:e.article.text},null,8,J)])),e.loading?(i(),l("div",K,"\u52A0\u8F7D\u4E2D...")):a("",!0)])]),t("div",Q,[t("div",W,[b(k)]),t("div",X,[b(y)])])])])]),t("nav",Y,[t("div",Z,[t("div",$,[t("a",{class:v([e.collect==1?"btn-outline-danger":"btn-outline-primary","btn btn-sm mini-but"]),style:{"margin-left":"0px"},onClick:c[2]||(c[2]=(...o)=>m.collectClick&&m.collectClick(...o))},"\u6536\u85CF",2),tt,t("a",{class:"btn btn-outline-primary btn-sm mini-but",href:"https://ttcxy.cn/post/"+e.articleId},"\u9605\u8BFB\u6A21\u5F0F",8,et),e.article.username==e.loginUsername?(i(),g(u,{key:0,class:"btn btn-outline-primary btn-sm mini-but",to:{name:"article-editor",params:{id:e.articleId}}},{default:p(()=>[st]),_:1},8,["to"])):a("",!0),it])])])],64)}var rt=L(C,[["render",lt]]);export{rt as default};
