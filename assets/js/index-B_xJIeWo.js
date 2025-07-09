import{j as e}from"./index-CftL8cBz.js";import{S as o,B as t,C as r}from"./styles-Bm-7VHm_.js";import{S as i,a}from"./index-dPZO7L5n.js";import{n as s,d as n,e as l,f as d,g as c,o as h,h as m,q as p,r as x}from"./portfolio.config-ZAuzchpr.js";import{r as g}from"./react-vendor-DtX1tuCI.js";import{u as f,d as b}from"./index.esm-BlhS4m9b.js";import{d as u}from"./styled-vendor-CAhPJ6Jj.js";import{m as j}from"./animation-vendor-DPAl1j6H.js";import"./icons-vendor-BVVZLL9E.js";const $=({children:r,variant:i="primary",size:a="medium",icon:s,iconPosition:n="left",fullWidth:l=!1,...d})=>e.jsxs(o,{variant:i,size:a,fullWidth:l,...d,children:[s&&"left"===n&&e.jsx(t,{children:s}),r,s&&"right"===n&&e.jsx(t,{children:s})]}),y=u.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`,v=u.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xxl};
`,w=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
`,z=u(j.a)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.lg};
  background: ${({theme:e})=>e.colors.cardBg};
  border: 2px solid ${({theme:e})=>e.colors.border};
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({accentColor:e})=>e};
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: ${({accentColor:e})=>e}40;

    &::before {
      transform: scaleY(1);
    }
  }
`,k=u.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({color:e})=>e}20;
  color: ${({color:e})=>e};
  border-radius: 12px;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  ${z}:hover & {
    transform: rotate(-10deg) scale(1.1);
  }
`,S=u.div`
  flex: 1;
`,C=u.div`
  font-size: ${({theme:e})=>e.fontSizes.small};
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: 4px;
`,F=u.div`
  font-size: ${({theme:e})=>e.fontSizes.body};
  color: ${({theme:e})=>e.colors.textPrimary};
  font-weight: 600;
`,B=u.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`,P=u.div`
  text-align: center;

  p {
    font-size: ${({theme:e})=>e.fontSizes.body};
    color: ${({theme:e})=>e.colors.textSecondary};
    margin-bottom: ${({theme:e})=>e.spacing.md};
  }

  > div {
    display: flex;
    gap: ${({theme:e})=>e.spacing.md};
    justify-content: center;
  }
`,T=u(j.a)`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.cardBg};
  border: 2px solid ${({theme:e})=>e.colors.border};
  border-radius: 50%;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 1.4rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.accent};
    border-color: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.primary};
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }
`,q=u.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 400px;
  pointer-events: none;
  opacity: 0.1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    border: 3px solid ${({theme:e})=>e.colors.accent};
    border-radius: 50%;
    transform: translate(50%, -50%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 100px;
    right: 100px;
    width: 200px;
    height: 200px;
    border: 2px solid ${({theme:e})=>e.colors.accentAlt};
    border-radius: 50%;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    display: none;
  }
`,A=u.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`,E=u.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
`,H=u.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
`,W=u.label`
  font-size: ${({theme:e})=>e.fontSizes.body};
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,D=u.input`
  padding: ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.cardBg};
  border: 2px solid ${({theme:e})=>e.colors.border};
  border-radius: 8px;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: ${({theme:e})=>e.fontSizes.body};
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({theme:e})=>e.colors.textSecondary}60;
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.accent};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.accent}20;
  }
`,I=u.textarea`
  padding: ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.cardBg};
  border: 2px solid ${({theme:e})=>e.colors.border};
  border-radius: 8px;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: ${({theme:e})=>e.fontSizes.body};
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({theme:e})=>e.colors.textSecondary}60;
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.accent};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.accent}20;
  }
`,L=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.lg};
  background: ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.primary};
  border: none;
  border-radius: 8px;
  font-size: ${({theme:e})=>e.fontSizes.body};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.accentAlt};
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,M=u(j.div)`
  padding: ${({theme:e})=>e.spacing.md};
  background: #10b98120;
  border: 2px solid #10b981;
  border-radius: 8px;
  color: #10b981;
  text-align: center;
  font-weight: 500;
`,O=u(j.div)`
  padding: ${({theme:e})=>e.spacing.md};
  background: #ef444420;
  border: 2px solid #ef4444;
  border-radius: 8px;
  color: #ef4444;
  text-align: center;
  font-weight: 500;
