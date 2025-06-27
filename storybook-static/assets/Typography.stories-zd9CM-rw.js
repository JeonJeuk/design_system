import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-D2EwB3KJ.js";import{t as e,c as d,d as c}from"./typography-CrTGrKdY.js";const m=c.span`
  font-family: ${e.fontFamily.sans.join(", ")};
  font-weight: ${({weight:o="normal"})=>e.fontWeight[o]};
  text-align: ${({align:o="left"})=>o};
  color: ${({color:o="gray.900"})=>{if(typeof o=="string"&&o.includes(".")){const[t,g]=o.split(".");return d[t]?.[g]||o}return o}};
  
  ${({variant:o="body1"})=>({h1:`
        font-size: ${e.fontSize["5xl"]};
        line-height: ${e.lineHeight.tight};
        font-weight: ${e.fontWeight.bold};
      `,h2:`
        font-size: ${e.fontSize["4xl"]};
        line-height: ${e.lineHeight.tight};
        font-weight: ${e.fontWeight.bold};
      `,h3:`
        font-size: ${e.fontSize["3xl"]};
        line-height: ${e.lineHeight.tight};
        font-weight: ${e.fontWeight.semibold};
      `,h4:`
        font-size: ${e.fontSize["2xl"]};
        line-height: ${e.lineHeight.snug};
        font-weight: ${e.fontWeight.semibold};
      `,h5:`
        font-size: ${e.fontSize.xl};
        line-height: ${e.lineHeight.snug};
        font-weight: ${e.fontWeight.medium};
      `,h6:`
        font-size: ${e.fontSize.lg};
        line-height: ${e.lineHeight.normal};
        font-weight: ${e.fontWeight.medium};
      `,body1:`
        font-size: ${e.fontSize.base};
        line-height: ${e.lineHeight.normal};
        font-weight: ${e.fontWeight.normal};
      `,body2:`
        font-size: ${e.fontSize.sm};
        line-height: ${e.lineHeight.normal};
        font-weight: ${e.fontWeight.normal};
      `,caption:`
        font-size: ${e.fontSize.xs};
        line-height: ${e.lineHeight.tight};
        font-weight: ${e.fontWeight.normal};
      `})[o]}
`,i=({variant:o="body1",children:t,...g})=>{const y=o.startsWith("h")?o:"span";return r.jsx(m,{as:y,variant:o,...g,children:t})},T={title:"Design System/Typography",component:i,parameters:{layout:"centered",docs:{description:{component:"텍스트 표시를 위한 기본 Typography 컴포넌트입니다. 다양한 variant와 스타일을 지원합니다."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6","body1","body2","caption"],description:"텍스트 variant"},color:{control:{type:"text"},description:"텍스트 색상 (토큰 또는 CSS 색상값)"},weight:{control:{type:"select"},options:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],description:"폰트 굵기"},align:{control:{type:"select"},options:["left","center","right","justify"],description:"텍스트 정렬"}}},a={args:{children:"기본 텍스트입니다."}},n={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(i,{variant:"h1",children:"Heading 1"}),r.jsx(i,{variant:"h2",children:"Heading 2"}),r.jsx(i,{variant:"h3",children:"Heading 3"}),r.jsx(i,{variant:"h4",children:"Heading 4"}),r.jsx(i,{variant:"h5",children:"Heading 5"}),r.jsx(i,{variant:"h6",children:"Heading 6"})]})},s={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(i,{variant:"body1",children:"Body 1 텍스트입니다. 본문에 사용되는 기본 크기입니다."}),r.jsx(i,{variant:"body2",children:"Body 2 텍스트입니다. 조금 더 작은 본문 텍스트입니다."}),r.jsx(i,{variant:"caption",children:"Caption 텍스트입니다. 작은 설명 텍스트입니다."})]})},p={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(i,{color:"primary.500",children:"Primary 색상 텍스트"}),r.jsx(i,{color:"success.600",children:"Success 색상 텍스트"}),r.jsx(i,{color:"error.500",children:"Error 색상 텍스트"}),r.jsx(i,{color:"warning.500",children:"Warning 색상 텍스트"}),r.jsx(i,{color:"gray.600",children:"Gray 색상 텍스트"})]})},l={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(i,{weight:"light",children:"Light 굵기"}),r.jsx(i,{weight:"normal",children:"Normal 굵기"}),r.jsx(i,{weight:"medium",children:"Medium 굵기"}),r.jsx(i,{weight:"semibold",children:"Semibold 굵기"}),r.jsx(i,{weight:"bold",children:"Bold 굵기"})]})},h={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"300px"},children:[r.jsx(i,{align:"left",children:"왼쪽 정렬 텍스트"}),r.jsx(i,{align:"center",children:"가운데 정렬 텍스트"}),r.jsx(i,{align:"right",children:"오른쪽 정렬 텍스트"}),r.jsx(i,{align:"justify",children:"양쪽 정렬 텍스트입니다. 긴 텍스트를 사용하여 양쪽 정렬이 어떻게 작동하는지 확인할 수 있습니다."})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: '기본 텍스트입니다.'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Typography variant="body1">Body 1 텍스트입니다. 본문에 사용되는 기본 크기입니다.</Typography>
      <Typography variant="body2">Body 2 텍스트입니다. 조금 더 작은 본문 텍스트입니다.</Typography>
      <Typography variant="caption">Caption 텍스트입니다. 작은 설명 텍스트입니다.</Typography>
    </div>
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Typography color="primary.500">Primary 색상 텍스트</Typography>
      <Typography color="success.600">Success 색상 텍스트</Typography>
      <Typography color="error.500">Error 색상 텍스트</Typography>
      <Typography color="warning.500">Warning 색상 텍스트</Typography>
      <Typography color="gray.600">Gray 색상 텍스트</Typography>
    </div>
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Typography weight="light">Light 굵기</Typography>
      <Typography weight="normal">Normal 굵기</Typography>
      <Typography weight="medium">Medium 굵기</Typography>
      <Typography weight="semibold">Semibold 굵기</Typography>
      <Typography weight="bold">Bold 굵기</Typography>
    </div>
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '300px'
  }}>
      <Typography align="left">왼쪽 정렬 텍스트</Typography>
      <Typography align="center">가운데 정렬 텍스트</Typography>
      <Typography align="right">오른쪽 정렬 텍스트</Typography>
      <Typography align="justify">양쪽 정렬 텍스트입니다. 긴 텍스트를 사용하여 양쪽 정렬이 어떻게 작동하는지 확인할 수 있습니다.</Typography>
    </div>
}`,...h.parameters?.docs?.source}}};const v=["Default","Headings","Body","Colors","Weights","Alignment"];export{h as Alignment,s as Body,p as Colors,a as Default,n as Headings,l as Weights,v as __namedExportsOrder,T as default};
