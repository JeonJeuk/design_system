# @jeuk/design-system

React 기반 디자인 시스템 라이브러리입니다. TypeScript와 styled-components를 사용하여 일관된 UI 컴포넌트를 제공합니다.

## 🚀 특징

- ⚡️ **TypeScript 지원**: 완전한 타입 안정성
- 🎨 **디자인 토큰**: 체계적인 색상, 타이포그래피, 스페이싱 시스템
- 📱 **반응형**: 모바일부터 데스크톱까지 지원
- 🎯 **접근성**: WAI-ARIA 가이드라인 준수
- 📖 **Storybook**: 모든 컴포넌트의 문서화 및 시각화
- 🔧 **커스터마이징**: 테마 시스템을 통한 유연한 스타일링

## 📦 설치

```bash
npm install @jeuk/design-system styled-components
```

## 🔧 사용법

### 기본 설정

애플리케이션의 최상위에서 `ThemeProvider`로 감싸주세요:

```tsx
import React from 'react';
import { ThemeProvider } from '@jeuk/design-system';

function App() {
  return (
    <ThemeProvider>
      {/* 애플리케이션 컴포넌트들 */}
    </ThemeProvider>
  );
}
```

### 컴포넌트 사용

```tsx
import { Button, Typography } from '@jeuk/design-system';

function Example() {
  return (
    <div>
      <Typography variant="h1">안녕하세요!</Typography>
      <Typography variant="body1">
        이것은 디자인 시스템의 예제입니다.
      </Typography>
      <Button variant="primary" onClick={() => console.log('클릭!')}>
        클릭하세요
      </Button>
    </div>
  );
}
```

## 📚 컴포넌트

### Typography

텍스트 표시를 위한 기본 컴포넌트입니다.

```tsx
<Typography variant="h1" color="primary.500" weight="bold">
  제목 텍스트
</Typography>
```

**Props:**
- `variant`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption'
- `color`: 토큰 색상 또는 CSS 색상값
- `weight`: 폰트 굵기
- `align`: 텍스트 정렬

### Button

사용자 인터랙션을 위한 버튼 컴포넌트입니다.

```tsx
<Button variant="primary" size="md" fullWidth>
  버튼
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: 비활성화 상태
- `fullWidth`: 전체 너비 사용

## 🎨 디자인 토큰

### Colors

```tsx
import { colors } from '@jeuk/design-system';

// Primary colors
colors.primary[500]  // #0ea5e9
colors.primary[600]  // #0284c7

// Semantic colors
colors.success[500]  // #22c55e
colors.error[500]    // #ef4444
colors.warning[500]  // #f97316
```

### Typography

```tsx
import { typography } from '@jeuk/design-system';

typography.fontSize.lg      // 1.125rem
typography.fontWeight.bold  // 700
typography.lineHeight.normal // 1.5
```

### Spacing

```tsx
import { spacing } from '@jeuk/design-system';

spacing[4]   // 1rem (16px)
spacing[8]   // 2rem (32px)
spacing[12]  // 3rem (48px)
```

## 🛠 개발

### 로컬 개발 환경

```bash
# 저장소 클론
git clone https://github.com/jeuk/design-system.git
cd design-system

# 의존성 설치
npm install

# Storybook 실행
npm run storybook

# 빌드
npm run build
```

### 스크립트

- `npm run storybook`: Storybook 개발 서버 실행
- `npm run build`: 라이브러리 빌드
- `npm run build:storybook`: Storybook 정적 빌드
- `npm run lint`: ESLint 실행
- `npm run lint:fix`: ESLint 자동 수정

## 📖 Storybook

모든 컴포넌트는 Storybook에서 확인할 수 있습니다:

```bash
npm run storybook
```

브라우저에서 `http://localhost:6006`으로 접속하세요.

## 🔄 버전 관리

이 프로젝트는 [Semantic Versioning](https://semver.org/)을 따릅니다.

## 📄 라이선스

MIT License

## 🤝 기여하기

기여는 언제나 환영합니다! Issue를 열어 문제를 제기하거나 Pull Request를 보내주세요.

1. 프로젝트를 포크합니다
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성합니다
