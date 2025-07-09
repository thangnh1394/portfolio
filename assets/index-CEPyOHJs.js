const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DiwZ5haz.js","assets/react-vendor-nf7bT_Uh.js","assets/portfolio.config-CU7XLref.js","assets/styled-vendor-Cp60Z__U.js","assets/index-B-fgSC0K.js","assets/styles-CLPj2Uue.js","assets/animation-vendor-BvpmtWd3.js","assets/index-aKzQC2DC.js","assets/index-DQi6GrOP.js","assets/index-AQKDTW3n.js","assets/index-DeFPBesi.js","assets/index-Ms0BEDBB.js"])))=>i.map(i=>d[i]);
var R=Object.defineProperty;var I=(e,t,n)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var v=(e,t,n)=>I(e,typeof t!="symbol"?t+"":t,n);import{r as c,a as O,R as C}from"./react-vendor-nf7bT_Uh.js";import{f as F,m as g,l as f,o as D,d as p}from"./styled-vendor-Cp60Z__U.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();var E={exports:{}},b={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L=c,z=Symbol.for("react.element"),A=Symbol.for("react.fragment"),B=Object.prototype.hasOwnProperty,N=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var i,o={},s=null,r=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(r=t.ref);for(i in t)B.call(t,i)&&!V.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:z,type:e,key:s,ref:r,props:o,_owner:N.current}}b.Fragment=A;b.jsx=S;b.jsxs=S;E.exports=b;var a=E.exports,k,$=O;k=$.createRoot,$.hydrateRoot;const U="modulepreload",Y=function(e){return"/portfolio/"+e},_={},x=function(t,n,i){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),d=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.allSettled(n.map(m=>{if(m=Y(m),m in _)return;_[m]=!0;const h=m.endsWith(".css"),y=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${y}`))return;const l=document.createElement("link");if(l.rel=h?"stylesheet":U,h||(l.as="script"),l.crossOrigin="",l.href=m,d&&l.setAttribute("nonce",d),document.head.appendChild(l),h)return new Promise((P,T)=>{l.addEventListener("load",P),l.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${m}`)))})}))}function s(r){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=r,window.dispatchEvent(d),!d.defaultPrevented)throw r}return o.then(r=>{for(const d of r||[])d.status==="rejected"&&s(d.reason);return t().catch(s)})},w={colors:{primary:"#111111",secondary:"#333333",accent:"#00FF88",accentAlt:"#00ABE4",textPrimary:"#FFFFFF",textSecondary:"#CCCCCC",overlay:"rgba(17, 17, 17, 0.8)",cardBg:"rgba(51, 51, 51, 0.5)",border:"rgba(255, 255, 255, 0.1)"},fonts:{heading:"'Inter', 'Helvetica Neue', sans-serif",body:"'Inter', 'Helvetica Neue', sans-serif"},fontSizes:{hero:"clamp(2.5rem, 5vw, 4rem)",h1:"clamp(2rem, 4vw, 3rem)",h2:"clamp(1.5rem, 3vw, 2rem)",h3:"clamp(1.25rem, 2.5vw, 1.5rem)",body:"clamp(1rem, 2vw, 1.125rem)",small:"clamp(0.875rem, 1.5vw, 1rem)"},spacing:{xs:"8px",sm:"16px",md:"24px",lg:"32px",xl:"48px",xxl:"64px",xxxl:"96px"},transitions:{fast:"0.2s ease",normal:"0.3s ease",slow:"0.5s ease"},shadows:{small:"0 2px 4px rgba(0, 0, 0, 0.1)",medium:"0 4px 8px rgba(0, 0, 0, 0.2)",large:"0 8px 16px rgba(0, 0, 0, 0.3)",glow:"0 0 20px rgba(0, 255, 136, 0.3)"},breakpoints:{mobile:"320px",tablet:"768px",desktop:"1024px",wide:"1200px"},zIndex:{navigation:1e3,modal:2e3,backToTop:900}},H=F`
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
`,q=g`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,M=g`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,W=g`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,J=g`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,X=g`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`,G=g`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;g`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;f`
    animation: ${q} 0.6s ease forwards;
  `,f`
    animation: ${M} 0.6s ease forwards;
  `,f`
    animation: ${W} 0.6s ease forwards;
  `,f`
    animation: ${J} 0.3s ease forwards;
  `,f`
    animation: ${X} 2s ease-in-out infinite;
  `,f`
    animation: ${G} 3s ease-in-out infinite;
  `;f`
    transition: all 0.3s ease;
  `,f`
    transition: all 0.2s ease;
  `,f`
    transition: all 0.5s ease;
  `;function K(e,t){const n=()=>{if(typeof window>"u")return t;try{const r=window.localStorage.getItem(e);return r?JSON.parse(r):t}catch(r){return console.warn(`Error reading localStorage key "${e}":`,r),t}},[i,o]=c.useState(n),s=r=>{try{window.localStorage.setItem(e,JSON.stringify(r)),o(r)}catch(d){console.warn(`Error setting localStorage key "${e}":`,d)}};return c.useEffect(()=>{o(n())},[]),[i,s]}const Q={...w,colors:{...w.colors,primary:"#FFFFFF",secondary:"#F8F8F9",accent:"#00AB54",accentAlt:"#0077BE",textPrimary:"#111111",textSecondary:"#666666",overlay:"rgba(255, 255, 255, 0.9)",cardBg:"rgba(248, 248, 249, 0.8)",border:"rgba(0, 0, 0, 0.1)"}},j=c.createContext(void 0),Ee=()=>{const e=c.useContext(j);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Z=({children:e})=>{const[t,n]=K("darkMode",!0),[i,o]=c.useState(!1);c.useEffect(()=>{o(!0)},[]);const s=()=>{n(!t)},r=t?w:Q;return i?a.jsx(j.Provider,{value:{isDarkMode:t,toggleTheme:s},children:a.jsx(D,{theme:r,children:e})}):null},ee=p.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing.xl};
  background-color: ${({theme:e})=>e.colors.primary};
`,te=p.div`
  text-align: center;
  max-width: 600px;
`,oe=p.h1`
  font-size: ${({theme:e})=>e.fontSizes.h1};
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,re=p.p`
  font-size: ${({theme:e})=>e.fontSizes.body};
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,ne=p.button`
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
`;class ae extends c.Component{constructor(n){super(n);v(this,"handleReload",()=>{window.location.reload()});this.state={hasError:!1}}static getDerivedStateFromError(n){return{hasError:!0,error:n}}componentDidCatch(n,i){console.error("Error caught by boundary:",n,i)}render(){return this.state.hasError?a.jsx(ee,{children:a.jsxs(te,{children:[a.jsx(oe,{children:"Oops! Something went wrong"}),a.jsx(re,{children:"We're sorry for the inconvenience. Please try reloading the page."}),a.jsx(ne,{onClick:this.handleReload,children:"Reload Page"})]})}):this.props.children}}const u={title:"Portfolio - Hoang Thang",description:"Full Stack Developer specializing in React, TypeScript, and modern web technologies. View my projects and skills.",keywords:["Full Stack Developer","React Developer","TypeScript","Web Developer","Frontend Developer","Backend Developer","Portfolio"],author:"Hoang Thang",image:"/assets/og-image.jpg",url:"https://yourusername.github.io/portfolio",twitterHandle:"@yourusername"},se=({title:e=u.title,description:t=u.description,image:n=u.image,url:i=u.url})=>{const o=e===u.title?e:`${e} | ${u.title}`;return C.useEffect(()=>{document.title=o,[{name:"description",content:t},{name:"author",content:u.author},{name:"keywords",content:u.keywords.join(", ")},{property:"og:title",content:o},{property:"og:description",content:t},{property:"og:image",content:n},{property:"og:url",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:o},{name:"twitter:description",content:t},{name:"twitter:image",content:n},{name:"twitter:creator",content:u.twitterHandle}].forEach(({name:r,property:d,content:m})=>{const h=r?"name":"property",y=r||d;let l=document.querySelector(`meta[${h}="${y}"]`);l||(l=document.createElement("meta"),l.setAttribute(h,y),document.head.appendChild(l)),l.setAttribute("content",m)})},[o,t,n,i]),null},ie=p.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({theme:e})=>e.colors.primary};
  position: relative;
