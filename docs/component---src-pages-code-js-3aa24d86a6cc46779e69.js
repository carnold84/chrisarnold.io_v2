(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{145:function(e,n,t){"use strict";t.r(n);t(34);var r=t(154),a=t(0),o=t.n(a),i=t(146),l=t.n(i),c=t(4),s=t.n(c),p=t(147),u=t(155),d=t.n(u),f=t(156),m=t.n(f),h=t(148);function g(){var e=l()(["\n  align-items: center;\n  background-color: transparent;\n  border: none;\n  color: var(--text-color-alt2);\n  display: flex;\n  fill: var(--text-color-alt2);\n  font-size: 1.2rem;\n  font-weight: 400;\n  justify-content: center;\n  line-height: 1.4rem;\n  text-decoration: none;\n\n  svg {\n    margin: 1px 8px 0 0;\n    width: 24px;\n  }\n\n  &:hover {\n    color: var(--text-color-alt1);\n    fill: var(--text-color-alt1);\n  }\n\n  @media "," {\n    display: inline-flex;\n  }\n"]);return g=function(){return e},e}function x(){var e=l()(["\n  display: flex;\n  justify-content: flex-end;\n\n  & > * {\n    margin: 0 0 0 20px;\n  }\n"]);return x=function(){return e},e}function v(){var e=l()(["\n  span {\n    color: var(--text-color-alt3);\n  }\n\n  color: var(--text-color-alt2);\n  font-size: 1.1rem;\n  font-weight: 400;\n  line-height: 1.4rem;\n  margin: 0 0 30px;\n\n  @media "," {\n    margin: 0 0 15px;\n  }\n"]);return v=function(){return e},e}function b(){var e=l()(["\n  p {\n    color: var(--text-color-alt2);\n    font-size: 1.1rem;\n    font-weight: 400;\n    line-height: 1.6rem;\n    margin: 0 0 10px;\n  }\n"]);return b=function(){return e},e}function w(){var e=l()(["\n  color: var(--text-color-alt1);\n  flex-shrink: 0;\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 2.4rem;\n  margin: 0 0 10px;\n  width: 100%;\n"]);return w=function(){return e},e}function k(){var e=l()(["\n  color: var(--text-color-alt2);\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  margin: 0 0 34px;\n  width: 100%;\n"]);return k=function(){return e},e}var y=p.b.div(k()),E=p.b.h2(w()),j=p.b.div(b()),C=p.b.p(v(),Object(h.a)("sm")),L=p.b.div(x()),R=p.b.a.attrs({rel:"noopener",target:"_blank"})(g(),Object(h.a)("sm")),z=function(e){var n=e.data,t=n.demoLink,r=n.description,a=n.repositoryLink,i=n.tags,l=n.title,c={__html:r};return o.a.createElement(y,null,o.a.createElement(E,null,l),o.a.createElement(j,{dangerouslySetInnerHTML:c}),o.a.createElement(C,null,o.a.createElement("span",null,"Tags:")," ",i),o.a.createElement(L,null,o.a.createElement(R,{href:t},o.a.createElement(d.a,{height:"22px",width:"22px"}),o.a.createElement("span",null,"View")),o.a.createElement(R,{href:a},o.a.createElement(m.a,{height:"20px",width:"20px"}),o.a.createElement("span",null,"Code"))))},M=s.a.shape,O=s.a.string;z.propTypes={data:M({demoLink:O,description:O,repositoryLink:O,tags:O,title:O})},z.defaultProps={color:"--text-color1"};var S=z,H=t(153);n.default=function(){var e=r.data.allMarkdownRemark.edges;return o.a.createElement(H.a,{appHeaderColor:"--text-color-alt1",bgColor:"--color-alt1"},e.map(function(e){var n=Object.assign({description:e.node.html},e.node.frontmatter);return o.a.createElement(S,{data:n,key:n.path})}))}},148:function(e,n,t){"use strict";n.a=function(e){switch(e){case"sm":return"(min-width: 576px)";case"md":return"(min-width: 768px)";case"lg":return"(min-width: 992px)";case"xl":default:return"(min-width: 1200px)"}}},149:function(e,n,t){var r;e.exports=(r=t(151))&&r.default||r},150:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(4),i=t.n(o),l=t(33),c=t.n(l);t.d(n,"a",function(){return c.a});t(149),a.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},151:function(e,n,t){"use strict";t.r(n);t(34);var r=t(0),a=t.n(r),o=t(4),i=t.n(o),l=t(55),c=t(2),s=function(e){var n=e.location,t=c.default.getResourcesForPathnameSync(n.pathname);return t?a.a.createElement(l.a,Object.assign({location:n,pageResources:t},t.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=s},152:function(e,n,t){var r=t(0);function a(e){return r.createElement("svg",e,r.createElement("path",{d:"M37.999,26.025l-2.93,3.903c-0.315,0.461 -0.779,0.907 -1.133,1.337l-0.035,0.047l-0.002,-0.002c-3.511,4.252 -8.822,6.964 -14.762,6.964c-10.562,0 -19.137,-8.575 -19.137,-19.137c0,-10.562 8.575,-19.137 19.137,-19.137c6.682,0 12.569,3.432 15.992,8.628l-6.607,8.808c-0.804,-4.453 -4.702,-7.835 -9.385,-7.835c-5.263,0 -9.536,4.273 -9.536,9.536c0,5.263 4.273,9.536 9.536,9.536c3.684,0 6.199,-1.608 8.99,-4.896c0,0 12.272,-15.933 12.401,-16.105c6.326,-8.458 18.329,-10.188 26.787,-3.862c4.756,3.558 7.385,8.911 7.65,14.419l0.002,0l0,0.058c0.025,0.556 0.026,1.114 0.003,1.672l0.03,18.445l-9.567,0l-0.004,-2.698c-6.43,3.709 -14.723,3.478 -21.039,-1.247c-2.992,-2.237 -5.141,-5.185 -6.391,-8.434Zm12.141,0.746c-4.214,-3.152 -5.077,-9.133 -1.924,-13.348c3.152,-4.215 9.133,-5.077 13.348,-1.925c4.215,3.153 5.077,9.134 1.924,13.349c-3.152,4.214 -9.133,5.077 -13.348,1.924Z"}))}a.defaultProps={width:"100%",height:"100%",viewBox:"0 0 75 39",version:"1.1",xmlSpace:"preserve",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.41421"}},e.exports=a,a.default=a},153:function(e,n,t){"use strict";var r=t(146),a=t.n(r),o=t(4),i=t.n(o),l=t(0),c=t.n(l),s=t(147),p=t(150),u=t(152),d=t.n(u);function f(){var e=a()(["\n  fill: inherit;\n  height: 26px;\n  width: 50px;\n"]);return f=function(){return e},e}var m=s.b.div(f()),h=function(e){return c.a.createElement(m,null,c.a.createElement(d.a,null))},g=t(148);function x(){var e=a()(["\n  border-bottom: 1px solid transparent;\n  color: inherit;\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 0 0 0 30px;\n  padding: 0 0 3px;\n  text-decoration: none;\n  text-transform: uppercase;\n\n  &.is-active {\n    border-color: inherit;\n  }\n"]);return x=function(){return e},e}function v(){var e=a()(["\n  align-items: center;\n  display: flex;\n  justify-content: space - between;\n"]);return v=function(){return e},e}function b(){var e=a()(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-shrink: 0;\n  justify-content: space-between;\n  margin: 0;\n  padding: 40px;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n\n  @media "," {\n    padding: 60px;\n  }\n\n  @media "," {\n    padding: 80px;\n  }\n"]);return b=function(){return e},e}var w=s.b.header(b(),Object(g.a)("md"),Object(g.a)("lg")),k=s.b.nav(v()),y=Object(s.b)(p.a).attrs({activeClassName:"is-active"})(x()),E=function(e){var n=e.bgColor,t=e.color;return c.a.createElement(w,{style:{backgroundColor:"var("+n+")",color:"var("+t+")",fill:"var("+t+")"}},c.a.createElement(p.a,{to:"/"},c.a.createElement(h,null)),c.a.createElement(k,null,c.a.createElement(y,{to:"/"},"Home"),c.a.createElement(y,{to:"/code"},"Code")))},j=i.a.string;E.propTypes={bgColor:j,color:j},E.defaultProps={bgColor:"--bg-color1",color:"--text-color1"};var C=E;function L(){var e=a()(["\n  max-width: 900px;\n  width: 100%;\n"]);return L=function(){return e},e}function R(){var e=a()(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 140px 40px;\n\n  @media "," {\n    padding: 180px 100px;\n  }\n\n  @media "," {\n    padding: 220px;\n  }\n"]);return R=function(){return e},e}function z(){var e=a()(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 0;\n"]);return z=function(){return e},e}function M(){var e=a()(["\n  :root {\n    --bg-color1: #ffffff;\n    --color1: #663399;\n    --color-alt1: #1c2227;\n    --text-color1: #333333;\n    --text-color2: #666666;\n    --text-color3: #999999;\n    --text-color-alt1: #ffffff;\n    --text-color-alt2: #a6b2b9;\n    --text-color-alt3: #718087;\n  }\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n  html {\n    color: #222222;\n    font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    line-break: 22px;\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    background-color: var(",");\n    margin: 0;\n    padding: 0;\n  }\n"]);return M=function(){return e},e}var O=Object(s.a)(M(),function(e){return e.bgColor}),S=s.b.div(z()),H=s.b.div(R(),Object(g.a)("md"),Object(g.a)("lg")),P=s.b.section(L()),T=function(e){var n=e.bgColor,t=e.appHeaderColor,r=e.children;return c.a.createElement(S,null,c.a.createElement(O,{bgColor:n}),c.a.createElement(C,{bgColor:n,color:t}),c.a.createElement(H,null,c.a.createElement(P,null,r)))},_=i.a.string;T.propTypes={appHeaderColor:_,bgColor:_},T.defaultProps={appHeaderColor:"--text-color1",bgColor:"--bg-color1"};n.a=T},154:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{html:"<p>Photos app built using React, Next.js, and the responsive <picture> element.</p>",frontmatter:{date:null,demoLink:"https://react-photos-avcfjakuso.now.sh/",path:"/code/react-photos",repositoryLink:"https://github.com/carnold84/React-Photos-2-0",tags:"React, Next.js",title:"React Photos",type:"code"}}},{node:{html:"<p>App to catalog books. Built to be used in an Electron desktop app and as a web app. Uses local storage by default, but the api file is loaded in dynamically so it can easily be swapped out.</p>",frontmatter:{date:null,demoLink:"https://carnold84.github.io/vue-books/demo",path:"/code/vue-books",repositoryLink:"https://github.com/carnold84/vue-books",tags:"Vue.js, LocalStorage",title:"Vue Books",type:"code"}}},{node:{html:"<p>Web app for planning trips. Built with AngularJS and Spectre CSS framework.</p>",frontmatter:{date:null,demoLink:"https://meltplastic.net/demos/travel_app/",path:"/code/travel-app",repositoryLink:"https://github.com/carnold84/travel_app",tags:"AngularJS, Spectre.css",title:"Travel App",type:"code"}}},{node:{html:"<p>Experiment building an interactive app using WebGL library three.js. Click to add in a new element.</p>",frontmatter:{date:null,demoLink:"https://meltplastic.net/demos/three_js/",path:"/code/three-js-experiment",repositoryLink:"https://github.com/carnold84/three_js_lab",tags:"Three.js, Modernizr, Require.js, jQuery",title:"Three.js Experiment",type:"code"}}}]}}}},155:function(e,n,t){var r=t(0);function a(e){return r.createElement("svg",e,[r.createElement("path",{d:"M0 0h24v24H0z",fill:"none",key:0}),r.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",key:1})])}a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=a,a.default=a},156:function(e,n,t){var r=t(0);function a(e){return r.createElement("svg",e,r.createElement("path",{d:"M50.9,0c-28.106,0 -50.9,22.791 -50.9,50.906c0,22.491 14.584,41.569 34.812,48.3c2.547,0.469 3.475,-1.103 3.475,-2.453c0,-1.209 -0.043,-4.409 -0.068,-8.656c-14.16,3.075 -17.147,-6.825 -17.147,-6.825c-2.316,-5.881 -5.653,-7.447 -5.653,-7.447c-4.622,-3.156 0.35,-3.094 0.35,-3.094c5.109,0.36 7.797,5.247 7.797,5.247c4.54,7.778 11.915,5.531 14.815,4.228c0.463,-3.287 1.778,-5.531 3.231,-6.803c-11.303,-1.284 -23.187,-5.653 -23.187,-25.159c0,-5.556 1.984,-10.103 5.241,-13.66c-0.525,-1.287 -2.272,-6.465 0.5,-13.472c0,0 4.271,-1.368 13.996,5.219c4.06,-1.131 8.416,-1.693 12.744,-1.715c4.325,0.022 8.678,0.584 12.744,1.715c9.719,-6.587 13.984,-5.219 13.984,-5.219c2.778,7.007 1.032,12.185 0.51,13.472c3.262,3.557 5.231,8.104 5.231,13.66c0,19.556 -11.903,23.859 -23.241,25.118c1.825,1.572 3.453,4.679 3.453,9.426c0,6.806 -0.062,12.296 -0.062,13.965c0,1.363 0.919,2.947 3.5,2.45c20.212,-6.747 34.784,-25.812 34.784,-48.297c0,-28.115 -22.793,-50.906 -50.909,-50.906Z"}))}a.defaultProps={width:"102",height:"100",viewBox:"0 0 102 100",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.41421"}},e.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-pages-code-js-3aa24d86a6cc46779e69.js.map