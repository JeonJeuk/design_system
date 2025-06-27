import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta = {
  title: 'Design System/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '피그마 디자인 시스템에 맞춰 정의된 Typography 컴포넌트입니다. Heading(XL/L/M/S)과 Body(XL/L/M/S) 시스템을 지원하며, Body는 Regular/Semibold/Bold 굵기를 선택할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['heading-xl', 'heading-l', 'heading-m', 'heading-s', 'body-xl', 'body-l', 'body-m', 'body-s'],
      description: '텍스트 variant',
    },
    weight: {
      control: { type: 'select' },
      options: ['regular', 'semibold', 'bold'],
      description: '폰트 굵기 (Body variant에만 적용)',
    },
    color: {
      control: { type: 'text' },
      description: '텍스트 색상 (토큰 또는 CSS 색상값)',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
      description: '텍스트 정렬',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'body-m',
    children: '기본 Body-M 텍스트입니다.',
  },
};

export const HeadingStyles: Story = {
  args: {
    variant: 'heading-xl',
    children: 'Heading XL (40px/50px)',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="heading-xl">Heading XL (40px/50px)</Typography>
      <Typography variant="heading-l">Heading L (32px/41px)</Typography>
      <Typography variant="heading-m">Heading M (28px/36px)</Typography>
      <Typography variant="heading-s">Heading S (24px/32px)</Typography>
    </div>
  ),
};

export const BodyStyles: Story = {
  args: {
    variant: 'body-xl',
    weight: 'regular',
    children: 'Body XL Regular (20px/30px)',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <Typography variant="body-xl" weight="regular">Body XL Regular (20px/30px)</Typography>
      </div>
      <div>
        <Typography variant="body-l" weight="regular">Body L Regular (18px/28px)</Typography>
      </div>
      <div>
        <Typography variant="body-m" weight="regular">Body M Regular (16px/24px)</Typography>
      </div>
      <div>
        <Typography variant="body-s" weight="regular">Body S Regular (14px/20px)</Typography>
      </div>
    </div>
  ),
};

export const BodyWeights: Story = {
  args: {
    variant: 'body-xl',
    weight: 'regular',
    children: 'Body XL Regular',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Typography variant="body-xl" weight="regular">Body XL Regular</Typography>
        <Typography variant="body-xl" weight="semibold">Body XL Semibold</Typography>
        <Typography variant="body-xl" weight="bold">Body XL Bold</Typography>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Typography variant="body-l" weight="regular">Body L Regular</Typography>
        <Typography variant="body-l" weight="semibold">Body L Semibold</Typography>
        <Typography variant="body-l" weight="bold">Body L Bold</Typography>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Typography variant="body-m" weight="regular">Body M Regular</Typography>
        <Typography variant="body-m" weight="semibold">Body M Semibold</Typography>
        <Typography variant="body-m" weight="bold">Body M Bold</Typography>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Typography variant="body-s" weight="regular">Body S Regular</Typography>
        <Typography variant="body-s" weight="semibold">Body S Semibold</Typography>
        <Typography variant="body-s" weight="bold">Body S Bold</Typography>
      </div>
    </div>
  ),
};

export const ColorVariations: Story = {
  args: {
    variant: 'body-m',
    color: 'primary.500',
    children: 'Primary 색상 텍스트',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography variant="body-m" color="primary.500">Primary 색상 텍스트</Typography>
      <Typography variant="body-m" color="success.600">Success 색상 텍스트</Typography>
      <Typography variant="body-m" color="error.500">Error 색상 텍스트</Typography>
      <Typography variant="body-m" color="warning.500">Warning 색상 텍스트</Typography>
      <Typography variant="body-m" color="gray.600">Gray 색상 텍스트</Typography>
    </div>
  ),
};

export const TextAlignment: Story = {
  args: {
    variant: 'body-m',
    align: 'left',
    children: '왼쪽 정렬 텍스트',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '400px' }}>
      <Typography variant="body-m" align="left">왼쪽 정렬 텍스트</Typography>
      <Typography variant="body-m" align="center">가운데 정렬 텍스트</Typography>
      <Typography variant="body-m" align="right">오른쪽 정렬 텍스트</Typography>
      <Typography variant="body-m" align="justify">
        양쪽 정렬 텍스트입니다. 긴 텍스트를 사용하여 양쪽 정렬이 어떻게 작동하는지 확인할 수 있습니다. 
        피그마 디자인 시스템에 맞춰 구현된 Typography 컴포넌트입니다.
      </Typography>
    </div>
  ),
};

export const AllVariants: Story = {
  args: {
    variant: 'heading-xl',
    children: '전체 타이포그래피 시스템',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px' }}>
      <div>
        <Typography variant="heading-xl" className="mb-4">전체 타이포그래피 시스템</Typography>
        <Typography variant="body-l" color="gray.600">피그마에서 정의된 모든 텍스트 스타일을 확인할 수 있습니다.</Typography>
      </div>
      
      <div>
        <Typography variant="heading-s" className="mb-3">Heading 스타일</Typography>
        <Typography variant="heading-xl">Heading XL</Typography>
        <Typography variant="heading-l">Heading L</Typography>
        <Typography variant="heading-m">Heading M</Typography>
        <Typography variant="heading-s">Heading S</Typography>
      </div>
      
             <div>
         <Typography variant="heading-s" className="mb-3">Body 스타일</Typography>
         <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
           <Typography variant="body-xl" weight="bold">Body XL Bold</Typography>
           <Typography variant="body-l" weight="semibold">Body L Semibold</Typography>
           <Typography variant="body-m" weight="regular">Body M Regular</Typography>
           <Typography variant="body-s" weight="regular">Body S Regular</Typography>
         </div>
       </div>
    </div>
  ),
}; 