`,ce=p.main`
  position: relative;
  z-index: 1;
`,le=g`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,de=p.div`
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
  animation: ${le} 0.3s ease;
`,me=p.div`
  .spinner-border {
    width: 3rem;
    height: 3rem;
    border-width: 0.3rem;
  }

  .text-accent {
    color: ${({theme:e})=>e.colors.accent} !important;
  }
`,pe=p.div`
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
`,ue=c.lazy(()=>x(()=>import("./index-DiwZ5haz.js"),__vite__mapDeps([0,1,2,3]))),fe=c.lazy(()=>x(()=>import("./index-B-fgSC0K.js"),__vite__mapDeps([4,2,1,5,3,6]))),ge=c.lazy(()=>x(()=>import("./index-aKzQC2DC.js"),__vite__mapDeps([7,1,5,3,8,2,6]))),he=c.lazy(()=>x(()=>import("./index-AQKDTW3n.js"),__vite__mapDeps([9,5,3,1,8,2,6]))),xe=c.lazy(()=>x(()=>import("./index-DeFPBesi.js"),__vite__mapDeps([10,1,3]))),ye=c.lazy(()=>x(()=>import("./index-Ms0BEDBB.js"),__vite__mapDeps([11,1,3]))),be=()=>a.jsx(de,{children:a.jsx(me,{children:a.jsx("div",{className:"spinner-border text-accent",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})})});function we(){return a.jsx(ae,{children:a.jsxs(Z,{children:[a.jsx(se,{}),a.jsx(H,{}),a.jsxs(ie,{children:[a.jsx(pe,{}),a.jsxs(c.Suspense,{fallback:a.jsx(be,{}),children:[a.jsx(ue,{}),a.jsxs(ce,{children:[a.jsx(fe,{}),a.jsx(ge,{}),a.jsx(he,{}),a.jsx(xe,{})]}),a.jsx(ye,{})]})]})]})})}k(document.getElementById("root")).render(a.jsx(c.StrictMode,{children:a.jsx(we,{})}));export{M as f,a as j,Ee as u};
//# sourceMappingURL=index-CEPyOHJs.js.map