`,V=()=>{const[o,t]=g.useState({name:"",email:"",message:""}),[r,i]=g.useState("idle"),a=e=>{t({...o,[e.target.name]:e.target.value})};return e.jsx(A,{children:e.jsxs(E,{onSubmit:async e=>{e.preventDefault(),i("loading"),setTimeout(()=>{i("success"),t({name:"",email:"",message:""}),setTimeout(()=>i("idle"),5e3)},1500)},children:[e.jsxs(H,{children:[e.jsx(W,{htmlFor:"name",children:"Name"}),e.jsx(D,{type:"text",id:"name",name:"name",value:o.name,onChange:a,required:!0,placeholder:"John Doe"})]}),e.jsxs(H,{children:[e.jsx(W,{htmlFor:"email",children:"Email"}),e.jsx(D,{type:"email",id:"email",name:"email",value:o.email,onChange:a,required:!0,placeholder:"john@example.com"})]}),e.jsxs(H,{children:[e.jsx(W,{htmlFor:"message",children:"Message"}),e.jsx(I,{id:"message",name:"message",value:o.message,onChange:a,required:!0,rows:5,placeholder:"Tell me about your project..."})]}),e.jsx(L,{type:"submit",disabled:"loading"===r,as:j.button,whileHover:{scale:1.02},whileTap:{scale:.98},children:"loading"===r?e.jsx(e.Fragment,{children:"Sending..."}):e.jsxs(e.Fragment,{children:[e.jsx(s,{})," Send Message"]})}),"success"===r&&e.jsx(M,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:"Message sent successfully! I'll get back to you soon."}),"error"===r&&e.jsx(O,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:"Something went wrong. Please try again."})]})})},R=()=>{const{ref:o,isVisible:t}=f({threshold:.1,freezeOnceVisible:!0}),s={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},g=[{icon:e.jsx(m,{}),label:"Email",value:n.email,href:`mailto:${n.email}`,color:"#EA4335"},{icon:e.jsx(p,{}),label:"Phone",value:n.phone,href:`tel:${n.phone}`,color:"#34A853"},{icon:e.jsx(b,{}),label:"Zalo",value:n.zalo,href:`https://zalo.me/${n.zalo}`,color:"#0068FF"},{icon:e.jsx(x,{}),label:"Location",value:"Vietnam",href:"#",color:"#FBBC04"}],u=[{icon:e.jsx(l,{}),href:n.github,label:"GitHub"},{icon:e.jsx(d,{}),href:n.linkedin,label:"LinkedIn"},{icon:e.jsx(c,{}),href:n.facebook,label:"Facebook"}].filter(e=>e.href);return e.jsxs(i,{id:"about",dark:!0,children:[e.jsx(q,{}),e.jsxs(r,{children:[e.jsx(a,{title:"Let's Connect",subtitle:"I'm always interested in hearing about new projects and opportunities"}),e.jsx(y,{ref:o,children:e.jsxs(v,{as:j.div,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},initial:"hidden",animate:t?"visible":"hidden",children:[e.jsx(w,{children:g.map((o,t)=>e.jsxs(z,{as:j.div,variants:s,whileHover:{y:-5,boxShadow:`0 10px 30px ${o.color}30`},href:o.href,target:o.href.startsWith("http")?"_blank":void 0,rel:o.href.startsWith("http")?"noopener noreferrer":void 0,accentColor:o.color,children:[e.jsx(k,{color:o.color,children:o.icon}),e.jsxs(S,{children:[e.jsx(C,{children:o.label}),e.jsx(F,{children:o.value})]})]},t))}),e.jsx(j.div,{variants:s,children:e.jsxs(B,{children:[e.jsx($,{size:"large",icon:e.jsx(h,{}),onClick:()=>window.location.href=`mailto:${n.email}`,children:"Start a Conversation"}),e.jsx($,{size:"large",variant:"outline",onClick:()=>{const e=document.createElement("a");e.href="/resume.pdf",e.download="Resume.pdf",e.click()},children:"Download Resume"})]})}),e.jsx(j.div,{variants:s,children:e.jsxs(P,{children:[e.jsx("p",{children:"Or find me on social media"}),e.jsx("div",{children:u.map((o,t)=>e.jsx(T,{href:o.href,target:"_blank",rel:"noopener noreferrer","aria-label":o.label,whileHover:{scale:1.1,rotate:5},whileTap:{scale:.95},children:o.icon},t))})]})}),e.jsx(j.div,{variants:s,children:e.jsx(V,{})})]})})]})]})};export{R as default};
