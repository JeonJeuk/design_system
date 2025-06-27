export const fontFamily = {
  sans: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
  serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
  mono: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ],
} as const;

export const fontWeight = {
  regular: '400',
  semibold: '600',
  bold: '700',
} as const;

// Heading Styles (피그마 정의 기준)
export const heading = {
  xl: {
    fontSize: '2.5rem',      // 40px
    lineHeight: 1.25,        // 50px / 40px = 1.25
    fontWeight: fontWeight.bold,
  },
  l: {
    fontSize: '2rem',        // 32px
    lineHeight: 1.28125,     // 41px / 32px ≈ 1.28
    fontWeight: fontWeight.bold,
  },
  m: {
    fontSize: '1.75rem',     // 28px
    lineHeight: 1.2857,      // 36px / 28px ≈ 1.29
    fontWeight: fontWeight.bold,
  },
  s: {
    fontSize: '1.5rem',      // 24px
    lineHeight: 1.3333,      // 32px / 24px ≈ 1.33
    fontWeight: fontWeight.bold,
  },
} as const;

// Body Styles (피그마 정의 기준)
export const body = {
  xl: {
    regular: {
      fontSize: '1.25rem',   // 20px
      lineHeight: 1.5,       // 30px / 20px = 1.5
      fontWeight: fontWeight.regular,
    },
    semibold: {
      fontSize: '1.25rem',   // 20px
      lineHeight: 1.5,       // 30px / 20px = 1.5
      fontWeight: fontWeight.semibold,
    },
    bold: {
      fontSize: '1.25rem',   // 20px
      lineHeight: 1.5,       // 30px / 20px = 1.5
      fontWeight: fontWeight.bold,
    },
  },
  l: {
    regular: {
      fontSize: '1.125rem',  // 18px
      lineHeight: 1.5556,    // 28px / 18px ≈ 1.56
      fontWeight: fontWeight.regular,
    },
    semibold: {
      fontSize: '1.125rem',  // 18px
      lineHeight: 1.5556,    // 28px / 18px ≈ 1.56
      fontWeight: fontWeight.semibold,
    },
    bold: {
      fontSize: '1.125rem',  // 18px
      lineHeight: 1.5556,    // 28px / 18px ≈ 1.56
      fontWeight: fontWeight.bold,
    },
  },
  m: {
    regular: {
      fontSize: '1rem',      // 16px
      lineHeight: 1.5,       // 24px / 16px = 1.5
      fontWeight: fontWeight.regular,
    },
    semibold: {
      fontSize: '1rem',      // 16px
      lineHeight: 1.5,       // 24px / 16px = 1.5
      fontWeight: fontWeight.semibold,
    },
    bold: {
      fontSize: '1rem',      // 16px
      lineHeight: 1.5,       // 24px / 16px = 1.5
      fontWeight: fontWeight.bold,
    },
  },
  s: {
    regular: {
      fontSize: '0.875rem',  // 14px
      lineHeight: 1.4286,    // 20px / 14px ≈ 1.43
      fontWeight: fontWeight.regular,
    },
    semibold: {
      fontSize: '0.875rem',  // 14px
      lineHeight: 1.4286,    // 20px / 14px ≈ 1.43
      fontWeight: fontWeight.semibold,
    },
    bold: {
      fontSize: '0.875rem',  // 14px
      lineHeight: 1.4286,    // 20px / 14px ≈ 1.43
      fontWeight: fontWeight.bold,
    },
  },
} as const;

export const letterSpacing = {
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
} as const;

export const typography = {
  fontFamily,
  fontWeight,
  heading,
  body,
  letterSpacing,
} as const;

export type TypographyToken = typeof typography; 