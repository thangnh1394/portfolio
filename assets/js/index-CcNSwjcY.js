import{j as e}from"./index-CftL8cBz.js";import{p as t,d as o,e as i,f as r,g as a,h as n,i as s}from"./portfolio.config-ZAuzchpr.js";import{C as l}from"./styles-Bm-7VHm_.js";import{d as c,m as d}from"./styled-vendor-CAhPJ6Jj.js";import{m as h}from"./animation-vendor-DPAl1j6H.js";import"./react-vendor-DtX1tuCI.js";import"./icons-vendor-BVVZLL9E.js";const m=c.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: ${({theme:e})=>e.spacing.xxxl} 0;
  background: ${({theme:e})=>`linear-gradient(135deg, ${e.colors.primary} 0%, ${e.colors.secondary}40 100%)`};
`,p=c.div`
  position: relative;
  z-index: 2;
`,x=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing.xxl};
  align-items: center;

  @media (max-width: ${({theme:e})=>e.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,g=c.div`
  @media (max-width: ${({theme:e})=>e.breakpoints.desktop}) {
    order: 2;
  }
`,f=c.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({theme:e})=>e.breakpoints.desktop}) {
    order: 1;
    margin-bottom: ${({theme:e})=>e.spacing.xl};
  }
`,b=d`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
`,$=c.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.md}`};
  background-color: ${({theme:e})=>e.colors.accent}20;
  border: 1px solid ${({theme:e})=>e.colors.accent}40;
  border-radius: 50px;
  color: ${({theme:e})=>e.colors.accent};
  font-size: ${({theme:e})=>e.fontSizes.small};
  font-weight: 500;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,u=c.span`
  width: 8px;
  height: 8px;
  background-color: ${({theme:e})=>e.colors.accent};
  border-radius: 50%;
  animation: ${b} 2s ease-in-out infinite;
`,v=c.h1`
  font-size: ${({theme:e})=>e.fontSizes.hero};
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: ${({theme:e})=>e.spacing.md};

  span {
    color: ${({theme:e})=>e.colors.accent};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 4px;
      background: ${({theme:e})=>`linear-gradient(90deg, ${e.colors.accent} 0%, ${e.colors.accentAlt} 100%)`};
      border-radius: 2px;
    }
  }
`,j=c.h2`
  font-size: ${({theme:e})=>e.fontSizes.h2};
  font-weight: 400;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,y=c.p`
  font-size: ${({theme:e})=>e.fontSizes.body};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.8;
  max-width: 600px;
  margin-bottom: ${({theme:e})=>e.spacing.xl};

  @media (max-width: ${({theme:e})=>e.breakpoints.desktop}) {
    margin-left: auto;
    margin-right: auto;
  }
`,k=c.div`
  position: relative;
  width: 400px;
  height: 400px;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    width: 250px;
    height: 250px;
  }
`,w=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  border: 4px solid ${({theme:e})=>e.colors.accent};
`,z=d`
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
`,S=c.div`
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border: 2px dashed ${({theme:e})=>e.colors.accent}40;
  border-radius: 50%;
  animation: ${z} 15s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 1px solid ${({theme:e})=>e.colors.accent}20;
    border-radius: 50%;
  }
`,Y=c.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};

  @media (max-width: ${({theme:e})=>e.breakpoints.desktop}) {
    justify-content: center;
  }
`,C=c.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.colors.secondary};
  border: 2px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 1.4rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({theme:e})=>e.colors.accent};
    border-color: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.primary};
    transform: translateY(-5px);
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }
`,E=d`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
`,F=c.button`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.textSecondary};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};
  animation: ${E} 2s ease-in-out infinite;

  span {
    font-size: ${({theme:e})=>e.fontSizes.small};
    opacity: 0.7;
  }

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
  }
`,I=d`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(720deg);
    opacity: 0;
  }
`,T=c.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 2px;
    background: ${({theme:e})=>e.colors.accent};
    box-shadow: ${({theme:e})=>`\n        50px 50px ${e.colors.accent},\n        100px 80px ${e.colors.accent},\n        140px 120px ${e.colors.accent},\n        200px 20px ${e.colors.accent},\n        250px 160px ${e.colors.accent}\n      `};
    animation: ${I} 15s linear infinite;
  }

  &::after {
    animation-delay: 7s;
    left: 50%;
  }
`,_=()=>{const c={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return e.jsxs(m,{id:"hero",children:[e.jsx(T,{}),e.jsxs(l,{children:[e.jsx(p,{children:e.jsxs(x,{children:[e.jsxs(g,{as:h.div,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},initial:"hidden",animate:"visible",children:[e.jsx(h.div,{variants:c,children:e.jsxs($,{children:[e.jsx(u,{}),t.availabilityStatus.message]})}),e.jsx(h.div,{variants:c,children:e.jsxs(v,{children:["Hi, I'm ",e.jsx("span",{children:t.name})]})}),e.jsx(h.div,{variants:c,children:e.jsx(j,{children:t.title})}),e.jsx(h.div,{variants:c,children:e.jsx(y,{children:t.introduction})}),e.jsx(h.div,{variants:c,children:e.jsxs(Y,{children:[e.jsx(C,{href:o.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:e.jsx(i,{})}),e.jsx(C,{href:o.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:e.jsx(r,{})}),e.jsx(C,{href:o.facebook,target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:e.jsx(a,{})}),e.jsx(C,{href:`mailto:${o.email}`,"aria-label":"Email",children:e.jsx(n,{})})]})})]}),e.jsx(f,{as:h.div,variants:{hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.8,ease:"easeOut"}}},initial:"hidden",animate:"visible",children:e.jsxs(k,{children:[e.jsx(S,{}),e.jsx(w,{src:t.profilePhoto,alt:t.name,onError:e=>{e.currentTarget.src=`https://ui-avatars.com/api/?name=${t.name}&size=400&background=00FF88&color=111111`}})]})})]})}),e.jsxs(F,{onClick:()=>{const e=document.getElementById("projects");if(e){const t=80,o=e.offsetTop-t;window.scrollTo({top:o,behavior:"smooth"})}},children:[e.jsx("span",{children:"Scroll to explore"}),e.jsx(s,{})]})]})]})};export{_ as default};
