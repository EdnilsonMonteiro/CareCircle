import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import text from './text';

const baseStyle = defineStyle((props) => ({
  _hover: {
    borderColor: 'gray.400',
  },
  _focusVisible: {
    borderColor: 'blue.500',
    boxShadow: '0 0 0 1px blue.500',
  },
  _invalid: {
    borderColor: 'red.500',
    boxShadow: '0 0 0 1px red.500',
  },
  _disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  fontSize: 'md',
  padding: '0.5rem 1rem',
}));

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

const variants = {
  outline: defineStyle({
    border: '1px solid',
    _hover: {
      borderColor: 'gray.400',
    },
  }),
  ghost: defineStyle({
    background: 'none',
    _focus: {
      borderColor: 'blue.500',
      boxShadow: '0 0 0 1px blue.500',
    },
    _invalid: {
      borderColor: 'red.500',
      boxShadow: '0 0 0 1px red.500',
    },
  }),
};

const selectTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
});

export default selectTheme;
