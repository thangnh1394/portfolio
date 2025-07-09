import{j as e}from"./index-CftL8cBz.js";import{r as o}from"./react-vendor-DtX1tuCI.js";import{C as t}from"./styles-Bm-7VHm_.js";import{S as r,a as i}from"./index-dPZO7L5n.js";import{b as n,j as s,e as a,k as c,l}from"./portfolio.config-ZAuzchpr.js";import{d}from"./styled-vendor-CAhPJ6Jj.js";import{m,A as h}from"./animation-vendor-DPAl1j6H.js";import"./icons-vendor-BVVZLL9E.js";const p=d.div`
  background-color: ${({theme:e})=>e.colors.cardBg};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: ${({theme:e})=>e.colors.accent};
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }
`,g=d.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  cursor: pointer;
`,x=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${p}:hover & {
    transform: scale(1.1);
  }
`,$=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>e.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${g}:hover & {
    opacity: 1;
  }
`,f=d.button`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.md}`};
  background-color: ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.primary};
  border: none;
  border-radius: 8px;
  font-size: ${({theme:e})=>e.fontSizes.body};
  font-weight: 600;
  cursor: pointer;
  transform: translateY(20px);
  transition: all 0.3s ease;

  ${g}:hover & {
    transform: translateY(0);
  }
`,b=d.div`
  padding: ${({theme:e})=>e.spacing.lg};
`,y=d.h3`
  font-size: ${({theme:e})=>e.fontSizes.h3};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,u=d.p`
  font-size: ${({theme:e})=>e.fontSizes.body};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,j=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.xs};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,v=d.span`
  padding: ${({theme:e})=>`4px ${e.spacing.sm}`};
  background-color: ${({theme:e})=>e.colors.accent}20;
  color: ${({theme:e})=>e.colors.accent};
  border: 1px solid ${({theme:e})=>e.colors.accent}40;
  border-radius: 4px;
  font-size: ${({theme:e})=>e.fontSizes.small};
  font-weight: 500;
`,w=d.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-top: ${({theme:e})=>e.spacing.md};
`,k=d(m.a)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.md}`};
  background-color: ${({theme:e,secondary:o})=>o?"transparent":e.colors.accent};
  color: ${({theme:e,secondary:o})=>o?e.colors.accent:e.colors.primary};
  border: 2px solid ${({theme:e})=>e.colors.accent};
  border-radius: 8px;
  text-decoration: none;
  font-size: ${({theme:e})=>e.fontSizes.small};
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({theme:e,secondary:o})=>o?e.colors.accent:"transparent"};
    color: ${({theme:e,secondary:o})=>o?e.colors.primary:e.colors.accent};
  }
`,z=d(m.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({theme:e})=>e.zIndex.modal};
  padding: ${({theme:e})=>e.spacing.md};
`,S=d.div`
  background-color: ${({theme:e})=>e.colors.secondary};
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,C=d.div`
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  padding: ${({theme:e})=>e.spacing.md};
  background-color: ${({theme:e})=>e.colors.secondary};
  z-index: 10;
`,L=d.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.colors.primary};
  border: none;
  border-radius: 50%;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.primary};
    transform: rotate(90deg);
  }
`,F=d.div`
  padding: 0 ${({theme:e})=>e.spacing.xl}
    ${({theme:e})=>e.spacing.xl};
`,P=d.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,A=d.h2`
  font-size: ${({theme:e})=>e.fontSizes.h2};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,H=d.p`
  font-size: ${({theme:e})=>e.fontSizes.body};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,T=d.div`
  margin-bottom: ${({theme:e})=>e.spacing.lg};

  h4 {
    font-size: ${({theme:e})=>e.fontSizes.h3};
    color: ${({theme:e})=>e.colors.textPrimary};
    margin-bottom: ${({theme:e})=>e.spacing.md};
  }
`,U=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sm};
`,_=d.span`
  padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.md}`};
  background-color: ${({theme:e})=>e.colors.accent}20;
  color: ${({theme:e})=>e.colors.accent};
  border: 1px solid ${({theme:e})=>e.colors.accent}40;
  border-radius: 50px;
  font-size: ${({theme:e})=>e.fontSizes.body};
  font-weight: 500;
`,D=d.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.xl};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    flex-direction: column;
  }
`,E=d.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.lg}`};
  background-color: ${({theme:e,primary:o})=>o?e.colors.accent:"transparent"};
  color: ${({theme:e,primary:o})=>o?e.colors.primary:e.colors.accent};
  border: 2px solid ${({theme:e})=>e.colors.accent};
  border-radius: 8px;
  text-decoration: none;
  font-size: ${({theme:e})=>e.fontSizes.body};
  font-weight: 600;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    background-color: ${({theme:e,primary:o})=>o?"transparent":e.colors.accent};
    color: ${({theme:e,primary:o})=>o?e.colors.accent:e.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }
