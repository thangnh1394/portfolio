import{u as e,n as t,a as o,j as i}from"./index-CftL8cBz.js";import{r as n}from"./react-vendor-DtX1tuCI.js";import{p as s,F as a,a as r,b as l,c}from"./portfolio.config-ZAuzchpr.js";import{d}from"./styled-vendor-CAhPJ6Jj.js";import"./icons-vendor-BVVZLL9E.js";const h=d.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: ${({theme:e,scrolled:t})=>t?e.colors.overlay:"transparent"};
  backdrop-filter: ${({scrolled:e})=>e?"blur(10px)":"none"};
  transition: ${({theme:e})=>e.transitions.normal};
  z-index: ${({theme:e})=>e.zIndex.navigation};
  box-shadow: ${({theme:e,scrolled:t})=>t?e.shadows.medium:"none"};
`,m=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`,p=d.a`
  font-size: ${({theme:e})=>e.fontSizes.h2};
  font-weight: 800;
  color: ${({theme:e})=>e.colors.accent};
  text-decoration: none;
  letter-spacing: -0.5px;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.textPrimary};
    transform: scale(1.05);
  }
`,x=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,f=d.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: ${({theme:e})=>e.spacing.lg};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    flex-direction: column;
    background-color: ${({theme:e})=>e.colors.secondary};
    padding: 100px ${({theme:e})=>e.spacing.xl}
      ${({theme:e})=>e.spacing.xl};
    gap: ${({theme:e})=>e.spacing.md};
    transform: translateX(${({isOpen:e})=>e?"0":"100%"});
    transition: transform 0.3s ease-in-out;
    box-shadow: ${({theme:e})=>e.shadows.large};
    z-index: ${({theme:e})=>e.zIndex.navigation-1};
  }
`,g=d.li`
  position: relative;
`,$=d.a`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  color: ${({theme:e,isActive:t})=>t?e.colors.accent:e.colors.textSecondary};
  text-decoration: none;
  font-weight: 500;
  font-size: ${({theme:e})=>e.fontSizes.body};
  transition: ${({theme:e})=>e.transitions.fast};
  position: relative;
  padding: ${({theme:e})=>e.spacing.xs} 0;

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
  }

  i {
    font-size: 1.2rem;
    display: none;

    @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
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
      width: ${({isActive:e})=>e?"100%":"0"};
      height: 2px;
      background-color: ${({theme:e})=>e.colors.accent};
      transition: width 0.3s ease;
    }
  }

  &:hover span::after {
    width: 100%;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: ${({theme:e})=>e.fontSizes.h3};
    width: 100%;
    padding: ${({theme:e})=>e.spacing.sm} 0;
  }
`,b=d.div`
  display: none;
  color: ${({theme:e})=>e.colors.accent};
  font-size: 1.8rem;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    display: block;
  }
`,u=d.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({isOpen:e})=>e?"1":"0"};
  visibility: ${({isOpen:e})=>e?"visible":"hidden"};
  transition: all 0.3s ease;
  z-index: ${({theme:e})=>e.zIndex.navigation-2};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    display: block;
  }
`,v=d.button`
  background: none;
  border: 2px solid ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.accent};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};
  margin-left: ${({theme:e})=>e.spacing.md};

  &:hover {
    background-color: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.primary};
    transform: rotate(180deg);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    position: absolute;
    top: 30px;
    right: 80px;
  }
`,w=()=>{const[d,w]=n.useState(!1),[y,j]=n.useState(!1),k=e(t.map(e=>e.id)),{isDarkMode:z,toggleTheme:S}=o();n.useEffect(()=>{const e=()=>{const e=window.scrollY;j(e>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),n.useEffect(()=>(document.body.style.overflow=d?"hidden":"unset",()=>{document.body.style.overflow="unset"}),[d]);const C=e=>{w(!1);const t=document.getElementById(e);if(t){const e=80,o=t.offsetTop-e;window.scrollTo({top:o,behavior:"smooth"})}};return i.jsxs(i.Fragment,{children:[i.jsx(h,{scrolled:y,children:i.jsxs(m,{className:"container",children:[i.jsx(p,{href:"#hero",onClick:e=>{e.preventDefault(),C("hero")},children:s.name.split(" ")[0]}),i.jsxs(x,{children:[i.jsx(f,{isOpen:d,children:t.map(e=>i.jsx(g,{children:i.jsxs($,{href:`#${e.id}`,isActive:k===e.id,onClick:t=>{t.preventDefault(),C(e.id)},children:[e.icon&&i.jsx("i",{className:e.icon}),i.jsx("span",{children:e.label})]})},e.id))}),i.jsx(v,{onClick:S,"aria-label":"Toggle theme",children:z?i.jsx(a,{}):i.jsx(r,{})}),i.jsx(b,{onClick:()=>w(!d),children:d?i.jsx(l,{}):i.jsx(c,{})})]})]})}),i.jsx(u,{isOpen:d,onClick:()=>w(!1)})]})};export{w as default};
