(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2651:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(8042),a=r.n(t),s=r(5893);function i(){return(0,s.jsx)("footer",{className:a().footer,children:"\xa9 Stuyvesant Junior Caucus 2021, Designed by Paul and Myles"})}},1686:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var t=r(1664),a=r(6368),s=r.n(a),i=r(5893);function o(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("nav",{className:s().mainnav,children:[(0,i.jsx)(t.default,{className:"main-link",href:"/",children:(0,i.jsx)("a",{children:"Home"})}),(0,i.jsx)(t.default,{className:"main-link",href:"/newsletters",children:(0,i.jsx)("a",{children:"Newsletters"})}),(0,i.jsx)(t.default,{className:"main-link",href:"/opportunities",children:(0,i.jsx)("a",{children:"Opportunities"})}),(0,i.jsx)(t.default,{className:"main-link",href:"/about",children:(0,i.jsx)("a",{children:"About"})}),(0,i.jsxs)("div",{className:s().socials,children:[(0,i.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,i.jsx)("i",{className:"fa fa-instagram","aria-hidden":"true"})}),(0,i.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,i.jsx)("i",{className:"fa fa-facebook","aria-hidden":"true"})}),(0,i.jsx)("a",{href:"https://twitter.com/",target:"_blank",rel:"noreferrer",children:(0,i.jsx)("i",{className:"fa fa-twitter","aria-hidden":"true"})})]})]}),(0,i.jsx)("nav",{className:s().mobilenav,role:"navigation",children:(0,i.jsxs)("div",{id:s().menuToggle,children:[(0,i.jsx)("input",{type:"checkbox"}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsxs)("ul",{id:s().menu,children:[(0,i.jsx)(t.default,{className:"main-link",passHref:!0,href:"/",children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{children:"Home"})})}),(0,i.jsx)(t.default,{className:"main-link",passHref:!0,href:"/newsletters",children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{children:"Newsletters"})})}),(0,i.jsx)(t.default,{className:"main-link",passHref:!0,href:"/opportunities",children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{children:"Opportunities"})})}),(0,i.jsx)(t.default,{className:"main-link",passHref:!0,href:"/about",children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{children:"About"})})}),(0,i.jsxs)("li",{className:s().socials,children:[(0,i.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,i.jsx)("i",{className:"fa fa-instagram","aria-hidden":"true"})}),(0,i.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,i.jsx)("i",{className:"fa fa-facebook","aria-hidden":"true"})}),(0,i.jsx)("a",{href:"https://twitter.com/",target:"_blank",rel:"noreferrer",children:(0,i.jsx)("i",{className:"fa fa-twitter","aria-hidden":"true"})})]})]})]})})]})}},8791:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});function t(e){return"/junior.stuysu.org"+e}},2167:function(e,n,r){"use strict";var t=r(3848);n.default=void 0;var a,s=(a=r(7294))&&a.__esModule?a:{default:a},i=r(1063),o=r(4651),c=r(7426);var l={};function u(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,a=o.useRouter(),f=s.default.useMemo((function(){var n=i.resolveHref(a,e.href,!0),r=t(n,2),s=r[0],o=r[1];return{href:s,as:e.as?i.resolveHref(a,e.as):o||s}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,m=e.replace,v=e.shallow,j=e.scroll,x=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var b=(n=s.default.Children.only(p))&&"object"===typeof n&&n.ref,_=c.useIntersection({rootMargin:"200px"}),g=t(_,2),w=g[0],y=g[1],N=s.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);s.default.useEffect((function(){var e=y&&r&&i.isLocalURL(d),n="undefined"!==typeof x?x:a&&a.locale,t=l[d+"%"+h+(n?"%"+n:"")];e&&!t&&u(a,d,h,{locale:n})}),[h,d,y,x,r,a]);var k={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,s,o,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==o&&t.indexOf("#")>=0&&(o=!1),n[a?"replace":"push"](r,t,{shallow:s,locale:c,scroll:o}))}(e,a,d,h,m,v,j,x)},onMouseEnter:function(e){i.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(a,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var O="undefined"!==typeof x?x:a&&a.locale,E=a&&a.isLocaleDomain&&i.getDomainLocale(h,O,a&&a.locales,a&&a.domainLocales);k.href=E||i.addBasePath(i.addLocale(h,O,a&&a.defaultLocale))}return s.default.cloneElement(n,k)};n.default=f},7426:function(e,n,r){"use strict";var t=r(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,c=a.useRef(),l=a.useState(!1),u=t(l,2),f=u[0],d=u[1],h=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=o.get(n);if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return o.set(n,r={id:n,observer:a,elements:t}),r}(r),a=t.id,s=t.observer,i=t.elements;return i.set(e,n),s.observe(e),function(){i.delete(e),s.unobserve(e),0===i.size&&(s.disconnect(),o.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return a.useEffect((function(){if(!i&&!f){var e=s.requestIdleCallback((function(){return d(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[f]),[h,f]};var a=r(7294),s=r(3447),i="undefined"!==typeof IntersectionObserver;var o=new Map},7176:function(e,n,r){"use strict";function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}r.r(n),r.d(n,{default:function(){return p}});r(5210);var a=r(9008),s=r(8791),i=r(2651),o=r(1686),c=r(7298),l=r.n(c),u=r(5893);function f(e){var n=e.children;return(0,u.jsxs)("div",{className:l().container,children:[(0,u.jsxs)(a.default,{children:[(0,u.jsx)("meta",{charSet:"UTF-8"}),(0,u.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,u.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,u.jsx)("meta",{name:"description",content:"Stuyvesant High School Junior Caucus"}),(0,u.jsx)("link",{rel:"shortcut icon",href:(0,s.Z)("/JuniorCaucusWhite.png")}),(0,u.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"})]}),(0,u.jsxs)("div",{className:l().content,children:[(0,u.jsx)(o.Z,{}),n,(0,u.jsx)(i.Z,{})]})]})}function d(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function h(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var p=function(e){var n=e.Component,r=e.pageProps;return(0,u.jsx)(f,{children:(0,u.jsx)(n,h({},r))})}},1780:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7176)}])},8042:function(e){e.exports={footer:"Footer_footer__1KW17"}},7298:function(e){e.exports={container:"Layout_container__3Msas",content:"Layout_content__1WAxO"}},6368:function(e){e.exports={mainnav:"Navbar_mainnav__1T-Xi",socials:"Navbar_socials__1kDNi",mobilenav:"Navbar_mobilenav__3WO4e","nav-title-m":"Navbar_nav-title-m__1Tncx",special:"Navbar_special__2rkya","link-txt":"Navbar_link-txt__3fzGJ",menuToggle:"Navbar_menuToggle__2_AxM",menu:"Navbar_menu__3ZRXe"}},5210:function(){},9008:function(e,n,r){e.exports=r(639)},1664:function(e,n,r){e.exports=r(2167)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(4651)}));var r=e.O();_N_E=r}]);