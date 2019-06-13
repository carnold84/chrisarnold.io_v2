(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(n,e,t){"use strict";t.r(e);var r=t(146),a=t.n(r),o=t(0),i=t.n(o),l=t(147),c=t(153),u=t(148);function d(){var n=a()(["\n  font-size: 1.3rem;\n  font-weight: 400;\n  line-height: 2.2rem;\n  margin: 0 0 10px;\n  text-align: justify;\n\n  @media "," {\n    font-size: 1.3rem;\n    line-height: 2rem;\n  }\n\n  @media "," {\n    font-size: 1.3rem;\n    line-height: 2.2rem;\n  }\n"]);return d=function(){return n},n}function f(){var n=a()(["\n  font-size: 6rem;\n  font-weight: 700;\n  line-height: 6rem;\n  margin: 0 0 25px;\n"]);return f=function(){return n},n}function s(){var n=a()(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return s=function(){return n},n}var p=l.b.div(s()),m=l.b.h1(f()),g=l.b.p(d(),Object(u.a)("sm"),Object(u.a)("md"));e.default=function(){return i.a.createElement(c.a,null,i.a.createElement(p,null,i.a.createElement(m,null,"Hello,"),i.a.createElement(g,null,"I'm Chris Arnold, a front-end developer and designer in Christchurch, New Zealand. I like to write clean, elegant, functional code and partner it with clean, beautiful design and well thought out, user-friendly interfaces.")))}},148:function(n,e,t){"use strict";e.a=function(n){switch(n){case"sm":return"(min-width: 576px)";case"md":return"(min-width: 768px)";case"lg":return"(min-width: 992px)";case"xl":default:return"(min-width: 1200px)"}}},149:function(n,e,t){var r;n.exports=(r=t(151))&&r.default||r},150:function(n,e,t){"use strict";var r=t(0),a=t.n(r),o=t(4),i=t.n(o),l=t(33),c=t.n(l);t.d(e,"a",function(){return c.a});t(149),a.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},151:function(n,e,t){"use strict";t.r(e);t(34);var r=t(0),a=t.n(r),o=t(4),i=t.n(o),l=t(55),c=t(2),u=function(n){var e=n.location,t=c.default.getResourcesForPathnameSync(e.pathname);return t?a.a.createElement(l.a,Object.assign({location:e,pageResources:t},t.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=u},152:function(n,e,t){var r=t(0);function a(n){return r.createElement("svg",n,r.createElement("path",{d:"M37.999,26.025l-2.93,3.903c-0.315,0.461 -0.779,0.907 -1.133,1.337l-0.035,0.047l-0.002,-0.002c-3.511,4.252 -8.822,6.964 -14.762,6.964c-10.562,0 -19.137,-8.575 -19.137,-19.137c0,-10.562 8.575,-19.137 19.137,-19.137c6.682,0 12.569,3.432 15.992,8.628l-6.607,8.808c-0.804,-4.453 -4.702,-7.835 -9.385,-7.835c-5.263,0 -9.536,4.273 -9.536,9.536c0,5.263 4.273,9.536 9.536,9.536c3.684,0 6.199,-1.608 8.99,-4.896c0,0 12.272,-15.933 12.401,-16.105c6.326,-8.458 18.329,-10.188 26.787,-3.862c4.756,3.558 7.385,8.911 7.65,14.419l0.002,0l0,0.058c0.025,0.556 0.026,1.114 0.003,1.672l0.03,18.445l-9.567,0l-0.004,-2.698c-6.43,3.709 -14.723,3.478 -21.039,-1.247c-2.992,-2.237 -5.141,-5.185 -6.391,-8.434Zm12.141,0.746c-4.214,-3.152 -5.077,-9.133 -1.924,-13.348c3.152,-4.215 9.133,-5.077 13.348,-1.925c4.215,3.153 5.077,9.134 1.924,13.349c-3.152,4.214 -9.133,5.077 -13.348,1.924Z"}))}a.defaultProps={width:"100%",height:"100%",viewBox:"0 0 75 39",version:"1.1",xmlSpace:"preserve",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.41421"}},n.exports=a,a.default=a},153:function(n,e,t){"use strict";var r=t(146),a=t.n(r),o=t(4),i=t.n(o),l=t(0),c=t.n(l),u=t(147),d=t(150),f=t(152),s=t.n(f);function p(){var n=a()(["\n  fill: inherit;\n  height: 26px;\n  width: 50px;\n"]);return p=function(){return n},n}var m=u.b.div(p()),g=function(n){return c.a.createElement(m,null,c.a.createElement(s.a,null))},x=t(148);function b(){var n=a()(["\n  border-bottom: 1px solid transparent;\n  color: inherit;\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 0 0 0 30px;\n  padding: 0 0 3px;\n  text-decoration: none;\n  text-transform: uppercase;\n\n  &.is-active {\n    border-color: inherit;\n  }\n"]);return b=function(){return n},n}function h(){var n=a()(["\n  align-items: center;\n  display: flex;\n  justify-content: space - between;\n"]);return h=function(){return n},n}function v(){var n=a()(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-shrink: 0;\n  justify-content: space-between;\n  margin: 0;\n  padding: 40px;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n\n  @media "," {\n    padding: 60px;\n  }\n\n  @media "," {\n    padding: 80px;\n  }\n"]);return v=function(){return n},n}var w=u.b.header(v(),Object(x.a)("md"),Object(x.a)("lg")),E=u.b.nav(h()),y=Object(u.b)(d.a).attrs({activeClassName:"is-active"})(b()),C=function(n){var e=n.bgColor,t=n.color;return c.a.createElement(w,{style:{backgroundColor:"var("+e+")",color:"var("+t+")",fill:"var("+t+")"}},c.a.createElement(d.a,{to:"/"},c.a.createElement(g,null)),c.a.createElement(E,null,c.a.createElement(y,{to:"/"},"Home"),c.a.createElement(y,{to:"/code"},"Code")))},j=i.a.string;C.propTypes={bgColor:j,color:j},C.defaultProps={bgColor:"--theme-color1",color:"--text-color1"};var O=C;function k(){var n=a()(["\n  max-width: 900px;\n  width: 100%;\n"]);return k=function(){return n},n}function z(){var n=a()(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 140px 40px;\n\n  @media "," {\n    padding: 180px 100px;\n  }\n\n  @media "," {\n    padding: 220px;\n  }\n"]);return z=function(){return n},n}function R(){var n=a()(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 0;\n"]);return R=function(){return n},n}function H(){var n=a()(["\n  :root {\n    --theme-color1: #ffffff;\n    --color1: #663399;\n    --color-alt1: #1c2227;\n    --text-color1: #333333;\n    --text-color2: #666666;\n    --text-color3: #999999;\n    --text-color-alt1: #ffffff;\n    --text-color-alt2: #a6b2b9;\n    --text-color-alt3: #718087;\n  }\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n  html {\n    color: #222222;\n    font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    line-break: 22px;\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    background-color: var(",");\n    margin: 0;\n    padding: 0;\n  }\n"]);return H=function(){return n},n}var P=Object(u.a)(H(),function(n){return n.bgColor}),q=u.b.div(R()),S=u.b.div(z(),Object(x.a)("md"),Object(x.a)("lg")),T=u.b.section(k()),Z=function(n){var e=n.bgColor,t=n.appHeaderColor,r=n.children;return c.a.createElement(q,null,c.a.createElement(P,{bgColor:e}),c.a.createElement(O,{bgColor:e,color:t}),c.a.createElement(S,null,c.a.createElement(T,null,r)))},A=i.a.string;Z.propTypes={appHeaderColor:A,bgColor:A},Z.defaultProps={appHeaderColor:"--text-color1",bgColor:"--theme-color1"};e.a=Z}}]);
//# sourceMappingURL=component---src-pages-index-js-58134d78a1a25a5aa9db.js.map