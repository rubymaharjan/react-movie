(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),l=a.n(i),s=(a(89),a(90),a(40)),o=a(28),c=a(10),m=a(8),u=a(12),d=a(11),h=a(13),p=a(18),g=a.n(p),f=(n.Component,a(30)),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).addActiveClass=a.addActiveClass.bind(Object(f.a)(a)),a.state={movies:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"addActiveClass",value:function(){document.getElementsByClassName(this.btn)[0].style.backgroundColor="red"}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav-bar",id:"myBtnContainer"},r.a.createElement("a",{href:"/latest"},r.a.createElement("button",{className:"btn active",onClick:this.addActiveClass},"Now Playing")),r.a.createElement("a",{href:"/"},r.a.createElement("button",{className:"btn ",onClick:this.addActiveClass}," Popular")),r.a.createElement("a",{href:"/rated"},r.a.createElement("button",{className:"btn",onClick:this.addActiveClass}," Top Rated")),r.a.createElement("a",{href:"/upcoming"},r.a.createElement("button",{className:"btn",onClick:this.addActiveClass}," Upcoming"))))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={movies:[],id:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Banner"+this.props.data),g.a.get("https://api.themoviedb.org/3/movie/popular?api_key=004fe1ee41218ae53e75b9b4b7c47018&language=en-US&page=1").then(function(t){e.setState({movies:t.data.results}),console.log(e.state)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"side-details"},r.a.createElement("div",{className:"side-banner"},this.state.movies.map(function(e){return r.a.createElement("div",{className:"container-side-img"},r.a.createElement("img",{id:"".concat(e.id),src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),className:"side-image"}),r.a.createElement("h3",{className:"side-topic"},e.title),r.a.createElement("h4",{className:"side-date"},e.release_date),r.a.createElement("p",{className:"side-info"},e.overview))})))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(e,t,n){console.log("jhgjhgjhgjhgjhg"+e),a.setState({show:!0,data:t})},a.state={movies:[],show:!1,data:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.themoviedb.org/3/movie/popular?api_key=004fe1ee41218ae53e75b9b4b7c47018&language=en-US&page=1").then(function(t){e.setState({movies:t.data.results}),console.log(e.state)})}},{key:"render",value:function(){var e,t=this;return this.state.show&&(e=r.a.createElement(E,{data:this.state.data})),r.a.createElement("div",{className:"container"},this.state.movies.map(function(e){return r.a.createElement("div",{key:e.id,className:"list",onClick:function(a){return t.handleClick(e,a)}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),className:"content-img",id:"".concat(e.id)}),r.a.createElement("p",null,e.title))}),e)}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(e,t){console.log("jhgjhgjhgjhgjhg"+e),a.setState({show:!0,data:t})},a.state={movies:[],show:!1,data:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=004fe1ee41218ae53e75b9b4b7c47018&language=en-US&page=1").then(function(t){e.setState({movies:t.data.results}),console.log(e.state)})}},{key:"render",value:function(){var e,t=this;return this.state.show&&(e=r.a.createElement(E,{data:this.state.data})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},this.state.movies.map(function(e){return r.a.createElement("div",{key:e.id,className:"list",onClick:function(a){return t.handleClick(e,a)}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),className:"content-img",id:"".concat(e.id)}),r.a.createElement("p",null,e.title))}),e))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(e,t){console.log("jhgjhgjhgjhgjhg"+e),a.setState({show:!0,data:t})},a.state={movies:[],show:!1,data:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=004fe1ee41218ae53e75b9b4b7c47018&language=en-US&page=1").then(function(t){e.setState({movies:t.data.results}),console.log(e.state)})}},{key:"render",value:function(){var e,t=this;return this.state.show&&(e=r.a.createElement(E,{data:this.state.data})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},this.state.movies.map(function(e){return r.a.createElement("div",{key:e.id,className:"list",onClick:function(a){return t.handleClick(e,a)}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),className:"content-img",id:"".concat(e.id)}),r.a.createElement("p",null,e.title))}),e),r.a.createElement(v,{data:this.state}))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(e,t){console.log("jhgjhgjhgjhgjhg"+e),a.setState({show:!0,data:t})},a.state={movies:[],show:!1,data:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=004fe1ee41218ae53e75b9b4b7c47018&language=en-US&page=1").then(function(t){e.setState({movies:t.data.results}),console.log(e.state)})}},{key:"render",value:function(){var e,t=this;return this.state.show&&(e=r.a.createElement(E,{data:this.state.data})),r.a.createElement("div",{className:"container"},this.state.movies.map(function(e){return r.a.createElement("div",{key:e.id,className:"list",onClick:function(a){return t.handleClick(e,a)}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),className:"content-img",id:"".concat(e.id)}),r.a.createElement("p",null,e.title))}),e)}}]),t}(n.Component),y=(n.Component,a(34)),k=a(37),O=a.n(k),C=a(43),x=a(149),S=a(3),F=a(147),P=a(151),A=a(48),_=a.n(A),B=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",{className:"fab fa-facebook"}))))}}]),t}(n.Component),I=(Object(F.a)(function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing(1)},textField:{flexBasis:200,width:250,marginLeft:100},formFlex:{display:"flex",flexDirection:"column"},submitBtn:{backgroundColor:"rgb(54, 143, 143)",color:"white",marginLeft:100},field:{},forgotPwd:{marginLeft:230}}}),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",email:"",password:"",confirm:"",status:"",usernameError:"",emailError:"",passwordError:"",confirmError:"",error:""},a.validateEmail=function(e){e.email;return new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(a.state.email)},a.validatePass=function(e){e.password;return/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(a.state.password)},a.validateUserName=function(e){e.username;return/^([^0-9]*)$/.test(a.state.username)},a.validate=function(){var e="",t="",n="",r="";return a.state.username||(e="Username cannot be blank"),a.state.email.includes("@")||(t="Invalid Email"),a.state.password.length<8&&(n="Enter valid password"),a.state.password!=a.state.confirm&&(r="Password didnot match"),!(e||t||n||r)||(a.setState({usernameError:e,emailError:t,passwordError:n,confirmError:r}),!1)},a.handleSubmit=function(){var e=Object(C.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),g.a.post({url:"https://api.themoviedb.org/3/authentication/token/new?api_key=004fe1ee41218ae53e75b9b4b7c47018"}).then(function(e){return console.log("response"+e)}).catch(function(e){return console.log(e)}),a.validate()&&console.log(a.state);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleInput=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-flex"},r.a.createElement("div",{className:"left-flex left-log"},r.a.createElement("h2",null,"WELCOME"),r.a.createElement("p",null,"To keep connected with us, please login with your personal info."),r.a.createElement("a",{href:"/login"},r.a.createElement("input",{type:"submit",className:"signup-btn",value:"Login"})," "),r.a.createElement(B,null)),r.a.createElement("div",{className:"right-flex right-log"},r.a.createElement("h2",null,"Signup"),r.a.createElement("p",null,"Enter your details and start your movie journey with us."),r.a.createElement("form",{onSubmit:this.handleSubmit,method:"post"},r.a.createElement("div",{className:"inputField"},r.a.createElement(P.a,{type:"text",name:"username",label:"UserName",onChange:this.handleInput}),r.a.createElement("div",{className:"helper"},this.state.usernameError)),r.a.createElement("div",{className:"inputField"},r.a.createElement(P.a,{type:"Email",name:"email",label:"Email",onChange:this.handleInput}),r.a.createElement("div",{className:"helper"},this.state.emailError)),r.a.createElement("div",{className:"inputField"},r.a.createElement(P.a,{type:"password",name:"password",label:"Password",onChange:this.handleInput}),r.a.createElement("div",{className:"helper"},this.state.passwordError)),r.a.createElement("div",{className:"inputField"},r.a.createElement(P.a,{type:"password",name:"confirm",label:"Confirm Password",onChange:this.handleInput}),r.a.createElement("div",{className:"helper"},this.state.confirmError)),r.a.createElement("div",{className:"inputField"},r.a.createElement(x.a,{variant:"extended",size:"medium","aria-label":"Add",type:"submit",className:"submitBtn"},r.a.createElement(_.a,null),"Signup")))))))}}]),t}(n.Component)),L=(n.Component,n.Component,a(51)),U=a(75),D=a(150),M=a(152),z=a(73),W=a.n(z),$=a(72),T=a.n($),J=a(71),R=a.n(J),Z=Object(F.a)(function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing(1)},textField:{flexBasis:200,width:250,marginLeft:100},formFlex:{display:"flex",flexDirection:"column"},submitBtn:{backgroundColor:"rgb(54, 143, 143)",color:"white",marginLeft:100},forgotPwd:{marginLeft:230,fontSize:13,marginBottom:12}}});function q(){var e=this,t=Z(),a=r.a.useState({name:"",password:"",email:"",nameError:""}),n=Object(U.a)(a,2),i=n[0],l=n[1],s=function(){var t=Object(C.a)(O.a.mark(function t(a){return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e.validate()&&(console.log(e.state),e.setState(e.initialState));case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),o=function(e){return function(t){l(Object(L.a)({},i,Object(y.a)({},e,t.target.value)))}};return r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-flex"},r.a.createElement("div",{className:"left-flex left-log"},r.a.createElement("h2",null,"WELCOME"),r.a.createElement("p",null,"Enter your details and start your movie journey with us."),r.a.createElement("a",{href:"/"},r.a.createElement("input",{type:"submit",className:"signup-btn",value:"Signup"})," ")),r.a.createElement("div",{className:"right-flex right-log"},r.a.createElement("h2",null,"Login"),r.a.createElement("p",null,"To keep connected with us, please login with your personal info."),r.a.createElement("div",{className:t.root},r.a.createElement("form",{className:Object(S.a)(t.flexForm),onSubmit:s,method:"post"},r.a.createElement("div",{className:t.field},r.a.createElement(P.a,{id:"outlined-adornment-weight",className:Object(S.a)(t.margin,t.textField),variant:"outlined",label:"UserName",value:i.name,onChange:o("name"),InputProps:{endAdornment:r.a.createElement(M.a,{position:"end"},r.a.createElement(D.a,{edge:"end"},r.a.createElement(R.a,null)))}})),r.a.createElement("div",{className:t.field},r.a.createElement(P.a,{id:"outlined-adornment-password",className:Object(S.a)(t.margin,t.textField),variant:"outlined",type:i.showPassword?"text":"password",label:"Password",value:i.password,onChange:o("password"),InputProps:{endAdornment:r.a.createElement(M.a,{position:"end"},r.a.createElement(D.a,{edge:"end","aria-label":"Toggle password visibility",onClick:function(){l(Object(L.a)({},i,{showPassword:!i.showPassword}))}},i.showPassword?r.a.createElement(T.a,null):r.a.createElement(W.a,null)))}})),r.a.createElement("div",{className:(t.field,t.margin,t.forgotPwd)},r.a.createElement("a",{href:"/forgot"}," Forgot Password?")),r.a.createElement("div",{className:t.field},r.a.createElement(x.a,{variant:"extended",size:"medium","aria-label":"Add",className:(t.margin,t.submitBtn)},r.a.createElement(_.a,{className:t.extendedIcon}),"Submit")))))))}var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:I}),r.a.createElement(o.a,{path:"/popular",exact:!0,component:b}),r.a.createElement(o.a,{path:"/rated",component:j}),r.a.createElement(o.a,{path:"/latest",component:w}),r.a.createElement(o.a,{path:"/upcoming",component:N}),r.a.createElement(o.a,{path:"/login",component:q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},84:function(e,t,a){e.exports=a(120)},89:function(e,t,a){},90:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.b69aa004.chunk.js.map