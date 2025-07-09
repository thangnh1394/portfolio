import{j as e}from"./index-CEPyOHJs.js";import{r as d}from"./react-vendor-nf7bT_Uh.js";import{C as j}from"./styles-CLPj2Uue.js";import{S as k,a as S}from"./index-DQi6GrOP.js";import{b as z,j as f,e as b,k as C,l as x}from"./portfolio.config-CU7XLref.js";import{d as i}from"./styled-vendor-Cp60Z__U.js";import{m as a,A as u}from"./animation-vendor-BvpmtWd3.js";const y=i.div`
  background-color: ${({theme:o})=>o.colors.cardBg};
  border: 1px solid ${({theme:o})=>o.colors.border};
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: ${({theme:o})=>o.colors.accent};
    box-shadow: ${({theme:o})=>o.shadows.glow};
  }
`,m=i.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  cursor: pointer;
`,F=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${y}:hover & {
    transform: scale(1.1);
  }
`,M=i.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:o})=>o.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${m}:hover & {
    opacity: 1;
  }
`,T=i.button`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing.xs};
  padding: ${({theme:o})=>`${o.spacing.sm} ${o.spacing.md}`};
  background-color: ${({theme:o})=>o.colors.accent};
  color: ${({theme:o})=>o.colors.primary};
  border: none;
  border-radius: 8px;
  font-size: ${({theme:o})=>o.fontSizes.body};
  font-weight: 600;
  cursor: pointer;
  transform: translateY(20px);
  transition: all 0.3s ease;

  ${m}:hover & {
    transform: translateY(0);
  }
`,P=i.div`
  padding: ${({theme:o})=>o.spacing.lg};
`,I=i.h3`
  font-size: ${({theme:o})=>o.fontSizes.h3};
  font-weight: 700;
  color: ${({theme:o})=>o.colors.textPrimary};
  margin-bottom: ${({theme:o})=>o.spacing.sm};
`,E=i.p`
  font-size: ${({theme:o})=>o.fontSizes.body};
  color: ${({theme:o})=>o.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: ${({theme:o})=>o.spacing.md};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,L=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:o})=>o.spacing.xs};
  margin-bottom: ${({theme:o})=>o.spacing.md};
`,A=i.span`
  padding: ${({theme:o})=>`4px ${o.spacing.sm}`};
  background-color: ${({theme:o})=>o.colors.accent}20;
  color: ${({theme:o})=>o.colors.accent};
  border: 1px solid ${({theme:o})=>o.colors.accent}40;
  border-radius: 4px;
  font-size: ${({theme:o})=>o.fontSizes.small};
  font-weight: 500;
`,V=i.div`
  display: flex;
  gap: ${({theme:o})=>o.spacing.sm};
  margin-top: ${({theme:o})=>o.spacing.md};
`,h=i(a.a)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing.xs};
  padding: ${({theme:o})=>`${o.spacing.xs} ${o.spacing.md}`};
  background-color: ${({theme:o,secondary:r})=>r?"transparent":o.colors.accent};
  color: ${({theme:o,secondary:r})=>r?o.colors.accent:o.colors.primary};
  border: 2px solid ${({theme:o})=>o.colors.accent};
  border-radius: 8px;
  text-decoration: none;
  font-size: ${({theme:o})=>o.fontSizes.small};
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({theme:o,secondary:r})=>r?o.colors.accent:"transparent"};
    color: ${({theme:o,secondary:r})=>r?o.colors.primary:o.colors.accent};
  }
`,B=i(a.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({theme:o})=>o.zIndex.modal};
  padding: ${({theme:o})=>o.spacing.md};
`,D=i.div`
  background-color: ${({theme:o})=>o.colors.secondary};
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,H=i.div`
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  padding: ${({theme:o})=>o.spacing.md};
  background-color: ${({theme:o})=>o.colors.secondary};
  z-index: 10;
`,O=i.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:o})=>o.colors.primary};
  border: none;
  border-radius: 50%;
  color: ${({theme:o})=>o.colors.textSecondary};
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({theme:o})=>o.colors.accent};
    color: ${({theme:o})=>o.colors.primary};
    transform: rotate(90deg);
  }
