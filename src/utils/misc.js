const legendGap = '1em';

export const defaultColor = 'dodgerblue';

export const placement = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left'
};

export const placementStyles = {
  [placement.TOP]: {
    container: { flexDirection: 'column' },
    legend: { order: -1, margin: 0, marginBottom: legendGap }
  },
  [placement.RIGHT]: {
    container: {},
    legend: {
      flexDirection: 'column',
      margin: 0,
      marginLeft: legendGap
    }
  },
  [placement.BOTTOM]: {
    container: { flexDirection: 'column' },
    legend: {}
  },
  [placement.LEFT]: {
    container: {},
    legend: {
      flexDirection: 'column',
      order: -1,
      margin: 0,
      marginRight: legendGap
    }
  }
};

const isObject = obj => !!obj && obj.constructor === Object;

const sectionKeys = [
  { type: 'number', key: 'value', required: true },
  { key: 'label' },
  { key: 'color' }
];

export function sectionValidator(section) {
  if (!isObject(section)) return false;

  return sectionKeys.reduce((acc, curr) => {
    if (!acc) return false;

    let valid = true;
    if (curr.required) valid = valid && Object.hasOwnProperty.call(section, curr.key);
    if (curr.type) valid = valid && typeof section[curr.key] === curr.type;
    return acc && valid;
  }, true);
}
