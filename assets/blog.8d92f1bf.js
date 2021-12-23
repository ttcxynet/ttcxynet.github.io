import{_ as x,s as n}from"./index.9c7d0cc8.js";import{r as f,o as a,f as i,h as t,F as g,g as _,s as I,v,k as y,w as j,t as d,m as r,d as k,i as B}from"./vendor.d79661e5.js";const L={name:"author_blog",data(){return{thisUsername:this.$route.params.username,isThisUser:this.$route.params.username==this.$store.state.username,thisItem:{},blogList:[],blogPage:{nextPage:1},subjectFrom:{subjectId:""},subjectList:[]}},methods:{loadBlogByUsername(l){n({url:"/api/blog/list/"+this.$route.params.username,method:"get",params:{page:l}}).then(s=>{s.data.list!=null&&(this.blogPage=s.data,this.blogList=this.blogList.concat(s.data.list))})},loadSubjectList(){n({url:"/api/subject/username",method:"GET",params:{username:this.$route.params.username}}).then(l=>{this.subjectList=l.data.list})},insertBlogToSubject(){let l=this.subjectFrom.blogId,s=this.subjectFrom.subjectId;n({url:"/api/subject/blog",method:"POST",params:{blogId:l,subjectId:s}}).then(u=>{this.thisItem.subjectId=s,this.$refs.close.click()})},updateBlogToSubject(){let l=this.subjectFrom.blogId,s=this.subjectFrom.subjectId;n({url:"/api/subject/blog",method:"PUT",params:{blogId:l,subjectId:s}}).then(u=>{this.thisItem.subjectId=s;for(let p in this.subjectList){let o=this.subjectList[p];s==o.blogSubjectId&&(this.thisItem.subjectName=o.subjectName)}this.$refs.close.click()})},saveBlogToSubject(){this.thisItem.subjectId==null?this.insertBlogToSubject():this.updateBlogToSubject()},deleteBlog(l,s){n({url:"/api/blog/"+l,method:"DELETE"}).then(u=>{this.blogList.splice(s,1)})},nextPage(){this.blogPage.isLastPage||this.loadBlogByUsername(this.blogPage.nextPage)}},mounted(){this.loadBlogByUsername(this.blogPage.nextPage),this.loadSubjectList()}},T={class:"list-group blog-list"},C=["textContent"],S={class:"blog-synopsis"},P={key:0},F={style:{background:"#efefef",padding:"0px 5px","border-radius":"10px",color:"#7d7d7d"}},U={style:{background:"#efefef",padding:"0px 5px","border-radius":"10px",color:"#7d7d7d"}},N={class:"btn-group float-end"},M=["onClick"],E=B("\u4FEE\u6539"),V=["onClick"],w=["onClick"],z={class:"list-group-item"},D={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},G={class:"modal-dialog"},O={class:"modal-content"},q=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},"\u6DFB\u52A0\u535A\u5BA2\u5230\u4E13\u8F91"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),A={class:"modal-body"},H=t("option",{value:""},"\u8BF7\u9009\u62E9",-1),J=["value"],K={class:"modal-footer"},Q={type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",ref:"close"};function R(l,s,u,p,o,c){const h=f("router-link");return a(),i(g,null,[t("ul",T,[(a(!0),i(g,null,_(o.blogList,(e,b)=>(a(),i("li",{class:"list-group-item",key:b},[y(h,{to:{name:"blog_info",params:{id:e.blogId}},class:"blog-title"},{default:j(()=>[t("strong",null,[t("p",{textContent:d(e.title)},null,8,C)])]),_:2},1032,["to"]),t("div",S,d(e.synopsis),1),e.subjectName!=null?(a(),i("p",P,[t("span",F,"\u4E13\u8F91 : "+d(e.subjectName),1)])):r("",!0),t("span",U,d(e.createDate),1),t("div",N,[o.isThisUser?(a(),i("button",{key:0,class:"btn btn-outline-danger float-end",style:{padding:"0px 5px 0px 3px","font-size":"13px"},onClick:m=>c.deleteBlog(e.blogId,b)},"\u5220\u9664",8,M)):r("",!0),o.isThisUser?(a(),k(h,{key:1,class:"btn btn-outline-danger float-end",style:{padding:"0px 5px 0px 3px","font-size":"13px"},target:"_blank",to:{name:"blog-editor",params:{id:e.blogId}}},{default:j(()=>[E]),_:2},1032,["to"])):r("",!0),e.subjectId==null&&o.isThisUser?(a(),i("button",{key:2,class:"btn btn-outline-success float-end",style:{padding:"0px 5px 0px 3px","font-size":"13px"},"data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:m=>(o.subjectFrom.blogId=e.blogId,o.thisItem=e)},"\u6DFB\u52A0\u5230\u4E13\u8F91",8,V)):r("",!0),e.subjectId!=null&&o.isThisUser?(a(),i("button",{key:3,class:"btn btn-outline-warning float-end",style:{padding:"0px 5px 0px 3px","font-size":"13px"},"data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:m=>(o.subjectFrom.blogId=e.blogId,o.thisItem=e)},"\u4FEE\u6539\u5230\u4E13\u8F91",8,w)):r("",!0)])]))),128)),t("li",z,[t("a",{onClick:s[0]||(s[0]=e=>c.nextPage())},"\u83B7\u53D6")])]),t("div",D,[t("div",G,[t("div",O,[q,t("div",A,[I(t("select",{class:"form-select","onUpdate:modelValue":s[1]||(s[1]=e=>o.subjectFrom.subjectId=e)},[H,(a(!0),i(g,null,_(o.subjectList,(e,b)=>(a(),i("option",{key:b,value:e.blogSubjectId},d(e.subjectName),9,J))),128))],512),[[v,o.subjectFrom.subjectId]])]),t("div",K,[t("button",Q,"\u5173\u95ED",512),t("button",{type:"button",class:"btn btn-primary",onClick:s[2]||(s[2]=(...e)=>c.saveBlogToSubject&&c.saveBlogToSubject(...e))},"\u4FDD\u5B58")])])])])],64)}var Y=x(L,[["render",R]]);export{Y as default};
