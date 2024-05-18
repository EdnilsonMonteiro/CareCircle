import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

import formLabelTheme from './formLabel';

const baseStyle = defineStyle({
  overflow: 'hidden',
  maxW: '100%',
  mt: 1,
  color: 'placeholder',
  transitionProperty: 'all',
  transitionDuration: 'normal',
  _peerHover: {
    color: 'hover',
  },
  _groupFocusWithin: {
    color: 'placeholder',
  },
});

const formHelperTheme = defineStyleConfig({
  baseStyle,
  sizes: formLabelTheme.sizes,
});

export default formHelperTheme;
