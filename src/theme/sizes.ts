import { theme } from '@chakra-ui/react';

// Because inserting them manually is too boring
function genSizes([min, max]: number[], increment = 1) {
  return Array.from(Array((max - min) / increment), (_, i) => {
    const index = min + i * increment;

    return {
      key: index,
      value: `${(index * 4) / 16}rem`,
    };
  }).reduce((acc: Record<string | number, string>, cur) => {
    acc[cur.key] = cur.value;
    return acc;
  }, {});
}

export default {
  ...theme.sizes,
  ...genSizes([1, 25], 0.5),
  30: '7.5rem', // xxxl
  50: '12.5rem', // giant
  container: {
    mobile: '20rem',
    desktop: '96rem',
  },
} as const;
