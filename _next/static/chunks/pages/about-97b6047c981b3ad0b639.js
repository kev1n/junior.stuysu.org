_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"8lYe":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("nKUr");function a(){return Object(r.jsx)("footer",{className:"footer",children:"\xa9 Stuyvesant Junior Caucus 2021, Designed by Paul and Myles"})}},Juyh:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("iCYD"),c=n.n(a),s=n("8lYe"),i=n("zYID");t.default=function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(i.a,{}),Object(r.jsx)("h1",{className:"text-center "+c.a.title,children:"About"}),Object(r.jsx)(s.a,{})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c=a(n("q1tI")),s=n("elyg"),i=n("nOHt"),o=n("vNVm"),l={};function u(e,t,n,r){if((0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,s.resolveHref)(a,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,s.resolveHref)(a,e.as):i||c}}),[a,e.href,e.as]),d=f.href,j=f.as,h=e.children,b=e.replace,p=e.shallow,m=e.scroll,O=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var x=c.Children.only(h),v=x&&"object"===typeof x&&x.ref,w=(0,o.useIntersection)({rootMargin:"200px"}),N=r(w,2),g=N[0],k=N[1],y=c.default.useCallback((function(e){g(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,g]);(0,c.useEffect)((function(){var e=k&&t&&(0,s.isLocalURL)(d),r="undefined"!==typeof O?O:n&&n.locale,a=l[d+"%"+j+(r?"%"+r:"")];e&&!a&&u(n,d,j,{locale:r})}),[j,d,k,O,t,n]);var _={ref:y,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c,locale:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,d,j,b,p,m,O)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(n,d,j,{priority:!0}))}};return(e.passHref||"a"===x.type&&!("href"in x.props))&&(_.href=(0,s.addBasePath)((0,s.addLocale)(j,"undefined"!==typeof O?O:n&&n.locale,n&&n.defaultLocale))),c.default.cloneElement(x,_)};t.default=f},iCYD:function(e,t,n){e.exports={title:"About_title__3ilmK"}},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=(0,c.useRef)(),l=(0,c.useState)(!1),u=r(l,2),f=u[0],d=u[1],j=(0,c.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,c=r.observer,s=r.elements;return s.set(e,t),c.observe(e),function(){c.unobserve(e),0===s.size&&(c.disconnect(),o.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){i||f||(0,s.default)((function(){return d(!0)}))}),[f]),[j,f]};var c=n("q1tI"),s=a(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var o=new Map},zYID:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("nKUr"),a=n("YFqc"),c=n.n(a);function s(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("nav",{className:"main-nav",children:[Object(r.jsx)(c.a,{className:"main-link",href:"/",children:Object(r.jsx)("a",{children:"Home"})}),Object(r.jsx)(c.a,{className:"main-link",href:"/newsletters",children:Object(r.jsx)("a",{children:"Newsletters"})}),Object(r.jsx)(c.a,{className:"main-link",href:"/opportunities",children:Object(r.jsx)("a",{children:"Opportunities"})}),Object(r.jsx)(c.a,{className:"main-link",href:"/about",children:Object(r.jsx)("a",{children:"About"})}),Object(r.jsxs)("div",{className:"socials",children:[Object(r.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",children:Object(r.jsx)("i",{className:"fa fa-instagram","aria-hidden":"true"})}),Object(r.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",children:Object(r.jsx)("i",{className:"fa fa-facebook","aria-hidden":"true"})}),Object(r.jsx)("a",{href:"https://twitter.com/",target:"_blank",children:Object(r.jsx)("i",{className:"fa fa-twitter","aria-hidden":"true"})})]})]}),Object(r.jsx)("nav",{className:"mobile-nav",role:"navigation",children:Object(r.jsxs)("div",{id:"menuToggle",children:[Object(r.jsx)("input",{type:"checkbox"}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsxs)("ul",{id:"menu",children:[Object(r.jsx)(c.a,{className:"main-link",href:"/",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{children:"Home"})})}),Object(r.jsx)(c.a,{className:"main-link",href:"/newsletters",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{children:"Newsletters"})})}),Object(r.jsx)(c.a,{className:"main-link",href:"/opportunities",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{children:"Opportunities"})})}),Object(r.jsx)(c.a,{className:"main-link",href:"/about",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{children:"About"})})}),Object(r.jsxs)("li",{className:"socials",children:[Object(r.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",children:Object(r.jsx)("i",{className:"fa fa-instagram","aria-hidden":"true"})}),Object(r.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",children:Object(r.jsx)("i",{className:"fa fa-facebook","aria-hidden":"true"})}),Object(r.jsx)("a",{href:"https://twitter.com/",target:"_blank",children:Object(r.jsx)("i",{className:"fa fa-twitter","aria-hidden":"true"})})]})]})]})})]})}}},[["rB5V",0,2,1]]]);