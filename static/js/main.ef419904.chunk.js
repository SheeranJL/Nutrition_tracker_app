(this["webpackJsonpnutrition-app"]=this["webpackJsonpnutrition-app"]||[]).push([[0],{43:function(e,t,n){},52:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(12),a=n.n(c),s=n(44),r=n.n(s),i=(n(52),n(0)),o=n.n(i),l=n(15),d=n(17),u=n(4),j=n(13),b=n(28),m=(n(75),n(54),n(56),function(){var e=Object(u.a)(o.a.mark((function e(t,n){var c,a,s,r,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=f.doc("users/".concat(t.uid)),a=f.collection("users"),e.next=6,c.get();case 6:return s=e.sent,e.next=9,a.get();case 9:if(e.sent,s.exists){e.next=21;break}return r=t.displayName,i=t.email,l=new Date,e.prev=13,e.next=16,c.set({user:Object(d.a)({displayName:r,email:i,createdAt:l},n),data:[]});case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(13),console.log("error creating user document",e.t0);case 21:return e.abrupt("return",c);case 22:case"end":return e.stop()}}),e,null,[[13,18]])})));return function(t,n){return e.apply(this,arguments)}}()),O=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.doc("users/".concat(t)),f.collection("users/".concat(t,"/data")),c=f.collection("users").doc(t),e.prev=3,e.next=6,c.update({data:n});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.log("Error saving to firestore:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.collection("users").doc(t);case 2:return n=e.sent,e.next=5,n.get();case 5:if((c=e.sent).exists){e.next=10;break}console.log("no data exists for user"),e.next=11;break;case 10:return e.abrupt("return",c.data());case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();b.a.initializeApp({apiKey:"AIzaSyD49GmJU-RNktiMX8zV47O8-SQONZKv694",authDomain:"nutrition-app-7ecc1.firebaseapp.com",projectId:"nutrition-app-7ecc1",storageBucket:"nutrition-app-7ecc1.appspot.com",messagingSenderId:"54732372691",appId:"1:54732372691:web:ddb7294739c4d83289b226",measurementId:"G-ZKV48XG3G7"});var p=b.a.auth(),f=b.a.firestore(),x=new b.a.auth.GoogleAuthProvider;x.setCustomParameters({prompt:"select_account"});var v=function(){return p.signInWithPopup(x)},g=(b.a,n(5)),N=Object(c.createContext)(),y=function(e){var t=Object(c.useState)(null),n=Object(j.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(null),i=Object(j.a)(r,2),o=i[0],u=i[1],b=Object(c.useState)(null),m=Object(j.a)(b,2),h=m[0],p=(m[1],Object(c.useState)([])),f=Object(j.a)(p,2),x=f[0],v=f[1],y=Object(c.useState)(2e3),w=Object(j.a)(y,2),S=w[0],C=w[1],k=Object(c.useState)(!1),_=Object(j.a)(k,2),M=_[0],F=_[1],I=Object(c.useState)(!0),q=Object(j.a)(I,2),D=q[0],T=q[1],P=Object(c.useState)(null),U=Object(j.a)(P,2),E=U[0],L=U[1];Object(c.useEffect)((function(){fetch("https://trackapi.nutritionix.com/v2/search/instant?query=".concat(a,"&detailed=true"),{headers:{"x-app-id":"39bb1e54","x-app-key":"693f9705767c566e3ed889f725dd0d1c",detailed:"true"}}).then((function(e){return e.json()})).then((function(e){e.common.length&&u(e.common)})),E&&O(E.id,x)}),[a,x]);var A=function(e){var t=x.find((function(t){return t.mealTime===e.mealTime&&t.tag_id===e.tag_id})),n=x.filter((function(e){return e!==t}));v(Object(l.a)(n))};return Object(g.jsx)(N.Provider,{value:{actions:{setSearch:s,setFoods:v,addToInventory:function(e){var t=x.find((function(t){return t.tag_id===e.tag_id&&t.mealTime===e.mealTime}));if(t){var n=x.filter((function(e){return e!==t})),c=Object(d.a)(Object(d.a)({},t),{},{serving_qty:t.serving_qty+e.serving_qty});v([].concat(Object(l.a)(n),[c]))}else v([].concat(Object(l.a)(x),[e]))},deleteItem:A,increaseItem:function(e){var t=x.find((function(t){return t.mealTime===e.mealTime&&t.tag_id===e.tag_id})),n=x.filter((function(e){return e!==t})),c=Object(d.a)(Object(d.a)({},t),{},{serving_qty:t.serving_qty+1});v([c].concat(Object(l.a)(n)))},decreaseItem:function(e){var t=x.find((function(t){return t.mealTime===e.mealTime&&t.tag_id===e.tag_id})),n=x.filter((function(e){return e!==t})),c=Object(d.a)(Object(d.a)({},t),{},{serving_qty:t.serving_qty-1});c.serving_qty>0?v([c].concat(Object(l.a)(n))):A(e)},setGoal:C,setModalFocus:F,setCloseModal:T,setCurrentUser:L},data:{search:a,commonFoods:o,brandedFoods:h,foods:x,goal:S,modalFocus:M,closeModal:D,currentUser:E}},children:e.children})},w=(n.p,n(58),n(59),n(60),n(36)),S=(n(61),n(62),function(e){var t=e.item,n=(e.hidden,e.handleClick),a=Object(c.useState)(null),s=Object(j.a)(a,2),r=s[0],i=s[1],o=Object(c.useContext)(N),l=o.actions.addToInventory,u=(o.data,Object(c.useRef)());Object(c.useEffect)((function(){i(t)}));return Object(g.jsx)(g.Fragment,{children:null===r?Object(g.jsx)("h1",{children:"Loading..."}):Object(g.jsxs)("div",{className:"select-modal-container",children:[Object(g.jsxs)("div",{className:"select-modal-image-and-close",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{className:"modal-image",src:r.photo.thumb}),Object(g.jsx)("p",{className:"food-modal-name",children:r.food_name})]}),Object(g.jsx)("span",{className:"modal-close",onClick:n,children:"\u2716"})]}),Object(g.jsx)("div",{className:"serving-info",children:Object(g.jsxs)("div",{className:"select-serving",children:[Object(g.jsxs)("div",{className:"servings-info-left",children:[Object(g.jsx)("span",{className:"serving-text",children:"Servings"}),Object(g.jsx)("span",{className:"serving-size-select",children:r.serving_qty})]}),Object(g.jsxs)("div",{className:"arrows",children:[Object(g.jsx)("button",{className:"arrow",onClick:function(){var e=r;i(Object(d.a)({},e),e.serving_qty++)},children:"\u2303"}),Object(g.jsx)("button",{className:"arrow",onClick:function(){var e=r;e.serving_qty>0&&i(Object(d.a)({},e),e.serving_qty--)},children:"\u2304"})]}),Object(g.jsxs)("div",{className:"servings-info-right",children:[Object(g.jsxs)("div",{className:"measurements",children:[Object(g.jsx)("span",{className:"unit-measurement",children:r.serving_weight_grams}),Object(g.jsx)("span",{className:"calories-desc",children:"grams"})]}),Object(g.jsxs)("div",{className:"nut-info",children:[Object(g.jsx)("span",{className:"calories",children:Math.ceil(r.full_nutrients[4].value)*r.serving_qty}),Object(g.jsx)("span",{className:"calories-desc",children:"calories"})]})]})]})}),Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=u.current.options.selectedIndex,n=u.current.options[t].innerHTML.toLowerCase(),c=Object(d.a)(Object(d.a)({},r),{},{mealTime:n});l(c)},children:Object(g.jsxs)("div",{className:"add-to-meal",children:[Object(g.jsxs)("select",{ref:u,className:"meal-time-dropdown",name:"meal-type",id:"meal-type",children:[Object(g.jsx)("option",{className:"dropdown-value",value:"breakfast",children:"Breakfast"}),Object(g.jsx)("option",{className:"dropdown-value",value:"lunch",children:"Lunch"}),Object(g.jsx)("option",{className:"dropdown-value",value:"dinner",children:"Dinner"}),Object(g.jsx)("option",{className:"dropdown-value",value:"snack",children:"Snack"})]}),Object(g.jsx)("div",{className:"modal-add-button-container",children:Object(g.jsx)("button",{className:"modal-add-button",type:"submit",children:"ADD"})})]})})]})})}),C=["photo","food_name"],k=function(e){var t=e.data,n=t.photo,a=t.food_name,s=(Object(w.a)(t,C),Object(c.useContext)(N).data.commonFoods),r=Object(c.useState)(null),i=Object(j.a)(r,2),o=i[0],l=i[1],d=Object(c.useState)(!0),u=Object(j.a)(d,2),b=u[0],m=u[1];return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"dropdown-item",children:[Object(g.jsx)("div",{className:"dropdown-image-container",children:Object(g.jsx)("img",{className:"dropdown-image",src:n.thumb})}),Object(g.jsx)("p",{onClick:function(e){var t=e.target.innerHTML;console.log("clicked"),m(!b),l(s.filter((function(e){return e.food_name===t})))},className:"food-item",children:a})]}),o?Object(g.jsx)("div",{className:"select-food-modal",style:{display:b?"none":""},children:Object(g.jsx)(S,{item:o[0],handleClick:function(){m(!b),console.log("hidden")}})}):null]})},_=function(){var e=Object(c.useContext)(N).data,t=e.commonFoods;e.brandedFoods;return Object(g.jsx)("div",{class:"dropdown-menu-container",children:null!==t?Object(g.jsx)(g.Fragment,{children:t.filter((function(e,t){return t<10})).map((function(e){return Object(g.jsx)(k,{data:e})}))}):Object(g.jsx)("h1",{className:"search-food-desc",children:"Search for food above"})})},M=function(){var e=Object(c.useContext)(N),t=e.actions,n=t.setSearch,a=t.setModalFocus,s=e.data,r=(s.search,s.modalFocus),i=Object(c.useState)(!1),o=Object(j.a)(i,2),l=(o[0],o[1],Object(c.useState)(null)),d=Object(j.a)(l,2),u=d[0],b=d[1],m=function(){console.log("test")};return Object(g.jsxs)("div",{className:"header-component",children:[Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(u)},children:Object(g.jsxs)("div",{className:"input-and-submit",children:[Object(g.jsx)("button",{className:"submit-button",type:"submit",children:"\ud83d\udd0d"}),Object(g.jsx)("input",{className:"input",type:"text",placeholder:"Search foods...",onChange:function(e){b(e.target.value)},value:u,onClick:function(){a(!r)}})]})}),Object(g.jsx)("div",{children:r?Object(g.jsx)("div",{className:"dropdown-modal",onMouseDown:function(){return m},children:Object(g.jsx)(_,{})}):null})]})},F=(n(63),n(77)),I=(n(64),function(){var e=Object(c.useContext)(N),t=e.data,n=e.actions,a=Object(c.useState)(!1),s=Object(j.a)(a,2),r=s[0],i=s[1],l=Object(c.useState)(null),d=Object(j.a)(l,2),b=(d[0],d[1],Object(F.a)(),t.foods.reduce((function(e,t){return e+Math.ceil(t.full_nutrients[4].value*t.serving_qty)}),0)),m=(b/t.goal*100).toFixed(0),O=function(e){return t.foods.filter((function(t){return t.mealTime===e})).reduce((function(e,t){return e+Math.ceil(t.full_nutrients[4].value*t.serving_qty)}),0)},h=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.signOut();case 2:return e.next=4,n.setFoods([]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"profile-container",children:[Object(g.jsx)("div",{className:"person-and-info",children:Object(g.jsx)("div",{className:"profile-pic-container",onMouseOver:function(){return i(!0)},onMouseOut:function(){return i(!1)},onClick:t.currentUser?h:function(){n.setCloseModal(!t.closeModal),console.log("test")},children:t.currentUser?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("img",{className:"profile-picture",src:t.currentUser.userData.photo,style:r?{opacity:"0.3"}:{opacity:"1"}}),Object(g.jsx)("div",{className:"hover-picture",children:Object(g.jsx)("p",{children:"Logout"})})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("img",{className:"profile-picture",src:"https://www.seekpng.com/png/detail/143-1435868_headshot-silhouette-person-placeholder.png",style:r?{opacity:"0.3"}:{opacity:"1"}}),Object(g.jsx)("div",{className:"hover-picture",children:Object(g.jsx)("p",{children:"Sign in"})})]})})}),Object(g.jsx)("span",{className:"person-name",children:t.currentUser?t.currentUser.userData.displayName:""}),Object(g.jsxs)("div",{className:"stats-tracker-container",children:[Object(g.jsxs)("div",{className:"consumed-and-goal",children:[Object(g.jsxs)("h2",{children:[b," cal"]}),Object(g.jsx)("span",{children:"consumed"})]}),Object(g.jsxs)("div",{className:"daily-goal",children:[Object(g.jsxs)("h2",{children:[t.goal," cal"]}),Object(g.jsx)("span",{children:"daily goal"})]})]}),Object(g.jsxs)("div",{className:"progress-bar-container",children:[Object(g.jsx)("div",{className:"progress-bar",style:{width:m<100?"calc(".concat(m,"%)"):"100%"}}),Object(g.jsxs)("p",{className:"percentage",style:{width:m<100?"calc(".concat(m,"% + 20px)"):"100%"},children:[m,"%"]})]}),Object(g.jsxs)("div",{className:"meal-time-breakdown-container",children:[Object(g.jsxs)("div",{className:"meal-time",children:[Object(g.jsx)("h3",{children:O("breakfast")}),Object(g.jsx)("span",{children:"Breakfast"})]}),Object(g.jsxs)("div",{className:"meal-time",children:[Object(g.jsx)("h3",{children:O("lunch")}),Object(g.jsx)("span",{children:"Lunch"})]}),Object(g.jsxs)("div",{className:"meal-time",children:[Object(g.jsx)("h3",{children:O("dinner")}),Object(g.jsx)("span",{children:"Dinner"})]}),Object(g.jsxs)("div",{className:"meal-time",children:[Object(g.jsx)("h3",{children:O("snack")}),Object(g.jsx)("span",{children:"Snack"})]})]})]})}),q=(n(69),n(70),function(e){var t=e.food,n=Math.ceil(t.full_nutrients[4].value*t.serving_qty),a=Object(c.useContext)(N),s=a.actions;a.data;return console.log(t),Object(g.jsxs)("div",{className:"main-food-item-container",children:[Object(g.jsx)("div",{className:"main-food-item-image",children:Object(g.jsx)("img",{src:t.photo.thumb})}),Object(g.jsxs)("div",{className:"product-display-container",children:[Object(g.jsxs)("div",{className:"food-item-info-container",children:[Object(g.jsx)("span",{className:"food-item-name",children:t.food_name}),Object(g.jsx)("span",{className:"food-info",children:"".concat(t.serving_qty,"x (").concat(t.serving_weight_grams,"g)")})]}),Object(g.jsx)("div",{className:"toggle-options",children:Object(g.jsx)("button",{className:"toggle-buttons",onClick:function(){return s.deleteItem(t)},children:"\u274c"})}),Object(g.jsxs)("div",{className:"nutrition-info-container",children:[Object(g.jsxs)("span",{className:"calories-info",children:[n," cal"]}),Object(g.jsx)("span",{children:t.mealTime})]})]})]})}),D=function(){var e=Object(c.useContext)(N).data,t=Object(c.useState)(null),n=Object(j.a)(t,2),a=(n[0],n[1]),s=Object(c.useState)(!0),r=Object(j.a)(s,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){a(Object(l.a)(e.foods)),o(!1)}),[e.foods]),Object(g.jsx)("div",{className:"food-container",children:i?Object(g.jsx)("h1",{children:"loading"}):e.foods.map((function(e){return Object(g.jsx)(q,{food:e})}))})},T=(n(71),n(43),n(72),["children","isGoogleSignIn"]),P=function(e){var t=e.children,n=e.isGoogleSignIn,c=Object(w.a)(e,T);return Object(g.jsx)("div",{className:"button-container",children:Object(g.jsx)("button",Object(d.a)(Object(d.a)({},c),{},{className:n?"google":"",children:t}))})},U=function(e){var t=e.signMethod,n=e.setSignMethod,a=Object(c.useContext)(N),s=a.data,r=a.actions,i=Object(c.useState)(""),o=Object(j.a)(i,2),l=o[0],d=o[1],u=Object(c.useState)(""),b=Object(j.a)(u,2),m=b[0],O=b[1],h=function(e){"email"===e.target.name?d(e.target.value):O(e.target.value)};return Object(g.jsxs)("div",{className:"sign-in-container",children:[Object(g.jsx)("button",{className:"close-button-modal",onClick:function(){r.setCloseModal(!s.closeModal)},children:"X"}),Object(g.jsxs)("form",{className:"input-section-container",onSubmit:function(e){e.preventDefault(),p.signInWithEmailAndPassword(l,m)},children:[Object(g.jsxs)("div",{className:"input-section",children:[Object(g.jsx)("label",{for:"email",children:"Email"}),Object(g.jsx)("input",{type:"email",id:"email",name:"email",onChange:h})]}),Object(g.jsxs)("div",{className:"input-section",children:[Object(g.jsx)("label",{for:"password",children:"Password"}),Object(g.jsx)("input",{type:"password",id:"password",name:"password",onChange:h})]}),Object(g.jsxs)("div",{className:"buttons",children:[Object(g.jsx)(P,{className:"button",children:"Sign In"}),Object(g.jsx)(P,{type:"button",isGoogleSignIn:!0,onClick:v,children:"Sign In"})]})]}),Object(g.jsxs)("span",{style:{cursor:"pointer"},onClick:function(){return n(!t)},children:["Don't have an account? ",Object(g.jsx)("b",{children:"Sign Up!"})]})]})},E=n(6),L=function(e){var t=e.signMethod,n=e.setSignMethod,a=Object(c.useContext)(N),s=a.data,r=a.actions,i=Object(c.useState)({displayName:"",email:"",password:"",confirmPassword:""}),l=Object(j.a)(i,2),b=l[0],O=l[1],h=b.displayName,f=b.email,x=b.password,v=b.confirmPassword,y=function(e){var t=e.target,n=t.name,c=t.value;O((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(E.a)({},n,c))}))},w=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.createUserWithEmailAndPassword(f,x);case 4:return n=e.sent,c=n.user,e.next=8,m(c,{displayName:h});case 8:O({displayName:"",email:"",password:"",confirmPassword:""}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Error creating manual account",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"sign-up-container",children:[Object(g.jsx)("button",{className:"close-button-modal",onClick:function(){r.setCloseModal(!s.closeModal)},children:"X"}),Object(g.jsxs)("form",{className:"input-section-container",onSubmit:w,children:[Object(g.jsxs)("div",{className:"input-section",children:[Object(g.jsx)("label",{for:"displayName",children:"Username"}),Object(g.jsx)("input",{type:"text",name:"displayName",value:h,onChange:y})]}),Object(g.jsxs)("div",{className:"input-section",children:[Object(g.jsx)("label",{for:"email",children:"Email"}),Object(g.jsx)("input",{type:"email",name:"email",value:f,onChange:y})]}),Object(g.jsxs)("div",{className:"input-section",children:[Object(g.jsx)("label",{for:"password",children:"Password"}),Object(g.jsx)("input",{type:"password",name:"password",value:x,onChange:y})]}),Object(g.jsxs)("div",{className:"input-section",children:[Object(g.jsx)("label",{for:"confirmPassword",children:"Confirm Password"}),Object(g.jsx)("input",{type:"password",name:"confirmPassword",value:v,onChange:y})]}),Object(g.jsx)(P,{className:"button",type:"submit",children:"Sign Up"})]}),Object(g.jsxs)("span",{onClick:function(){return n(!t)},style:{cursor:"pointer"},children:["Already have an account? ",Object(g.jsx)("b",{children:"Sign In!"})]})]})},A=function(){var e=Object(c.useState)(!0),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(g.jsx)("div",{className:"login-screen-container",children:n?Object(g.jsx)(U,{signMethod:n,setSignMethod:a}):Object(g.jsx)(L,{signMethod:n,setSignMethod:a})})},G=function(){var e=Object(c.useContext)(N),t=e.data;e.actions;return Object(g.jsxs)("div",{className:"main-page",children:[Object(g.jsx)("div",{className:"profile-section",children:Object(g.jsx)(I,{})}),Object(g.jsx)("div",{className:"food-section",children:t.foods.length?Object(g.jsx)(D,{}):Object(g.jsx)("h1",{className:"no-food-desc",children:"Foods you add will be displayed here"})}),t.closeModal?null:Object(g.jsx)("div",{className:"sign-in-modal",children:Object(g.jsx)(A,{})})]})},B=(n(73),function(){var e=Object(c.useContext)(N),t=e.data,n=e.actions;return Object(c.useEffect)((function(){p.onAuthStateChanged(function(){var e=Object(u.a)(o.a.mark((function e(c){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=8;break}return e.next=3,m(c,t.foods);case 3:e.sent.onSnapshot((function(e){n.setCurrentUser(Object(d.a)(Object(d.a)({id:e.id},e.data),{},{userData:Object(d.a)({displayName:c.multiFactor.user.displayName,email:c.multiFactor.user.email,photo:c.multiFactor.user.photoURL},c)}))})),n.setCloseModal(!0),a=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(c.uid);case 2:return t=e.sent,a=t.data.map((function(e){return e})),e.next=6,n.setFoods(Object(l.a)(a));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a();case 8:n.setCurrentUser();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(g.jsxs)("div",{className:"app-container",children:[Object(g.jsx)(M,{}),Object(g.jsx)(G,{})]})}),z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(g.jsx)(y,{children:Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(B,{})})}),document.getElementById("root")),z()}},[[74,1,2]]]);
//# sourceMappingURL=main.ef419904.chunk.js.map