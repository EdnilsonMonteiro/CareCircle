import { formErrorAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

import text from '../text';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const sizes = {
  xs: definePartsStyle({
    text: defineStyle({
      ...text.variants['body-xs'],
    }),
  }),
  sm: definePartsStyle({
    text: defineStyle({
      ...text.variants['body-sm'],
    }),
  }),
  md: definePartsStyle({
    text: defineStyle({
      ...text.variants['body-sm'],
    }),
  }),
  lg: definePartsStyle({
    text: defineStyle({
      ...text.variants['body-md'],
    }),
  }),
};

const baseStyle = definePartsStyle({
  text: defineStyle({
    color: 'error',
    mt: 1,
  }),
});

const formErrorTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
  },
});

export default formErrorTheme;
