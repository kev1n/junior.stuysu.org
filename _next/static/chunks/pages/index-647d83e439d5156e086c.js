(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9917:function(e,t,n){"use strict";var r=n(3038),i=n(319);var o=d(n(7294)),c=d(n(639)),a=n(8997),s=n(5809),u=n(7426);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}var m=new Set;var v=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t).concat(O(n))),c=o.searchParams;c.set("auto",c.get("auto")||"format"),c.set("fit",c.get("fit")||"max"),c.set("w",c.get("w")||r.toString()),i&&c.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(O(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(O(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function g(e){return void 0!==e.default}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||s.imageConfigDefault,w=h.deviceSizes,p=h.imageSizes,_=h.loader,j=h.path,y=(h.domains,[].concat(i(w),i(p)));function b(e){var t=e.src,n=e.unoptimized,r=e.layout,o=e.width,c=e.quality,a=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,o=/(^|\s)(1?\d?\d)vw/g,c=[];r=o.exec(n);r)c.push(parseInt(r[2]));if(c.length){var a=.01*Math.min.apply(Math,c);return{widths:y.filter((function(e){return e>=w[0]*a})),kind:"w"}}return{widths:y,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:w,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return y.find((function(t){return t>=e}))||y[y.length-1]})))),kind:"x"}}(o,r,a),f=u.widths,d=u.kind,l=f.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:f.map((function(e,n){return"".concat(s({src:t,quality:c,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:s({src:t,quality:c,width:f[l]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t=v.get(_);if(t)return t(l({root:j},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(_))}function O(e){return"/"===e[0]?e.slice(1):e}w.sort((function(e,t){return e-t})),y.sort((function(e,t){return e-t}))},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,s=i.useRef(),u=i.useState(!1),f=r(u,2),d=f[0],l=f[1],m=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),a.delete(i))}}(e,(function(e){return e&&l(e)}),{rootMargin:t}))}),[n,t,d]);return i.useEffect((function(){if(!c&&!d){var e=o.requestIdleCallback((function(){return l(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),[m,d]};var i=n(7294),o=n(3447),c="undefined"!==typeof IntersectionObserver;var a=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},6124:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(9008),i=(n(5675),n(9954)),o=n.n(i),c=n(5893);function a(){return(0,c.jsxs)("div",{className:o().container,children:[(0,c.jsxs)(r.default,{children:[(0,c.jsx)("title",{children:"Create Next App"}),(0,c.jsx)("meta",{charSet:"UTF-8"}),(0,c.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,c.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,c.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,c.jsxs)("div",{className:o().content,children:[(0,c.jsxs)("nav",{className:"main-nav",children:[(0,c.jsx)("a",{href:"#",children:"Home"}),(0,c.jsx)("a",{href:"#",children:"Newsletters"}),(0,c.jsx)("a",{href:"#",children:"Opportunities"}),(0,c.jsx)("a",{href:"#",children:"About"}),(0,c.jsx)("a",{href:"#",children:"Logo Logo Logo"})]}),(0,c.jsxs)("section",{className:o().cardcontainer,children:[(0,c.jsx)("img",{className:o().cardstuyimg,src:"/stuyjucoc-frontend/stuy.jpg"}),(0,c.jsx)("img",{className:o().cardlogo,src:"/stuyjucoc-frontend/JuniorCaucusWhite.png"})]}),(0,c.jsx)("footer",{className:o().footer,children:"\xa9 Stuyvesant Junior Caucus 2021, Designed by Paul and Myles"})]})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6124)}])},9954:function(e){e.exports={container:"Home_container__3sao-",content:"Home_content__3QmIh",cardcontainer:"Home_cardcontainer__1CjEP",cardstuyimg:"Home_cardstuyimg__2-Byn",cardlogo:"Home_cardlogo__18PjD",footer:"Home_footer__2v49s"}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},9008:function(e,t,n){e.exports=n(639)},5675:function(e,t,n){n(9917)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);