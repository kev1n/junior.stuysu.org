_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"3FaT":function(e,n,t){e.exports={title:"Newsletters_title__31Nwu"}},"8lYe":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("nKUr");function c(){return Object(r.jsx)("footer",{className:"footer",children:"\xa9 Stuyvesant Junior Caucus 2021, Designed by Paul and Myles"})}},CcQX:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newsletters",function(){return t("pTJN")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),c=t("284h");n.__esModule=!0,n.default=void 0;var s=c(t("q1tI")),a=t("elyg"),i=t("nOHt"),o=t("vNVm"),l={};function u(e,n,t,r){if((0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(c?"%"+c:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),c=t&&t.pathname||"/",f=s.default.useMemo((function(){var n=(0,a.resolveHref)(c,e.href,!0),t=r(n,2),s=t[0],i=t[1];return{href:s,as:e.as?(0,a.resolveHref)(c,e.as):i||s}}),[c,e.href,e.as]),d=f.href,j=f.as,h=e.children,p=e.replace,b=e.shallow,v=e.scroll,O=e.locale;"string"===typeof h&&(h=s.default.createElement("a",null,h));var x=s.Children.only(h),m=x&&"object"===typeof x&&x.ref,N=(0,o.useIntersection)({rootMargin:"200px"}),w=r(N,2),g=w[0],y=w[1],_=s.default.useCallback((function(e){g(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,g]);(0,s.useEffect)((function(){var e=y&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof O?O:t&&t.locale,c=l[d+"%"+j+(r?"%"+r:"")];e&&!c&&u(t,d,j,{locale:r})}),[j,d,y,O,n,t]);var k={ref:_,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,n,t,r,c,s,i,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[c?"replace":"push"](t,r,{shallow:s,locale:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,d,j,p,b,v,O)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(t,d,j,{priority:!0}))}};return(e.passHref||"a"===x.type&&!("href"in x.props))&&(k.href=(0,a.addBasePath)((0,a.addLocale)(j,"undefined"!==typeof O?O:t&&t.locale,t&&t.defaultLocale))),s.default.cloneElement(x,k)};n.default=f},pTJN:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),c=t("3FaT"),s=t.n(c),a=t("8lYe"),i=t("zYID");n.default=function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(i.a,{}),Object(r.jsx)("h1",{className:"text-center "+s.a.title,children:"Newsletters"}),Object(r.jsx)(a.a,{})]})}},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),c=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,c=(0,s.useRef)(),l=(0,s.useState)(!1),u=r(l,2),f=u[0],d=u[1],j=(0,s.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),t||f||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=o.get(n);if(t)return t;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return o.set(n,t={id:n,observer:c,elements:r}),t}(t),c=r.id,s=r.observer,a=r.elements;return a.set(e,n),s.observe(e),function(){s.unobserve(e),0===a.size&&(s.disconnect(),o.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,s.useEffect)((function(){i||f||(0,a.default)((function(){return d(!0)}))}),[f]),[j,f]};var s=t("q1tI"),a=c(t("0G5g")),i="undefined"!==typeof IntersectionObserver;var o=new Map},zYID:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("nKUr"),c=t("YFqc"),s=t.n(c);function a(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("nav",{className:"main-nav",children:[Object(r.jsx)(s.a,{className:"main-link",href:"/",children:Object(r.jsx)("a",{children:"Home"})}),Object(r.jsx)(s.a,{className:"main-link",href:"/newsletters",children:Object(r.jsx)("a",{children:"Newsletters"})}),Object(r.jsx)(s.a,{className:"main-link",href:"/opportunities",children:Object(r.jsx)("a",{children:"Opportunities"})}),Object(r.jsx)(s.a,{className:"main-link",href:"/about",children:Object(r.jsx)("a",{children:"About"})}),Object(r.jsx)("a",{children:"Logo Logo Logo"})]}),Object(r.jsx)("nav",{className:"mobile-nav",role:"navigation",children:Object(r.jsxs)("div",{id:"menuToggle",children:[Object(r.jsx)("input",{type:"checkbox"}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsxs)("ul",{id:"menu",children:[Object(r.jsx)(s.a,{className:"main-link",href:"/",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{children:"Home"})})}),Object(r.jsx)(s.a,{className:"main-link",href:"/newsletters",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{children:"Newsletters"})})}),Object(r.jsx)(s.a,{className:"main-link",href:"/opportunities",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{children:"Opportunities"})})}),Object(r.jsx)(s.a,{className:"main-link",href:"/about",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{children:"About"})})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{children:"Logo Logo Logo"})})]})]})})]})}}},[["CcQX",0,2,1]]]);