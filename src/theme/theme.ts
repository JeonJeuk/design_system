import { colors, typography, spacing, borderRadius, shadows } from '../tokens/index.js';

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  
  // 컴포넌트별 기본 스타일
  components: {
    Button: {
      baseStyle: {
        fontFamily: typography.fontFamily.sans.join(', '),
        fontWeight: typography.fontWeight.semibold,
        borderRadius: borderRadius.md,
        transition: 'all 0.2s ease-in-out',
      },
      sizes: {
        sm: {
          padding: `${spacing[2]} ${spacing[3]}`,
          fontSize: typography.body.s.regular.fontSize,
        },
        md: {
          padding: `${spacing[2.5]} ${spacing[4]}`,
          fontSize: typography.body.m.regular.fontSize,
        },
        lg: {
          padding: `${spacing[3]} ${spacing[6]}`,
          fontSize: typography.body.l.regular.fontSize,
        },
      },
      variants: {
        primary: {
          backgroundColor: colors.primary[500],
          color: colors.white,
          borderColor: colors.primary[500],
        },
        secondary: {
          backgroundColor: colors.gray[100],
          color: colors.gray[900],
          borderColor: colors.gray[300],
        },
        outline: {
          backgroundColor: 'transparent',
          color: colors.primary[600],
          borderColor: colors.primary[300],
        },
        ghost: {
          backgroundColor: 'transparent',
          color: colors.gray[700],
          borderColor: 'transparent',
        },
      },
    },
    Typography: {
      baseStyle: {
        fontFamily: typography.fontFamily.sans.join(', '),
      },
      variants: {
        h1: {
          fontSize: typography.heading.xl.fontSize,
          lineHeight: typography.heading.xl.lineHeight,
          fontWeight: typography.heading.xl.fontWeight,
        },
        h2: {
          fontSize: typography.heading.l.fontSize,
          lineHeight: typography.heading.l.lineHeight,
          fontWeight: typography.heading.l.fontWeight,
        },
        h3: {
          fontSize: typography.heading.m.fontSize,
          lineHeight: typography.heading.m.lineHeight,
          fontWeight: typography.heading.m.fontWeight,
        },
        h4: {
          fontSize: typography.heading.s.fontSize,
          lineHeight: typography.heading.s.lineHeight,
          fontWeight: typography.heading.s.fontWeight,
        },
        h5: {
          fontSize: typography.body.xl.semibold.fontSize,
          lineHeight: typography.body.xl.semibold.lineHeight,
          fontWeight: typography.body.xl.semibold.fontWeight,
        },
        h6: {
          fontSize: typography.body.l.semibold.fontSize,
          lineHeight: typography.body.l.semibold.lineHeight,
          fontWeight: typography.body.l.semibold.fontWeight,
        },
        body1: {
          fontSize: typography.body.m.regular.fontSize,
          lineHeight: typography.body.m.regular.lineHeight,
          fontWeight: typography.body.m.regular.fontWeight,
        },
        body2: {
          fontSize: typography.body.s.regular.fontSize,
          lineHeight: typography.body.s.regular.lineHeight,
          fontWeight: typography.body.s.regular.fontWeight,
        },
        caption: {
          fontSize: typography.body.s.regular.fontSize,
          lineHeight: typography.body.s.regular.lineHeight,
          fontWeight: typography.body.s.regular.fontWeight,
        },
      },
    },
  },
  
  // 반응형 breakpoints
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  
  // z-index 스케일
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
} as const;

export type Theme = typeof theme; 