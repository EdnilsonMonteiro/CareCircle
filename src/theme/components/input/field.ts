import { defineStyle } from '@chakra-ui/react';

import { activeFloatingLabelStyles } from './formLabel';

import text from '../text';

// Removing 2px from padding to compensate border width. Replace for box-shadow in the future
const sizes = {
  xs: defineStyle({
    ...text.variants['body-xs'],
    minH: 7.5,
    py: 'calc(0.25rem - 2px)',
    px: 3,
    borderRadius: '0.375rem',
  }),
  sm: defineStyle({
    ...text.variants['body-sm'],
    minH: 9,
    py: 'calc(0.5rem - 2px)',
    px: 4,
    borderRadius: '0.375rem',
  }),
  md: defineStyle({
    ...text.variants['body-sm'],
    py: 'calc(0.75rem - 2px)',
    px: 3,
    borderRadius: '0.375rem',
  }),
  lg: defineStyle({
    ...text.variants['body-md'],
    py: 'calc(0.875rem - 2px)',
    px: 3,
    borderRadius: '0.375rem',
  }),
};

const baseStyle = {
  color: 'body',
  backgroundColor: 'transparent',
  transitionProperty: 'all',
  transitionDuration: 'normal',
  height: 'unset',
  borderRadius: 'sm',
  p: 0, // overriding chakra inline padding
  _placeholder: {
    color: 'placeholder',
  },
  _disabled: {
    color: 'placeholder',
    background: 'disabled',
    opacity: 1,
  },
};

// For some reason, border styles do not work if defined in baseStyle, hence
// the need of this object
const outlineVariant = {
  borderColor: 'border',
  _placeholder: {
    color: 'placeholder',
  },
  _disabled: {
    borderColor: 'border !important',
  },
  _hover: {
    borderColor: 'hover',
  },
  _active: {
    borderColor: 'active !important',
    outlineOffset: 0,
    boxShadow: 'none', // focus box gets too big without this dude
  },
  paddingLeft: '8px',
  paddingRight: '8px',
  get _focus() {
    return this._active;
  },
  get _invalid() {
    return {
      ...this._active,
      borderColor: 'error',
    };
  },
};

const floatingVariant = {
  border: 'none',
  '&:not(:placeholder-shown) ~ label': {
    ...activeFloatingLabelStyles,
  },
  _disabled: {
    '& ~ fieldset': {
      ...outlineVariant._disabled,
    },
  },
  _hover: {
    '& ~ fieldset': {
      ...outlineVariant._hover,
    },
  },
  _active: {
    '& ~ fieldset': {
      ...outlineVariant._active,
    },
  },
  _focus: {
    '& ~ fieldset': {
      ...outlineVariant._focus,
    },
  },
  _invalid: {
    '& ~ fieldset': {
      ...outlineVariant._invalid,
    },
  },
  '& ~ fieldset': {
    borderRadius: baseStyle.borderRadius,
    borderColor: outlineVariant.borderColor,
    transitionProperty: 'all',
    transitionDuration: 'normal',
  },
};

const variants = {
  outline: outlineVariant,
  floating: floatingVariant,
};

const inputFieldTheme = {
  fieldBaseStyle: baseStyle,
  fieldVariants: variants,
  fieldSizes: sizes,
};

export default inputFieldTheme;
