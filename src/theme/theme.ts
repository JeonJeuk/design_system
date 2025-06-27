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
        fontWeight: typography.fontWeight.medium,
        borderRadius: borderRadius.md,
        transition: 'all 0.2s ease-in-out',
      },
      sizes: {
        sm: {
          padding: `${spacing[2]} ${spacing[3]}`,
          fontSize: typography.fontSize.sm,
        },
        md: {
          padding: `${spacing[2.5]} ${spacing[4]}`,
          fontSize: typography.fontSize.base,
        },
        lg: {
          padding: `${spacing[3]} ${spacing[6]}`,
          fontSize: typography.fontSize.lg,
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
          fontSize: typography.fontSize['5xl'],
          lineHeight: typography.lineHeight.tight,
          fontWeight: typography.fontWeight.bold,
        },
        h2: {
          fontSize: typography.fontSize['4xl'],
          lineHeight: typography.lineHeight.tight,
          fontWeight: typography.fontWeight.bold,
        },
        h3: {
          fontSize: typography.fontSize['3xl'],
          lineHeight: typography.lineHeight.tight,
          fontWeight: typography.fontWeight.semibold,
        },
        h4: {
          fontSize: typography.fontSize['2xl'],
          lineHeight: typography.lineHeight.snug,
          fontWeight: typography.fontWeight.semibold,
        },
        h5: {
          fontSize: typography.fontSize.xl,
          lineHeight: typography.lineHeight.snug,
          fontWeight: typography.fontWeight.medium,
        },
        h6: {
          fontSize: typography.fontSize.lg,
          lineHeight: typography.lineHeight.normal,
          fontWeight: typography.fontWeight.medium,
        },
        body1: {
          fontSize: typography.fontSize.base,
          lineHeight: typography.lineHeight.normal,
          fontWeight: typography.fontWeight.normal,
        },
        body2: {
          fontSize: typography.fontSize.sm,
          lineHeight: typography.lineHeight.normal,
          fontWeight: typography.fontWeight.normal,
        },
        caption: {
          fontSize: typography.fontSize.xs,
          lineHeight: typography.lineHeight.tight,
          fontWeight: typography.fontWeight.normal,
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