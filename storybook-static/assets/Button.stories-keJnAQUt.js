import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-D2EwB3KJ.js";import{t as o,c as r,d as v}from"./typography-CrTGrKdY.js";const n={2:"0.5rem",2.5:"0.625rem",3:"0.75rem",4:"1rem",6:"1.5rem"},$={md:"0.375rem"},b={sm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"},f=v.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${o.fontFamily.sans.join(", ")};
  font-weight: ${o.fontWeight.medium};
  border-radius: ${$.md};
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  
  ${({fullWidth:t})=>t&&"width: 100%;"}
  
  ${({size:t="md"})=>({sm:`
        padding: ${n[2]} ${n[3]};
        font-size: ${o.fontSize.sm};
        line-height: ${o.lineHeight.tight};
      `,md:`
        padding: ${n[2.5]} ${n[4]};
        font-size: ${o.fontSize.base};
        line-height: ${o.lineHeight.normal};
      `,lg:`
        padding: ${n[3]} ${n[6]};
        font-size: ${o.fontSize.lg};
        line-height: ${o.lineHeight.normal};
      `})[t]}
  
  ${({variant:t="primary",disabled:s})=>`
      ${{primary:`
        background-color: ${r.primary[500]};
        color: ${r.white};
        border-color: ${r.primary[500]};
        box-shadow: ${b.sm};
        
        &:hover:not(:disabled) {
          background-color: ${r.primary[600]};
          border-color: ${r.primary[600]};
          box-shadow: ${b.md};
        }
        
        &:active:not(:disabled) {
          background-color: ${r.primary[700]};
          border-color: ${r.primary[700]};
          box-shadow: ${b.sm};
        }
      `,secondary:`
        background-color: ${r.gray[100]};
        color: ${r.gray[900]};
        border-color: ${r.gray[300]};
        
        &:hover:not(:disabled) {
          background-color: ${r.gray[200]};
          border-color: ${r.gray[400]};
        }
        
        &:active:not(:disabled) {
          background-color: ${r.gray[300]};
        }
      `,outline:`
        background-color: transparent;
        color: ${r.primary[600]};
        border-color: ${r.primary[300]};
        
        &:hover:not(:disabled) {
          background-color: ${r.primary[50]};
          border-color: ${r.primary[400]};
        }
        
        &:active:not(:disabled) {
          background-color: ${r.primary[100]};
        }
      `,ghost:`
        background-color: transparent;
        color: ${r.gray[700]};
        border-color: transparent;
        
        &:hover:not(:disabled) {
          background-color: ${r.gray[100]};
        }
        
        &:active:not(:disabled) {
          background-color: ${r.gray[200]};
        }
      `}[t]}
      
      ${s&&`
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      `}
    `}
  
  &:focus-visible {
    outline: 2px solid ${r.primary[500]};
    outline-offset: 2px;
  }
`,a=({children:t,type:s="button",...x})=>e.jsx(f,{type:s,...x,children:t}),z={title:"Design System/Button",component:a,parameters:{layout:"centered",docs:{description:{component:"사용자 인터랙션을 위한 기본 Button 컴포넌트입니다. 다양한 variant와 크기를 지원합니다."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","ghost"],description:"버튼 스타일 variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"버튼 크기"},disabled:{control:{type:"boolean"},description:"비활성화 상태"},fullWidth:{control:{type:"boolean"},description:"전체 너비 사용 여부"}},args:{onClick:()=>console.log("Button clicked")}},i={args:{children:"기본 버튼"}},d={args:{variant:"primary",children:"Primary 버튼"}},c={args:{variant:"secondary",children:"Secondary 버튼"}},l={args:{variant:"outline",children:"Outline 버튼"}},p={args:{variant:"ghost",children:"Ghost 버튼"}},u={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"200px"},children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"outline",children:"Outline"}),e.jsx(a,{variant:"ghost",children:"Ghost"})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"200px"},children:[e.jsx(a,{variant:"primary",disabled:!0,children:"Primary Disabled"}),e.jsx(a,{variant:"secondary",disabled:!0,children:"Secondary Disabled"}),e.jsx(a,{variant:"outline",disabled:!0,children:"Outline Disabled"}),e.jsx(a,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})},y={render:()=>e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{fullWidth:!0,children:"전체 너비 버튼"})})},h={args:{variant:"primary",children:"클릭해보세요!",onClick:()=>alert("버튼이 클릭되었습니다!")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: '기본 버튼'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary 버튼'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary 버튼'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline 버튼'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost 버튼'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '200px'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '200px'
  }}>
      <Button variant="primary" disabled>Primary Disabled</Button>
      <Button variant="secondary" disabled>Secondary Disabled</Button>
      <Button variant="outline" disabled>Outline Disabled</Button>
      <Button variant="ghost" disabled>Ghost Disabled</Button>
    </div>
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <Button fullWidth>전체 너비 버튼</Button>
    </div>
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: '클릭해보세요!',
    onClick: () => alert('버튼이 클릭되었습니다!')
  }
}`,...h.parameters?.docs?.source}}};const D=["Default","Primary","Secondary","Outline","Ghost","Sizes","AllVariants","DisabledStates","FullWidth","Interactive"];export{m as AllVariants,i as Default,g as DisabledStates,y as FullWidth,p as Ghost,h as Interactive,l as Outline,d as Primary,c as Secondary,u as Sizes,D as __namedExportsOrder,z as default};
