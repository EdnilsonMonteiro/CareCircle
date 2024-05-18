import { defineStyle } from '@chakra-ui/react';

const sizes = {
  xs: defineStyle({
    '&.chakra-input__left-element': {
      h: 3,
      w: 3,
    },
  }),
  sm: defineStyle({
    '&.chakra-input__left-element': {
      h: 3.5,
      w: 3.5,
    },
  }),
  md: defineStyle({
    '&.chakra-input__left-element': {
      h: 4,
      w: 4,
    },
  }),
  lg: defineStyle({
    '&.chakra-input__left-element': {
      h: 4.5,
      w: 4.5,
    },
  }),
};

const baseStyle = {
  color: 'active',
  transitionProperty: 'all',
  transitionDuration: 'normal',
  _peerHover: {
    color: 'hover',
  },
  _peerDisabled: {
    color: 'body',
  },
  _peerInvalid: {
    color: 'error',
  },
  // Important needed because _peerDisabled has precedence of focus
  _groupFocusWithin: {
    color: 'active !important',
  },
  svg: {
    color: 'inherit',
  },
  '&.chakra-input__left-element': {
    pl: 3,
    pr: 2,
  },
  '&.chakra-input__right-element': {
    pl: 2,
    pr: 3,
  },
};

const inputElementTheme = {
  elementBaseStyle: baseStyle,
  elementSizes: sizes,
  elementVariants: undefined,
};

export default inputElementTheme;
