"use strict";(self.webpackChunkvsuet_test_page=self.webpackChunkvsuet_test_page||[]).push([[528],{964:(e,s,t)=>{t.d(s,{c:()=>_});var n=t(560);const r="TestTitle_testTitleWrap__X3ci-",i="TestTitle_testName__C5hry",l="TestTitle_backBtn__PpfT9";var c=t(624),a=t(620),o=t(60),d=t(496);const _=(0,o.memo)((e=>{let{testName:s}=e;const t=(0,n.i6)(),o=(0,c.OY)();return(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("h1",{className:i,children:s}),(0,d.jsx)("button",{className:l,onClick:()=>{o((0,a.aW)(!1)),t("/")},children:"<"})]})}))},528:(e,s,t)=>{t.r(s),t.d(s,{default:()=>W});var n=t(60);const r={testPage:"Test_testPage__tDd5f",content:"Test_content__+WfVe",testName:"Test_testName__YFheP"};var i=t(624);const l="Answer_answer__zbEsl",c="Answer_answerRadio__Vl6g0",a="Answer_answerText__-8-CZ";var o=t(496);const d=(0,n.memo)((e=>{let{answer:s,id:t,value:n,setSelectedAnswerIndex:r}=e;return(0,o.jsxs)("div",{className:l,children:[(0,o.jsx)("input",{className:c,type:"radio",id:t,name:"answer",value:n,onClick:e=>r(e.target.value)}),(0,o.jsx)("label",{className:a,htmlFor:t,children:s.title})]})})),_="AnswerList_controls__hEUML",x="AnswerList_answersList__7TDHX",u="NextQuestionBtn_nextQuestionBtn__4dRjf",m=e=>{let{onNextQuestionClick:s,selectedAnswerIndex:t}=e;const n=!t;return(0,o.jsx)("button",{type:"button",className:u,onClick:s,disabled:n,children:"\u2611\ufe0f"})};var j=t(560),w=t(620);const h=e=>{const{answers:s,questionAmount:t,currentQuestionIndex:r}=e,{selectedAnswerIndex:l,setSelectedAnswerIndex:c,onNextQuestionClick:a}=function(e,s){const t=(0,i.OY)(),r=(0,j.i6)(),[l,c]=(0,n.useState)(null);return{onNextQuestionClick:function(){if(e>=s-1)return t((0,w.MX)({selectedAnswerIndex:l})),t((0,w.KW)()),void r("result");t((0,w.MX)({selectedAnswerIndex:l})),t((0,w.UF)({selectedAnswerIndex:l})),c(null)},selectedAnswerIndex:l,setSelectedAnswerIndex:c}}(r,t);return(0,o.jsxs)("form",{className:_,children:[(0,o.jsx)("div",{className:x,children:s.map(((e,s)=>(0,o.jsx)(d,{answer:e,id:s+r,value:s,setSelectedAnswerIndex:c},e+s+r)))}),(0,o.jsx)(m,{onNextQuestionClick:a,selectedAnswerIndex:l})]})},N="Question_question__qITPK",p="Question_questionTitle__eSxL8",g=e=>{let{test:s}=e;const t=(0,i.w1)((e=>e.test.currentQuestionIndex)),n=s.questions[t];return(0,o.jsxs)("section",{className:N,children:[(0,o.jsx)("h2",{className:p,children:n.title}),(0,o.jsx)(h,{testId:s.id,answers:n.answers,questionAmount:s.questions.length,currentQuestionIndex:t})]})},I="ProgressLine_progressWrap__PYVTQ",v="ProgressLine_progressInfo__L8zcM",f="ProgressLine_progressLine__-r0OJ",T=e=>{const{questionNumber:s,questionAmount:t}=e;return(0,o.jsxs)("div",{className:I,children:[(0,o.jsxs)("label",{className:v,htmlFor:"test-progress",children:[(0,o.jsx)("span",{children:s}),(0,o.jsx)("span",{children:"/"}),(0,o.jsxs)("span",{children:[t," "]})]}),(0,o.jsx)("progress",{className:f,id:"test-progress",value:s,max:t})]})},A={id:1,name:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",desc:"\u041d\u0430\u0448 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u043f\u0440\u043e\u0439\u0442\u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0442\u0435\u0441\u0442 \u043d\u0430 \u0412\u0430\u0448\u0438 \u043d\u0430\u0432\u044b\u043a\u0438, \u0443\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u044b \u0438 \u0443\u0437\u043d\u0430\u0442\u044c, \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u043b\u0438 \u0412\u0430\u043c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 #09.02.07:",category:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",cover:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",maxResult:50,questions:[{title:"\u0421\u0447\u0438\u0442\u0430\u0435\u0442\u0435 \u043b\u0438 \u0412\u044b, \u0447\u0442\u043e \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u044b \u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u044d\u0442\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e?",answers:[{title:"\u0414\u0430!",score:5},{title:"\u041d\u0435 \u0437\u043d\u0430\u044e, \u0445\u043e\u0447\u0443 \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0431\u044f \u0432 \u043d\u043e\u0432\u043e\u0439 \u0441\u0444\u0435\u0440\u0435",score:3},{title:"\u041d\u0435\u0442",score:1}]},{title:"\u0412\u0430\u043c \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0440\u0435\u0448\u0430\u0442\u044c \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0438 \u0433\u043e\u043b\u043e\u0432\u043e\u043b\u043e\u043c\u043a\u0438?",answers:[{title:"\u0414\u0430",score:5},{title:"\u041d\u0435\u0442",score:1},{title:"\u0414\u0430, \u043d\u043e \u0438\u043d\u043e\u0433\u0434\u0430 \u0445\u043e\u0447\u0435\u0442\u0441\u044f \u0447\u0435\u0433\u043e-\u0442\u043e \u043f\u043e\u043f\u0440\u043e\u0449\u0435",score:3}]},{title:"\u0423 \u0412\u0430\u0441 \u0435\u0441\u0442\u044c \u043e\u043f\u044b\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c \u0438\u043b\u0438 \u0434\u0438\u0437\u0430\u0439\u043d\u0430?",answers:[{title:"\u0423\u0432\u043b\u0435\u043a\u0430\u044e\u0441\u044c \u044d\u0442\u0438\u043c \u0441 \u0434\u0435\u0442\u0441\u0442\u0432\u0430",score:5},{title:"\u041d\u0435\u0434\u0430\u0432\u043d\u043e \u043d\u0430\u0447\u0430\u043b \u0438\u0437\u0443\u0447\u0430\u0442\u044c",score:3},{title:"\u041d\u0435\u0442",score:1}]},{title:"\u0421\u0447\u0438\u0442\u0430\u0435\u0442\u0435 \u043b\u0438 \u0412\u044b \u0441\u0435\u0431\u044f \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u043e\u043c \u0441 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0441\u043a\u043b\u0430\u0434\u043e\u043c \u0443\u043c\u0430?",answers:[{title:"\u041d\u0435\u0442, \u044f - \u0433\u0443\u043c\u0430\u043d\u0438\u0442\u0430\u0440\u0438\u0439",score:0},{title:"\u0414\u0430",score:5},{title:"\u041d\u0435\u0442, \u043d\u043e \u044f \u043d\u0430\u0434\u0435\u044e\u0441\u044c \u044d\u0442\u043e \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c",score:3}]},{title:"\u041a\u0430\u043a\u0438\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u0412\u0430\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b?",answers:[{title:"\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442",score:5},{title:"\u041d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438",score:4},{title:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u0438",score:3},{title:"\u0414\u0440\u0443\u0433\u043e\u0435",score:2}]},{title:"\u0412 \u043a\u0430\u043a\u043e\u0439 \u0438\u0437 \u043e\u0431\u043b\u0430\u0441\u0442\u0435\u0439 \u0412\u044b \u0431\u044b \u0445\u043e\u0442\u0435\u043b\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c?",answers:[{title:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",score:5},{title:"\u0414\u0438\u0437\u0430\u0439\u043d",score:4},{title:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",score:3},{title:"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430",score:2},{title:"\u0414\u0440\u0443\u0433\u043e\u0435",score:1}]},{title:"\u041a\u0430\u043a \u0432\u044b \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u0435\u0442\u0435 \u0441\u0432\u043e\u044e \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u0438 \u043e\u0431\u0449\u0430\u0442\u044c\u0441\u044f \u0441 \u043a\u043e\u043b\u043b\u0435\u0433\u0430\u043c\u0438?",answers:[{title:"\u0421 \u044d\u0442\u0438\u043c \u043d\u0435 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0435\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c, \u044f \u043e\u0431\u0449\u0438\u0442\u0435\u043b\u0435\u043d",score:5},{title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0443\u0432\u043b\u0435\u043a\u0430\u0442\u0435\u043b\u044c\u043d\u0430",score:3},{title:"\u041c\u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0440\u0430\u0432\u044f\u0442\u0441\u044f \u043e\u0434\u0438\u043d\u043e\u0447\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b",score:1}]},{title:"\u0421\u043c\u043e\u0436\u0435\u0442\u0435 \u043b\u0438 \u0432\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445 \u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u043c\u0435\u043d\u044f\u0442\u044c \u0441\u0432\u043e\u0438 \u043f\u043b\u0430\u043d\u044b \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439 \u043f\u0440\u043e\u0435\u043a\u0442\u0430?",answers:[{title:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e",score:5},{title:"\u041d\u0435 \u0443\u0432\u0435\u0440\u0435\u043d",score:2},{title:"\u041d\u0435\u0442",score:1}]},{title:"\u041a\u0430\u043a \u0432\u044b \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u0441\u044c \u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0438 \u0441\u0430\u043c\u043e\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f",answers:[{title:"\u041f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u043e, \u044f \u043b\u044e\u0431\u043b\u044e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0437\u043d\u0430\u043d\u0438\u044f",score:5},{title:"\u041d\u0435\u0442, \u0446\u0435\u043d\u044e \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c \u043d\u0430\u0432\u044b\u043a\u0438",score:1}]},{title:"\u0412\u044b \u0431\u044b \u0445\u043e\u0442\u0435\u043b\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u043c \u0432 \u0441\u0444\u0435\u0440\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432\u0435\u0431 \u0438 \u043c\u0443\u043b\u044c\u0442\u0438\u043c\u0435\u0434\u0438\u0439\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439?",answers:[{title:"\u0414\u0430!",score:5},{title:"\u041a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0432 \u0441\u043c\u0435\u0436\u043d\u043e\u0439 \u043e\u0442\u0440\u0430\u0441\u043b\u0438",score:2},{title:"...\u041d\u0430\u0432\u0435\u0440\u043d\u043e\u0435?",score:0}]}]},b={intro:"Intro_intro__NH1ou",content:"Intro_content__-fsNO",title:"Intro_title__PcH71",desc:"Intro_desc__nwzTA",name:"Intro_name__OPHcI",tagsWrap:"Intro_tagsWrap__0xnUI",tags:"Intro_tags__V6vFb",tagsText:"Intro_tagsText__o-2EN",startBtn:"Intro_startBtn__4VJuG"},q="Tag_tag__umNgY",k="Tag_emoji__LTeV3",Q="Tag_title__+4HAt",C=e=>{let{emoji:s,title:t}=e;return(0,o.jsxs)("div",{className:q,children:[(0,o.jsx)("span",{className:k,children:s}),(0,o.jsx)("p",{className:Q,children:t})]})},P=e=>{let{desc:s}=e;const t=(0,i.OY)();return(0,o.jsx)("section",{className:[b.intro,"wrapper"].join(" "),children:(0,o.jsxs)("div",{className:b.content,children:[(0,o.jsx)("h1",{className:b.title,children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c! \ud83d\udc4b"}),(0,o.jsx)("p",{className:b.desc,children:s}),(0,o.jsx)("p",{className:b.name,children:"\xab\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\xbb"}),(0,o.jsxs)("div",{className:b.tagsWrap,children:[(0,o.jsxs)("div",{className:b.tags,children:[(0,o.jsx)(C,{emoji:"\ud83d\uddb1\ufe0f",title:"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u043e\u0435 \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}),(0,o.jsx)(C,{emoji:"\ud83d\udcbb",title:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}),(0,o.jsx)(C,{emoji:"\u2699\ufe0f",title:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"}),(0,o.jsx)(C,{emoji:"\ud83d\udd2c",title:"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0435 \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u0435"})]}),(0,o.jsx)("p",{className:b.tagsText,children:"\u0415\u0441\u043b\u0438 \u0412\u0430\u0441 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0442 \u044d\u0442\u0438 \u043d\u0430\u0432\u044b\u043a\u0438 \u0438 \u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0432\u043b\u0430\u0434\u0435\u0442\u044c \u0438\u043c\u0438, \u043f\u0440\u043e\u0439\u0434\u0438\u0442\u0435 \u0442\u0435\u0441\u0442 \u0438 \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c \u0432 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0441\u0432\u043e\u0435\u0433\u043e \u0432\u044b\u0431\u043e\u0440\u0430!"})]}),(0,o.jsx)("button",{className:b.startBtn,onClick:()=>t((0,w.aW)(!0)),children:"\u041d\u0430\u0447\u0430\u0442\u044c"})]})})};var L=t(964);const W=()=>{const e=(0,i.OY)(),[s,t]=(0,n.useState)(!0),l=(0,i.w1)((e=>e.test.currentQuestionIndex)),c=(0,i.w1)((e=>e.test.isStarted)),a=(0,j.IT)();return(0,n.useEffect)((()=>{e((0,w.oH)()),e((0,w.Gg)(A)),t(!1)}),[a]),c?s?(0,o.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):(0,o.jsx)("main",{className:r.testPage,children:(0,o.jsxs)("div",{className:[r.content,"wrapper"].join(" "),children:[(0,o.jsx)(L.c,{testName:A.name}),(0,o.jsx)(g,{test:A}),(0,o.jsx)(T,{questionNumber:l+1,questionAmount:A.questions.length})]})}):(0,o.jsx)(P,{desc:A.desc})}}}]);
//# sourceMappingURL=528.bf325b5b.chunk.js.map