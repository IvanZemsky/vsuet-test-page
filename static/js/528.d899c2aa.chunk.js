"use strict";(self.webpackChunkvsuet_test_page=self.webpackChunkvsuet_test_page||[]).push([[528],{528:(e,s,t)=>{t.r(s),t.d(s,{default:()=>P});var n=t(60);const r={testPage:"Test_testPage__tDd5f",content:"Test_content__+WfVe",testName:"Test_testName__YFheP"};var a=t(624);const i="Answer_answer__zbEsl",l="Answer_answerRadio__Vl6g0",c="Answer_answerText__-8-CZ";var o=t(496);const d=(0,n.memo)((e=>{let{answer:s,id:t,value:n,setSelectedAnswerIndex:r}=e;return(0,o.jsxs)("div",{className:i,children:[(0,o.jsx)("input",{className:l,type:"radio",id:t,name:"answer",value:n,onClick:e=>r(e.target.value)}),(0,o.jsx)("label",{className:c,htmlFor:t,children:s.title})]})})),_="AnswerList_controls__hEUML",u="AnswerList_answersList__7TDHX",x="NextQuestionBtn_nextQuestionBtn__4dRjf",m=e=>{let{onNextQuestionClick:s,selectedAnswerIndex:t}=e;const n=!t;return(0,o.jsx)("button",{type:"button",className:x,onClick:s,disabled:n,children:"\u2611\ufe0f"})};var j=t(560),h=t(620);const w=e=>{const{answers:s,questionAmount:t,currentQuestionIndex:r}=e,{selectedAnswerIndex:i,setSelectedAnswerIndex:l,onNextQuestionClick:c}=function(e,s){const t=(0,a.OY)(),r=(0,j.i6)(),[i,l]=(0,n.useState)(null);return{onNextQuestionClick:function(){if(e>=s-1)return t((0,h.MX)({selectedAnswerIndex:i})),t((0,h.KW)()),void r("result");t((0,h.MX)({selectedAnswerIndex:i})),t((0,h.UF)({selectedAnswerIndex:i})),l(null)},selectedAnswerIndex:i,setSelectedAnswerIndex:l}}(r,t);return(0,o.jsxs)("form",{className:_,children:[(0,o.jsx)("div",{className:u,children:s.map(((e,s)=>(0,o.jsx)(d,{answer:e,id:s+r,value:s,setSelectedAnswerIndex:l},e+s+r)))}),(0,o.jsx)(m,{onNextQuestionClick:c,selectedAnswerIndex:i})]})},N="Question_question__qITPK",p="Question_questionTitle__eSxL8",g=e=>{let{test:s}=e;const t=(0,a.w1)((e=>e.test.currentQuestionIndex)),n=s.questions[t];return(0,o.jsxs)("section",{className:N,children:[(0,o.jsx)("h2",{className:p,children:n.title}),(0,o.jsx)(w,{testId:s.id,answers:n.answers,questionAmount:s.questions.length,currentQuestionIndex:t})]})},I="ProgressLine_progressWrap__PYVTQ",f="ProgressLine_progressInfo__L8zcM",A="ProgressLine_progressLine__-r0OJ",v=e=>{const{questionNumber:s,questionAmount:t}=e;return(0,o.jsxs)("div",{className:I,children:[(0,o.jsxs)("label",{className:f,htmlFor:"test-progress",children:[(0,o.jsx)("span",{children:s}),(0,o.jsx)("span",{children:"/"}),(0,o.jsxs)("span",{children:[t," "]})]}),(0,o.jsx)("progress",{className:A,id:"test-progress",value:s,max:t})]})},b={id:1,name:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",desc:"\u041d\u0430\u0448 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u043f\u0440\u043e\u0439\u0442\u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0442\u0435\u0441\u0442 \u043d\u0430 \u0412\u0430\u0448\u0438 \u043d\u0430\u0432\u044b\u043a\u0438, \u0443\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u044b \u0438 \u0443\u0437\u043d\u0430\u0442\u044c, \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u043b\u0438 \u0412\u0430\u043c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 #09.02.07:",category:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",cover:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",trueResult:10,questions:[{title:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0437\u0430\u043c\u044b\u043a\u0430\u043d\u0438\u044f \u0432 JavaScript?",answers:[{title:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043a \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0434\u043e \u0435\u0451 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f",score:1},{title:"\u041c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u0440\u0430\u0431\u043e\u0442\u044b \u0446\u0438\u043a\u043b\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u0439",score:2},{title:"\u0421\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u0442\u044c \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043e\u043d\u0430 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0430",score:5}]},{title:"React - \u044d\u0442\u043e...",answers:[{title:"\u0424\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a",score:1},{title:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430",score:5},{title:"\u042f\u0437\u044b\u043a \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",score:0}]},{title:"\u0425\u0443\u043a useState \u0432 React.js - \u044d\u0442\u043e...",answers:[{title:"\u0425\u0443\u043a \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f",score:4},{title:"\u0425\u0443\u043a \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f ref",score:2}]},{title:"\u041a\u0430\u043a\u043e\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u043a\u043b\u0430\u0441\u0441\u0430 \u0432 JSX?",answers:[{title:"class",score:0},{title:"class_name",score:2},{title:"className",score:4}]}]},T={intro:"Intro_intro__NH1ou",content:"Intro_content__-fsNO",title:"Intro_title__PcH71",desc:"Intro_desc__nwzTA",name:"Intro_name__OPHcI",tagsWrap:"Intro_tagsWrap__0xnUI",tags:"Intro_tags__V6vFb",tagsText:"Intro_tagsText__o-2EN",startBtn:"Intro_startBtn__4VJuG"},q="Tag_tag__umNgY",Q="Tag_emoji__LTeV3",S="Tag_title__+4HAt",k=e=>{let{emoji:s,title:t}=e;return(0,o.jsxs)("div",{className:q,children:[(0,o.jsx)("span",{className:Q,children:s}),(0,o.jsx)("p",{className:S,children:t})]})},L=e=>{let{desc:s,setIsStarted:t}=e;return(0,o.jsx)("section",{className:[T.intro,"wrapper"].join(" "),children:(0,o.jsxs)("div",{className:T.content,children:[(0,o.jsx)("h1",{className:T.title,children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c! \ud83d\udc4b"}),(0,o.jsx)("p",{className:T.desc,children:s}),(0,o.jsx)("p",{className:T.name,children:"\xab\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\xbb"}),(0,o.jsxs)("div",{className:T.tagsWrap,children:[(0,o.jsxs)("div",{className:T.tags,children:[(0,o.jsx)(k,{emoji:"\ud83d\uddb1\ufe0f",title:"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u043e\u0435 \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}),(0,o.jsx)(k,{emoji:"\ud83d\udcbb",title:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}),(0,o.jsx)(k,{emoji:"\u2699\ufe0f",title:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"}),(0,o.jsx)(k,{emoji:"\ud83d\udd2c",title:"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0435 \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u0435"})]}),(0,o.jsx)("p",{className:T.tagsText,children:"\u0415\u0441\u043b\u0438 \u0412\u0430\u0441 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0442 \u044d\u0442\u0438 \u043d\u0430\u0432\u044b\u043a\u0438 \u0438 \u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0432\u043b\u0430\u0434\u0435\u0442\u044c \u0438\u043c\u0438, \u043f\u0440\u043e\u0439\u0434\u0438\u0442\u0435 \u0442\u0435\u0441\u0442 \u0438 \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c \u0432 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0441\u0432\u043e\u0435\u0433\u043e \u0432\u044b\u0431\u043e\u0440\u0430!"})]}),(0,o.jsx)("button",{className:T.startBtn,onClick:()=>t(!0),children:"\u041d\u0430\u0447\u0430\u0442\u044c"})]})})},P=()=>{const e=(0,a.OY)(),[s,t]=(0,n.useState)(!0),[i,l]=(0,n.useState)(!1),c=(0,a.w1)((e=>e.test.currentQuestionIndex));return(0,n.useEffect)((()=>{e((0,h.oH)()),e((0,h.Gg)(b)),t(!1)}),[b]),i?s?(0,o.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):(0,o.jsx)("main",{className:r.testPage,children:(0,o.jsxs)("div",{className:[r.content,"wrapper"].join(" "),children:[(0,o.jsx)("h1",{className:r.testName,children:b.name}),(0,o.jsx)(g,{test:b}),(0,o.jsx)(v,{questionNumber:c+1,questionAmount:b.questions.length})]})}):(0,o.jsx)(L,{desc:b.desc,setIsStarted:l})}}}]);
//# sourceMappingURL=528.d899c2aa.chunk.js.map