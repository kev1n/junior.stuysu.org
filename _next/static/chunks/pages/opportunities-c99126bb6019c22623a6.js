_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"8lYe":function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("nKUr");function o(){return Object(r.jsx)("footer",{className:"footer",children:"\xa9 Stuyvesant Junior Caucus 2021, Designed by Paul and Myles"})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cCVA:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),o=t("ocl9"),c=t.n(o),a=t("8lYe"),s=t("zYID");n.default=function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(s.a,{}),Object(r.jsx)("h1",{className:"text-center "+c.a.title,children:"Opportunities"}),Object(r.jsx)(a.a,{})]})}},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),s=t("nOHt"),i=t("vNVm"),u={};function l(e,n,t,r){if((0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],s=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):s||c}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,j=e.shallow,b=e.scroll,m=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var O=c.Children.only(h),x=O&&"object"===typeof O&&O.ref,y=(0,i.useIntersection)({rootMargin:"200px"}),w=r(y,2),g=w[0],N=w[1],_=c.default.useCallback((function(e){g(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,g]);(0,c.useEffect)((function(){var e=N&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof m?m:t&&t.locale,o=u[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,N,m,n,t]);var E={ref:_,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,s,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:i}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,d,p,v,j,b,m)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};return(e.passHref||"a"===O.type&&!("href"in O.props))&&(E.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof m?m:t&&t.locale,t&&t.defaultLocale))),c.default.cloneElement(O,E)};n.default=f},"hb+E":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/opportunities",function(){return t("cCVA")}])},ocl9:function(e,n,t){e.exports={title:"Opportunities_title__14P5d"}},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,o=(0,c.useRef)(),u=(0,c.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){s||f||(0,a.default)((function(){return d(!0)}))}),[f]),[p,f]};var c=t("q1tI"),a=o(t("0G5g")),s="undefined"!==typeof IntersectionObserver;var i=new Map},zYID:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("nKUr"),o=t("YFqc"),c=t.n(o);function a(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),Object(r.jsxs)("nav",{className:"main-nav",children:[Object(r.jsx)("input",{type:"checkbox",className:"input"}),Object(r.jsxs)("div",{className:"mobile-menu-toggle",children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]}),Object(r.jsx)(c.a,{className:"main-link",href:"/",children:Object(r.jsx)("a",{children:"Home"})}),Object(r.jsx)(c.a,{className:"main-link",href:"/newsletters",children:Object(r.jsx)("a",{children:"Newsletters"})}),Object(r.jsx)(c.a,{className:"main-link",href:"/opportunities",children:Object(r.jsx)("a",{children:"Opportunities"})}),Object(r.jsx)(c.a,{className:"main-link",href:"/about",children:Object(r.jsx)("a",{children:"About"})}),Object(r.jsx)("a",{children:"Logo Logo Logo"})]})}}},[["hb+E",0,2,1]]]);