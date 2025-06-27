import React from 'react';
import styled from 'styled-components';
import { colors, spacing, borderRadius, shadows, typography } from '../../tokens/index.js';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${typography.fontFamily.sans.join(', ')};
  font-weight: ${typography.fontWeight.medium};
  border-radius: ${borderRadius.md};
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
  
  ${({ size = 'md' }) => {
    const sizes = {
      sm: `
        padding: ${spacing[2]} ${spacing[3]};
        font-size: ${typography.fontSize.sm};
        line-height: ${typography.lineHeight.tight};
      `,
      md: `
        padding: ${spacing[2.5]} ${spacing[4]};
        font-size: ${typography.fontSize.base};
        line-height: ${typography.lineHeight.normal};
      `,
      lg: `
        padding: ${spacing[3]} ${spacing[6]};
        font-size: ${typography.fontSize.lg};
        line-height: ${typography.lineHeight.normal};
      `,
    };
    return sizes[size];
  }}
  
  ${({ variant = 'primary', disabled }) => {
    const variants = {
      primary: `
        background-color: ${colors.primary[500]};
        color: ${colors.white};
        border-color: ${colors.primary[500]};
        box-shadow: ${shadows.sm};
        
        &:hover:not(:disabled) {
          background-color: ${colors.primary[600]};
          border-color: ${colors.primary[600]};
          box-shadow: ${shadows.md};
        }
        
        &:active:not(:disabled) {
          background-color: ${colors.primary[700]};
          border-color: ${colors.primary[700]};
          box-shadow: ${shadows.sm};
        }
      `,
      secondary: `
        background-color: ${colors.gray[100]};
        color: ${colors.gray[900]};
        border-color: ${colors.gray[300]};
        
        &:hover:not(:disabled) {
          background-color: ${colors.gray[200]};
          border-color: ${colors.gray[400]};
        }
        
        &:active:not(:disabled) {
          background-color: ${colors.gray[300]};
        }
      `,
      outline: `
        background-color: transparent;
        color: ${colors.primary[600]};
        border-color: ${colors.primary[300]};
        
        &:hover:not(:disabled) {
          background-color: ${colors.primary[50]};
          border-color: ${colors.primary[400]};
        }
        
        &:active:not(:disabled) {
          background-color: ${colors.primary[100]};
        }
      `,
      ghost: `
        background-color: transparent;
        color: ${colors.gray[700]};
        border-color: transparent;
        
        &:hover:not(:disabled) {
          background-color: ${colors.gray[100]};
        }
        
        &:active:not(:disabled) {
          background-color: ${colors.gray[200]};
        }
      `,
    };
    
    return `
      ${variants[variant]}
      
      ${disabled && `
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      `}
    `;
  }}
  
  &:focus-visible {
    outline: 2px solid ${colors.primary[500]};
    outline-offset: 2px;
  }
`;

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  type = 'button',
  ...props 
}) => {
  return (
    <StyledButton type={type} {...props}>
      {children}
    </StyledButton>
  );
}; 