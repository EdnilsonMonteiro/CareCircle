import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

import text from '../text';

const sizes = {
  xs: defineStyle({
    ...text.variants['body-xs'],
  }),
  sm: defineStyle({
    ...text.variants['body-sm'],
  }),
  md: defineStyle({
    ...text.variants['body-sm'],
  }),
  lg: defineStyle({
    ...text.variants['body-md'],
  }),
};

const outlineVariant = {
  color: 'body',
  maxWidth: '100%',
  pointerEvents: 'none',
  pl: 1,
  pr: 2,
  mb: 1,
};

export const activeFloatingLabelStyles = {
  ...text.variants['body-xs'],
  left: 5,
  transform: 'translateY(calc(-100% + 0.25rem))', // label is 2px above border
  m: 0,
  top: 0,
  _invalid: {
    color: 'error',
  },
  _groupFocusWithin: {
    color: 'active',
  },
  color: 'active',
  '& ~ fieldset legend': {
    maxW: 'unset',
    w: 'fit-content',
    px: 2,
  },
} as const;

const floatingVariant = {
  color: 'placeholder',
  zIndex: 2,
  position: 'absolute',
  pointerEvents: 'none',
  transformOrigin: 'left top',
  transitionProperty: 'all',
  // left: 4,
  m: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '& ~ fieldset legend': {
    maxW: 0,
  },
  _active: {
    color: 'active',
  },
  _invalid: {
    color: 'error',
  },
  _groupFocusWithin: {
    ...activeFloatingLabelStyles,
  },
  _peerDisabled: {
    color: 'placeholder !important',
  },
};

const baseStyle = defineStyle({
  overflow: 'hidden',
  _groupFocusWithin: {
    color: 'active',
  },
  _disabled: {
    opacity: 1,
  },
  _invalid: {
    color: 'error',
  },
  _peerHover: {
    color: 'hover',
    _disabled: {
      color: 'body',
    },
    _invalid: {
      color: 'error',
    },
  },
});

const variants = {
  outline: outlineVariant,
  floating: floatingVariant,
};

const formLabelTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
});

export default formLabelTheme;
