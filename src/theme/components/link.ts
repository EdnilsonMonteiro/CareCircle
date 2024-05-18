import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

import text from './text';

const sizes = {
  xs: defineStyle({
    ...text.variants['body-xs'],
  }),
  sm: defineStyle({
    ...text.variants['body-sm'],
  }),
  md: defineStyle({
    ...text.variants['body-md'],
  }),
  lg: defineStyle({
    ...text.variants['body-lg'],
  }),
};

const baseStyle = defineStyle((args) => ({
  fontWeight: 500,
  color: 'body',
  textDecoration: args.textDecoration ?? 'none',
  _hover: {
    color: 'secondary.pure',
    textDecoration: args.textDecoration ?? 'none',
  },
  _disabled: {
    color: 'placeholder',
    cursor: 'not-allowed',
    _hover: {
      color: 'placeholder',
      textDecoration: 'none',
    },
  },
}));

const variants = defineStyle({
  primary: {
    color: 'active',
    _hover: {
      color: 'hover',
    },
  },
  secondary: {
    color: 'secondary.pure',
    _hover: {
      color: 'secondary.light',
    },
  },
});

const linkTheme = defineStyleConfig({
  sizes,
  baseStyle,
  variants,
  defaultProps: {
    size: 'md',
  },
});

export default linkTheme;
