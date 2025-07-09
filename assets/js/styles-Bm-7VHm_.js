import{j as e,f as o}from"./index-CftL8cBz.js";import{d as t,l as r}from"./styled-vendor-CAhPJ6Jj.js";const a=t.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.md};

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: 0 ${({theme:e})=>e.spacing.lg};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
    padding: 0 ${({theme:e})=>e.spacing.xl};
  }
`,i=({children:o,className:t,id:r})=>e.jsx(a,{className:t,id:r,children:o}),n=t.section`
  background-color: ${({theme:e,dark:o})=>o?e.colors.secondary:e.colors.primary};
  min-height: ${({fullHeight:e})=>e?"100vh":"auto"};
  display: ${({fullHeight:e})=>e?"flex":"block"};
  align-items: ${({fullHeight:e})=>e?"center":"stretch"};
  position: relative;
  overflow: hidden;

  &:nth-child(even) {
    background-color: ${({theme:e,dark:o})=>o?e.colors.primary:"transparent"};
  }
`,s=t.div`
  text-align: ${({align:e})=>e};
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  position: relative;
  ${o}
`,c=t.h2`
  font-size: ${({theme:e})=>e.fontSizes.h1};
  font-weight: 800;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  position: relative;
  display: inline-block;
`,l=t.span`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: ${({theme:e})=>e.colors.accent};
  border-radius: 2px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -80px;
    transform: translateY(-50%);
    width: 60px;
    height: 2px;
    background: ${({theme:e})=>e.colors.accent};
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
    background: ${({theme:e})=>e.colors.accent};
    opacity: 0.5;
  }
`,m=t.p`
  font-size: ${({theme:e})=>e.fontSizes.body};
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-top: ${({theme:e})=>e.spacing.md};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
`,d={small:r`
    padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.sm}`};
    font-size: ${({theme:e})=>e.fontSizes.small};
  `,medium:r`
    padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.md}`};
    font-size: ${({theme:e})=>e.fontSizes.body};
  `,large:r`
    padding: ${({theme:e})=>`${e.spacing.md} ${e.spacing.lg}`};
    font-size: ${({theme:e})=>e.fontSizes.h3};
  `},h={primary:r`
    background-color: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.primary};
    border: 2px solid ${({theme:e})=>e.colors.accent};

    &:hover {
      background-color: transparent;
      color: ${({theme:e})=>e.colors.accent};
      box-shadow: ${({theme:e})=>e.shadows.glow};
    }
  `,secondary:r`
    background-color: ${({theme:e})=>e.colors.secondary};
    color: ${({theme:e})=>e.colors.textPrimary};
    border: 2px solid ${({theme:e})=>e.colors.secondary};

    &:hover {
      background-color: ${({theme:e})=>e.colors.accent};
      border-color: ${({theme:e})=>e.colors.accent};
      color: ${({theme:e})=>e.colors.primary};
    }
  `,outline:r`
    background-color: transparent;
    color: ${({theme:e})=>e.colors.accent};
    border: 2px solid ${({theme:e})=>e.colors.accent};

    &:hover {
      background-color: ${({theme:e})=>e.colors.accent};
      color: ${({theme:e})=>e.colors.primary};
    }
  `},p=t.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.xs};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.normal};
  text-decoration: none;
  width: ${({fullWidth:e})=>e?"100%":"auto"};

  ${({size:e})=>d[e]}
  ${({variant:e})=>h[e]}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      transform: translate(-50%, -50%);
      animation: ripple 0.6s ease-out;
    }
  }

  @keyframes ripple {
    to {
      width: 200%;
      height: 200%;
      opacity: 0;
    }
  }
`,g=t.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;export{g as B,i as C,p as S,s as T,n as a,c as b,l as c,m as d};
