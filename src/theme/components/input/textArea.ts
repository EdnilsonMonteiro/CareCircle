import { defineStyle, defineStyleConfig, useColorModeValue } from '@chakra-ui/react';

import text from '../text';

const baseStyle = defineStyle((props) => ({
  fontSize: 'md',
  variant: 'filled',
  borderRadius: 'sm',
  p: '3',
  borderWidth: '1px',
  _focusVisible: {
    borderColor: 'purple.500',
  },
  _disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  _invalid: {
    borderColor: 'red.500',
  },
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
  outline: defineStyle((props) => ({
    border: '1px solid',
    borderColor: props.colorMode === 'dark' ? 'primary.600' : 'primary.300',
    _focusVisible: {
      borderColor: props.colorMode === 'dark' ? 'primary.600' : 'primary.300',
    },
    _hover: {
      borderColor: props.colorMode === 'dark' ? 'primary.800' : 'primary.400',
    },
  })),
  filled: defineStyle((props) => ({
    borderRadius: 'sm',
    border: '1px solid',
    borderColor: props.colorMode === 'dark' ? 'gray.600' : 'primary.300',
    backgroundColor: props.colorMode === 'dark' ? 'gray.800' : 'primary.100',
    _focusVisible: {
      backgroundColor: props.colorMode === 'dark' ? 'gray.800' : 'primary.100',
      borderColor: props.colorMode === 'dark' ? 'primary.600' : 'primary.300',
    },
    _hover: {
      backgroundColor: props.colorMode === 'dark' ? 'gray.800' : 'primary.100',
      borderColor: props.colorMode === 'dark' ? 'primary.700' : 'primary.400',
    },
  })),
};

const textareaTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    variant: 'filled',
    size: 'md',
  },
});

export default textareaTheme;
