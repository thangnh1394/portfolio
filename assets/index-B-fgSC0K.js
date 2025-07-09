import{j as t}from"./index-CEPyOHJs.js";import{p as i,d as s,e as m,f as h,g,h as f,i as b}from"./portfolio.config-CU7XLref.js";import{C as $}from"./styles-CLPj2Uue.js";import{d as e,m as l}from"./styled-vendor-Cp60Z__U.js";import{m as n}from"./animation-vendor-BvpmtWd3.js";import"./react-vendor-nf7bT_Uh.js";const u=e.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: ${({theme:o})=>o.spacing.xxxl} 0;
  background: ${({theme:o})=>`linear-gradient(135deg, ${o.colors.primary} 0%, ${o.colors.secondary}40 100%)`};
`,v=e.div`
  position: relative;
  z-index: 2;
`,j=e.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:o})=>o.spacing.xxl};
  align-items: center;

  @media (max-width: ${({theme:o})=>o.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,y=e.div`
  @media (max-width: ${({theme:o})=>o.breakpoints.desktop}) {
    order: 2;
  }
`,k=e.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({theme:o})=>o.breakpoints.desktop}) {
    order: 1;
    margin-bottom: ${({theme:o})=>o.spacing.xl};
  }
`,w=l`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
`,z=e.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing.xs};
  padding: ${({theme:o})=>`${o.spacing.xs} ${o.spacing.md}`};
  background-color: ${({theme:o})=>o.colors.accent}20;
  border: 1px solid ${({theme:o})=>o.colors.accent}40;
  border-radius: 50px;
  color: ${({theme:o})=>o.colors.accent};
  font-size: ${({theme:o})=>o.fontSizes.small};
  font-weight: 500;
  margin-bottom: ${({theme:o})=>o.spacing.lg};
`,S=e.span`
  width: 8px;
  height: 8px;
  background-color: ${({theme:o})=>o.colors.accent};
  border-radius: 50%;
  animation: ${w} 2s ease-in-out infinite;
`,F=e.h1`
  font-size: ${({theme:o})=>o.fontSizes.hero};
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: ${({theme:o})=>o.spacing.md};

  span {
    color: ${({theme:o})=>o.colors.accent};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 4px;
      background: ${({theme:o})=>`linear-gradient(90deg, ${o.colors.accent} 0%, ${o.colors.accentAlt} 100%)`};
      border-radius: 2px;
    }
  }
`,H=e.h2`
  font-size: ${({theme:o})=>o.fontSizes.h2};
  font-weight: 400;
  color: ${({theme:o})=>o.colors.textSecondary};
  margin-bottom: ${({theme:o})=>o.spacing.lg};
`,C=e.p`
  font-size: ${({theme:o})=>o.fontSizes.body};
  color: ${({theme:o})=>o.colors.textSecondary};
  line-height: 1.8;
  max-width: 600px;
  margin-bottom: ${({theme:o})=>o.spacing.xl};

  @media (max-width: ${({theme:o})=>o.breakpoints.desktop}) {
    margin-left: auto;
    margin-right: auto;
  }
`,I=e.div`
  position: relative;
  width: 400px;
  height: 400px;

  @media (max-width: ${({theme:o})=>o.breakpoints.tablet}) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    width: 250px;
    height: 250px;
  }
`,P=e.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  border: 4px solid ${({theme:o})=>o.colors.accent};
`,T=l`
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
`,E=e.div`
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border: 2px dashed ${({theme:o})=>o.colors.accent}40;
  border-radius: 50%;
  animation: ${T} 15s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 1px solid ${({theme:o})=>o.colors.accent}20;
    border-radius: 50%;
  }
`,Y=e.div`
  display: flex;
  gap: ${({theme:o})=>o.spacing.md};

  @media (max-width: ${({theme:o})=>o.breakpoints.desktop}) {
    justify-content: center;
  }
`,c=e.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:o})=>o.colors.secondary};
  border: 2px solid ${({theme:o})=>o.colors.border};
  border-radius: 12px;
  color: ${({theme:o})=>o.colors.textSecondary};
  font-size: 1.4rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({theme:o})=>o.colors.accent};
    border-color: ${({theme:o})=>o.colors.accent};
    color: ${({theme:o})=>o.colors.primary};
    transform: translateY(-5px);
    box-shadow: ${({theme:o})=>o.shadows.glow};
  }
`,D=l`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
`,L=e.button`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:o})=>o.spacing.xs};
  background: none;
  border: none;
  color: ${({theme:o})=>o.colors.textSecondary};
  cursor: pointer;
  transition: ${({theme:o})=>o.transitions.fast};
  animation: ${D} 2s ease-in-out infinite;

  span {
    font-size: ${({theme:o})=>o.fontSizes.small};
    opacity: 0.7;
  }

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    color: ${({theme:o})=>o.colors.accent};
  }
`,A=l`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(720deg);
    opacity: 0;
  }
`,B=e.div`
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
    background: ${({theme:o})=>o.colors.accent};
    box-shadow: ${({theme:o})=>`
        50px 50px ${o.colors.accent},
        100px 80px ${o.colors.accent},
        140px 120px ${o.colors.accent},
        200px 20px ${o.colors.accent},
        250px 160px ${o.colors.accent}
      `};
    animation: ${A} 15s linear infinite;
  }

  &::after {
    animation-delay: 7s;
    left: 50%;
  }
`,q=()=>{const o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},r={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},d={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.8,ease:"easeOut"}}},p=()=>{const a=document.getElementById("projects");if(a){const x=a.offsetTop-80;window.scrollTo({top:x,behavior:"smooth"})}};return t.jsxs(u,{id:"hero",children:[t.jsx(B,{}),t.jsxs($,{children:[t.jsx(v,{children:t.jsxs(j,{children:[t.jsxs(y,{as:n.div,variants:o,initial:"hidden",animate:"visible",children:[t.jsx(n.div,{variants:r,children:t.jsxs(z,{children:[t.jsx(S,{}),i.availabilityStatus.message]})}),t.jsx(n.div,{variants:r,children:t.jsxs(F,{children:["Hi, I'm ",t.jsx("span",{children:i.name})]})}),t.jsx(n.div,{variants:r,children:t.jsx(H,{children:i.title})}),t.jsx(n.div,{variants:r,children:t.jsx(C,{children:i.introduction})}),t.jsx(n.div,{variants:r,children:t.jsxs(Y,{children:[t.jsx(c,{href:s.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:t.jsx(m,{})}),t.jsx(c,{href:s.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:t.jsx(h,{})}),t.jsx(c,{href:s.facebook,target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:t.jsx(g,{})}),t.jsx(c,{href:`mailto:${s.email}`,"aria-label":"Email",children:t.jsx(f,{})})]})})]}),t.jsx(k,{as:n.div,variants:d,initial:"hidden",animate:"visible",children:t.jsxs(I,{children:[t.jsx(E,{}),t.jsx(P,{src:i.profilePhoto,alt:i.name,onError:a=>{a.currentTarget.src=`https://ui-avatars.com/api/?name=${i.name}&size=400&background=00FF88&color=111111`}})]})})]})}),t.jsxs(L,{onClick:p,children:[t.jsx("span",{children:"Scroll to explore"}),t.jsx(b,{})]})]})]})};export{q as default};
//# sourceMappingURL=index-B-fgSC0K.js.map
