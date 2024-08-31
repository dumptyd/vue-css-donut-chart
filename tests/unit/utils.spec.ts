import { beforeAll, describe, expect, it, vi } from 'vitest';
import { toPrecise, useElementSize } from '@/utils/misc';
import { getDefaultColorDispatcher, defaultColors } from '@/utils/colors';
import { ref } from 'vue';
import { resizeObserverMock, timeout } from '../utils';

describe('utils', () => {
  describe('toPrecise', () => {
    it('should correctly eliminate floating point errors', () => {
      expect(toPrecise(0.1 + 0.2)).toBe(0.3);
    });
  });

  describe('getDefaultColorDispatcher', () => {
    it('should return a function that dispatches colors in the correct order', () => {
      const dispatch = getDefaultColorDispatcher();
      defaultColors.forEach((color) => {
        expect(dispatch()).toBe(color);
      });
    });

    it('should wrap around and warn when it runs out of colors', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      const dispatch = getDefaultColorDispatcher();
      defaultColors.forEach(() => dispatch()); // exhaust all colors

      expect(warnSpy).not.toHaveBeenCalled();

      const lastColor = dispatch();
      const lastCall = warnSpy.mock.calls[warnSpy.mock.calls.length - 1];
      expect(warnSpy).toHaveBeenCalled();
      expect(lastCall[0]).toContain('reusing colors');
      expect(lastColor).toBe(defaultColors[0]); // should wrap around

      warnSpy.mockRestore();
    });
  });

  describe('useElementSize', () => {
    beforeAll(() => {
      global.ResizeObserver = resizeObserverMock.mock;
    });

    it('attaches and detaches ResizeObserver as the element changes', async () => {
      const el = ref<HTMLElement>(document.createElement('div'));
      useElementSize({ el });
      expect(resizeObserverMock.mockFns.observe).toHaveBeenCalled();
      el.value = document.createElement('div');
      await timeout();
      expect(resizeObserverMock.mockFns.unobserve).toHaveBeenCalled();
      expect(resizeObserverMock.mockFns.observe).toHaveBeenCalledTimes(2);
    });
  });
});
