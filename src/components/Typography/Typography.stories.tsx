import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta = {
  title: 'Design System/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '텍스트 표시를 위한 기본 Typography 컴포넌트입니다. 다양한 variant와 스타일을 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption'],
      description: '텍스트 variant',
    },
    color: {
      control: { type: 'text' },
      description: '텍스트 색상 (토큰 또는 CSS 색상값)',
    },
    weight: {
      control: { type: 'select' },
      options: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
      description: '폰트 굵기',
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
    children: '기본 텍스트입니다.',
  },
};

export const Headings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </div>
  ),
};

export const Body: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography variant="body1">Body 1 텍스트입니다. 본문에 사용되는 기본 크기입니다.</Typography>
      <Typography variant="body2">Body 2 텍스트입니다. 조금 더 작은 본문 텍스트입니다.</Typography>
      <Typography variant="caption">Caption 텍스트입니다. 작은 설명 텍스트입니다.</Typography>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography color="primary.500">Primary 색상 텍스트</Typography>
      <Typography color="success.600">Success 색상 텍스트</Typography>
      <Typography color="error.500">Error 색상 텍스트</Typography>
      <Typography color="warning.500">Warning 색상 텍스트</Typography>
      <Typography color="gray.600">Gray 색상 텍스트</Typography>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography weight="light">Light 굵기</Typography>
      <Typography weight="normal">Normal 굵기</Typography>
      <Typography weight="medium">Medium 굵기</Typography>
      <Typography weight="semibold">Semibold 굵기</Typography>
      <Typography weight="bold">Bold 굵기</Typography>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '300px' }}>
      <Typography align="left">왼쪽 정렬 텍스트</Typography>
      <Typography align="center">가운데 정렬 텍스트</Typography>
      <Typography align="right">오른쪽 정렬 텍스트</Typography>
      <Typography align="justify">양쪽 정렬 텍스트입니다. 긴 텍스트를 사용하여 양쪽 정렬이 어떻게 작동하는지 확인할 수 있습니다.</Typography>
    </div>
  ),
}; 