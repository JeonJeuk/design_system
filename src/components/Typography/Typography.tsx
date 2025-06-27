import React from 'react';
import styled from 'styled-components';
import { typography, colors } from '../../tokens/index.js';

export interface TypographyProps {
  variant?: 'heading-xl' | 'heading-l' | 'heading-m' | 'heading-s' | 'body-xl' | 'body-l' | 'body-m' | 'body-s';
  weight?: 'regular' | 'semibold' | 'bold';
  color?: keyof typeof colors | string;
  align?: 'left' | 'center' | 'right' | 'justify';
  children: React.ReactNode;
  className?: string;
}

const StyledTypography = styled.span<TypographyProps>`
  font-family: ${typography.fontFamily.sans.join(', ')};
  text-align: ${({ align = 'left' }) => align};
  color: ${({ color = 'gray.900' }) => {
    if (typeof color === 'string' && color.includes('.')) {
      const [colorGroup, shade] = color.split('.');
      return (colors as any)[colorGroup]?.[shade] || color;
    }
    return color;
  }};
  
  ${({ variant = 'body-m', weight }) => {
    // Heading 스타일들
    if (variant === 'heading-xl') {
      return `
        font-size: ${typography.heading.xl.fontSize};
        line-height: ${typography.heading.xl.lineHeight};
        font-weight: ${typography.heading.xl.fontWeight};
      `;
    }
    if (variant === 'heading-l') {
      return `
        font-size: ${typography.heading.l.fontSize};
        line-height: ${typography.heading.l.lineHeight};
        font-weight: ${typography.heading.l.fontWeight};
      `;
    }
    if (variant === 'heading-m') {
      return `
        font-size: ${typography.heading.m.fontSize};
        line-height: ${typography.heading.m.lineHeight};
        font-weight: ${typography.heading.m.fontWeight};
      `;
    }
    if (variant === 'heading-s') {
      return `
        font-size: ${typography.heading.s.fontSize};
        line-height: ${typography.heading.s.lineHeight};
        font-weight: ${typography.heading.s.fontWeight};
      `;
    }
    
    // Body 스타일들 (weight에 따라 달라짐)
    const bodyWeight = weight || 'regular';
    
    if (variant === 'body-xl') {
      const style = typography.body.xl[bodyWeight];
      return `
        font-size: ${style.fontSize};
        line-height: ${style.lineHeight};
        font-weight: ${style.fontWeight};
      `;
    }
    if (variant === 'body-l') {
      const style = typography.body.l[bodyWeight];
      return `
        font-size: ${style.fontSize};
        line-height: ${style.lineHeight};
        font-weight: ${style.fontWeight};
      `;
    }
    if (variant === 'body-m') {
      const style = typography.body.m[bodyWeight];
      return `
        font-size: ${style.fontSize};
        line-height: ${style.lineHeight};
        font-weight: ${style.fontWeight};
      `;
    }
    if (variant === 'body-s') {
      const style = typography.body.s[bodyWeight];
      return `
        font-size: ${style.fontSize};
        line-height: ${style.lineHeight};
        font-weight: ${style.fontWeight};
      `;
    }
  }}
`;

export const Typography: React.FC<TypographyProps> = ({ 
  variant = 'body-m', 
  children, 
  ...props 
}) => {
  // heading 변형은 h 태그로, body 변형은 span으로 렌더링
  const Component = variant.startsWith('heading') 
    ? (variant === 'heading-xl' ? 'h1' : 
       variant === 'heading-l' ? 'h2' : 
       variant === 'heading-m' ? 'h3' : 'h4')
    : 'span';
  
  return (
    <StyledTypography as={Component} variant={variant} {...props}>
      {children}
    </StyledTypography>
  );
}; 