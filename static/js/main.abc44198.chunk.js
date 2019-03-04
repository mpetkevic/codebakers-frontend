(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){e.exports=a(262)},133:function(e,t){},135:function(e,t){},173:function(e,t){},174:function(e,t){},234:function(e,t,a){},235:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){},259:function(e,t,a){},260:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"authUser",function(){return W}),a.d(n,"removeUser",function(){return B});var r={};a.r(r),a.d(r,"onInputChange",function(){return ee}),a.d(r,"onFormSubmit",function(){return te});var o={};a.r(o),a.d(o,"onInputChange",function(){return se}),a.d(o,"onFormSubmit",function(){return ce});var s={};a.r(s),a.d(s,"getUsers",function(){return ie}),a.d(s,"getUser",function(){return me}),a.d(s,"deleteUser",function(){return pe}),a.d(s,"updateUser",function(){return he});var c=a(0),l=a.n(c),u=a(115),i=a.n(u),m=a(28),p=a(10),h=a(117),d=a(26),f=a(14),g="LOGIN_FROM_ERROR",E="LOGIN_FORM_INPUT_CHANGE",v="LOGIN_FORM_SUCCESS",b="LOGIN_FORM_LOADING",O="AUTH_USER",y="LOG_OUT",w="GET_USERS",j="GET_USERS_LOADING",k="GET_USER",S="UPDATE_USER",U="UPDATE_USER_ERROR",N="REGISTER_FORM_INPUT_CHANGE",R="REGISTER_FORM_ERROR",x="REGISTER_FORM_LOADING",C={email:"",password:"",errors:"",loading:!1},_={info:"",errors:{},loading:!1,name:"",email:"",isAuth:!1},F={usersList:[],loading:!1,error:null,user:{}},I={name:"",email:"",password:"",error:"",loading:!1},L=a(17),A=a(18),T=a(20),G=a(19),D=a(21),P=a(264),M=a(265),H=a(119);function W(e){return{type:O,user:e}}function B(){return localStorage.removeItem("codebakers-crud-system-token"),{type:y}}var J=a(32),X=a.n(J),V=(a(234),a(65)),$=a(263),q=(a(235),Object(p.b)(function(e){return{auth:e.auth}},n)(function(e){var t=e.auth,a=t.email,n=t.isAuth;return l.a.createElement("div",{className:"Header"},l.a.createElement(V.a,{className:"Header-logo",to:"/"},"CRUD System"),l.a.createElement("nav",null,l.a.createElement("li",null,l.a.createElement($.a,{className:"nav-item",to:"/user/".concat(a)},a)),l.a.createElement("li",null,n?l.a.createElement($.a,{className:"nav-item",to:"/users"},"Users List"):null),l.a.createElement("li",{onClick:n?function(){return e.removeUser()}:null},n?l.a.createElement($.a,{className:"nav-item",to:"/"},"Log Out"):l.a.createElement($.a,{className:"nav-item",to:"/login"},"Log In")),l.a.createElement("li",null,n?null:l.a.createElement($.a,{className:"nav-item",to:"/register"},"Register"))))})),z=a(4),K=a.n(z),Q=a(12),Y=a(24),Z=a.n(Y);function ee(e){return{type:E,name:e.target.name,value:e.target.value}}function te(e,t){return function(){var a=Object(Q.a)(K.a.mark(function a(n){var r,o,s;return K.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:b}),a.next=3,Z.a.post("https://codebakers-api.herokuapp.com/login",e);case 3:r=a.sent,console.log(r.data),"User not Found"!==r.data?(o=r.data,localStorage.setItem("codebakers-crud-system-token",o),s=X.a.decode(o),console.log(s),n({type:v,user:s}),t.push("/")):n({type:g,errors:"User doesn't exist"});case 7:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}a(257);var ae=function(e){var t=e.color,a=e.h,n=void 0===a?40:a;return l.a.createElement("div",{style:{width:n+"px",height:n+"px",borderRight:"".concat(n/6,"px solid transparent"),borderLeft:"".concat(n/6,"px solid transparent"),borderTop:"".concat(n/6,"px solid ").concat(t),borderBottom:"".concat(n/6,"px solid ").concat(t)},className:"Loader ".concat(t)})},ne=(a(258),function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(T.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).onFormSubmit=function(e){e.preventDefault(),a.props.login.loading||a.props.onFormSubmit(a.props.login,a.props.history)},a}return Object(D.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props.login,t=e.email,a=e.password,n=e.errors,r=e.loading,o=this.props.onInputChange;return l.a.createElement("div",{className:"Login"},l.a.createElement("form",{className:"Login-form",onSubmit:this.onFormSubmit},l.a.createElement("h2",null,"Please Login to Crud System"),""!==n?l.a.createElement("p",{style:{color:"red",textAlign:"center"}},"User Doesn't exists"):null,l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",name:"email",placeholder:"Enter email",value:t,onChange:o}),l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",name:"password",placeholder:"Enter password",value:a,onChange:o}),l.a.createElement("button",null,r?l.a.createElement(ae,{color:"#111",h:15}):"Submit")))}}]),t}(c.Component)),re=Object(p.b)(function(e){return{login:e.login,auth:e.auth}},r)(ne),oe=function(e){function t(){return Object(L.a)(this,t),Object(T.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{textAlign:"center",marginTop:"20px"}},"Welcome Codebakers CRUD System App")}}]),t}(c.Component);a(259);function se(e){return{type:N,name:e.target.name,value:e.target.value}}function ce(e,t){var a=e.name,n=e.email,r=e.password;return""===a&&""===n&&""===r?{type:R,error:"Please fill all fields"}:function(){var a=Object(Q.a)(K.a.mark(function a(n){return K.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:x}),a.next=3,Z.a.post("https://codebakers-api.herokuapp.com/register",e);case 3:"error"!==a.sent.data.name?t.push("/login"):n({type:R,error:"Email already exists"});case 5:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}var le=function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(T.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).onFormSubmit=function(e){e.preventDefault(),a.props.login.loading||a.props.onFormSubmit(a.props.register,a.props.history)},a}return Object(D.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props.register,t=e.name,a=e.email,n=e.error,r=e.loading,o=e.password,s=this.props.onInputChange;return l.a.createElement("div",{className:"Register"},l.a.createElement("form",{className:"Register-form",onSubmit:this.onFormSubmit},l.a.createElement("h2",null,"Please Register to Crud System"),""!==n?l.a.createElement("p",{style:{color:"red",textAlign:"center"}},n):null,l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",name:"name",placeholder:"Enter name",value:t,onChange:s}),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",name:"email",placeholder:"Enter email",value:a,onChange:s}),l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",name:"password",placeholder:"Enter password",value:o,onChange:s}),l.a.createElement("button",null,r?l.a.createElement(ae,{color:"#111",h:15}):"Submit")))}}]),t}(c.Component),ue=Object(p.b)(function(e){return{register:e.register}},o)(le);function ie(){return function(){var e=Object(Q.a)(K.a.mark(function e(t){var a,n;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:j}),e.next=3,Z.a.get("https://codebakers-api.herokuapp.com/users");case 3:a=e.sent,n=a.data,t({type:w,usersList:n});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}function me(e){return function(){var t=Object(Q.a)(K.a.mark(function t(a){var n,r,o;return K.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.a.get("https://codebakers-api.herokuapp.com/user/".concat(e));case 2:n=t.sent,r=n.data,o=X.a.decode(r),a({type:k,user:o});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}function pe(e){return function(){var t=Object(Q.a)(K.a.mark(function t(a){var n,r;return K.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.a.delete("https://codebakers-api.herokuapp.com/delete/".concat(e));case 2:return t.next=4,Z.a.get("https://codebakers-api.herokuapp.com/users");case 4:n=t.sent,r=n.data,a({type:w,usersList:r});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}function he(e,t){return function(){var a=Object(Q.a)(K.a.mark(function a(n){return K.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Z.a.put("https://codebakers-api.herokuapp.com/update/".concat(e.authUserEmail),{name:e.name,password:e.password,email:e.email});case 2:"error"!==a.sent.data.name?(n({type:S}),localStorage.removeItem("codebakers-crud-system-token"),t.push("/")):n({type:U,error:"This email exists, please enter new"});case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}a(260);var de=function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(T.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",password:"",authUserEmail:"",error:null,loading:!0,formToggle:!1},a.onFormToggle=function(){a.setState({formToggle:!a.state.formToggle})},a.onFormSubmit=function(e){e.preventDefault(),""!==a.state.password?a.props.updateUser(a.state,a.props.history):a.setState({error:"Please enter password"})},a.onInputChange=function(e){return a.setState(Object(d.a)({},e.target.name,e.target.value))},a}return Object(D.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){var e=Object(Q.a)(K.a.mark(function e(){return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getUser(this.props.match.params.email);case 2:this.props.auth.isAuth?this.setState({name:this.props.users.user.name,email:this.props.users.user.email,authUserEmail:this.props.auth.email,loading:!1}):this.props.history.push("/");case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.password,r=e.loading,o=e.formToggle,s=e.error;return l.a.createElement("div",{className:"User"},l.a.createElement("h3",null,"User Info"),r?l.a.createElement(ae,{color:"#111",h:15}):l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("span",null,"Name: "),t),l.a.createElement("p",null,l.a.createElement("span",null,"Email: "),a),l.a.createElement("button",{onClick:this.onFormToggle},"Update"),o?l.a.createElement("form",{className:"Update-form",onSubmit:this.onFormSubmit},null!==this.props.users.error?l.a.createElement("p",{style:{color:"red",textAlign:"center"}},this.props.users.error):null,null!==s?l.a.createElement("p",{style:{color:"red",textAlign:"center"}},s):null,l.a.createElement("label",{htmlFor:"name"},"New Name"),l.a.createElement("input",{type:"text",name:"name",value:t,placeholder:"Enter Name",onChange:this.onInputChange}),l.a.createElement("label",{htmlFor:"email"},"New Email"),l.a.createElement("input",{type:"email",name:"email",value:a,placeholder:"Enter email",onChange:this.onInputChange}),l.a.createElement("label",{htmlFor:"password"},"New Password"),l.a.createElement("input",{type:"password",name:"password",value:n,placeholder:"Enter new password",onChange:this.onInputChange}),l.a.createElement("button",null,r?l.a.createElement(ae,{color:"#111",h:15}):"Update")):null))}}]),t}(c.Component),fe=Object(p.b)(function(e){return{users:e.users,auth:e.auth}},s)(de),ge=(a(261),function(e){function t(){return Object(L.a)(this,t),Object(T.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){var e=Object(Q.a)(K.a.mark(function e(){return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getUsers();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.usersList,a=t.usersList,n=t.loading,r=this.props.auth.email,o=a&&a.map(function(t){return l.a.createElement("div",{className:"list-item",key:t.id},l.a.createElement("div",null,l.a.createElement("span",{className:"user-info"},t.name),l.a.createElement("span",{className:"user-info"},t.email)),l.a.createElement("div",null,r===t.email?null:l.a.createElement("span",{className:"options",onClick:function(){return e.props.deleteUser(t.email)}},"Remove")))});return l.a.createElement("div",{className:"UsersList"},l.a.createElement("h3",null,"Users List"),n?l.a.createElement(ae,{color:"#111",h:30}):o)}}]),t}(c.Component)),Ee=Object(p.b)(function(e){return{usersList:e.users,auth:e.auth}},s)(ge),ve=function(e){function t(){return Object(L.a)(this,t),Object(T.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(A.a)(t,[{key:"componentWillMount",value:function(){var e=localStorage.getItem("codebakers-crud-system-token");if(e){var t=X.a.decode(e);this.props.authUser(t)}}},{key:"render",value:function(){return l.a.createElement(P.a,{basename:"/codebakers-frontend"},l.a.createElement("div",null,l.a.createElement(q,null),l.a.createElement(M.a,null,l.a.createElement(H.a,{exact:!0,path:"/",component:oe}),l.a.createElement(H.a,{path:"/login",component:re}),l.a.createElement(H.a,{path:"/register",component:ue}),l.a.createElement(H.a,{path:"/user/:email",component:fe}),l.a.createElement(H.a,{path:"/users",component:Ee}))))}}]),t}(c.Component),be=Object(p.b)(function(e){return{auth:e.auth}},n)(ve);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=Object(m.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(f.a)({},e,Object(d.a)({},t.name,t.value));case g:return Object(f.a)({},e,{errors:t.errors,loading:!1});case v:return console.log("SUCESS"),console.log(e),Object(f.a)({},e,{loading:!1});case b:return Object(f.a)({},e,{loading:!0});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:var a=t.user;return{name:a.name,email:a.email,isAuth:!0};case O:var n=t.user;return{name:n.name,email:n.email,isAuth:!0};case y:return{name:"",email:"",isAuth:!1};case S:return console.log("LOGOUT REDUCER"),{name:"",email:"",isAuth:!1};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(f.a)({},e,{loading:!0});case w:return{usersList:t.usersList,loading:!1};case k:return console.log(e),Object(f.a)({},e,{user:t.user});case U:return console.log(t.error),Object(f.a)({},e,{error:t.error});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(f.a)({},e,Object(d.a)({},t.name,t.value));case R:return Object(f.a)({},e,{error:t.error,loading:!1});case x:return Object(f.a)({},e,{loading:!0});default:return e}}}),ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,we=Object(m.e)(Oe,ye(Object(m.a)(h.a)));i.a.render(l.a.createElement(p.a,{store:we},l.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[121,1,2]]]);
//# sourceMappingURL=main.abc44198.chunk.js.map