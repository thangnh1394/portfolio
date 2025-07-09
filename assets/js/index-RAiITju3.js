import{j as e}from"./index-CftL8cBz.js";import{C as t}from"./styles-Bm-7VHm_.js";import{S as i,a as r}from"./index-dPZO7L5n.js";import{m as s,s as o}from"./portfolio.config-ZAuzchpr.js";import{r as n}from"./react-vendor-DtX1tuCI.js";import{S as a,a as l,b as d,c,u as m}from"./index.esm-BlhS4m9b.js";import{d as h}from"./styled-vendor-CAhPJ6Jj.js";import{m as p}from"./animation-vendor-DPAl1j6H.js";import"./icons-vendor-BVVZLL9E.js";const x=e=>e*(2-e),f=h.div`
  width: 100%;
`,g=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,u=h.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  opacity: 0.05;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: repeating-linear-gradient(
      45deg,
      ${({theme:e})=>e.colors.accent} 0px,
      ${({theme:e})=>e.colors.accent} 1px,
      transparent 1px,
      transparent 15px
    );
  }
`,b=h.div`
  width: 100%;
`,v=h.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,j=h.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.primary};
  border-radius: 8px;
  color: ${({theme:e})=>e.colors.accent};
  font-size: 1.2rem;
`,y=h.span`
  flex: 1;
  font-size: ${({theme:e})=>e.fontSizes.body};
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,$=h.span`
  font-size: ${({theme:e})=>e.fontSizes.small};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-weight: 400;
`,w=h.div`
  position: relative;
  width: 100%;
  height: 8px;
  background: ${({theme:e})=>e.colors.primary};
  border-radius: 4px;
  overflow: hidden;
`,k=h.div`
  height: 100%;
  background: ${({theme:e,level:t})=>t>=90?e.colors.accent:t>=70?e.colors.accentAlt:t>=50?"#FFA500":"#FF6B6B"};
  border-radius: 4px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`,z=h.span`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`,S=({skill:t,index:i,isVisible:r,categoryIndex:o})=>{const l=(({from:e,to:t,duration:i=1e3,isActive:r=!0})=>{const[s,o]=n.useState(e),a=n.useRef(null),l=n.useRef(null);return n.useEffect(()=>{if(!r)return void o(e);const s=r=>{a.current||(a.current=r);const n=Math.min((r-a.current)/i,1),d=e+(t-e)*x(n);o(d),n<1&&(l.current=requestAnimationFrame(s))};return l.current=requestAnimationFrame(s),()=>{l.current&&cancelAnimationFrame(l.current),a.current=null}},[e,t,i,r]),Math.round(s)})({from:0,to:t.level||80,duration:1e3,isActive:r}),d={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.4,delay:.2*o+.1*i}}};return e.jsxs(b,{as:p.div,variants:d,children:[e.jsxs(v,{children:[e.jsx(j,{children:(t=>{if(!t)return e.jsx(s,{});const i=a[`Si${t}`];return i?e.jsx(i,{}):e.jsx(s,{})})(t.icon)}),e.jsx(y,{children:t.name}),e.jsx($,{children:(c=l,c>=90?"Expert":c>=75?"Advanced":c>=60?"Proficient":c>=40?"Intermediate":"Beginner")})]}),e.jsxs(w,{children:[e.jsx(k,{as:p.div,initial:{width:0},animate:{width:r?`${l}%`:0},transition:{duration:1,delay:.2*o+.1*i},level:l}),e.jsxs(z,{children:[l,"%"]})]})]});var c},A=h.div`
  background: ${({theme:e})=>`linear-gradient(135deg, ${e.colors.cardBg} 0%, ${e.colors.secondary}50 100%)`};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 16px;
  padding: ${({theme:e})=>e.spacing.xl};
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({theme:e})=>e.colors.accent}50;
  }
`,F=h.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,V=h.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.accent}20;
  border: 2px solid ${({theme:e})=>e.colors.accent}40;
  border-radius: 12px;
  color: ${({theme:e})=>e.colors.accent};
  font-size: 1.5rem;
`,B=h.h3`
  font-size: ${({theme:e})=>e.fontSizes.h3};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin: 0;
`,C=h.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,I=({category:t,skills:i,index:r,isVisible:o})=>{const n={hidden:{opacity:0,y:50,rotateX:-15},visible:{opacity:1,y:0,rotateX:0,transition:{duration:.6,delay:.2*r,ease:"easeOut"}}};return e.jsxs(A,{as:p.div,variants:n,whileHover:{y:-10,boxShadow:"0 20px 40px rgba(0, 255, 136, 0.2)"},children:[e.jsxs(F,{children:[e.jsx(V,{children:(()=>{switch(t.toLowerCase()){case"frontend":return e.jsx(c,{});case"backend":return e.jsx(d,{});case"tools":return e.jsx(l,{});default:return e.jsx(s,{})}})()}),e.jsx(B,{children:(a=t,a.charAt(0).toUpperCase()+a.slice(1))})]}),e.jsx(C,{children:i.map((t,i)=>e.jsx(S,{skill:t,index:i,isVisible:o,categoryIndex:r},t.name))})]});var a},P=()=>{const{ref:s,isVisible:n}=m({threshold:.1,freezeOnceVisible:!0});return e.jsxs(i,{id:"skills",children:[e.jsx(u,{}),e.jsxs(t,{children:[e.jsx(r,{title:"Skills & Technologies",subtitle:"Technologies and tools I work with to bring ideas to life"}),e.jsx(f,{ref:s,children:e.jsx(g,{as:p.div,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},initial:"hidden",animate:n?"visible":"hidden",children:Object.entries(o).map(([t,i],r)=>e.jsx(I,{category:t,skills:i,index:r,isVisible:n},t))})})]})]})};export{P as default};
