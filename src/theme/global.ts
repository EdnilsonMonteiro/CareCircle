import breakpoints from './breakpoints';
import colors from './colors';
import radii from './radius';

const global = {
  '*': {
    boxSizing: 'border-box',
  },
  ':root': {
    '--min-desktop': breakpoints.desktop,
  },
  ul: {
    listStyleType: 'none',
  },
  'html, body': {
    overflow: 'unset',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
  },
  '::-webkit-scrollbar': {
    width: '0.75rem',
    height: '0.75rem',
  },
  '::-webkit-scrollbar-thumb': {
    background: colors.neutral[900],
    borderRadius: radii.full,
    backgroundClip: 'content-box',
    border: '0.125rem solid transparent',
    width: '0.375rem',
    height: '375rem',
  },
  '::-webkit-scrollbar-corner': {
    color: colors.neutral[900],
  },
  '::-webkit-scrollbar-track': {
    width: '2rem',
  },
};

export default global;
