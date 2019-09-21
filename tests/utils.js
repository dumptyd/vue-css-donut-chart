/**
 * selector constants for various elements in Donut and DonutSections components
 */
export const el = {
  DONUT: '.cdc', // just the donut, without the container
  DONUT_OVERLAY: '.cdc-overlay', // center of the donut
  DONUT_OVERLAY_CONTENT: '.cdc-text', // this is where the default slot's content goes,

  DONUT_SECTIONS_CONTAINER: '.cdc-sections', // container div for all sections
  DONUT_SECTION: '.cdc-section', // container div for each section
  DONUT_SECTION_FILLER: '.cdc-filler', // div that has section background color

  LEGEND: '.cdc-legend', // div that contains all the legend items
  LEGEND_ITEM: '.cdc-legend-item', // individual legend items
  LEGEND_ITEM_COLOR: '.cdc-legend-item-color' // div that renders color for each legend item
};

/**
 * @param {string} hexString - hex color string of the format `#111111` or `111111`.
 * @returns {string} RGB color value as used in CSS
 */
export const hextToCssRgb = hexString => {
  /* eslint-disable no-bitwise */
  // https://stackoverflow.com/a/11508164
  const hex = hexString.replace(/[^0-9A-F]/gi, '');
  const bigInt = parseInt(hex, 16);
  const r = (bigInt >> 16) & 255;
  const g = (bigInt >> 8) & 255;
  const b = bigInt & 255;

  return `rgb(${[r, g, b].join(', ')})`;
};

/**
 * Utility to trigger `resize` event in JSDom.
 * @param {*} [height] - value for `window.innerHeight`.
 * @param {*} [width] - value for `window.innerWidth`
 */
export const triggerResize = function(height, width) {
  const resizeEvent = document.createEvent('Event');
  resizeEvent.initEvent('resize', true, true);

  global.window.innerWidth = width || global.window.innerWidth;
  global.window.innerHeight = height || global.window.innerHeight;
  global.window.dispatchEvent(resizeEvent);
};
