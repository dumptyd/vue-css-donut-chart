export const nativeSectionEvents = [
  'click',
  'mouseenter',
  'mouseleave',
  'mouseover',
  'mouseout',
  'mousemove'
].map(nativeEventName => ({
  nativeEventName,
  sectionEventName: `section-${nativeEventName}`
}));
