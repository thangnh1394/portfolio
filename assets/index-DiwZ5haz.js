import{u as g,j as t}from"./index-CEPyOHJs.js";import{r as a}from"./react-vendor-nf7bT_Uh.js";import{p as b,F as u,a as v,b as $,c as w}from"./portfolio.config-CU7XLref.js";import{d as i}from"./styled-vendor-Cp60Z__U.js";const y=(o,n=100)=>{const[f,c]=a.useState("");return a.useEffect(()=>{const r=()=>{const d=window.scrollY+n;for(const p of o){const l=document.getElementById(p);if(l){const{offsetTop:e,offsetHeight:s}=l,m=e-n,h=e+s-n;if(d>=m&&d<h){c(p);break}}}window.scrollY<n&&c(o[0])};return r(),window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[o,n]),f},x=[{id:"hero",label:"Home",icon:"bi-house"},{id:"projects",label:"Projects",icon:"bi-code-slash"},{id:"skills",label:"Skills",icon:"bi-gear"},{id:"about",label:"About",icon:"bi-person"}],k=i.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: ${({theme:o,scrolled:n})=>n?o.colors.overlay:"transparent"};
  backdrop-filter: ${({scrolled:o})=>o?"blur(10px)":"none"};
  transition: ${({theme:o})=>o.transitions.normal};
  z-index: ${({theme:o})=>o.zIndex.navigation};
  box-shadow: ${({theme:o,scrolled:n})=>n?o.shadows.medium:"none"};
`,j=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`,S=i.a`
  font-size: ${({theme:o})=>o.fontSizes.h2};
  font-weight: 800;
  color: ${({theme:o})=>o.colors.accent};
  text-decoration: none;
  letter-spacing: -0.5px;
  transition: ${({theme:o})=>o.transitions.fast};

  &:hover {
    color: ${({theme:o})=>o.colors.textPrimary};
    transform: scale(1.05);
  }
`,z=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing.md};
`,E=i.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: ${({theme:o})=>o.spacing.lg};

  @media (max-width: ${({theme:o})=>o.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    flex-direction: column;
    background-color: ${({theme:o})=>o.colors.secondary};
    padding: 100px ${({theme:o})=>o.spacing.xl}
      ${({theme:o})=>o.spacing.xl};
    gap: ${({theme:o})=>o.spacing.md};
    transform: translateX(${({isOpen:o})=>o?"0":"100%"});
    transition: transform 0.3s ease-in-out;
    box-shadow: ${({theme:o})=>o.shadows.large};
    z-index: ${({theme:o})=>o.zIndex.navigation-1};
  }
`,N=i.li`
  position: relative;
`,T=i.a`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing.xs};
  color: ${({theme:o,isActive:n})=>n?o.colors.accent:o.colors.textSecondary};
  text-decoration: none;
  font-weight: 500;
  font-size: ${({theme:o})=>o.fontSizes.body};
  transition: ${({theme:o})=>o.transitions.fast};
  position: relative;
  padding: ${({theme:o})=>o.spacing.xs} 0;

  &:hover {
    color: ${({theme:o})=>o.colors.accent};
  }

  i {
    font-size: 1.2rem;
    display: none;

    @media (max-width: ${({theme:o})=>o.breakpoints.tablet}) {
      display: block;
    }
  }

  span {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: ${({isActive:o})=>o?"100%":"0"};
      height: 2px;
      background-color: ${({theme:o})=>o.colors.accent};
      transition: width 0.3s ease;
    }
  }

  &:hover span::after {
    width: 100%;
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.tablet}) {
    font-size: ${({theme:o})=>o.fontSizes.h3};
    width: 100%;
    padding: ${({theme:o})=>o.spacing.sm} 0;
  }
`,I=i.div`
  display: none;
  color: ${({theme:o})=>o.colors.accent};
  font-size: 1.8rem;
  cursor: pointer;
  transition: ${({theme:o})=>o.transitions.fast};

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.tablet}) {
    display: block;
  }
`,C=i.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({isOpen:o})=>o?"1":"0"};
  visibility: ${({isOpen:o})=>o?"visible":"hidden"};
  transition: all 0.3s ease;
  z-index: ${({theme:o})=>o.zIndex.navigation-2};

  @media (max-width: ${({theme:o})=>o.breakpoints.tablet}) {
    display: block;
  }
`,F=i.button`
  background: none;
  border: 2px solid ${({theme:o})=>o.colors.accent};
  color: ${({theme:o})=>o.colors.accent};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${({theme:o})=>o.transitions.fast};
  margin-left: ${({theme:o})=>o.spacing.md};

  &:hover {
    background-color: ${({theme:o})=>o.colors.accent};
    color: ${({theme:o})=>o.colors.primary};
    transform: rotate(180deg);
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.tablet}) {
    position: absolute;
    top: 30px;
    right: 80px;
  }
`,P=()=>{const[o,n]=a.useState(!1),[f,c]=a.useState(!1),r=y(x.map(e=>e.id)),{isDarkMode:d,toggleTheme:p}=g();a.useEffect(()=>{const e=()=>{const s=window.scrollY;c(s>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),a.useEffect(()=>(o?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[o]);const l=e=>{n(!1);const s=document.getElementById(e);if(s){const h=s.offsetTop-80;window.scrollTo({top:h,behavior:"smooth"})}};return t.jsxs(t.Fragment,{children:[t.jsx(k,{scrolled:f,children:t.jsxs(j,{className:"container",children:[t.jsx(S,{href:"#hero",onClick:e=>{e.preventDefault(),l("hero")},children:b.name.split(" ")[0]}),t.jsxs(z,{children:[t.jsx(E,{isOpen:o,children:x.map(e=>t.jsx(N,{children:t.jsxs(T,{href:`#${e.id}`,isActive:r===e.id,onClick:s=>{s.preventDefault(),l(e.id)},children:[e.icon&&t.jsx("i",{className:e.icon}),t.jsx("span",{children:e.label})]})},e.id))}),t.jsx(F,{onClick:p,"aria-label":"Toggle theme",children:d?t.jsx(u,{}):t.jsx(v,{})}),t.jsx(I,{onClick:()=>n(!o),children:o?t.jsx($,{}):t.jsx(w,{})})]})]})}),t.jsx(C,{isOpen:o,onClick:()=>n(!1)})]})};export{P as default};
//# sourceMappingURL=index-DiwZ5haz.js.map
