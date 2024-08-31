import { describe, it, expect, afterEach, beforeAll, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { cloneDeep } from 'lodash-es';
import { El, hexToCssRgb, resizeObserverMock, timeout } from '../utils';
import DonutChart from '@/components/DonutChart.vue';
import { defaultColors } from '@/utils/colors';
import type { DonutSection } from '@/utils/types';
import DonutPlugin, { VcDonut } from '@/lib';
import { createApp } from 'vue';

describe('Donut component', () => {
  beforeAll(() => {
    global.ResizeObserver = resizeObserverMock.mock;
  });

  describe('"size" prop', () => {
    it("renders the donut with 250px height and width when the size isn't specified", () => {
      const wrapper = mount(DonutChart);
      const donutStyles = wrapper.find<HTMLElement>(El.DONUT).element.style;

      expect(donutStyles.width).toBe('250px');
      expect(donutStyles.paddingBottom).toBe('250px');
    });

    it('renders the donut with the correct height and width based on the size prop', () => {
      const size = 200;
      const sizeWithUnit = `${size}px`;

      const wrapper = mount(DonutChart, { props: { size } });
      const donutStyles = wrapper.find<HTMLElement>(El.DONUT).element.style;

      expect(donutStyles.width).toBe(sizeWithUnit);
      expect(donutStyles.paddingBottom).toBe(sizeWithUnit);
    });
  });

  describe('"unit" prop', () => {
    it("defaults to px unit for the donut size when the unit isn't specified", () => {
      const defaultUnit = 'px';

      const wrapper = mount(DonutChart);
      const donutStyles = wrapper.find<HTMLElement>(El.DONUT).element.style;

      expect(donutStyles.width.endsWith(defaultUnit)).toBe(true);
      expect(donutStyles.paddingBottom.endsWith(defaultUnit)).toBe(true);
    });

    it('respects the unit provided via unit prop for donut size', () => {
      const [size, unit] = [50, '%'];

      const wrapper = mount(DonutChart, { props: { size, unit } });
      const donutStyles = wrapper.find<HTMLElement>(El.DONUT).element.style;

      expect(donutStyles.width.endsWith(unit)).toBe(true);
      expect(donutStyles.paddingBottom.endsWith(unit)).toBe(true);
    });
  });

  describe('"thickness" prop', () => {
    it("renders the donut with 20% ring thickness when the thickness isn't specified", () => {
      const defaultThickness = 20;

      const wrapper = mount(DonutChart);
      const overlayStyles = wrapper.find<HTMLElement>(El.DONUT_OVERLAY).element.style;

      const expectedDonutOverlaySize = `${100 - defaultThickness}%`;
      expect(overlayStyles.width).toBe(expectedDonutOverlaySize);
      expect(overlayStyles.height).toBe(expectedDonutOverlaySize);
    });

    it('renders the donut with correct ring thickness based on the thickness prop', () => {
      const thickness = 30;

      const wrapper = mount(DonutChart, { props: { thickness } });
      const overlayStyles = wrapper.find<HTMLElement>(El.DONUT_OVERLAY).element.style;

      const expectedDonutOverlaySize = `${100 - thickness}%`;
      expect(overlayStyles.width).toBe(expectedDonutOverlaySize);
      expect(overlayStyles.height).toBe(expectedDonutOverlaySize);
    });
  });

  describe('"text" prop and default slot', () => {
    it('renders the text provided via text prop in the center of the donut', () => {
      const text = 'An example text.';

      const wrapper = mount(DonutChart, { props: { text } });
      const overlay = wrapper.find<HTMLElement>(El.DONUT_OVERLAY);

      expect(overlay.text()).toBe(text);
    });

    it('renders the content provided via default slot in the center of the donut', () => {
      const html = '<p><strong>An</strong> example text.</p>';

      const wrapper = mount(DonutChart, {
        slots: { default: html },
      });
      const overlayEl = wrapper.find<HTMLElement>(El.DONUT_OVERLAY_CONTENT).element;

      expect(overlayEl.innerHTML).toBe(html);
    });
  });

  describe('"background" and "foreground" props', () => {
    it("renders the donut with default background and foreground colors when they're not specified", () => {
      const [defaultForegroundColor, defaultBackgroundColor] = ['#eeeeee', '#ffffff'];

      const wrapper = mount(DonutChart);
      const donut = wrapper.find<HTMLElement>(El.DONUT).element;
      const donutOverlay = wrapper.find<HTMLElement>(El.DONUT_OVERLAY).element;

      expect(donut.style.backgroundColor).toBe(hexToCssRgb(defaultForegroundColor));
      expect(donutOverlay.style.backgroundColor).toBe(hexToCssRgb(defaultBackgroundColor));
    });

    it('renders the donut with specified background and foreground colors', () => {
      const [foreground, background] = ['#abcdef', '#fedcba'];

      const wrapper = mount(DonutChart, { props: { foreground, background } });
      const donut = wrapper.find<HTMLElement>(El.DONUT).element;
      const donutOverlay = wrapper.find<HTMLElement>(El.DONUT_OVERLAY).element;

      expect(donut.style.backgroundColor).toBe(hexToCssRgb(foreground));
      expect(donutOverlay.style.backgroundColor).toBe(hexToCssRgb(background));
    });
  });

  describe('"sections" prop', () => {
    it('renders correct number of sections based on the sections prop', async () => {
      let sections = [{ value: 25 }, { value: 25 }, { value: 25 }, { value: 25 }];

      const wrapper = mount(DonutChart, { props: { sections } });

      let sectionWrappers = wrapper.findAll<HTMLElement>(El.DONUT_SECTION);
      expect(sectionWrappers).toHaveLength(sections.length);

      sections = [{ value: 20 }, { value: 20 }];
      await wrapper.setProps({ sections });

      sectionWrappers = wrapper.findAll<HTMLElement>(El.DONUT_SECTION);
      expect(sectionWrappers).toHaveLength(sections.length);

      sections = [{ value: 60 }, { value: 20 }];
      await wrapper.setProps({ sections });

      sectionWrappers = wrapper.findAll<HTMLElement>(El.DONUT_SECTION);
      // since one section takes up more than 180 degrees, it should be split into 2
      expect(sectionWrappers).toHaveLength(sections.length + 1);
    });

    it('renders correct number of sections while accounting for floating-point arithmetic issues', () => {
      // when using these values for sections and size, the component used to render 6 sections
      // because of floating point issues. That should never happen - the component should at
      // maximum have `sections.length + 1` sections.
      const [fpaValues, fpaSize] = [[33, 33, 33, 1], 201];
      const sections = fpaValues.map((value) => ({ value }));

      const wrapper = mount(DonutChart, { props: { sections, size: fpaSize } });
      const sectionWrappers = wrapper.findAll<HTMLElement>(El.DONUT_SECTION);

      // it should have 5 sections since the second 33 would get split into two sections
      expect(sectionWrappers).toHaveLength(5);
    });

    it('renders the sections with correct colors and plugs in default colors if one isn\'t specified with the "color" property', () => {
      const sectionWithExplicitColor = { value: 25, color: '#abcdef' };
      const sections = [{ value: 25 }, sectionWithExplicitColor, { value: 25 }];

      const wrapper = mount(DonutChart, { props: { sections } });
      const sectionFillerWrappers = wrapper.findAll<HTMLElement>(El.DONUT_SECTION_FILLER);
      expect(sectionFillerWrappers[0].element.style.backgroundColor).toBe(hexToCssRgb(defaultColors[0]));
      expect(sectionFillerWrappers[1].element.style.backgroundColor).toBe(hexToCssRgb(sectionWithExplicitColor.color));
      expect(sectionFillerWrappers[2].element.style.backgroundColor).toBe(hexToCssRgb(defaultColors[1]));
    });

    it('sets the correct title attribute for each section based on the "label" property', () => {
      const sections = [
        { label: 'Section 1 label', value: 25 },
        { label: 'Section 2 label', value: 25 },
        { value: 25 },
      ];

      const wrapper = mount(DonutChart, { props: { sections } });
      const sectionFillerWrappers = wrapper.findAll<HTMLElement>(El.DONUT_SECTION_FILLER);

      expect(sectionFillerWrappers[0].attributes('title')).toBe(sections[0].label);
      expect(sectionFillerWrappers[1].attributes('title')).toBe(sections[1].label);
      expect(sectionFillerWrappers[2].attributes('title')).toBeFalsy(); // no default title
    });

    it('does not run into error when section.value is not of number type', () => {
      const spy = vi.spyOn(global.console, 'warn').mockImplementation(() => {});
      const sections = [{ value: 10 }, { value: '' }];

      let error: unknown = false;
      try {
        mount(DonutChart, {
          props: {
            // @ts-expect-error we're testing invalid values here
            sections,
          },
        });
      } catch (err) {
        error = err;
      } finally {
        expect(error).toBeFalsy();
        spy.mockRestore();
        if (error) console.error(error);
      }
    });
  });

  describe('"total" prop', () => {
    it('renders the sections differently based on the "total" prop', async () => {
      const sections = [{ value: 90 }];
      const wrapper = mount(DonutChart, { props: { sections } });

      let sectionWrappers = wrapper.findAll<HTMLElement>(El.DONUT_SECTION);
      // section is split into 2 elements since it's taking more than half the donut area
      expect(sectionWrappers).toHaveLength(sections.length + 1);

      await wrapper.setProps({ total: 200 });

      sectionWrappers = wrapper.findAll<HTMLElement>(El.DONUT_SECTION);
      // section is not split into 2 elements anymore because it's not taking more than half the total value
      expect(sectionWrappers).toHaveLength(sections.length);
    });

    it('throws an error if sum of the section values exceed total', () => {
      const spy = vi.spyOn(global.console, 'warn').mockImplementation(() => {});

      const [total, sections] = [50, [{ value: 25 }, { value: 26 }]];

      mount(DonutChart, { props: { total, sections } });
      expect(spy).toHaveBeenCalled();
      // read the last console.warn call
      const lastCall = spy.mock.calls[spy.mock.calls.length - 1];
      expect(lastCall[0]).toContain('exceeds `total`');
      spy.mockRestore();
    });

    it('accounts for floating-point arithmetic issues before throwing an error', () => {
      const spy = vi.spyOn(global.console, 'warn').mockImplementation(() => {});
      // when using these values in this order, validation logic used to throw an error
      const fpaValues = [8.2, 34.97, 30.6, 26.23];
      const [total, sections] = [100, fpaValues.map((value) => ({ value }))];

      mount(DonutChart, { props: { total, sections } });
      expect(spy).not.toHaveBeenCalled();
      spy.mockRestore();
    });

    it('tolerates 0 value', async () => {
      // ensure no error is thrown or warning is logged
      const warnSpy = vi.spyOn(global.console, 'warn').mockImplementation(() => {});
      const errorSpy = vi.spyOn(global.console, 'error').mockImplementation(() => {});

      const wrapper = mount(DonutChart, {
        props: {
          sections: [{ value: 0 }],
          total: 0,
          hasLegend: true,
        },
      });
      await timeout(50);

      await wrapper.vm.$nextTick();

      expect(warnSpy).not.toHaveBeenCalled();
      expect(errorSpy).not.toHaveBeenCalled();

      warnSpy.mockRestore();
      errorSpy.mockRestore();
    });
  });

  describe('"has-legend" prop', () => {
    it('renders the legend with proper legend items', () => {
      const sections = [
        { label: 'Section 1 with value 10', value: 10, color: '#aaaaaa' },
        { label: 'Section 2 with value 20', value: 20, color: '#bbbbbb' },
        { label: 'Section 3 with value 30', value: 30, color: '#cccccc' },
      ];
      const wrapper = mount(DonutChart, { props: { sections, hasLegend: true } });

      const legendItems = wrapper.findAll<HTMLElement>(El.LEGEND_ITEM);
      const legendItemColors = wrapper.findAll<HTMLElement>(El.LEGEND_ITEM_COLOR);

      sections.forEach((section, idx) => {
        expect(legendItems[idx].text()).toContain(section.label);
        expect(legendItemColors[idx].element.style.backgroundColor).toContain(hexToCssRgb(section.color));
      });
    });

    it("renders the legend with default plugged in colors and text if they're not provided", () => {
      const sections = [10, 20, 30].map((value) => ({ value }));
      const wrapper = mount(DonutChart, { props: { sections, hasLegend: true } });

      const legendItems = wrapper.findAll<HTMLElement>(El.LEGEND_ITEM);
      const legendItemColors = wrapper.findAll<HTMLElement>(El.LEGEND_ITEM_COLOR);

      sections.forEach((_, idx) => {
        expect(legendItems[idx].text()).toContain(`Section ${idx + 1}`);
        expect(legendItemColors[idx].element.style.backgroundColor).toContain(hexToCssRgb(defaultColors[idx]));
      });
    });

    it("doesn't render the legend by default", () => {
      const sections = [{ value: 10 }];
      const wrapper = mount(DonutChart, { props: { sections } });

      const legend = wrapper.find<HTMLElement>(El.LEGEND);
      const legendItems = wrapper.findAll<HTMLElement>(El.LEGEND_ITEM);

      expect(legend.exists()).toBe(false);
      expect(legendItems).toHaveLength(0);
    });
  });

  describe('"legend-placement" prop', () => {
    it('renders the legend on the correct side based on the "legend-placement" prop', async () => {
      const sections = [10, 20, 30].map((value) => ({ value }));
      const wrapper = mount(DonutChart, { props: { sections, hasLegend: true } });

      const placements = ['top', 'right', 'bottom', 'left'] as const;

      for (let idx = 0; idx < placements.length; ++idx) {
        const placement = placements[idx];
        await wrapper.setProps({ legendPlacement: placement });
        const containerEl = wrapper.find<HTMLElement>(El.MAIN_CONTAINER);
        const legendEl = wrapper.find<HTMLElement>(El.LEGEND);

        if (placement === 'top' || placement === 'bottom') {
          expect(containerEl.element.style.flexDirection).toBe('column'); // chart layout is vertical
          expect(legendEl.element.style.flexDirection).not.toBe('column'); // legend flows horizontally
        }
        if (placement === 'right' || placement === 'left') {
          expect(containerEl.element.style.flexDirection).not.toBe('column'); // chart layout is horizontal
          expect(legendEl.element.style.flexDirection).toBe('column'); // legend flows vertically
        }

        if (placement === 'top') {
          expect(legendEl.element.style.order).toBe('-1'); // legend before chart
        } else if (placement === 'right') {
          expect(legendEl.element.style.order).not.toBe('-1'); // legend after chart
        } else if (placement === 'bottom') {
          expect(legendEl.element.style.order).not.toBe('-1'); // legend after chart
        } else if (placement === 'left') {
          expect(legendEl.element.style.order).toBe('-1'); // legend before chart
        }

        // extract commons
      }
    });
  });

  describe('"legend" slot', () => {
    it('renders the provided content in "legend" slot instead of the default legend', () => {
      const sections = [10, 20, 30].map((value) => ({ value }));
      const legendHtml = '<p>Custom legend.</p>';
      const wrapper = mount(DonutChart, {
        props: { sections, hasLegend: true },
        slots: { legend: legendHtml },
      });

      expect(wrapper.find<HTMLElement>(El.LEGEND).exists()).toBe(false);
      expect(wrapper.html()).toContain(legendHtml);
    });
  });

  describe('"start-angle" prop', () => {
    it('renders the sections with correct "start-angle" offset', () => {
      const sections = [10, 20, 30].map((value) => ({ value }));
      const startAngle = 45;

      const wrapper = mount(DonutChart, { props: { sections, startAngle } });
      const sectionsContainerStyles = wrapper.find<HTMLElement>(El.DONUT_SECTIONS_CONTAINER).element.style;

      expect(sectionsContainerStyles.transform).toBe(`rotate(${startAngle}deg)`);
    });
  });

  describe('section events', () => {
    const supportedNativeSectionEvents = [
      'click',
      'mouseenter',
      'mouseleave',
      'mouseover',
      'mouseout',
      'mousemove',
    ].map((evt) => ({
      nativeEventName: evt,
      sectionEventName: `section-${evt}`,
    }));
    const RenderedDonut = (sections: DonutSection[]) => ({
      template: '<vc-donut :sections="sections"></vc-donut>',
      components: {
        'vc-donut': DonutChart,
      },
      data() {
        return {
          sections: cloneDeep(sections),
        };
      },
    });
    supportedNativeSectionEvents.forEach(({ nativeEventName, sectionEventName }) => {
      it(`emits the "${sectionEventName}" event with correct payload when native "${nativeEventName}" occurs`, async () => {
        const sections = [
          { name: 'section-1', value: 10 },
          { name: 'section-2', value: 10 },
          { name: 'section-3', value: 10 },
        ];
        const sectionsCopy = cloneDeep(sections);

        const wrapper = mount(RenderedDonut(sections));
        const sectionWrappers = wrapper.findAll<HTMLElement>(El.DONUT_SECTION);
        const donutWrapper = wrapper.findComponent(DonutChart);

        for (let idx = 0; idx < sections.length; ++idx) {
          // trigger the native event on section
          await sectionWrappers[idx].trigger(nativeEventName);
          const sectionEvents = donutWrapper.emitted(sectionEventName);
          const eventData = sectionEvents?.[idx] as [DonutSection, Event];

          // assert that correct number of events have been emitted
          expect(sectionEvents).toHaveLength(idx + 1);
          // assert that the object passed by the user is the one that's returned back and not the internal one
          expect(eventData[0]).toBe(wrapper.vm.sections[idx]);
          // and the object hasn't been mutated
          expect(eventData[0]).toStrictEqual(sectionsCopy[idx]);
          // and the second argument is the native event
          expect(eventData[1]).toBeInstanceOf(Event);
        }
      });
    });

    // sections with value: 0 are rendered in the DOM with width: 0, however native events like
    // mouseover/mouseenter/mouseleave still sometimes occur on these sections but we want to make
    // sure these don't emit corresponding section-* events.
    it('does not emit section events when the native events occur on a section with value set to 0', () => {
      const zeroSection = { name: 'section-1', value: 0 };
      const sections = [zeroSection];
      const wrapper = mount(RenderedDonut(sections));
      const sectionWrapper = wrapper.find<HTMLElement>(El.DONUT_SECTION);
      // make sure value:0 sections are not rendered
      expect(sectionWrapper.exists()).toBeFalsy();
    });
  });

  describe('"auto-adjust-text-size" prop - font-size recalculation for chart content', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('triggers font-size recalculation when the component is mounted', async () => {
      const wrapper = mount(DonutChart, {
        props: {
          size: 50,
        },
      });
      const textEl = wrapper.find<HTMLElement>(El.DONUT_OVERLAY_CONTENT).element;

      expect(textEl.style.fontSize).toBe('1em'); // start with the default font size

      await resizeObserverMock.trigger();

      expect(textEl.style.fontSize).toBeTruthy();
      expect(textEl.style.fontSize).not.toBe('1em'); // font size should have changed
    });

    it('triggers font-size recalculation when `size` or `unit` props are updated', async () => {
      const wrapper = mount(DonutChart, {
        props: {
          size: 50,
        },
      });
      const textEl = wrapper.find<HTMLElement>(El.DONUT_OVERLAY_CONTENT);

      await resizeObserverMock.trigger();
      const oldFontSize = textEl.element.style.fontSize;
      expect(oldFontSize).not.toBe('1em'); // font size should have changed from default

      await wrapper.setProps({ size: 100 });
      await resizeObserverMock.trigger();

      const newFontSize = textEl.element.style.fontSize;
      expect(newFontSize).not.toBe('1em'); // font size should not have reset
      expect(newFontSize).not.toBe(oldFontSize); // font size should have changed

      await wrapper.setProps({ unit: '%' });
      await resizeObserverMock.trigger();

      const fontSizeAfterUnitChange = textEl.element.style.fontSize;
      expect(fontSizeAfterUnitChange).not.toBe(newFontSize); // font size should have changed
    });

    it('removes the resize listener from window when the component is destroyed', () => {
      const wrapper = mount(DonutChart);
      wrapper.unmount();
      expect(resizeObserverMock.mockFns.disconnect).toHaveBeenCalled();
    });

    it('does not perform recalculation or set resize listener when "auto-adjust-text-size" is not set', async () => {
      const wrapper = mount(DonutChart, {
        props: {
          size: 50,
          autoAdjustTextSize: false,
        },
      });

      const textEl = wrapper.find<HTMLElement>(El.DONUT_OVERLAY_CONTENT).element;
      expect(textEl.style.fontSize).toBe('1em'); // start with the default font size

      await resizeObserverMock.trigger();

      expect(textEl.style.fontSize).toBe('1em'); // font size should not have changed
    });

    it('does not perform recalculation when "auto-adjust-text-size" goes from true to false', async () => {
      const wrapper = mount(DonutChart, {
        props: {
          size: 50,
        },
      });
      await resizeObserverMock.trigger();

      const textEl = wrapper.find<HTMLElement>(El.DONUT_OVERLAY_CONTENT).element;
      expect(textEl.style.fontSize).not.toBe('1em'); // font size should have changed

      await wrapper.setProps({ autoAdjustTextSize: false });

      expect(textEl.style.fontSize).toBe('1em'); // font size should have reset
    });

    it('performs recalculation when "auto-adjust-text-size" goes from false to true', async () => {
      const wrapper = mount(DonutChart, {
        props: {
          size: 50,
          autoAdjustTextSize: false,
        },
      });
      await resizeObserverMock.trigger();

      const textEl = wrapper.find<HTMLElement>(El.DONUT_OVERLAY_CONTENT).element;
      expect(textEl.style.fontSize).toBe('1em'); // start with the default font size

      await wrapper.setProps({ autoAdjustTextSize: true });
      await resizeObserverMock.trigger();

      expect(textEl.style.fontSize).not.toBe('1em'); // font size should have changed
    });
  });

  describe('validation and "suppress-validation-warnings" prop', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    describe('"size" prop', () => {
      it('yells when "size" is negative', async () => {
        const spy = vi.spyOn(global.console, 'warn').mockImplementation(() => {});
        const wrapper = mount(DonutChart, {
          props: {
            size: -50,
          },
        });
        await wrapper.vm.$nextTick();
        expect(spy).toHaveBeenCalled();
        // get the last console.warn call
        const lastCall = spy.mock.calls[spy.mock.calls.length - 1];
        expect(lastCall[0]).toContain('`size` must be a positive number');
        spy.mockRestore();
      });

      it('respects "suppress-validation-warnings"', async () => {
        const spy = vi.spyOn(global.console, 'warn').mockImplementation(() => {});
        const wrapper = mount(DonutChart, {
          props: {
            size: -50,
            suppressValidationWarnings: true,
          },
        });
        await wrapper.vm.$nextTick();
        expect(spy).not.toHaveBeenCalled();
        spy.mockRestore();
      });
    });

    describe('"thickness" prop', () => {
      it('yells when "thickness" is out of range', async () => {
        const spy = vi.spyOn(global.console, 'warn').mockImplementation(() => {});
        const wrapper = mount(DonutChart, {
          props: {
            thickness: 150,
          },
        });
        await wrapper.vm.$nextTick();
        expect(spy).toHaveBeenCalled();
        // get the last console.warn call
        const lastCall = spy.mock.calls[spy.mock.calls.length - 1];
        expect(lastCall[0]).toContain('`thickness` must be between 0 and 100');
        spy.mockRestore();
      });

      it('respects "suppress-validation-warnings"', async () => {
        const spy = vi.spyOn(global.console, 'warn').mockImplementation(() => {});
        const wrapper = mount(DonutChart, {
          props: {
            thickness: 150,
            suppressValidationWarnings: true,
          },
        });
        await wrapper.vm.$nextTick();
        expect(spy).not.toHaveBeenCalled();
        spy.mockRestore();
      });
    });

    describe('"total" prop', () => {
      it('yells when "total" is negative', async () => {
        const spy = vi.spyOn(global.console, 'warn').mockImplementation(() => {});
        const wrapper = mount(DonutChart, {
          props: {
            total: -50,
          },
        });
        await wrapper.vm.$nextTick();
        expect(spy).toHaveBeenCalled();
        // get the last console.warn call
        const lastCall = spy.mock.calls[spy.mock.calls.length - 1];
        expect(lastCall[0]).toContain('`total` must be a positive number');
        spy.mockRestore();
      });

      it('yells when section values exceed total', async () => {
        const spy = vi.spyOn(global.console, 'warn').mockImplementation(() => {});
        const wrapper = mount(DonutChart, {
          props: {
            total: 50,
            sections: [{ value: 25 }, { value: 25.01 }],
          },
        });
        await wrapper.vm.$nextTick();
        expect(spy).toHaveBeenCalled();
        // get the last console.warn call
        const lastCall = spy.mock.calls[spy.mock.calls.length - 1];
        expect(lastCall[0]).toContain('exceeds `total`');
        spy.mockRestore();
      });

      it('respects "suppress-validation-warnings"', async () => {
        const spy = vi.spyOn(global.console, 'warn').mockImplementation(() => {});
        const wrapper = mount(DonutChart, {
          props: {
            total: -50,
            suppressValidationWarnings: true,
          },
        });
        await wrapper.vm.$nextTick();
        expect(spy).not.toHaveBeenCalled();

        await wrapper.setProps({
          total: 50,
          sections: [{ value: 25 }, { value: 25.01 }],
          suppressValidationWarnings: true,
        });

        await wrapper.vm.$nextTick();
        expect(spy).not.toHaveBeenCalled();

        spy.mockRestore();
      });
    });
  });
});

describe('Donut exports', () => {
  it('exports the plugin and component', () => {
    expect(DonutPlugin).toBeTruthy();
    expect(VcDonut).toEqual(DonutChart);
  });

  it('installs the plugin correctly', () => {
    const app = createApp({});
    app.component = vi.fn();
    app.use(DonutPlugin);
    expect(app.component).toHaveBeenCalledWith('VcDonut', DonutChart);
  });
});
