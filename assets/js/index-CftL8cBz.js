const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/index-C-gjffeV.js","assets/js/react-vendor-DtX1tuCI.js","assets/js/portfolio.config-ZAuzchpr.js","assets/js/icons-vendor-BVVZLL9E.js","assets/js/styled-vendor-CAhPJ6Jj.js","assets/js/index-CcNSwjcY.js","assets/js/styles-Bm-7VHm_.js","assets/js/animation-vendor-DPAl1j6H.js","assets/js/index-D-NfeyLi.js","assets/js/index-dPZO7L5n.js","assets/js/index-RAiITju3.js","assets/js/index.esm-BlhS4m9b.js","assets/js/index-B_xJIeWo.js","assets/js/index-BdxszPnx.js"])))=>i.map(i=>d[i]);
var e=Object.defineProperty,t=(t,o,r)=>((t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r)(t,"symbol"!=typeof o?o+"":o,r);import{r as o,a as r,R as n}from"./react-vendor-DtX1tuCI.js";import{f as a,m as i,l as s,o as c,d as l}from"./styled-vendor-CAhPJ6Jj.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var d={exports:{}},m={},p=o,h=Symbol.for("react.element"),f=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,g=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function y(e,t,o){var r,n={},a=null,i=null;for(r in void 0!==o&&(a=""+o),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(i=t.ref),t)u.call(t,r)&&!x.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:h,type:e,key:a,ref:i,props:n,_owner:g.current}}m.Fragment=f,m.jsx=y,m.jsxs=y,d.exports=m;var b,w=d.exports,v=r;b=v.createRoot,v.hydrateRoot;const $={},k=function(e,t,o){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),o=(null==e?void 0:e.nonce)||(null==e?void 0:e.getAttribute("nonce"));r=Promise.allSettled(t.map(e=>{if((e=function(e){return"/portfolio/"+e}(e))in $)return;$[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script"),n.crossOrigin="",n.href=e,o&&n.setAttribute("nonce",o),document.head.appendChild(n),t?new Promise((t,o)=>{n.addEventListener("load",t),n.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${e}`)))}):void 0}))}function n(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(const e of t||[])"rejected"===e.status&&n(e.reason);return e().catch(n)})},j={colors:{primary:"#111111",secondary:"#333333",accent:"#00FF88",accentAlt:"#00ABE4",textPrimary:"#FFFFFF",textSecondary:"#CCCCCC",overlay:"rgba(17, 17, 17, 0.8)",cardBg:"rgba(51, 51, 51, 0.5)",border:"rgba(255, 255, 255, 0.1)"},fonts:{heading:"'Inter', 'Helvetica Neue', sans-serif",body:"'Inter', 'Helvetica Neue', sans-serif"},fontSizes:{hero:"clamp(2.5rem, 5vw, 4rem)",h1:"clamp(2rem, 4vw, 3rem)",h2:"clamp(1.5rem, 3vw, 2rem)",h3:"clamp(1.25rem, 2.5vw, 1.5rem)",body:"clamp(1rem, 2vw, 1.125rem)",small:"clamp(0.875rem, 1.5vw, 1rem)"},spacing:{xs:"8px",sm:"16px",md:"24px",lg:"32px",xl:"48px",xxl:"64px",xxxl:"96px"},transitions:{fast:"0.2s ease",normal:"0.3s ease",slow:"0.5s ease"},shadows:{small:"0 2px 4px rgba(0, 0, 0, 0.1)",medium:"0 4px 8px rgba(0, 0, 0, 0.2)",large:"0 8px 16px rgba(0, 0, 0, 0.3)",glow:"0 0 20px rgba(0, 255, 136, 0.3)"},breakpoints:{mobile:"320px",tablet:"768px",desktop:"1024px",wide:"1200px"},zIndex:{navigation:1e3,modal:2e3,backToTop:900}},_=a`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${({theme:e})=>e.fonts.body};
    background-color: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.textPrimary};
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme:e})=>e.fonts.heading};
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: ${({theme:e})=>e.spacing.md};
  }

  p {
    margin-bottom: ${({theme:e})=>e.spacing.sm};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: ${({theme:e})=>e.transitions.fast};
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    transition: ${({theme:e})=>e.transitions.fast};
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.secondary};
    border-radius: 4px;
    transition: ${({theme:e})=>e.transitions.fast};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.colors.accent};
  }

  /* Selection */
  ::selection {
    background: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.primary};
  }

  /* Bootstrap Overrides */
  .navbar-toggler:focus {
    box-shadow: none;
  }

  /* Utility Classes */
  .text-accent {
    color: ${({theme:e})=>e.colors.accent} !important;
  }

  .bg-accent {
    background-color: ${({theme:e})=>e.colors.accent} !important;
  }

  .section-padding {
    padding: ${({theme:e})=>e.spacing.xxxl} 0;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    .section-padding {
      padding: ${({theme:e})=>e.spacing.xxl} 0;
    }
  }
