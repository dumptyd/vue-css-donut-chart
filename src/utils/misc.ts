import { getCurrentInstance, onUnmounted, ref, watch, type Ref, type StyleValue } from 'vue';

const legendGap = '1em';

export const legendPlacementStyles: Record<
  'top' | 'right' | 'bottom' | 'left',
  {
    container: StyleValue;
    legend: StyleValue;
  }
> = {
  top: {
    container: { flexDirection: 'column' },
    legend: { order: -1, margin: 0, marginBottom: legendGap },
  },
  right: {
    container: {},
    legend: {
      flexDirection: 'column',
      margin: 0,
      marginLeft: legendGap,
    },
  },
  bottom: {
    container: { flexDirection: 'column' },
    legend: {},
  },
  left: {
    container: {},
    legend: {
      flexDirection: 'column',
      order: -1,
      margin: 0,
      marginRight: legendGap,
    },
  },
};

export function toPrecise(value: number): number {
  return Number(value.toPrecision(15));
}

export function useElementSize({
  el,
  onResize,
}: {
  el: Ref<HTMLElement | null | undefined>;
  onResize?: (width: number, height: number) => void;
}) {
  const width = ref(0);
  const height = ref(0);

  const observer = new ResizeObserver((entries) => {
    if (!el.value) return;
    const entry = entries[0];
    width.value = entry.contentRect.width;
    height.value = entry.contentRect.height;
    /* istanbul ignore else -- @preserve */
    if (onResize) onResize(width.value, height.value);
  });

  watch(
    el,
    (newEl, oldEl) => {
      if (oldEl) observer.unobserve(oldEl);
      if (newEl) observer.observe(newEl);
    },
    { immediate: true },
  );

  const stop = () => {
    observer.disconnect();
  };

  if (getCurrentInstance()) {
    onUnmounted(() => {
      stop();
    });
  }

  return { width, height, stop };
}