`,I=({project:o,onClose:t})=>e.jsx(z,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,children:e.jsxs(S,{as:m.div,variants:{hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.3}},exit:{opacity:0,scale:.8,transition:{duration:.2}}},initial:"hidden",animate:"visible",exit:"exit",onClick:e=>e.stopPropagation(),children:[e.jsx(C,{children:e.jsx(L,{onClick:t,children:e.jsx(n,{})})}),e.jsxs(F,{children:[e.jsx(P,{src:o.image||`https://via.placeholder.com/800x500/333333/00FF88?text=${encodeURIComponent(o.name)}`,alt:o.name}),e.jsx(A,{children:o.name}),e.jsx(H,{children:o.description}),o.technologies&&e.jsxs(T,{children:[e.jsx("h4",{children:"Technologies Used"}),e.jsx(U,{children:o.technologies.map((o,t)=>e.jsx(_,{children:o},t))})]}),e.jsxs(D,{children:[e.jsxs(E,{href:o.liveLink,target:"_blank",rel:"noopener noreferrer",primary:!0,children:[e.jsx(s,{})," View Live Demo"]}),o.githubLink&&e.jsxs(E,{href:o.githubLink,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(a,{})," View Source Code"]})]})]})]})}),V=({project:t,index:r})=>{const[i,n]=o.useState(!1),[l,d]=o.useState(!1),z={hidden:{opacity:0,y:50,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.5,delay:.1*r,ease:"easeOut"}}},S=`https://via.placeholder.com/600x400/333333/00FF88?text=${encodeURIComponent(t.name)}`;return e.jsxs(e.Fragment,{children:[e.jsxs(p,{as:m.div,variants:z,whileHover:{y:-10},transition:{duration:.3},children:[e.jsxs(g,{onClick:()=>n(!0),children:[e.jsx(x,{src:l?S:t.image||S,alt:t.name,onError:()=>{d(!0)}}),e.jsx($,{children:e.jsxs(f,{children:[e.jsx(c,{})," View Details"]})})]}),e.jsxs(b,{children:[e.jsx(y,{children:t.name}),e.jsx(u,{children:t.description}),t.technologies&&e.jsx(j,{children:t.technologies.map((o,t)=>e.jsx(v,{children:o},t))}),e.jsxs(w,{children:[e.jsxs(k,{href:t.liveLink,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx(s,{})," Live Demo"]}),t.githubLink&&e.jsxs(k,{href:t.githubLink,target:"_blank",rel:"noopener noreferrer",secondary:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx(a,{})," Source Code"]})]})]})]}),e.jsx(h,{children:i&&e.jsx(I,{project:t,onClose:()=>n(!1)})})]})},Y=d.div`
  width: 100%;
`,M=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sm};
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
`,R=d(m.button)`
  padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.md}`};
  background-color: ${({theme:e,active:o})=>o?e.colors.accent:e.colors.secondary};
  color: ${({theme:e,active:o})=>o?e.colors.primary:e.colors.textSecondary};
  border: 2px solid
    ${({theme:e,active:o})=>o?e.colors.accent:e.colors.border};
  border-radius: 50px;
  font-size: ${({theme:e})=>e.fontSizes.small};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e,active:o})=>o?e.colors.primary:e.colors.accent};
  }
`,B=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,N=d.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.xxl};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: ${({theme:e})=>e.fontSizes.body};
`,O=()=>{const[n,s]=o.useState("all"),a=o.useMemo(()=>{const e=new Set;return l.forEach(o=>{var t;null==(t=o.technologies)||t.forEach(o=>e.add(o))}),["all",...Array.from(e).sort()]},[]),c=o.useMemo(()=>"all"===n?l:l.filter(e=>{var o;return null==(o=e.technologies)?void 0:o.includes(n)}),[n]);return e.jsx(r,{id:"projects",dark:!0,children:e.jsxs(t,{children:[e.jsx(i,{title:"Featured Projects",subtitle:"A collection of my recent work and side projects"}),e.jsxs(Y,{children:[a.length>1&&e.jsx(M,{children:a.map(o=>e.jsx(R,{active:n===o,onClick:()=>s(o),whileHover:{scale:1.05},whileTap:{scale:.95},children:o.charAt(0).toUpperCase()+o.slice(1)},o))}),e.jsx(h,{mode:"wait",children:c.length>0?e.jsx(B,{as:m.div,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},initial:"hidden",animate:"visible",exit:"hidden",children:c.map((o,t)=>e.jsx(V,{project:o,index:t},o.id))},n):e.jsxs(N,{as:m.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:["No projects found with ",n," technology."]})})]})]})})};export{O as default};