`,E=i`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;i`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,i`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,s`
    animation: ${i`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`} 0.6s ease forwards;
  `,s`
    animation: ${E} 0.6s ease forwards;
  `,s`
    animation: ${i`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`} 0.6s ease forwards;
  `,s`
    animation: ${i`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`} 0.3s ease forwards;
  `,s`
    animation: ${i`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`} 2s ease-in-out infinite;
  `,s`
    animation: ${i`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`} 3s ease-in-out infinite;
  `,s`
    transition: all 0.3s ease;
  `,s`
    transition: all 0.2s ease;
  `,s`
    transition: all 0.5s ease;
  `;const S=(e,t=100)=>{const[r,n]=o.useState("");return o.useEffect(()=>{const o=()=>{const o=window.scrollY+t;for(const r of e){const e=document.getElementById(r);if(e){const{offsetTop:a,offsetHeight:i}=e;if(o>=a-t&&o<a+i-t){n(r);break}}}window.scrollY<t&&n(e[0])};return o(),window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[e,t]),r};const P={...j,colors:{...j.colors,primary:"#FFFFFF",secondary:"#F8F8F9",accent:"#00AB54",accentAlt:"#0077BE",textPrimary:"#111111",textSecondary:"#666666",overlay:"rgba(255, 255, 255, 0.9)",cardBg:"rgba(248, 248, 249, 0.8)",border:"rgba(0, 0, 0, 0.1)"}},z=o.createContext(void 0),F=()=>{const e=o.useContext(z);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},O=({children:e})=>{const[t,r]=function(e,t){const r=()=>{if("undefined"==typeof window)return t;try{const o=window.localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return t}},[n,a]=o.useState(r);return o.useEffect(()=>{a(r())},[]),[n,t=>{try{window.localStorage.setItem(e,JSON.stringify(t)),a(t)}catch(o){}}]}("darkMode",!0),[n,a]=o.useState(!1);o.useEffect(()=>{a(!0)},[]);const i=t?j:P;return n?w.jsx(z.Provider,{value:{isDarkMode:t,toggleTheme:()=>{r(!t)}},children:w.jsx(c,{theme:i,children:e})}):null},T=l.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing.xl};
  background-color: ${({theme:e})=>e.colors.primary};
`,A=l.div`
  text-align: center;
  max-width: 600px;
`,C=l.h1`
  font-size: ${({theme:e})=>e.fontSizes.h1};
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,R=l.p`
  font-size: ${({theme:e})=>e.fontSizes.body};
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,D=l.button`
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.lg};
  background-color: ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.primary};
  border: none;
  border-radius: 8px;
  font-size: ${({theme:e})=>e.fontSizes.body};
  font-weight: 600;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }
`;class I extends o.Component{constructor(e){super(e),t(this,"handleReload",()=>{window.location.reload()}),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){}render(){return this.state.hasError?w.jsx(T,{children:w.jsxs(A,{children:[w.jsx(C,{children:"Oops! Something went wrong"}),w.jsx(R,{children:"We're sorry for the inconvenience. Please try reloading the page."}),w.jsx(D,{onClick:this.handleReload,children:"Reload Page"})]})}):this.props.children}}const L={title:"Portfolio - Hoang Thang",description:"Full Stack Developer specializing in React, TypeScript, and modern web technologies. View my projects and skills.",keywords:["Full Stack Developer","React Developer","TypeScript","Web Developer","Frontend Developer","Backend Developer","Portfolio"],author:"Hoang Thang",image:"/assets/og-image.jpg",url:"https://yourusername.github.io/portfolio",twitterHandle:"@yourusername"},N=({title:e=L.title,description:t=L.description,image:o=L.image,url:r=L.url})=>{const a=e===L.title?e:`${e} | ${L.title}`;return n.useEffect(()=>{document.title=a;[{name:"description",content:t},{name:"author",content:L.author},{name:"keywords",content:L.keywords.join(", ")},{property:"og:title",content:a},{property:"og:description",content:t},{property:"og:image",content:o},{property:"og:url",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:a},{name:"twitter:description",content:t},{name:"twitter:image",content:o},{name:"twitter:creator",content:L.twitterHandle}].forEach(({name:e,property:t,content:o})=>{const r=e?"name":"property",n=e||t;let a=document.querySelector(`meta[${r}="${n}"]`);a||(a=document.createElement("meta"),a.setAttribute(r,n),document.head.appendChild(a)),a.setAttribute("content",o)})},[a,t,o,r]),null},B=[{id:"hero",label:"Home",icon:"bi-house"},{id:"projects",label:"Projects",icon:"bi-code-slash"},{id:"skills",label:"Skills",icon:"bi-gear"},{id:"about",label:"About",icon:"bi-person"}],Y=l.div`
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
  z-index: 100;

  @media (max-width: ${({theme:e})=>e.breakpoints.desktop}) {
    display: none;
  }
