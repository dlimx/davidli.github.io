(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{WtVR:function(t,n,e){"use strict";e("E9XD");var r=e("MUpH"),a=e("wTIg"),o=e("q1tI"),i=e("qKvR"),c=e("Wbzz"),u=e("zIkO"),s=e("CvMP"),l=e("2yN9"),p=e("eYrS");function f(){var t=Object(r.a)(["\n    &:hover "," {\n      transform: none;\n      box-shadow: initial;\n    }\n\n    &:active {\n      transform: scale(0.97) translateY(3px);\n    }\n  "]);return f=function(){return t},t}function b(){var t=Object(r.a)(["\n    max-width: 100%;\n    padding:  0 20px 30px;\n  "]);return b=function(){return t},t}function g(){var t=Object(r.a)(["\n    max-width: 100%;\n    padding:  0 20px;\n    margin-bottom: 20px;\n    -webkit-line-clamp: 3;\n  "]);return g=function(){return t},t}function d(){var t=Object(r.a)(["\n    margin-bottom: 15px;\n  "]);return d=function(){return t},t}function x(){var t=Object(r.a)(["\n    display: -webkit-box;\n  "]);return x=function(){return t},t}function h(){var t=Object(r.a)(["\n    font-size: 22px;  \n    padding: 30px 20px 0;\n    margin-bottom: 10px;\n    -webkit-line-clamp: 3;\n  "]);return h=function(){return t},t}function m(){var t=Object(r.a)(["\n    font-size: 24px;  \n  "]);return m=function(){return t},t}function j(){var t=Object(r.a)(["\n    margin-bottom: 15px;\n  "]);return j=function(){return t},t}function O(){var t=Object(r.a)(["\n    overflow: hidden;\n    margin-bottom: 0;\n    box-shadow: none;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n  "]);return O=function(){return t},t}function v(){var t=Object(r.a)(["\n    height: 200px;\n    margin-bottom: 35px;\n  "]);return v=function(){return t},t}function y(){var t=Object(r.a)(["\n    margin-bottom: 40px;\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]);return y=function(){return t},t}function w(){var t=Object(r.a)(["\n    margin-bottom: 60px;\n  "]);return w=function(){return t},t}function k(){var t=Object(r.a)(["\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]);return k=function(){return t},t}function P(){var t=Object(r.a)(["\n    grid-template-columns: 1fr;\n  "]);return P=function(){return t},t}function L(){var t=Object(r.a)(["\n    grid-column-gap: 24px;\n    grid-template-columns: 1fr 380px;\n  "]);return L=function(){return t},t}function z(){var t=Object(r.a)(["\n    grid-template-columns: 1fr;\n    \n    &:not(:last-child) {\n      margin-bottom: 0;\n    }\n  "]);return z=function(){return t},t}function R(){var t=Object(r.a)(["\n    grid-template-columns: 1fr 1fr;\n  "]);return R=function(){return t},t}function _(){var t=Object(r.a)(["\n    -webkit-line-clamp: 3;\n  "]);return _=function(){return t},t}n.a=function(t){var n=t.articles,e=t.alwaysShowAllDetails;if(!n)return null;var r=1===n.length,a=Object(o.useContext)(p.a),c=a.gridLayout,u=void 0===c?"tiles":c,s=a.hasSetGridLayout,l=a.getGridLayout,f=n.reduce((function(t,n,e,r){return e%2==0&&t.push(r.slice(e,e+2)),t}),[]);return Object(o.useEffect)((function(){return l()}),[]),Object(i.jsx)(S,{style:{opacity:s?1:0},alwaysShowAllDetails:e},f.map((function(t,n){var e=n%2!=0,a=n%2!=1;return Object(i.jsx)(T,{key:n,gridLayout:u,hasOnlyOneArticle:r,reverse:e},Object(i.jsx)(q,{article:t[0],narrow:e}),Object(i.jsx)(q,{article:t[1],narrow:a}))})))};var q=function(t){var n=t.article,e=t.narrow;if(!n)return null;var r=Object(o.useContext)(p.a).gridLayout,a=e&&n.title.length>35,c=e?n.hero.narrow:n.hero.regular,u=c&&0!==Object.keys(c).length&&c.constructor===Object;return Object(i.jsx)(W,{to:n.slug,"data-a11y":"false"},Object(i.jsx)(H,{gridLayout:r},Object(i.jsx)(J,{narrow:e,gridLayout:r},u?Object(i.jsx)(s.c,{src:c}):Object(i.jsx)(s.a,null)),Object(i.jsx)("div",null,Object(i.jsx)(K,{dark:!0,hasOverflow:a,gridLayout:r},n.title),Object(i.jsx)(M,{narrow:e,hasOverflow:a,gridLayout:r},n.excerpt),Object(i.jsx)(U,null,n.date," · ",n.timeToRead," min read"))))},I=Object(i.css)("text-overflow:ellipsis;overflow-wrap:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;white-space:normal;overflow:hidden;",l.a.phablet(_())),A={name:"1fq9f5n",styles:"p{display:-webkit-box;}h2{margin-bottom:10px;}"},S=Object(a.a)("div",{target:"egkxpyp0"})("transition:opacity 0.25s;",(function(t){return t.alwaysShowAllDetails&&A})),C=function(t){return Object(i.css)("position:relative;display:grid;grid-template-columns:",t.reverse?"457px 1fr":"1fr 457px",";grid-template-rows:2;column-gap:30px;&:not(:last-child){margin-bottom:75px;}",l.a.desktop_medium(R())," ",l.a.tablet(z()))},F=function(t){return Object(i.css)("display:grid;grid-template-rows:1fr;grid-template-columns:1fr 488px;grid-column-gap:96px;grid-template-rows:1;align-items:center;position:relative;margin-bottom:50px;",l.a.desktop(L())," ",l.a.tablet(P())," @media (max-width:540px){background:",t.theme.colors.card,";}",l.a.phablet(k()))},D=function(t){return Object(i.css)("position:relative;",l.a.tablet(w())," @media (max-width:540px){background:",t.theme.colors.card,";}",l.a.phablet(y()))},N=function(t){return Object(i.css)("display:grid;grid-template-rows:",t.hasOnlyOneArticle?"1fr":"1fr 1fr",";")},T=Object(a.a)("div",{target:"egkxpyp1"})((function(t){return"tiles"===t.gridLayout?C:N})),H=Object(a.a)("div",{target:"egkxpyp2"})((function(t){return"rows"===t.gridLayout?F:D})),J=Object(a.a)("div",{target:"egkxpyp3"})("position:relative;height:",(function(t){return"tiles"===t.gridLayout?"280px":"220px"}),";box-shadow:0 30px 60px -10px rgba(0,0,0,",(function(t){return t.narrow?.22:.3}),"),0 18px 36px -18px rgba(0,0,0,",(function(t){return t.narrow?.25:.33}),");margin-bottom:",(function(t){return"tiles"===t.gridLayout?"30px":0}),";transition:transform 0.3s var(--ease-out-quad),box-shadow 0.3s var(--ease-out-quad);& > div{height:100%;}",l.a.tablet(v())," ",l.a.phablet(O())),K=Object(a.a)(u.a.h2,{target:"egkxpyp4"})("font-size:21px;font-family:",(function(t){return t.theme.fonts.serif}),";margin-bottom:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"35px":"10px"}),";transition:color 0.3s ease-in-out;",I,";",l.a.desktop(j())," ",l.a.tablet(m())," ",l.a.phablet(h())),M=Object(a.a)("p",{target:"egkxpyp5"})(I,";font-size:16px;margin-bottom:10px;color:",(function(t){return t.theme.colors.grey}),";display:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"none":"box"}),";max-width:",(function(t){return t.narrow?"415px":"515px"}),";",l.a.desktop(x())," ",l.a.phablet(d())," ",l.a.phablet(g())),U=Object(a.a)("div",{target:"egkxpyp6"})("font-weight:600;font-size:16px;color:",(function(t){return t.theme.colors.grey}),";opacity:0.33;",l.a.phablet(b())),W=Object(a.a)(c.a,{target:"egkxpyp7"})("position:relative;display:block;width:100%;height:100%;top:0;left:0;border-radius:5px;z-index:1;transition:transform 0.33s var(--ease-out-quart);-webkit-tap-highlight-color:rgba(255,255,255,0);&:hover ",J,",&:focus ",J,"{transform:translateY(-1px);box-shadow:0 50px 80px -20px rgba(0,0,0,0.27),0 30px 50px -30px rgba(0,0,0,0.3);}&:hover h2,&:focus h2{color:",(function(t){return t.theme.colors.accent}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-1.5%;top:-2%;width:103%;height:104%;border:3px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);border-radius:5px;}",l.a.phablet(f(),J))},twz0:function(t,n,e){"use strict";var r=e("MUpH"),a=e("KQm4"),o=e("vuIU"),i=e("dI71"),c=e("wTIg"),u=e("q1tI"),s=e.n(u),l=e("qKvR"),p=e("Wbzz"),f=e("TJpk"),b=e("2yN9"),g=e("0lfv");function d(){var t=Object(r.a)(["\n    justify-content: flex-start;\n    "," { display: none; }\n  "]);return d=function(){return t},t}function x(){var t=Object(r.a)(["\n    .Paginator__pageLink, "," { display: none; }\n    left: -15px;\n  "]);return x=function(){return t},t}function h(){var t=Object(r.a)(["\n    display: block;\n    width: auto;\n    height: auto;\n    padding: 2rem;\n\n    &:first-of-type {\n      padding-left: 0;\n    }\n\n    &:last-child {\n      padding-right: 0;\n    }\n  "]);return h=function(){return t},t}var m=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return(n=t.call.apply(t,[this].concat(r))||this).maxPages=3,n.count=n.props.pageCount,n.current=n.props.index,n.pageRoot=n.props.pathPrefix,n.getFullPath=function(t){return"/"===n.pageRoot?1===t?n.pageRoot:n.pageRoot+"page/"+t:1===t?n.pageRoot:n.pageRoot+"/page/"+t},n}return Object(i.a)(n,t),n.prototype.render=function(){var t=this.count,n=this.current;if(t<=1)return null;var e=this.previousPath,r=this.nextPath,a=this.current<this.count,o=this.current>1;return Object(l.jsx)(s.a.Fragment,null,Object(l.jsx)(f.Helmet,null,o&&Object(l.jsx)("link",{rel:"prev",href:e}),a&&Object(l.jsx)("link",{rel:"next",href:r})),Object(l.jsx)(k,null,o&&Object(l.jsx)(O,{to:e},"Prev"),this.getPageLinks,Object(l.jsx)(w,{"aria-hidden":"true"},Object(l.jsx)("em",null,n)," of ",t),a&&Object(l.jsx)(O,{to:r},"Next")))},Object(o.a)(n,[{key:"nextPath",get:function(){return this.getFullPath(this.current+1)}},{key:"previousPath",get:function(){return this.getFullPath(this.current-1)}},{key:"getPageLinks",get:function(){var t=this,n=this.current,e=this.count,r=this.maxPages,o=1===n?n:n-1,i=Object(g.i)(o,e+1-o),c=i.slice(0,r);return i[0]>2&&c.unshift(null),i[0]>1&&c.unshift(1),i[0]+1===e&&i[0]-1>0&&c.splice(i.length-1-r,0,i[0]-1),i[0]+r<e&&c.push(null),i[0]+r-1<e&&c.push(e),Object(a.a)(new Set(c)).map((function(e,r){return null===e?Object(l.jsx)(y,{key:"PaginatorPage_spacer_"+r,"aria-hidden":!0}):Object(l.jsx)(v,{key:"PaginatorPage_"+e,to:t.getFullPath(e),style:{opacity:n===e?1:.3},className:"Paginator__pageLink"},e)}))}}]),n}(u.Component);n.a=m;var j=function(t){return Object(l.css)("line-height:1;color:",t.theme.colors.primary,";padding:0;width:6.8rem;height:6.8rem;display:flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums;",b.a.desktop_up(h()))},O=Object(c.a)(p.a,{target:"e19b2hcf0"})("font-weight:600;font-size:18px;text-decoration:none;color:",(function(t){return t.theme.colors.primary}),";",j," &:hover,&:focus{opacity:1;text-decoration:underline;}"),v=Object(c.a)(p.a,{target:"e19b2hcf1"})("font-weight:400;font-size:18px;text-decoration:none;color:",(function(t){return t.theme.colors.primary}),";",j," &:hover,&:focus{opacity:1;text-decoration:underline;}"),y=Object(c.a)("span",{target:"e19b2hcf2"})("opacity:0.3;",j," &::before{content:'...';}"),w=Object(c.a)("span",{target:"e19b2hcf3"})("font-weight:400;",j," color:",(function(t){return t.theme.colors.primary}),";em{font-style:normal;color:",(function(t){return t.theme.colors.primary}),";}"),k=Object(c.a)("nav",{target:"e19b2hcf4"})("position:relative;z-index:1;display:inline-flex;justify-content:space-between;align-items:center;",b.a.tablet(x(),y)," ",b.a.desktop_up(d(),w))}}]);
//# sourceMappingURL=99d1481fb37f32e9a0a7deefc54ba55d454b6098-726b236ad413965c0519.js.map