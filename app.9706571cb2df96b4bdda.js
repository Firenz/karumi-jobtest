!function(e){function t(t){for(var o,i,u=t[0],c=t[1],l=t[2],f=0,s=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&s.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(d&&d(t);s.length;)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/karumi-jobtest/";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=c;a.push([188,1]),n()}({179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.switchRoutes=void 0,t.switchRoutes={root:"/",login:"/login",logged:"/logged"}},180:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(224),t),r(n(229),t)},188:function(e,t,n){n(189),e.exports=n(190)},190:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),u=a(n(10)),c=n(195);u.render(i.createElement(c.App,null),document.getElementById("root"))},195:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const i=a(n(0)),u=n(19),c=n(59),l=n(97);t.App=()=>i.createElement(i.Fragment,null,i.createElement(c.SessionProvider,null,i.createElement(u.ThemeProvider,{theme:c.defaultTheme},i.createElement(l.Router,null))))},199:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(200),t)},200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateSession=t.validateCredentials=void 0;const o=n(59),r=n(95);t.validateCredentials=(e,t)=>new Promise((n,a)=>setTimeout(()=>{e===o.mockData.login&&t===o.mockData.password?(o.mockData.tokenSession=r.randomizeString(50),localStorage.setItem("tokenSessionApi",o.mockData.tokenSession),n(o.mockData.tokenSession)):a("Invalid credentials, use admin@mail.com/test for testing purposes.")},500)),t.validateSession=e=>new Promise((t,n)=>setTimeout(()=>{const r=localStorage.getItem("tokenSessionApi")||"";o.mockData.tokenSession=r,e===r?t(o.mockData):n("Invalid session.")},500))},201:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomizeString=void 0,t.randomizeString=e=>{const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=t.length;let o="";for(let r=0;r<e;r++)o+=t.charAt(Math.floor(Math.random()*n));return o}},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearSavedData=t.getSavedLoginInfo=t.saveLoginInfo=t.checkValidityTokenSession=t.getSavedTokenSession=t.saveTokenSession=void 0;const o="tokenSession",r="loginInfo";t.saveTokenSession=e=>{localStorage.setItem(o,e)},t.getSavedTokenSession=()=>localStorage.getItem(o)||"",t.checkValidityTokenSession=()=>{const e=t.getSavedTokenSession();return null!=e&&""!==e},t.saveLoginInfo=e=>{localStorage.setItem(r,e)},t.getSavedLoginInfo=()=>localStorage.getItem(r)||"",t.clearSavedData=()=>{localStorage.setItem(o,""),localStorage.setItem(r,"")}},203:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(204),t)},204:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mockData=void 0,t.mockData={login:"admin@mail.com",password:"test",tokenSession:""}},205:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(206),t)},206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mapperApiToVm=t.createEmptyLogin=void 0,t.createEmptyLogin=()=>({login:"",password:""}),t.mapperApiToVm=e=>({login:e.login,password:e.password})},207:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(208),t)},208:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultTheme=void 0;const o=n(30);t.defaultTheme=o.createMuiTheme({palette:{primary:{main:"#1C97F5"},secondary:{main:"#C4C4C4"},info:{main:"#FFA800"},success:{main:"#00A356"},error:{main:"#E55353"},background:{default:"#FFF"},text:{primary:"#23282E",secondary:"#505254"}},typography:{fontFamily:["Roboto","Helvetica","Arial","sans-serif"].join(","),fontSize:16,fontWeightLight:"lighter",fontWeightRegular:"normal",fontWeightMedium:"bold",fontWeightBold:"bolder",h1:{fontSize:"82px",fontWeight:"bold"},h2:{fontSize:"56px",fontWeight:"bolder"},h3:{fontSize:"40px",fontWeight:"normal"},h4:{fontSize:"34px",fontWeight:"normal",textTransform:"uppercase"},body1:{fontSize:"1.2rem",fontWeight:"normal"},button:{fontSize:"1rem",fontWeight:"normal",textTransform:"capitalize"}}})},209:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.SessionProvider=t.SessionContext=void 0;const i=a(n(0)),u=n(96);t.SessionContext=i.createContext({tokenSession:"no token session",login:"no user",updateTokenSession:()=>{console.warn("if you are reading this, likely you forgot to add the provider on top of your app")},updateLogin:()=>{console.warn("if you are reading this, likely you forgot to add the provider on top of your app")}}),t.SessionProvider=e=>{const[n,o]=i.useState(u.getSavedLoginInfo()),[r,a]=i.useState(u.getSavedTokenSession());return i.useEffect(()=>{u.saveTokenSession(r)},[r]),i.useEffect(()=>{u.saveLoginInfo(n)},[n]),i.createElement(t.SessionContext.Provider,{value:{tokenSession:r,updateTokenSession:a,login:n,updateLogin:o}},e.children)}},210:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(211),t),r(n(212),t),r(n(213),t),r(n(215),t)},211:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.TextFieldComponent=void 0;const i=a(n(0)),u=n(19),c=n(30),l=c.makeStyles(e=>c.createStyles({textField:{height:"5.5rem"},input:{padding:"1rem",color:e.palette.text.secondary}}));t.TextFieldComponent=e=>{const t=l(e),{input:{name:n,onChange:o,value:r,...a},meta:c,"data-testid":d,...f}=e,s=(c.submitError&&!c.dirtySinceLastSubmit||c.error)&&c.touched;return i.createElement(u.TextField,Object.assign({},f,{name:n,error:s,inputProps:{...a,"data-testid":d,className:t.input},onChange:o,value:r,helperText:s?c.error:"",variant:"outlined",className:t.textField}))}},212:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonComponent=void 0;const i=a(n(0)),u=n(19),c=n(30),l=c.makeStyles(e=>c.createStyles({button:{padding:"0.5rem 2rem"}}));t.ButtonComponent=e=>{const{type:t,variant:n,color:o,size:r,onClick:a}=e,c=l(e);return i.createElement(u.Button,{"data-testid":e["data-testid"]||"button-component",type:t,variant:n,color:o,size:r,className:c.button,onClick:a},e.children)}},213:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.LogoImgComponent=void 0;const i=a(n(0)),u=n(30),c=n(19),l=u.makeStyles(()=>c.createStyles({media:{height:"7rem"}}));t.LogoImgComponent=()=>{const e=l(),t=n(214);return i.createElement("img",{"data-testid":"logo-img",src:t,alt:"Karumi",className:e.media})}},214:function(e,t,n){e.exports=n.p+"./img/karumi-logo.d5593499ad9f0087ad8347a65a215542.png"},215:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingComponent=void 0;const i=a(n(0)),u=n(19),c=u.makeStyles(e=>u.createStyles({cardLoading:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}));t.LoadingComponent=e=>{const{loadingState:t}=e,n=c(e);return i.createElement(i.Fragment,null,t&&i.createElement("div",{"data-testid":"loading-component",className:n.cardLoading},i.createElement(u.CircularProgress,{size:"6rem"})))}},216:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Router=void 0;const i=a(n(0)),u=n(98),c=n(179),l=n(218);t.Router=()=>i.createElement(u.HashRouter,null,i.createElement(u.Switch,null,i.createElement(u.Route,{exact:!0,path:[c.switchRoutes.root,c.switchRoutes.login],component:l.LoginPage}),i.createElement(u.Route,{path:c.switchRoutes.logged,component:l.UserPage})))},218:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(219),t),r(n(232),t)},219:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.LoginPage=void 0;const i=a(n(0)),u=n(19),c=n(60),l=n(180),d=u.makeStyles(e=>u.createStyles({cardContent:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}}));t.LoginPage=()=>{const e=d();return i.createElement(u.CssBaseline,null,i.createElement(c.CenteredLayout,null,i.createElement(c.CardLayout,null,i.createElement(u.CardContent,{className:e.cardContent,"data-testid":"login-page"},i.createElement(l.LoginContainer,null)))))}},220:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.CenteredLayout=void 0;const i=a(n(0)),u=n(19),c=u.makeStyles(e=>u.createStyles({root:{backgroundColor:e.palette.secondary.main,height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}));t.CenteredLayout=e=>{const t=c(e);return i.createElement(u.CssBaseline,null,i.createElement("div",{className:t.root},e.children))}},221:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.CardLayout=void 0;const i=a(n(0)),u=n(30),c=n(19),l=u.makeStyles(e=>u.createStyles({card:{padding:"3rem",maxWidth:"30rem",width:"80%",height:"40rem",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",boxShadow:"0px 3px 5px 0px rgba(0,0,0,0.5)"}}));t.CardLayout=e=>{const t=l(e);return i.createElement(c.Card,{"data-testid":"card-layout",variant:"outlined",className:t.card},e.children)}},222:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.CardContentTopLayout=void 0;const i=a(n(0)),u=n(19),c=u.makeStyles(e=>u.createStyles({cardHeader:{margin:"5rem 0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}));t.CardContentTopLayout=e=>{const t=c(e);return i.createElement("div",{className:t.cardHeader},e.children)}},223:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.CardContentBodyLayout=void 0;const i=a(n(0)),u=n(19),c=u.makeStyles(e=>u.createStyles({cardContent:{flexGrow:1,display:"flex",flexDirection:"column"}}));t.CardContentBodyLayout=e=>{const t=c(e);return i.createElement("div",{className:t.cardContent},e.children)}},224:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(225),t)},225:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.LoginContainer=void 0;const i=a(n(0)),u=n(98),c=n(97),l=n(59),d=n(95),f=n(226);t.LoginContainer=()=>{const e=u.useHistory(),[t]=i.useState(l.createEmptyLogin()),[n,o]=i.useState(!0),{tokenSession:r,updateLogin:a,updateTokenSession:s}=i.useContext(l.SessionContext),m=t=>{a(t.login),e.push(c.switchRoutes.logged)};return i.useEffect(()=>{o(!0),l.validateSession(r).then(e=>{o(!1),""!==e.tokenSession&&e.tokenSession===r&&m(l.mapperApiToVm(e))}).catch(()=>{o(!1),d.clearSavedData()})},[]),i.createElement(f.LoginComponent,{onLogin:e=>{o(!0),l.validateCredentials(e.login,e.password).then(t=>{o(!1),s(t),m(e)}).catch(e=>{o(!1),alert(e)})},initialLogin:t,loadingState:n})}},226:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.LoginComponent=void 0;const i=a(n(0)),u=n(233),c=n(19),l=n(96),d=n(227),f=n(60),s=c.makeStyles(e=>c.createStyles({form:{height:"100%",width:"100%",display:"flex",flexDirection:"column"},button:{marginTop:"1rem"}}));t.LoginComponent=e=>{const{onLogin:t,initialLogin:n,loadingState:o}=e,r=s(e);return i.createElement(i.Fragment,null,o&&i.createElement(l.LoadingComponent,{loadingState:o}),!o&&i.createElement(i.Fragment,null,i.createElement(f.CardContentTopLayout,null,i.createElement(l.LogoImgComponent,null)),i.createElement(f.CardContentBodyLayout,null,i.createElement(u.Form,{onSubmit:e=>{t(e)},initialValues:n,render:({handleSubmit:e,submitting:t,pristine:n,values:o})=>i.createElement("form",{"data-testid":"login-component",className:r.form,onSubmit:e,autoComplete:"off"},i.createElement(u.Field,{"data-testid":"login-input",fullWidth:!0,name:"login",component:l.TextFieldComponent,type:"text",label:"Username",validate:(e,t,n)=>{const o=null==n?"":n.name;return d.formValidation.validateField(o,e)}}),i.createElement(u.Field,{"data-testid":"password-input",fullWidth:!0,name:"password",component:l.TextFieldComponent,type:"password",label:"Password",validate:(e,t,n)=>{const o=null==n?"":n.name;return d.formValidation.validateField(o,e)}}),i.createElement("div",{className:r.button},i.createElement(l.ButtonComponent,{"data-testid":"login-button",type:"submit",variant:"contained",color:"primary"},"Login")))}))))}},227:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formValidation=void 0;const o=n(99),r=n(228),a={field:{login:[o.Validators.required.validator,o.Validators.email.validator],password:[o.Validators.required.validator,{validator:o.Validators.minLength.validator,customArgs:{length:3}},{validator:o.Validators.pattern.validator,customArgs:{pattern:/[a-zA-Z0-9]/}}]}};t.formValidation=r.createFinalFormValidation(a)},229:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(230),t)},230:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.UserContainer=void 0;const i=a(n(0)),u=n(98),c=n(97),l=n(231),d=n(59);t.UserContainer=()=>{const e=u.useHistory(),[t,n]=i.useState(!0),{login:o,tokenSession:r,updateLogin:a,updateTokenSession:f}=i.useContext(d.SessionContext),s=()=>{e.push(c.switchRoutes.login)};return i.useEffect(()=>{n(!0),d.validateSession(r).then(()=>n(!1)).catch(e=>{console.warn(e),n(!1),s()})},[]),i.createElement(l.UserComponent,{handleLogout:()=>{a(""),f(""),s()},loginInfo:o,loadingState:t})}},231:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.UserComponent=void 0;const i=a(n(0)),u=n(19),c=n(96),l=n(60),d=u.makeStyles(e=>u.createStyles({cardContent:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"},text:{flexGrow:1,alignSelf:"center"},button:{marginTop:"1rem",alignSelf:"flex-start"}}));t.UserComponent=e=>{const{handleLogout:t,loginInfo:n,loadingState:o}=e,r=d(e);return i.createElement(i.Fragment,null,o&&i.createElement(c.LoadingComponent,{loadingState:o}),!o&&i.createElement(i.Fragment,null,i.createElement(l.CardContentTopLayout,null,i.createElement(c.LogoImgComponent,null)),i.createElement(l.CardContentBodyLayout,null,i.createElement(u.Typography,{"data-testid":"text-component",variant:"body1",component:"h1",className:r.text},"Welcome ",n,"!"),i.createElement("div",{className:r.button,"data-testid":"user-component"},i.createElement(c.ButtonComponent,{"data-testid":"logout-button",type:"button",variant:"contained",color:"primary",onClick:t},"Logout")))))}},232:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.UserPage=void 0;const i=a(n(0)),u=n(19),c=n(60),l=n(180),d=u.makeStyles(e=>u.createStyles({cardContent:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"},text:{flexGrow:1,alignSelf:"center"},button:{marginTop:"1rem",alignSelf:"flex-start"}}));t.UserPage=e=>{const t=d(e);return i.createElement(u.CssBaseline,null,i.createElement(c.CenteredLayout,null,i.createElement(c.CardLayout,null,i.createElement(u.CardContent,{className:t.cardContent,"data-testid":"user-page"},i.createElement(l.UserContainer,null)))))}},59:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(199),t),r(n(203),t),r(n(205),t),r(n(207),t),r(n(209),t)},60:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(220),t),r(n(221),t),r(n(222),t),r(n(223),t)},95:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(201),t),r(n(202),t)},96:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(210),t),r(n(95),t)},97:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},r=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(216),t),r(n(179),t)}});