`,H=l.a`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({theme:e,isActive:t})=>t?e.colors.accent:e.colors.textSecondary};
  opacity: ${({isActive:e})=>e?1:.3};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }

  &::before {
    content: attr(data-label);
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({theme:e})=>e.colors.secondary};
    color: ${({theme:e})=>e.colors.textPrimary};
    padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.sm}`};
    border-radius: 4px;
    font-size: ${({theme:e})=>e.fontSizes.small};
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
    visibility: visible;
    right: 25px;
  }
`,V=()=>{const e=S(B.map(e=>e.id));return w.jsx(Y,{children:B.map(t=>w.jsx(H,{href:`#${t.id}`,isActive:e===t.id,"data-label":t.label,onClick:e=>{e.preventDefault(),(e=>{const t=document.getElementById(e);if(t){const e=80,o=t.offsetTop-e;window.scrollTo({top:o,behavior:"smooth"})}})(t.id)}},t.id))})},q=l.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({theme:e})=>e.colors.primary};
  position: relative;
`,M=l.main`
  position: relative;
  z-index: 1;
`,U=i`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,W=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.colors.primary};
  z-index: 9999;
  animation: ${U} 0.3s ease;
`,J=l.div`
  .spinner-border {
    width: 3rem;
    height: 3rem;
    border-width: 0.3rem;
  }

  .text-accent {
    color: ${({theme:e})=>e.colors.accent} !important;
  }
`,X=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 20% 80%,
      ${({theme:e})=>e.colors.accent}10 0%,
      transparent 50%
    );
    animation: float 20s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 80% 20%,
      ${({theme:e})=>e.colors.accentAlt}10 0%,
      transparent 50%
    );
    animation: float 25s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%,
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(30px, -30px) rotate(120deg);
    }
    66% {
      transform: translate(-20px, 20px) rotate(240deg);
    }
  }
`,K=o.lazy(()=>k(()=>import("./index-C-gjffeV.js"),__vite__mapDeps([0,1,2,3,4]))),G=o.lazy(()=>k(()=>import("./index-CcNSwjcY.js"),__vite__mapDeps([5,2,3,1,6,4,7]))),Q=o.lazy(()=>k(()=>import("./index-D-NfeyLi.js"),__vite__mapDeps([8,1,6,4,9,2,3,7]))),Z=o.lazy(()=>k(()=>import("./index-RAiITju3.js"),__vite__mapDeps([10,6,4,1,9,2,3,11,7]))),ee=o.lazy(()=>k(()=>import("./index-B_xJIeWo.js"),__vite__mapDeps([12,6,4,1,9,2,3,11,7]))),te=o.lazy(()=>k(()=>import("./index-BdxszPnx.js"),__vite__mapDeps([13,3,1,4,7]))),oe=()=>w.jsx(W,{children:w.jsx(J,{children:w.jsx("div",{className:"spinner-border text-accent",role:"status",children:w.jsx("span",{className:"visually-hidden",children:"Loading..."})})})});function re(){return w.jsx(I,{children:w.jsxs(O,{children:[w.jsx(N,{}),w.jsx(_,{}),w.jsxs(q,{children:[w.jsx(X,{}),w.jsxs(o.Suspense,{fallback:w.jsx(oe,{}),children:[w.jsx(K,{}),w.jsx(V,{}),w.jsxs(M,{children:[w.jsx(G,{}),w.jsx(Q,{}),w.jsx(Z,{}),w.jsx(ee,{})]}),w.jsx(te,{})]})]})]})})}b(document.getElementById("root")).render(w.jsx(o.StrictMode,{children:w.jsx(re,{})}));export{F as a,E as f,w as j,B as n,S as u};
