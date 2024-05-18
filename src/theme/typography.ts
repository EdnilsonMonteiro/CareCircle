const fontSizes = {
  '3xs': '0.75rem',
  '2xs': '0.875rem',
  xs: '1rem',
  sm: '1.25rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.5rem',
  '2xl': '3rem',
  '3xl': '3.5rem',
  display: '4rem',
};

const lineHeights = {
  default: '100%',
  xs: '115%',
  sm: '120%',
  md: '133%',
  lg: '140%',
  xl: '170%',
  '2xl': '200%',
};

const letterSpacings = {
  none: 0,
  default: '1px',
  xs: '1.12px',
  sm: '1.22px',
  md: '1.33px',
  lg: '1.4px',
  xl: '1.48px',
  '2xl': '1.6px',
};

const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
};

export default {
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Anek Latin, sans-serif',
  },
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
} as const;
