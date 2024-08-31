export const defaultColors: readonly string[] = [
  '#FF6384',
  '#36A2EB',
  '#FFCE56',
  '#F58231',
  '#46F0F0',
  '#D2F53C',
  '#911EB4',
  '#F032E6',
  '#3CB44B',
  '#FFE119',
  '#E6194B',
  '#FABEBE',
  '#008080',
  '#E6BEFF',
  '#0082C8',
  '#AA6E28',
  '#FFFAC8',
  '#800000',
  '#AAFFC3',
  '#808000',
  '#FFD8B1',
  '#000080',
  '#808080',
  '#000000',
];

/** returns a dispatcher that returns the next default color with every call */
export const getDefaultColorDispatcher = () => {
  let currentDefaultColorIdx = 0;
  let hasWrapped = false;
  const dispatcher = () => {
    if (currentDefaultColorIdx === 0 && hasWrapped) {
      console.warn('Ran out of default colors, reusing colors');
    }

    const color = defaultColors[currentDefaultColorIdx];

    currentDefaultColorIdx = (currentDefaultColorIdx + 1) % defaultColors.length;
    if (currentDefaultColorIdx === 0) hasWrapped = true;

    return color;
  };

  return dispatcher;
};
