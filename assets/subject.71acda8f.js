import{_ as v,s as i}from"./index.11c52178.js";import{r as y,o as l,e as r,f as s,F as m,i as j,n as u,u as c,v as p,m as f,w as x,t as b}from"./vendor.610329c2.js";const F={name:"author_subject",data(){return{saveType:"update",thisUsername:this.$route.params.username,isThisUser:this.$route.params.username==this.$store.state.username,subjectList:[],dataFrom:{subjectId:"",subjectName:"",synopsis:""}}},methods:{save(){this.saveType=="insert"?i({url:"/api/subject",method:"POST",data:this.dataFrom}).then(o=>{alert(JSON.stringify(o.data))}):i({url:"/api/subject",method:"PUT",data:this.dataFrom}).then(o=>{alert(JSON.stringify(o.data))})},updateClick(o,t,d){this.dataFrom.subjectId=o,this.dataFrom.subjectName=t,this.dataFrom.synopsis=d,this.saveType="update"},selectSubjectListByUsername(o){i({url:"/api/subject/username",method:"GET",params:{username:o}}).then(t=>{this.subjectList=t.data.list})}},mounted(){this.selectSubjectListByUsername(this.$route.params.username)}},g={class:"list-group article-list"},C=["textContent"],k=["onClick"],T={key:0,class:"list-group-item"},N={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},U={class:"modal-dialog"},L={class:"modal-content"},I=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel"},"\u4E13\u8F91"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),M={class:"modal-body"},S={class:"mb-3"},B=s("label",{for:"exampleFormControlInput1",class:"form-label"},"\u4E13\u8F91\u540D",-1),V={class:"mb-3"},w=s("label",{for:"exampleFormControlTextarea1",class:"form-label"},"\u63CF\u8FF0",-1),O={class:"modal-footer"},D=s("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"\u5173\u95ED",-1);function E(o,t,d,J,a,n){const _=y("router-link");return l(),r(m,null,[s("ul",g,[(l(!0),r(m,null,j(a.subjectList,(e,h)=>(l(),r("li",{class:"list-group-item",key:h},[f(_,{to:{name:"subject_info",params:{subject_id:e.subjectId}}},{default:x(()=>[s("strong",{textContent:b(e.subjectName)},null,8,C)]),_:2},1032,["to"]),a.isThisUser?(l(),r("span",{key:0,class:"float-end","data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:P=>n.updateClick(e.subjectId,e.subjectName,e.synopsis)},"\u7F16\u8F91",8,k)):u("",!0),s("div",null,b(e.synopsis),1)]))),128)),a.isThisUser?(l(),r("li",T,[s("a",{"data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:t[0]||(t[0]=e=>(a.dataFrom={},a.saveType="insert"))},"\u521B\u5EFA\u4E13\u8F91")])):u("",!0)]),s("div",N,[s("div",U,[s("div",L,[I,s("div",M,[s("div",S,[B,c(s("input",{class:"form-control",id:"exampleFormControlInput1","onUpdate:modelValue":t[1]||(t[1]=e=>a.dataFrom.subjectName=e)},null,512),[[p,a.dataFrom.subjectName]])]),s("div",V,[w,c(s("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3","onUpdate:modelValue":t[2]||(t[2]=e=>a.dataFrom.synopsis=e)},null,512),[[p,a.dataFrom.synopsis]])])]),s("div",O,[D,s("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=(...e)=>n.save&&n.save(...e))},"\u4FDD\u5B58")])])])])],64)}var z=v(F,[["render",E]]);export{z as default};