`,U=i.div`
  padding: 0 ${({theme:o})=>o.spacing.xl}
    ${({theme:o})=>o.spacing.xl};
`,_=i.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: ${({theme:o})=>o.spacing.lg};
`,G=i.h2`
  font-size: ${({theme:o})=>o.fontSizes.h2};
  font-weight: 700;
  color: ${({theme:o})=>o.colors.textPrimary};
  margin-bottom: ${({theme:o})=>o.spacing.md};
`,R=i.p`
  font-size: ${({theme:o})=>o.fontSizes.body};
  color: ${({theme:o})=>o.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: ${({theme:o})=>o.spacing.lg};
`,Y=i.div`
  margin-bottom: ${({theme:o})=>o.spacing.lg};

  h4 {
    font-size: ${({theme:o})=>o.fontSizes.h3};
    color: ${({theme:o})=>o.colors.textPrimary};
    margin-bottom: ${({theme:o})=>o.spacing.md};
  }
`,N=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:o})=>o.spacing.sm};
`,W=i.span`
  padding: ${({theme:o})=>`${o.spacing.xs} ${o.spacing.md}`};
  background-color: ${({theme:o})=>o.colors.accent}20;
  color: ${({theme:o})=>o.colors.accent};
  border: 1px solid ${({theme:o})=>o.colors.accent}40;
  border-radius: 50px;
  font-size: ${({theme:o})=>o.fontSizes.body};
  font-weight: 500;
`,q=i.div`
  display: flex;
  gap: ${({theme:o})=>o.spacing.md};
  margin-top: ${({theme:o})=>o.spacing.xl};

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    flex-direction: column;
  }
`,$=i.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:o})=>o.spacing.xs};
  padding: ${({theme:o})=>`${o.spacing.sm} ${o.spacing.lg}`};
  background-color: ${({theme:o,primary:r})=>r?o.colors.accent:"transparent"};
  color: ${({theme:o,primary:r})=>r?o.colors.primary:o.colors.accent};
  border: 2px solid ${({theme:o})=>o.colors.accent};
  border-radius: 8px;
  text-decoration: none;
  font-size: ${({theme:o})=>o.fontSizes.body};
  font-weight: 600;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    background-color: ${({theme:o,primary:r})=>r?"transparent":o.colors.accent};
    color: ${({theme:o,primary:r})=>r?o.colors.accent:o.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${({theme:o})=>o.shadows.glow};
  }
`,J=({project:o,onClose:r})=>{const c={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.3}},exit:{opacity:0,scale:.8,transition:{duration:.2}}};return e.jsx(B,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:r,children:e.jsxs(D,{as:a.div,variants:c,initial:"hidden",animate:"visible",exit:"exit",onClick:t=>t.stopPropagation(),children:[e.jsx(H,{children:e.jsx(O,{onClick:r,children:e.jsx(z,{})})}),e.jsxs(U,{children:[e.jsx(_,{src:o.image||`https://via.placeholder.com/800x500/333333/00FF88?text=${encodeURIComponent(o.name)}`,alt:o.name}),e.jsx(G,{children:o.name}),e.jsx(R,{children:o.description}),o.technologies&&e.jsxs(Y,{children:[e.jsx("h4",{children:"Technologies Used"}),e.jsx(N,{children:o.technologies.map((t,l)=>e.jsx(W,{children:t},l))})]}),e.jsxs(q,{children:[e.jsxs($,{href:o.liveLink,target:"_blank",rel:"noopener noreferrer",primary:!0,children:[e.jsx(f,{})," View Live Demo"]}),o.githubLink&&e.jsxs($,{href:o.githubLink,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(b,{})," View Source Code"]})]})]})]})})},K=({project:o,index:r})=>{const[c,t]=d.useState(!1),[l,n]=d.useState(!1),s={hidden:{opacity:0,y:50,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.5,delay:r*.1,ease:"easeOut"}}},p=()=>{n(!0)},g=`https://via.placeholder.com/600x400/333333/00FF88?text=${encodeURIComponent(o.name)}`;return e.jsxs(e.Fragment,{children:[e.jsxs(y,{as:a.div,variants:s,whileHover:{y:-10},transition:{duration:.3},children:[e.jsxs(m,{onClick:()=>t(!0),children:[e.jsx(F,{src:l?g:o.image||g,alt:o.name,onError:p}),e.jsx(M,{children:e.jsxs(T,{children:[e.jsx(C,{})," View Details"]})})]}),e.jsxs(P,{children:[e.jsx(I,{children:o.name}),e.jsx(E,{children:o.description}),o.technologies&&e.jsx(L,{children:o.technologies.map((v,w)=>e.jsx(A,{children:v},w))}),e.jsxs(V,{children:[e.jsxs(h,{href:o.liveLink,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx(f,{})," Live Demo"]}),o.githubLink&&e.jsxs(h,{href:o.githubLink,target:"_blank",rel:"noopener noreferrer",secondary:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx(b,{})," Source Code"]})]})]})]}),e.jsx(u,{children:c&&e.jsx(J,{project:o,onClose:()=>t(!1)})})]})},Q=i.div`
  width: 100%;
`,X=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:o})=>o.spacing.sm};
  justify-content: center;
  margin-bottom: ${({theme:o})=>o.spacing.xxl};
