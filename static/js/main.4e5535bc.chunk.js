(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{130:function(e,t,n){e.exports={background:"Profile_background__3n9GK"}},132:function(e,t,n){e.exports={item:"Post_item__3XIco"}},134:function(e,t,n){e.exports={content:"Users_content__IjW08",userPhoto:"Users_userPhoto__2xeOE",selectedPage:"Users_selectedPage__1HBJ1"}},166:function(e,t,n){},167:function(e,t,n){},21:function(e,t,n){e.exports={nav:"Navbar_nav__3ywIZ",item:"Navbar_item__4ka0q",active:"Navbar_active__2MbGn"}},292:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,293)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))},a=n(1),s=n.n(a),o=n(67),c=n.n(o),i=(n(166),n(26)),u=n(27),l=n(29),j=n(28),d=(n(167),n(21)),b=n.n(d),f=n(13),p=n(0),h=function(e){return Object(p.jsxs)("nav",{className:b.a.nav,children:[Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsx)(f.b,{to:"/profile",activeClassName:b.a.active,children:"Profile"})}),Object(p.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.active),children:Object(p.jsx)(f.b,{to:"/dialogs",activeClassName:b.a.active,children:"Messages"})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsx)(f.b,{to:"/users",activeClassName:b.a.active,children:"Users"})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsx)(f.b,{to:"/music",activeClassName:b.a.active,children:"Music"})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsx)(f.b,{to:"/settings",activeClassName:b.a.active,children:"Settings"})})]})},O=function(e){return Object(p.jsx)("div",{children:"Music"})},g=function(e){return Object(p.jsx)("div",{children:"Settings"})},m=n(11),v=n(45),x=n(3),P="SEND_MESSAGE",w={dialogData:[{id:1,name:"Charlie"},{id:2,name:"Pricheska"},{id:3,name:"Umka"},{id:4,name:"Wader"},{id:5,name:"Tina"}],messageContent:[{id:1,message:"Hi"},{id:2,message:"Greatings!"},{id:3,message:"Bark bark"},{id:4,message:"So loud!"},{id:5,message:"Fuck eah!!!"}]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;if(t.type===P){var n=t.newMessageBody;return Object(x.a)(Object(x.a)({},e),{},{messageContent:[].concat(Object(v.a)(e.messageContent),[{id:6,message:n}])})}return e},C=n(30),A=n.n(C),N=function(e){var t="/dialogs/"+e.id;return Object(p.jsx)("div",{className:A.a.dialog+" "+A.a.active,children:Object(p.jsx)(f.b,{to:t,children:e.name})})},y=function(e){return Object(p.jsx)("div",{className:A.a.dialog,children:e.message})},I=n(124),S=n(125),E=n(56),U=n(38),M=n.n(U),D=["input","meta","child"],T=["input","meta","child"],R=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,s=n&&r;return Object(p.jsxs)("div",{className:M.a.formControl+" "+(s?M.a.error:""),children:[Object(p.jsx)("div",{children:a}),s&&Object(p.jsx)("span",{children:r})]})},F=function(e){var t=e.input,n=(e.meta,e.child,Object(E.a)(e,D));return Object(p.jsx)(R,Object(x.a)(Object(x.a)({},e),{},{children:Object(p.jsx)("textarea",Object(x.a)(Object(x.a)({},t),n))}))},B=function(e){var t=e.input,n=(e.meta,e.child,Object(E.a)(e,T));return Object(p.jsx)(R,Object(x.a)(Object(x.a)({},e),{},{children:Object(p.jsx)("input",Object(x.a)(Object(x.a)({},t),n))}))},H=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(p.jsxs)("div",{children:[Object(p.jsx)(I.a,Object(x.a)({placeholder:e,validate:n,name:t,component:r},a))," ",s]})},z=function(e){if(!e)return"Field is required"},Q=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},L=Q(50),X=Object(S.a)({form:"dialogAddMessageForm"})((function(e){return Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)(I.a,{component:F,validate:[z,L],name:"newMessageBody",placeholder:"Enter your message"})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Send"})})]})})),_=function(e){var t=e.profilePage,n=t.dialogData.map((function(e){return Object(p.jsx)(N,{name:e.name,id:e.id},e.id)})),r=t.messageContent.map((function(e){return Object(p.jsx)(y,{message:e.message,id:e.id},e.id)}));t.newMessageBody;return e.isAuth?Object(p.jsxs)("div",{className:A.a.dialogs,children:[Object(p.jsx)("div",{className:A.a.dialogItems,children:n}),Object(p.jsxs)("div",{className:A.a.messages,children:[Object(p.jsx)("div",{children:r}),Object(p.jsx)(X,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]})]}):Object(p.jsx)(m.a,{to:"/login"})},J=n(12),Y=function(e){return{isAuth:e.auth.isAuth}},G=n(10),W=Object(G.d)(Object(J.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:P,newMessageBody:e}}(t))}}})),(function(e){var t=function(t){Object(l.a)(r,t);var n=Object(j.a)(r);function r(){return Object(i.a)(this,r),n.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(p.jsx)(e,Object(x.a)({},this.props)):Object(p.jsx)(m.a,{to:"./login"})}}]),r}(s.a.Component);return Object(J.b)(Y)(t)}))(_),K=n(130),q=n.n(K),Z=n(40),V=n(39),$=n.n(V),ee=n.p+"static/media/spinner.cb7db751.svg",te=function(e){return Object(p.jsx)("img",{src:ee})},ne=function(e){var t=Object(a.useState)(!1),n=Object(Z.a)(t,2),r=n[0],s=n[1],o=Object(a.useState)(e.status),c=Object(Z.a)(o,2),i=c[0],u=c[1];Object(a.useEffect)((function(){u(e.status)}),[e.status]);return Object(p.jsxs)("div",{children:[!r&&Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Status "}),"  ",Object(p.jsxs)("span",{onDoubleClick:function(){s(!0)},children:[e.status||"No status"," "]})]}),r&&Object(p.jsx)("div",{children:Object(p.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(i)},value:i})})]})},re="data:image/png;base64,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",ae=Object(S.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile,r=e.error;return Object(p.jsxs)("form",{onSubmit:t,children:[Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"save"})}),r&&Object(p.jsx)("div",{className:M.a.formSummaryError,children:r}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Full name"}),": ",H("Full name","fullName",[],B)," "]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"About me: "}),H("About me","aboutMe",[],F)]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Looking for a job "}),":",H("","lookingForAJob",[],B,{type:"checkbox"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"My professional skills"}),":",H("My professional skills","lookingForAJobDescription",[],F)]}),Object(p.jsx)("b",{children:"Contacts"}),": ",Object.keys(n.contacts).map((function(e){return Object(p.jsx)("div",{className:$.a.contact,children:Object(p.jsxs)("b",{children:[e,": ",H(e,"contacts."+e,[],B)]})},e)}))]})})),se=function(e){var t=e.profile,n=e.isOwner,r=e.goToEditMode;return Object(p.jsxs)("div",{children:[n&&Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:r,children:"edit"})}),Object(p.jsxs)("b",{children:[t.fullName," "]}),Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"About me: "})," ",t.aboutMe,Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Looking for a job: "})," ",t.lookingForAJob?"yes":"no"," ",Object(p.jsx)("br",{}),t.lookingForAJob&&Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"My professional skills"}),": ",t.lookingForAJobDescription]}),Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Contacts"}),": ",Object.keys(t.contacts).map((function(e){return Object(p.jsx)(oe,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})},oe=function(e){var t=e.contactTitle,n=e.contactValue;return Object(p.jsxs)("div",{className:$.a.contact,children:[Object(p.jsx)("b",{children:t}),":",n]})},ce=function(e){var t=e.profile,n=e.status,r=e.updateStatus,s=e.isOwner,o=e.savePhoto,c=e.saveProfile,i=Object(a.useState)(!1),u=Object(Z.a)(i,2),l=u[0],j=u[1];if(!t)return Object(p.jsx)(te,{});return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:$.a.avainfo,children:[Object(p.jsx)("img",{className:$.a.mainPhoto,src:t.photos.large||re}),Object(p.jsx)("br",{}),s&&Object(p.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}),Object(p.jsx)(ne,{status:n,updateStatus:r}),l?Object(p.jsx)(ae,{initialValues:t,profile:t,onSubmit:function(e){c(e).then((function(){j(!1)}))}}):Object(p.jsx)(se,{goToEditMode:function(){j(!0)},profile:t,isOwner:s})]})})},ie=n(8),ue=n.n(ie),le=n(15),je=n(131).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"31304458-cb11-44ad-9951-ba1df13cf644"}}),de={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return je.get("/users?page=".concat(e,"&count=").concat(t),{withCredentials:!0}).then((function(e){return e.data}))},follow:function(e){return je.post("follow/".concat(e))},unfollow:function(e){return je.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. PLease use profileAPI object"),be.getProfile(e)}},be={getProfile:function(e){return je.get("profile/"+e)},getStatus:function(e){return je.get("profile/status"+e)},updateStatus:function(e){return je.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),je.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return je.put("profile",e)}},fe=function(){return je.get("auth/me")},pe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return je.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},he=function(){return je.delete("auth/login")},Oe=function(){return je.get("security/get-captcha-url")},ge=n(25),me="ADD-POST",ve="SET_USER_PROFILE",xe="SET_STATUS",Pe="DELETE_POST",we="SAVE_PHOTO_SUCCESS",ke={messagesData:[{id:1,message:"Hi, how are you? ",like:7},{id:2,message:"Its my first post! ",like:8},{id:3,message:"Woof woof!!! ",like:9}],profile:null,status:""},Ce=function(e){return{type:xe,status:e}},Ae=function(e){return function(){var t=Object(le.a)(ue.a.mark((function t(n){var r;return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,de.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:ve,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:var n={id:4,message:t.newPostText,like:0};return Object(x.a)(Object(x.a)({},e),{},{messagesData:[].concat(Object(v.a)(e.messagesData),[n]),newPostText:""});case ve:return Object(x.a)(Object(x.a)({},e),{},{profile:t.profile});case xe:return Object(x.a)(Object(x.a)({},e),{},{status:t.status});case Pe:return Object(x.a)(Object(x.a)({},e),{},{messagesData:e.messagesData.filter((function(e){return e.id!=t.postId}))});case we:return Object(x.a)(Object(x.a)({},e),{},{profile:Object(x.a)(Object(x.a)({},e.profile),{},{photos:t.photos})});default:return e}},ye=n(93),Ie=n.n(ye),Se=n(132),Ee=n.n(Se),Ue=function(e){return Object(p.jsxs)("div",{className:Ee.a.item,children:[Object(p.jsx)("img",{src:"https://www.thekennelclub.org.uk/media/1655/pekingese-headshot.jpg?mode=pad&width=1000&rnd=132143810180000000",alt:"#"}),e.message,Object(p.jsx)("span",{children:e.like})]})},Me=Q(10),De=Object(S.a)({form:"ProfileAddNewPostForm"})((function(e){return Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)(I.a,{name:"newPostText",component:F,placeholder:"Post message",validate:[z,Me]})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Send"})})]})})),Te=s.a.memo((function(e){var t=e.messagesData.map((function(e){return Object(p.jsx)(Ue,{message:e.message,like:e.like},e.id)}));return Object(p.jsxs)("div",{className:Ie.a.wrapper,children:[Object(p.jsx)("h3",{children:"My posts"}),Object(p.jsx)(De,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(p.jsx)("div",{className:Ie.a.posts,children:t})]})})),Re=Object(J.b)((function(e){return{messagesData:e.messagesPage.messagesData,newPostText:e.messagesPage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:me,newPostText:e}}(t))}}}))(Te),Fe=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{className:q.a.background,src:"https://www.tampabay.com/resizer//hn1E6MR3v14d1ZqURuo9gVNo-uo=/1140x641/smart/cloudfront-us-east-1.images.arcpublishing.com/tbt/4HKEGVF4Y56YWRKEZ37PVCAKCA.jpg"}),Object(p.jsx)(ce,{saveProfile:e.saveProfile,savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(p.jsx)(Re,{})]})},Be=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUseId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(p.jsx)(Fe,Object(x.a)(Object(x.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto}))}}]),n}(s.a.Component),He=Object(G.d)(Object(J.b)((function(e){return{profile:e.messagesPage.profile,status:e.messagesPage.status,authorizedUseId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:Ae,getStatus:function(e){return function(){var t=Object(le.a)(ue.a.mark((function t(n){var r;return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,be.getStatus(e);case 2:r=t.sent,n(Ce(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(le.a)(ue.a.mark((function t(n){return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,be.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(Ce(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(le.a)(ue.a.mark((function t(n){var r;return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,be.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:we,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(le.a)(ue.a.mark((function t(n,r){var a,s;return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,be.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(Ae(a)),t.next=10;break;case 8:return n(Object(ge.a)("edit-profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),m.g)(Be),ze=function(e,t,n,r){e.map((function(e){return e[n]===t?Object(x.a)(Object(x.a)({},e),r):e}))},Qe="FOLLOW",Le="UNFOLLOW",Xe="SET_USERS",_e="SET_CURRENT_PAGE",Je="SET_TOTAL_USERS_COUNT",Ye="TOGGLE_IS_FETCHING",Ge="TOGGLE_IS_FOLLOWING_PROGRESS",We={users:[],pageSize:100,totalUsersCount:0,currentPage:7,isFetching:!0,followingInProgress:[]},Ke=function(e){return{type:Qe,userId:e}},qe=function(e){return{type:Le,userId:e}},Ze=function(e){return{type:_e,currentPage:e}},Ve=function(e){return{type:Ye,isFetching:e}},$e=function(e,t){return{type:Ge,isFetching:e,userId:t}},et=function(){var e=Object(le.a)(ue.a.mark((function e(t,n,r,a){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t($e(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t($e(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Qe:return Object(x.a)(Object(x.a)({},e),{},{users:ze(e.users,t.userId,"id",{followed:!0})});case Le:return Object(x.a)(Object(x.a)({},e),{},{users:ze(e.users,t.userId,"id",{followed:!1})});case Xe:return Object(x.a)(Object(x.a)({},e),{},{users:t.users});case _e:return Object(x.a)(Object(x.a)({},e),{},{currentPage:t.currentPage});case Je:return Object(x.a)(Object(x.a)({},e),{},{totalUsersCount:t.count});case Ye:return Object(x.a)(Object(x.a)({},e),{},{isFetching:t.isFetching});case Ge:return Object(x.a)(Object(x.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(v.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},nt=n(71),rt=n(46),at=n.n(rt),st=n(133),ot=n.n(st),ct=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,o=e.portionSize,c=void 0===o?27:o,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var j=Math.ceil(i/c),d=Object(a.useState)(1),b=Object(Z.a)(d,2),f=b[0],h=b[1],O=(f-1)*c+1,g=f*c;return Object(p.jsxs)("div",{className:at.a.paginator,children:[f>1&&Object(p.jsx)("button",{className:at.a.btn,onClick:function(){h(f-1)},children:"PREV"}),u.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(p.jsx)("span",{className:ot()(Object(nt.a)({},at.a.selectedPage,r===e),at.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),j>f&&Object(p.jsx)("button",{className:at.a.btn,onClick:function(){h(f+1)},children:"NEXT"})]})},it=n(134),ut=n.n(it),lt=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{className:ut.a.userPhoto,children:Object(p.jsx)(f.b,{to:"/profile/"+t.id,children:Object(p.jsx)("img",{src:null!=t.photos.small?t.photos.small:re})})}),Object(p.jsx)("div",{children:t.followed?Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:t.id}),Object(p.jsx)("div",{children:t.name})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:"user.location.city"}),Object(p.jsx)("div",{children:"user.location.city"})]})]})]},t.id)})},jt=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],dt=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,s=e.users,o=Object(E.a)(e,jt);return Object(p.jsxs)("div",{children:[Object(p.jsx)(ct,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r}),Object(p.jsx)("div",{children:s.map((function(e){return Object(p.jsx)(lt,{user:e,followingInProgress:o.followingInProgress,unfollow:o.unfollow,follow:o.follow},e.id)}))})]})},bt=n(136),ft=Object(bt.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),pt=function(e){return e.usersPage.pageSize},ht=function(e){return e.usersPage.totalUsersCount},Ot=function(e){return e.usersPage.currentPage},gt=function(e){return e.usersPage.isFetching},mt=function(e){return e.usersPage.followingInProgress},vt=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[this.props.isFetching?Object(p.jsx)(te,{}):null,Object(p.jsx)(dt,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),xt=Object(G.d)(Object(J.b)((function(e){return{users:ft(e),pageSize:pt(e),totalUsersCount:ht(e),currentPage:Ot(e),isFetching:gt(e),followingInProgress:mt(e)}}),{follow:function(e){return function(){var t=Object(le.a)(ue.a.mark((function t(n){return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,et(n,e,de.follow.bind(de),Ke);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(le.a)(ue.a.mark((function t(n){return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,et(n,e,de.unfollow.bind(de),qe);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:Ze,toggleFollowingProgress:$e,getUsers:function(e,t){return function(){var n=Object(le.a)(ue.a.mark((function n(r){var a;return ue.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Ve(!0)),r(Ze(e)),n.next=4,de.getUsers(e,t);case 4:a=n.sent,r(Ve(!1)),r((o=a.items,{type:Xe,users:o})),r((s=a.totalCount,{type:Je,count:s}));case 8:case"end":return n.stop()}var s,o}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(vt),Pt=n(94),wt=n.n(Pt),kt=function(e){return Object(p.jsxs)("header",{className:wt.a.header,children:[Object(p.jsx)("img",{src:"https://st4.depositphotos.com/1004920/28246/v/950/depositphotos_282465114-stock-illustration-pekingese-vector-illustration-for-t.jpg",alt:"logo"}),Object(p.jsx)("div",{className:wt.a.loginBlock,children:e.isAuth?Object(p.jsxs)("div",{children:[" ",e.login," -",Object(p.jsx)("button",{onClick:e.logout,children:"Log  out"}),"  "]}):Object(p.jsx)(f.b,{to:"/login",children:"Login"})})]})},Ct="samurai-network/auth/SET_USER_DATA",At="samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",Nt={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},yt=function(e,t,n,r){return{type:Ct,payload:{userId:e,email:t,login:n,isAuth:r}}},It=function(e){return{type:At,payload:{captchaUrl:e}}},St=function(){return function(){var e=Object(le.a)(ue.a.mark((function e(t){var n,r,a,s,o;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.email,o=r.login,t(yt(a,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Et=function(){return function(){var e=Object(le.a)(ue.a.mark((function e(t){var n,r;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe();case 2:n=e.sent,r=n.data.url,t(It(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ct:case At:return Object(x.a)(Object(x.a)({},e),t.payload);default:return e}},Mt=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(kt,Object(x.a)({},this.props))}}]),n}(s.a.Component),Dt=Object(J.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(le.a)(ue.a.mark((function e(t){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he();case 2:0===e.sent.data.resultCode&&t(St());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Mt),Tt=Object(S.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(p.jsxs)("form",{onSubmit:t,children:[H("Email","email",[z],B),H("Password","password",[z],B,{type:"password"}),H(null,"rememberMe",[],B,{type:"checkbox"},"remember me bitch"),r&&Object(p.jsx)("img",{src:r}),r&&H("Symbols from captcha","captcha",[z],B,{}),n&&Object(p.jsx)("div",{className:M.a.formSummaryError,children:n}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Login"})})]})})),Rt=Object(J.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(le.a)(ue.a.mark((function a(s){var o,c;return ue.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,pe(e,t,n,r);case 2:0===(o=a.sent).data.resultCode?s(St()):(10===o.data.resultCode&&s(Et()),c=o.data.messages.length>0?o.data.messages[0]:"Some error",s(Object(ge.a)("login",{_error:c})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(p.jsx)(m.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)(Tt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),Ft="INITIALIZED_SUCCESS",Bt={initialized:!1},Ht=function(){return{type:Ft}},zt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bt,t=arguments.length>1?arguments[1]:void 0;return t.type===Ft?Object(x.a)(Object(x.a)({},e),{},{initialized:!0}):e},Qt={},Lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qt;return e},Xt=n(135),_t=n(126),Jt=Object(G.c)({messagesPage:Ne,profilePage:k,sidebar:Lt,usersPage:tt,auth:Ut,form:_t.a,app:zt}),Yt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.d,Gt=Object(G.e)(Jt,Yt(Object(G.a)(Xt.a)));window.__store__=Gt;var Wt=Gt,Kt=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(Dt,{}),Object(p.jsx)(h,{}),Object(p.jsx)(s.a.Suspense,{fallback:Object(p.jsx)(te,{}),children:Object(p.jsx)("div",{className:"app-wrapper-content",children:Object(p.jsxs)(m.d,{children:[Object(p.jsx)(m.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(m.a,{to:"/profile"})}}),Object(p.jsx)(m.b,{path:"/dialogs",render:function(){return Object(p.jsx)(W,{})}}),Object(p.jsx)(m.b,{path:"/profile/:userId?",render:function(){return Object(p.jsx)(He,{})}}),Object(p.jsx)(m.b,{path:"/users",render:function(){return Object(p.jsx)(xt,{})}}),Object(p.jsx)(m.b,{path:"/music",render:function(){return Object(p.jsx)(O,{})}}),Object(p.jsx)(m.b,{path:"/settings",render:function(){return Object(p.jsx)(g,{})}}),Object(p.jsx)(m.b,{path:"/login",render:function(){return Object(p.jsx)(Rt,{})}}),Object(p.jsx)(m.b,{path:"*",render:function(){return Object(p.jsx)("div",{children:"404 NOT FOUND"})}})]})})})]}):Object(p.jsx)(te,{})}}]),n}(s.a.Component),qt=Object(G.d)(m.g,Object(J.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(St());e(Ht()),Promise.all([t]).then((function(){e(Ht())}))}}}))(Kt),Zt=function(e){return Object(p.jsx)(f.a,{children:Object(p.jsx)(J.a,{store:Wt,children:Object(p.jsx)(qt,{})})})};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(Zt,{})}),document.getElementById("root")),r()},30:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2iyNh",dialogItems:"Dialogs_dialogItems__1rDu3",active:"Dialogs_active__3NvBk",messages:"Dialogs_messages__2Fb-2",message:"Dialogs_message__3MXCJ"}},38:function(e,t,n){e.exports={formControl:"FormsControls_formControl__ojzA-",error:"FormsControls_error__3Xgm1",formSummaryError:"FormsControls_formSummaryError__2zHfB"}},39:function(e,t,n){e.exports={avatar:"ProfileInfo_avatar__1Yj0_",avainfo:"ProfileInfo_avainfo__1H-3j",status:"ProfileInfo_status__2B7tZ",input:"ProfileInfo_input__UA1Rt",mainPhoto:"ProfileInfo_mainPhoto__2SpWh",contact:"ProfileInfo_contact__3LynR"}},46:function(e,t,n){e.exports={paginator:"Paginator_paginator__Dyi-5",pageNumber:"Paginator_pageNumber__2ZDKO",selectedPage:"Paginator_selectedPage__1_zM8",btn:"Paginator_btn__30RCB"}},93:function(e,t,n){e.exports={wrapper:"MyPosts_wrapper__2djUG",posts:"MyPosts_posts__G_c1E"}},94:function(e,t,n){e.exports={header:"Header_header__1DCex",loginBlock:"Header_loginBlock__LQK6g"}}},[[292,1,2]]]);
//# sourceMappingURL=main.4e5535bc.chunk.js.map