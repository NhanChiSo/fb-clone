(this["webpackJsonpfacebook-clone"]=this["webpackJsonpfacebook-clone"]||[]).push([[0],{54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var c=a(2),A=a.n(c),s=a(23),n=a.n(s),i=(a(54),a(14)),r=(a(55),a(56),a(118)),d=a(93),j=a(94),l=a(95),h=(a(57),a(3)),o=Object(c.createContext)(),O=function(e){var t=e.reducer,a=e.initialState,A=e.children;return Object(h.jsx)(o.Provider,{value:Object(c.useReducer)(t,a),children:A})},b=function(){return Object(c.useContext)(o)},p=a(27),u=p.a.initializeApp({apiKey:"AIzaSyAjhDZJfVlxHdAPqYdg-vxRimM1IGa4ZRg",authDomain:"facebook-clone-71300.firebaseapp.com",projectId:"facebook-clone-71300",storageBucket:"facebook-clone-71300.appspot.com",messagingSenderId:"279546698917",appId:"1:279546698917:web:057ae4bb2e3503ca3a014c",measurementId:"G-V75FBDM64D"}).firestore(),x=p.a.auth(),I=new p.a.auth.GoogleAuthProvider,g=u;var L=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],A=t[1],s=Object(c.useState)(""),n=Object(i.a)(s,2),o=n[0],O=n[1],u=b(),x=Object(i.a)(u,2),I=x[0].user,L=(x[1],I.displayName.split(" "));return Object(h.jsxs)("div",{className:"sender",children:[Object(h.jsxs)("div",{className:"sender__top",children:[Object(h.jsx)(r.a,{src:I.photoURL}),Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{value:a,onChange:function(e){return A(e.target.value)},className:"sender__input",placeholder:"What's on your mind, ".concat(L[0],"?")}),Object(h.jsx)("input",{value:o,onChange:function(e){return O(e.target.value)},placeholder:"Image URL (optional)"}),Object(h.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),g.collection("posts").add({message:a,time:p.a.firestore.FieldValue.serverTimestamp(),image:o,profileImg:I.photoURL,name:I.displayName}),A(""),O("")},children:"Hidden"})]})]}),Object(h.jsxs)("div",{className:"sender__options",children:[Object(h.jsxs)("div",{className:"sender__option",children:[Object(h.jsx)(d.a,{style:{color:"red"}}),Object(h.jsx)("h3",{children:"Live Video"})]}),Object(h.jsxs)("div",{className:"sender__option",children:[Object(h.jsx)(j.a,{style:{color:"green"}}),Object(h.jsx)("h3",{children:"Photo/Video"})]}),Object(h.jsxs)("div",{className:"sender__option",children:[Object(h.jsx)(l.a,{style:{color:"orange"}}),Object(h.jsx)("h3",{children:"Feeling/Activity"})]})]})]})},B=a(96),m=a(97),Q=a(98);a(66);var y=function(e){var t=e.profileImg,a=e.image,c=e.name,A=e.time,s=e.message;return Object(h.jsxs)("div",{className:"post",children:[Object(h.jsxs)("div",{className:"post__info",children:[Object(h.jsx)(r.a,{src:t,className:"post__avatar"}),Object(h.jsxs)("div",{className:"post__info--plus",children:[Object(h.jsx)("h3",{children:c}),Object(h.jsx)("p",{children:new Date(null===A||void 0===A?void 0:A.toDate()).toUTCString()})]})]}),Object(h.jsx)("div",{className:"post__mess",children:Object(h.jsx)("p",{children:s})}),a?Object(h.jsx)("div",{className:"post__img",children:Object(h.jsx)("img",{src:a})}):"",Object(h.jsxs)("div",{className:"post__options",children:[Object(h.jsxs)("div",{className:"post__option",children:[Object(h.jsx)(B.a,{}),Object(h.jsx)("p",{children:"Like"})]}),Object(h.jsxs)("div",{className:"post__option",children:[Object(h.jsx)(m.a,{}),Object(h.jsx)("p",{children:"Comment"})]}),Object(h.jsxs)("div",{className:"post__option",children:[Object(h.jsx)(Q.a,{}),Object(h.jsx)("p",{children:"Share"})]})]})]})};a(67);var E=function(e){var t=e.image,a=e.profileSrc,c=e.title;return Object(h.jsxs)("div",{className:"story",children:[Object(h.jsx)("div",{className:"story__Img",style:{backgroundImage:"url(".concat(t,")")}}),Object(h.jsx)(r.a,{className:"story__avatar",src:a}),Object(h.jsx)("h4",{children:c}),Object(h.jsx)("div",{className:"story__layout"})]})},N=(a(68),a(45)),S=a.n(N);var v=function(){var e=b(),t=Object(i.a)(e,2),a=t[0].user;return t[1],Object(h.jsxs)("div",{className:"story__reel",children:[Object(h.jsxs)("div",{className:"story story__user",children:[Object(h.jsx)("div",{className:"story__Img",style:{backgroundImage:"url(".concat(a.photoURL,")")}}),Object(h.jsx)(S.a,{className:"story__add"}),Object(h.jsx)("h4",{children:"Create a Story"}),Object(h.jsx)("div",{className:"story__layout"})]}),Object(h.jsx)(E,{image:"http://3.bp.blogspot.com/-T6nl1Fb0G7c/U7_iyjeRjUI/AAAAAAAA51M/aEZeqjMw0bc/s1600/tuyet-the-hao-kiem-bo-kinh-van.jpg",profileSrc:"https://gamek.mediacdn.vn/thumb_w/600/2014/img20140911094747935-crop1410404064629p.jpg",title:"B\u1ed9 Kinh V\xe2n"}),Object(h.jsx)(E,{image:"https://sohanews.sohacdn.com/k:thumb_w/640/2015/4-1448340727088/cuoc-doi-va-vo-hoc-cua-thien-kiem-vo-danh.jpg",profileSrc:"https://genk.mediacdn.vn/k:2014/vodanh-1414148085174/game-thuan-viet-phong-van-truyen-bat-ngo-lo-dien.jpg",title:"V\xf4 Danh"}),Object(h.jsx)(E,{image:"http://1.bp.blogspot.com/-rmziSjbiE1U/U7_YeVovzXI/AAAAAAAA50w/_OtECnEPDtc/s1600/nhiep-phong.jpg",profileSrc:"data:image/jpeg;base64,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",title:"Nhi\u1ebfp Phong"}),Object(h.jsx)(E,{image:"https://sohanews.sohacdn.com/k:thumb_w/640/2015/4-1448340727088/cuoc-doi-va-vo-hoc-cua-thien-kiem-vo-danh.jpg",profileSrc:"https://genk.mediacdn.vn/k:2014/vodanh-1414148085174/game-thuan-viet-phong-van-truyen-bat-ngo-lo-dien.jpg",title:"V\xf4 Danh"})]})};var f=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],A=t[1];return Object(c.useEffect)((function(){g.collection("posts").orderBy("time","desc").onSnapshot((function(e){A(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(h.jsxs)("div",{className:"feed",children:[Object(h.jsx)(v,{}),Object(h.jsx)(L,{}),a.map((function(e){return Object(h.jsx)(y,{profileImg:e.data.profileImg,image:e.data.image,name:e.data.name,time:e.data.time,message:e.data.message},e.id)}))]})},U=(a(73),a(105)),T=a(99),q=a(100),w=a(101),C=a(102),F=a(103),P=a(104),J=a(106),z=a(107),R=a(108),V=a(109);var X=function(){var e=b(),t=Object(i.a)(e,2),a=t[0].user,c=(t[1],a.displayName.split(" "));return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsxs)("div",{className:"header__left",children:[Object(h.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",alt:""}),Object(h.jsxs)("div",{className:"header__input",children:[Object(h.jsx)(T.a,{}),Object(h.jsx)("input",{type:"text",placeholder:"Search Facebook"})]})]}),Object(h.jsxs)("div",{className:"header__center",children:[Object(h.jsx)("div",{className:"header__option header__option--active",children:Object(h.jsx)(q.a,{fontSize:"large"})}),Object(h.jsx)("div",{className:"header__option",children:Object(h.jsx)(w.a,{fontSize:"large"})}),Object(h.jsx)("div",{className:"header__option",children:Object(h.jsx)(C.a,{fontSize:"large"})}),Object(h.jsx)("div",{className:"header__option",children:Object(h.jsx)(F.a,{fontSize:"large"})}),Object(h.jsx)("div",{className:"header__option",children:Object(h.jsx)(P.a,{fontSize:"large"})})]}),Object(h.jsxs)("div",{className:"header__right",children:[Object(h.jsxs)("div",{className:"header__info",children:[Object(h.jsx)(r.a,{src:a.photoURL}),Object(h.jsx)("h4",{children:c[0]})]}),Object(h.jsx)(U.a,{children:Object(h.jsx)(J.a,{})}),Object(h.jsx)(U.a,{children:Object(h.jsx)(z.a,{})}),Object(h.jsx)(U.a,{children:Object(h.jsx)(R.a,{})}),Object(h.jsx)(U.a,{children:Object(h.jsx)(V.a,{})})]})]})};a(74),a(75);var Z=function(e){var t=e.src,a=e.Icon,c=e.title;return Object(h.jsxs)("div",{className:"sidebar__row",children:[t&&Object(h.jsx)(r.a,{src:t}),a&&Object(h.jsx)(a,{}),Object(h.jsx)("h4",{children:c})]})},H=a(110),k=a(111),M=a(112),D=a(113),W=a(114),K=a(115),Y=a(116);var G=function(){var e=b(),t=Object(i.a)(e,2),a=t[0].user;return t[1],Object(h.jsxs)("div",{className:"sidebar",children:[Object(h.jsx)(Z,{src:a.photoURL,title:a.displayName}),Object(h.jsx)(Z,{Icon:H.a,title:"COVID-19 Information Center"}),Object(h.jsx)(Z,{Icon:k.a,title:"Pages"}),Object(h.jsx)(Z,{Icon:M.a,title:"Friends"}),Object(h.jsx)(Z,{Icon:D.a,title:"Message"}),Object(h.jsx)(Z,{Icon:W.a,title:"Marketplace"}),Object(h.jsx)(Z,{Icon:K.a,title:"Videos"}),Object(h.jsx)(Z,{Icon:Y.a,title:"Marketplace"})]})},_=a(117),$=(a(76),a(38)),ee="SET_USER",te=function(e,t){switch(t.type){case ee:return Object($.a)(Object($.a)({},e),{},{user:t.user});default:return e}};var ae=function(){var e=b(),t=Object(i.a)(e,2),a=(t[0],t[1]);return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsxs)("div",{className:"login__logo",children:[Object(h.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",alt:"Logo fb"}),Object(h.jsx)("img",{src:"https://edwardlowe.org/wp-content/uploads/Facebook-Logo-PNG-Clipart.png",alt:"facebook"})]}),Object(h.jsx)(_.a,{type:"submit",onClick:function(){x.signInWithPopup(I).then((function(e){return a({type:ee,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]})};a(77),a(78);var ce=function(e){var t=e.name,a=e.avatar;return Object(h.jsxs)("div",{className:"friend",children:[Object(h.jsx)(r.a,{src:a}),Object(h.jsx)("h5",{children:t})]})};var Ae=function(){return Object(h.jsxs)("div",{className:"contacts",children:[Object(h.jsxs)("div",{className:"advs",children:[Object(h.jsx)("h3",{children:"Sponsored"}),Object(h.jsxs)("div",{className:"advs__content",children:[Object(h.jsx)("img",{src:"https://lh3.googleusercontent.com/proxy/8TEkkUq83ayQ-oM54JbtxHYtjMZ2hyD8Gb-EejVYti-BY4X4tGAIUe8XdAo4Q2JdrHfUls3Nag1fHNiHO-UbeLxWx7ghTpHsGROVg3Nn44XF"}),Object(h.jsxs)("div",{className:"advs__desc",children:[Object(h.jsx)("h4",{children:"H\u1ecdc l\u1eadp tr\xecnh ReactJS"}),Object(h.jsx)("p",{children:"reactjs.org"})]})]}),Object(h.jsxs)("div",{className:"advs__content",children:[Object(h.jsx)("img",{src:"https://data.apksum.com/b7/com.barinchild.w3school5.rdprangon/2/icon.png"}),Object(h.jsxs)("div",{className:"advs__desc",children:[Object(h.jsx)("h4",{children:"C\xf9ng h\u1ecdc l\u1eadp tr\xecnh "}),Object(h.jsx)("p",{children:"w3school.com"})]})]})]}),Object(h.jsxs)("div",{className:"contacts__friends",children:[Object(h.jsx)("h3",{children:"Contacts"}),Object(h.jsxs)("div",{className:"friends",children:[Object(h.jsx)(ce,{name:"Nguy\u1ec5n \u0110\u1ee9c Nh\xe2n",avatar:"https://i1.sndcdn.com/avatars-l3f4huVHb5sRi2Fg-QAfNDg-t500x500.jpg"}),Object(h.jsx)(ce,{name:"B\u1ed9 Kinh V\xe2n",avatar:"https://gamek.mediacdn.vn/thumb_w/600/2014/img20140911094747935-crop1410404064629p.jpg"}),Object(h.jsx)(ce,{name:"V\xf4 Danh",avatar:"https://genk.mediacdn.vn/k:2014/vodanh-1414148085174/game-thuan-viet-phong-van-truyen-bat-ngo-lo-dien.jpg"}),Object(h.jsx)(ce,{name:"Nhi\u1ebfp Phong",avatar:"data:image/jpeg;base64,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"}),Object(h.jsx)(ce,{name:"B\u1ed9 Kinh V\xe2n",avatar:"https://gamek.mediacdn.vn/thumb_w/600/2014/img20140911094747935-crop1410404064629p.jpg"}),Object(h.jsx)(ce,{name:"V\xf4 Danh",avatar:"https://genk.mediacdn.vn/k:2014/vodanh-1414148085174/game-thuan-viet-phong-van-truyen-bat-ngo-lo-dien.jpg"}),Object(h.jsx)(ce,{name:"Nhi\u1ebfp Phong",avatar:"data:image/jpeg;base64,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"})]})]})]})};var se=function(){var e=b(),t=Object(i.a)(e,2),a=t[0].user;return t[1],Object(h.jsx)("div",{className:"app",children:a?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(X,{}),Object(h.jsxs)("div",{className:"app__body",children:[Object(h.jsx)(G,{}),Object(h.jsx)(f,{}),Object(h.jsx)(Ae,{})]})]}):Object(h.jsx)(ae,{})})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,119)).then((function(t){var a=t.getCLS,c=t.getFID,A=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),A(e),s(e),n(e)}))};n.a.render(Object(h.jsx)(A.a.StrictMode,{children:Object(h.jsx)(O,{initialState:{user:null},reducer:te,children:Object(h.jsx)(se,{})})}),document.getElementById("root")),ne()}},[[79,1,2]]]);
//# sourceMappingURL=main.eb588774.chunk.js.map