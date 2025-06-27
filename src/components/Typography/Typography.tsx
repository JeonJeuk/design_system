import React from 'react';
import styled from 'styled-components';
import { typography, colors } from '../../tokens/index.js';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption';
  color?: keyof typeof colors | string;
  weight?: keyof typeof typography.fontWeight;
  align?: 'left' | 'center' | 'right' | 'justify';
  children: React.ReactNode;
  className?: string;
}

const StyledTypography = styled.span<TypographyProps>`
  font-family: ${typography.fontFamily.sans.join(', ')};
  font-weight: ${({ weight = 'normal' }) => typography.fontWeight[weight]};
  text-align: ${({ align = 'left' }) => align};
  color: ${({ color = 'gray.900' }) => {
    if (typeof color === 'string' && color.includes('.')) {
      const [colorGroup, shade] = color.split('.');
      return (colors as any)[colorGroup]?.[shade] || color;
    }
    return color;
  }};
  
  ${({ variant = 'body1' }) => {
    const variants = {
      h1: `
        font-size: ${typography.fontSize['5xl']};
        line-height: ${typography.lineHeight.tight};
        font-weight: ${typography.fontWeight.bold};
      `,
      h2: `
        font-size: ${typography.fontSize['4xl']};
        line-height: ${typography.lineHeight.tight};
        font-weight: ${typography.fontWeight.bold};
      `,
      h3: `
        font-size: ${typography.fontSize['3xl']};
        line-height: ${typography.lineHeight.tight};
        font-weight: ${typography.fontWeight.semibold};
      `,
      h4: `
        font-size: ${typography.fontSize['2xl']};
        line-height: ${typography.lineHeight.snug};
        font-weight: ${typography.fontWeight.semibold};
      `,
      h5: `
        font-size: ${typography.fontSize.xl};
        line-height: ${typography.lineHeight.snug};
        font-weight: ${typography.fontWeight.medium};
      `,
      h6: `
        font-size: ${typography.fontSize.lg};
        line-height: ${typography.lineHeight.normal};
        font-weight: ${typography.fontWeight.medium};
      `,
      body1: `
        font-size: ${typography.fontSize.base};
        line-height: ${typography.lineHeight.normal};
        font-weight: ${typography.fontWeight.normal};
      `,
      body2: `
        font-size: ${typography.fontSize.sm};
        line-height: ${typography.lineHeight.normal};
        font-weight: ${typography.fontWeight.normal};
      `,
      caption: `
        font-size: ${typography.fontSize.xs};
        line-height: ${typography.lineHeight.tight};
        font-weight: ${typography.fontWeight.normal};
      `,
    };
    return variants[variant];
  }}
`;

export const Typography: React.FC<TypographyProps> = ({ 
  variant = 'body1', 
  children, 
  ...props 
}) => {
  const Component = variant.startsWith('h') ? variant : 'span';
  
  return (
    <StyledTypography as={Component} variant={variant} {...props}>
      {children}
    </StyledTypography>
  );
}; 