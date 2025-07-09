import{j as o}from"./index-CftL8cBz.js";import{G as e}from"./icons-vendor-BVVZLL9E.js";import{r as t}from"./react-vendor-DtX1tuCI.js";import{d as r}from"./styled-vendor-CAhPJ6Jj.js";import{A as i,m as a}from"./animation-vendor-DPAl1j6H.js";function s(o){return e({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"}}]})(o)}const n=r(a.button)`
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 2px solid ${({theme:o})=>o.colors.accent};
  border-radius: 12px;
  color: ${({theme:o})=>o.colors.accent};
  font-size: 1.8rem;
  cursor: pointer;
  z-index: ${({theme:o})=>o.zIndex.backToTop};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: ${({theme:o})=>o.colors.accent};
    color: ${({theme:o})=>o.colors.primary};
    transform: translateY(-4px);
    box-shadow: 0 10px 30px ${({theme:o})=>o.colors.accent}50;
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    bottom: 24px;
    right: 24px;
    width: 44px;
    height: 44px;
  }
`,l=()=>{const{isVisible:e,scrollToTop:r}=((o=300)=>{const[e,r]=t.useState(!1);return t.useEffect(()=>{const e=()=>{window.pageYOffset>o?r(!0):r(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[o]),{isVisible:e,scrollToTop:()=>{window.scrollTo({top:0,behavior:"smooth"})}}})(400);return o.jsx(i,{children:e&&o.jsx(n,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0,scale:0},whileHover:{scale:1.1},whileTap:{scale:.9},onClick:r,"aria-label":"Scroll to top",children:o.jsx(s,{})})})};export{l as default};
