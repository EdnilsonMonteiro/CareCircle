const display = {
  'display-80': {
    fontFamily: 'heading',
    fontWeight: 'semibold',
    fontSize: '80px',
    lineHeight: '120%',
    letterSpacing: '0%',
  },
  'display-72': {
    fontFamily: 'heading',
    fontWeight: 'semibold',
    fontSize: '80px',
    lineHeight: '120%',
    letterSpacing: '0%',
  },
};
const title = {
  'title-2xl': {
    fontFamily: 'heading',
    fontSize: '64px',
    lineHeight: '120%',
    fontWeight: 'semibold',
    letterSpacing: '0%',
  },
  'title-xl': {
    fontFamily: 'heading',
    fontSize: '56px',
    lineHeight: '120%',
    fontWeight: 'semibold',
    letterSpacing: '0%',
  },
  'title-lg': {
    fontFamily: 'heading',
    fontSize: '48px',
    lineHeight: '120%',
    fontWeight: 'semibold',
    letterSpacing: '0%',
  },
  'title-md': {
    fontFamily: 'heading',
    fontSize: '40px',
    lineHeight: '120%',
    fontWeight: 'semibold',
    letterSpacing: '0%',
  },
  'title-sm': {
    fontFamily: 'heading',
    fontSize: '32px',
    lineHeight: '120%',
    fontWeight: 'semibold',
    letterSpacing: '0%',
  },
  'title-xs': {
    fontFamily: 'heading',
    fontSize: '24px',
    lineHeight: '120%',
    fontWeight: 'semibold',
    letterSpacing: '0%',
  },
  'title-2xs': {
    fontFamily: 'heading',
    fontSize: '20px',
    lineHeight: '120%',
    fontWeight: 'medium',
    letterSpacing: '0%',
  },
};

const body = {
  'body-lg': {
    fontSize: '18px',
    lineWeight: 'regular',
    lineHeight: '140%',
    letterSpacing: '0%',
  },
  'body-md': {
    fontSize: '16px',
    lineWeight: 'regular',
    lineHeight: '140%',
    letterSpacing: '0%',
  },
  'body-sm': {
    fontSize: '14px',
    lineWeight: 'regular',
    lineHeight: '140%',
    letterSpacing: '0%',
  },
  'body-xs': {
    fontSize: '12px',
    lineWeight: 'regular',
    lineHeight: '140%',
    letterSpacing: '0%',
  },
};

export default {
  variants: {
    ...title,
    ...body,
    ...display,
  },
};