`,Z=i(a.button)`
  padding: ${({theme:o})=>`${o.spacing.xs} ${o.spacing.md}`};
  background-color: ${({theme:o,active:r})=>r?o.colors.accent:o.colors.secondary};
  color: ${({theme:o,active:r})=>r?o.colors.primary:o.colors.textSecondary};
  border: 2px solid
    ${({theme:o,active:r})=>r?o.colors.accent:o.colors.border};
  border-radius: 50px;
  font-size: ${({theme:o})=>o.fontSizes.small};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({theme:o})=>o.colors.accent};
    color: ${({theme:o,active:r})=>r?o.colors.primary:o.colors.accent};
  }
`,oo=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({theme:o})=>o.spacing.lg};

  @media (max-width: ${({theme:o})=>o.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,eo=i.div`
  text-align: center;
  padding: ${({theme:o})=>o.spacing.xxl};
  color: ${({theme:o})=>o.colors.textSecondary};
  font-size: ${({theme:o})=>o.fontSizes.body};
`,lo=()=>{const[o,r]=d.useState("all"),c=d.useMemo(()=>{const n=new Set;return x.forEach(s=>{var p;(p=s.technologies)==null||p.forEach(g=>n.add(g))}),["all",...Array.from(n).sort()]},[]),t=d.useMemo(()=>o==="all"?x:x.filter(n=>{var s;return(s=n.technologies)==null?void 0:s.includes(o)}),[o]),l={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}};return e.jsx(k,{id:"projects",dark:!0,children:e.jsxs(j,{children:[e.jsx(S,{title:"Featured Projects",subtitle:"A collection of my recent work and side projects"}),e.jsxs(Q,{children:[c.length>1&&e.jsx(X,{children:c.map(n=>e.jsx(Z,{active:o===n,onClick:()=>r(n),whileHover:{scale:1.05},whileTap:{scale:.95},children:n.charAt(0).toUpperCase()+n.slice(1)},n))}),e.jsx(u,{mode:"wait",children:t.length>0?e.jsx(oo,{as:a.div,variants:l,initial:"hidden",animate:"visible",exit:"hidden",children:t.map((n,s)=>e.jsx(K,{project:n,index:s},n.id))},o):e.jsxs(eo,{as:a.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:["No projects found with ",o," technology."]})})]})]})})};export{lo as default};
//# sourceMappingURL=index-aKzQC2DC.js.map
