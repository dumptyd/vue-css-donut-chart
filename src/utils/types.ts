export interface DonutSection {
  /** The value of the section. Actual size is determined based on this value relative to the `total`. */
  value: number;
  /** The label to display in the legend. */
  label?: string;
  /** The color of the section. */
  color?: string;
  /** Identifier for the section. Useful for identifying sections in events. */
  ident?: unknown;
}
