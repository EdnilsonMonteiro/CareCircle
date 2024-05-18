import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

import inputElementTheme from './element';
import inputFieldTheme from './field';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const sizes = {
  lg: definePartsStyle({
    field: inputFieldTheme.fieldSizes.lg,
    element: inputElementTheme.elementSizes.lg,
  }),
  md: definePartsStyle({
    field: inputFieldTheme.fieldSizes.md,
    element: inputElementTheme.elementSizes.md,
  }),
  sm: definePartsStyle({
    field: inputFieldTheme.fieldSizes.sm,
    element: inputElementTheme.elementSizes.sm,
  }),
  xs: definePartsStyle({
    field: inputFieldTheme.fieldSizes.xs,
    element: inputElementTheme.elementSizes.xs,
  }),
};

const variants = {
  outline: definePartsStyle({
    field: inputFieldTheme.fieldVariants.outline,
  }),
  floating: definePartsStyle({
    field: inputFieldTheme.fieldVariants.floating,
  }),
};

const baseStyle = definePartsStyle({
  field: inputFieldTheme.fieldBaseStyle,
  element: inputElementTheme.elementBaseStyle,
});

const inputTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    variant: 'outline',
    size: 'sm',
  },
});

export default inputTheme;
