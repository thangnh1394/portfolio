import{j as i,f as s}from"./index-CEPyOHJs.js";import{d as t,l as r}from"./styled-vendor-Cp60Z__U.js";const c=t.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:o})=>o.spacing.md};

  @media (min-width: ${({theme:o})=>o.breakpoints.tablet}) {
    padding: 0 ${({theme:o})=>o.spacing.lg};
  }

  @media (min-width: ${({theme:o})=>o.breakpoints.desktop}) {
    padding: 0 ${({theme:o})=>o.spacing.xl};
  }
`,g=({children:o,className:n,id:a})=>i.jsx(c,{className:n,id:a,children:o}),$=t.section`
  background-color: ${({theme:o,dark:n})=>n?o.colors.secondary:o.colors.primary};
  min-height: ${({fullHeight:o})=>o?"100vh":"auto"};
  display: ${({fullHeight:o})=>o?"flex":"block"};
  align-items: ${({fullHeight:o})=>o?"center":"stretch"};
  position: relative;
  overflow: hidden;

  &:nth-child(even) {
    background-color: ${({theme:o,dark:n})=>n?o.colors.primary:"transparent"};
  }
`,m=t.div`
  text-align: ${({align:o})=>o};
  margin-bottom: ${({theme:o})=>o.spacing.xxl};
  position: relative;
  ${s}
`,b=t.h2`
  font-size: ${({theme:o})=>o.fontSizes.h1};
  font-weight: 800;
  color: ${({theme:o})=>o.colors.textPrimary};
  margin-bottom: ${({theme:o})=>o.spacing.sm};
  position: relative;
  display: inline-block;
`,x=t.span`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: ${({theme:o})=>o.colors.accent};
  border-radius: 2px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -80px;
    transform: translateY(-50%);
    width: 60px;
    height: 2px;
    background: ${({theme:o})=>o.colors.accent};
    opacity: 0.5;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -80px;
    transform: translateY(-50%);
    width: 60px;
    height: 2px;
    background: ${({theme:o})=>o.colors.accent};
    opacity: 0.5;
  }
`,h=t.p`
  font-size: ${({theme:o})=>o.fontSizes.body};
  color: ${({theme:o})=>o.colors.textSecondary};
  margin-top: ${({theme:o})=>o.spacing.md};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
`,e={small:r`
    padding: ${({theme:o})=>`${o.spacing.xs} ${o.spacing.sm}`};
    font-size: ${({theme:o})=>o.fontSizes.small};
  `,medium:r`
    padding: ${({theme:o})=>`${o.spacing.sm} ${o.spacing.md}`};
    font-size: ${({theme:o})=>o.fontSizes.body};
  `,large:r`
    padding: ${({theme:o})=>`${o.spacing.md} ${o.spacing.lg}`};
    font-size: ${({theme:o})=>o.fontSizes.h3};
  `},l={primary:r`
    background-color: ${({theme:o})=>o.colors.accent};
    color: ${({theme:o})=>o.colors.primary};
    border: 2px solid ${({theme:o})=>o.colors.accent};

    &:hover {
      background-color: transparent;
      color: ${({theme:o})=>o.colors.accent};
      box-shadow: ${({theme:o})=>o.shadows.glow};
    }
  `,secondary:r`
    background-color: ${({theme:o})=>o.colors.secondary};
    color: ${({theme:o})=>o.colors.textPrimary};
    border: 2px solid ${({theme:o})=>o.colors.secondary};

    &:hover {
      background-color: ${({theme:o})=>o.colors.accent};
      border-color: ${({theme:o})=>o.colors.accent};
      color: ${({theme:o})=>o.colors.primary};
    }
  `,outline:r`
    background-color: transparent;
    color: ${({theme:o})=>o.colors.accent};
    border: 2px solid ${({theme:o})=>o.colors.accent};

    &:hover {
      background-color: ${({theme:o})=>o.colors.accent};
      color: ${({theme:o})=>o.colors.primary};
    }
  `};t.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:o})=>o.spacing.xs};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: ${({theme:o})=>o.transitions.normal};
  text-decoration: none;
  width: ${({fullWidth:o})=>o?"100%":"auto"};

  ${({size:o})=>e[o]}
  ${({variant:o})=>l[o]}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;t.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;export{g as C,$ as S,m as T,b as a,x as b,h as c};
//# sourceMappingURL=styles-CLPj2Uue.js.map
