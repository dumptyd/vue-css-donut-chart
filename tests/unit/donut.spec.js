import { shallowMount, mount } from '@vue/test-utils';
import colors from '../../src/utils/colors';
import { nativeSectionEvents } from '../../src/utils/events';
import { placementStyles } from '../../src/utils/misc';
import { el, hextToCssRgb, triggerResize } from '../utils';
import Donut from '../../src/components/Donut.vue';

describe('Donut component', () => {
  describe('"size" prop', () => {
    it('renders the donut with 250px height and width when the size isn\'t specified', () => {
      const wrapper = shallowMount(Donut);
      const { style: donutStyles } = wrapper.find(el.DONUT).element;

      expect(donutStyles.width).toBe('250px');
      expect(donutStyles.paddingBottom).toBe('250px');
    });

    it('renders the donut with proper height and width based on the size prop', () => {
      const size = 200;
      const sizeWithUnit = `${size}px`;

      const wrapper = shallowMount(Donut, { propsData: { size } });
      const { style: donutStyles } = wrapper.find(el.DONUT).element;

      expect(donutStyles.width).toBe(sizeWithUnit);
      expect(donutStyles.paddingBottom).toBe(sizeWithUnit);
    });
  });

  describe('"unit" prop', () => {
    it('defaults to px unit for the donut size when the unit isn\'t specified', () => {
      const defaultUnit = 'px';

      const wrapper = shallowMount(Donut);
      const { style: donutStyles } = wrapper.find(el.DONUT).element;

      expect(donutStyles.width.endsWith(defaultUnit)).toBe(true);
      expect(donutStyles.paddingBottom.endsWith(defaultUnit)).toBe(true);
    });

    it('respects the unit provided via unit prop for donut size', () => {
      const [size, unit] = [50, '%'];

      const wrapper = shallowMount(Donut, { propsData: { size, unit } });
      const { style: donutStyles } = wrapper.find(el.DONUT).element;

      expect(donutStyles.width.endsWith(unit)).toBe(true);
      expect(donutStyles.paddingBottom.endsWith(unit)).toBe(true);
    });
  });

  describe('"thickness" prop', () => {
    it('renders the donut with 20% ring thickness when the thickness isn\'t specified', () => {
      const defaultThickness = 20;

      const wrapper = shallowMount(Donut);
      const { style: donutStyles } = wrapper.find(el.DONUT_OVERLAY).element;

      const expectedDonutOverlaySize = `${100 - defaultThickness}%`;
      expect(donutStyles.width).toBe(expectedDonutOverlaySize);
      expect(donutStyles.height).toBe(expectedDonutOverlaySize);
    });

    it('renders the donut with correct ring thickness based on the thickness prop', () => {
      const thickness = 30;

      const wrapper = shallowMount(Donut, { propsData: { thickness } });
      const { style: donutStyles } = wrapper.find(el.DONUT_OVERLAY).element;

      const expectedDonutOverlaySize = `${100 - thickness}%`;
      expect(donutStyles.width).toBe(expectedDonutOverlaySize);
      expect(donutStyles.height).toBe(expectedDonutOverlaySize);
    });
  });

  describe('"text" prop and default slot', () => {
    it('renders the text provided via text prop in the center of the donut', () => {
      const text = 'An example text.';

      const wrapper = shallowMount(Donut, { propsData: { text } });
      const overlay = wrapper.find(el.DONUT_OVERLAY);

      expect(overlay.text()).toBe(text);
    });

    it('renders the content provided via default slot in the center of the donut', () => {
      const html = '<p><strong>An</strong> example text.</p>';

      const wrapper = shallowMount(Donut, {
        slots: { default: html }
      });
      const overlayEl = wrapper.find(el.DONUT_OVERLAY_CONTENT).element;

      expect(overlayEl.innerHTML).toBe(html);
    });
  });

  describe('"background" and "foreground" props', () => {
    it('renders the donut with default background and foreground colors when they\'re not specified', () => {
      const [defaultForegroundColor, defaultBackgroundColor] = ['#eeeeee', '#ffffff'];

      const wrapper = shallowMount(Donut);
      const donut = wrapper.find(el.DONUT).element;
      const donutOverlay = wrapper.find(el.DONUT_OVERLAY).element;

      expect(donut.style.backgroundColor).toBe(hextToCssRgb(defaultForegroundColor));
      expect(donutOverlay.style.backgroundColor).toBe(hextToCssRgb(defaultBackgroundColor));
    });

    it('renders the donut with specified background and foreground colors', () => {
      const [foreground, background] = ['#abcdef', '#fedcba'];

      const wrapper = shallowMount(Donut, { propsData: { foreground, background } });
      const donut = wrapper.find(el.DONUT).element;
      const donutOverlay = wrapper.find(el.DONUT_OVERLAY).element;

      expect(donut.style.backgroundColor).toBe(hextToCssRgb(foreground));
      expect(donutOverlay.style.backgroundColor).toBe(hextToCssRgb(background));
    });
  });

  describe('"sections" prop', () => {
    it('renders correct number of sections based on the sections prop', () => {
      let sections = [
        { value: 25 },
        { value: 25 },
        { value: 25 },
        { value: 25 }
      ];

      const wrapper = mount(Donut, { propsData: { sections } });

      let sectionWrappers = wrapper.findAll(el.DONUT_SECTION);
      expect(sectionWrappers).toHaveLength(sections.length);


      sections = [
        { value: 20 },
        { value: 20 }
      ];
      wrapper.setProps({ sections });

      sectionWrappers = wrapper.findAll(el.DONUT_SECTION);
      expect(sectionWrappers).toHaveLength(sections.length);

      sections = [
        { value: 60 },
        { value: 20 }
      ];
      wrapper.setProps({ sections });

      sectionWrappers = wrapper.findAll(el.DONUT_SECTION);
      // since one section takes up more than 180 degrees, it should be split into 2
      expect(sectionWrappers).toHaveLength(sections.length + 1);
    });

    it('renders correct number of sections while accounting for floating-point arithmetic issues', () => {
      // when using these values for sections and size, the component used to render 6 sections
      // because of floating point issues. That should never happen - the component should at
      // maximum have `sections.length + 1` sections.
      const [fpaValues, fpaSize] = [[33, 33, 33, 1], 201];
      const sections = fpaValues.map(value => ({ value }));

      const wrapper = mount(Donut, { propsData: { sections, size: fpaSize } });
      const sectionWrappers = wrapper.findAll(el.DONUT_SECTION);

      // it should have 5 sections since the second 33 would get split into two sections
      expect(sectionWrappers).toHaveLength(5);
    });

    // eslint-disable-next-line max-len
    it('renders the sections with correct colors and plugs in default colors if one isn\'t specified with the "color" property', () => {
      const sections = [
        { value: 25 },
        { value: 25, color: '#abcdef' },
        { value: 25 }
      ];

      const wrapper = mount(Donut, { propsData: { sections } });
      const sectionFillerWrappers = wrapper.findAll(el.DONUT_SECTION_FILLER);

      expect(sectionFillerWrappers.at(0).element.style.backgroundColor).toBe(hextToCssRgb(colors[0]));
      expect(sectionFillerWrappers.at(1).element.style.backgroundColor).toBe(hextToCssRgb(sections[1].color));
      expect(sectionFillerWrappers.at(2).element.style.backgroundColor).toBe(hextToCssRgb(colors[1]));
    });

    it('sets the correct title attribute for each section based on the "label" property', () => {
      const sections = [
        { label: 'Section 1 label', value: 25 },
        { label: 'Section 2 label', value: 25 },
        { value: 25 }
      ];

      const wrapper = mount(Donut, { propsData: { sections } });
      const sectionFillerWrappers = wrapper.findAll(el.DONUT_SECTION_FILLER);

      expect(sectionFillerWrappers.at(0).attributes('title')).toBe(sections[0].label);
      expect(sectionFillerWrappers.at(1).attributes('title')).toBe(sections[1].label);
      expect(sectionFillerWrappers.at(2).attributes('title')).toBeFalsy(); // no default title
    });

    it('does not run into error when section.value is not of number type', () => {
      const spy = jest.spyOn(global.console, 'error').mockImplementation(() => {});
      const sections = [{ value: 10 }, { value: '' }];

      let error = false;
      try {
        shallowMount(Donut, { propsData: { sections } });
      }
      catch (err) {
        error = err;
      }
      finally {
        expect(error).toBeFalsy();
        spy.mockRestore();
        // eslint-disable-next-line no-console
        if (error) console.error(error);
      }
    });
  });

  describe('"total" prop', () => {
    it('renders the sections differently based on the "total" prop', () => {
      const sections = [{ value: 90 }];
      const wrapper = mount(Donut, { propsData: { sections } });

      let sectionWrappers = wrapper.findAll(el.DONUT_SECTION);
      // section is split into 2 elements since it's taking more than half the donut area
      expect(sectionWrappers).toHaveLength(sections.length + 1);

      wrapper.setProps({ total: 200 });

      sectionWrappers = wrapper.findAll(el.DONUT_SECTION);
      // section is not split into 2 elements anymore because it's not taking more than half the total value
      expect(sectionWrappers).toHaveLength(sections.length);
    });

    it('throws an error if sum of the section values exceed total', () => {
      const spy = jest.spyOn(global.console, 'error').mockImplementation(() => {});

      const [total, sections] = [50, [{ value: 25 }, { value: 26 }]];

      let errorThrown = false;
      try {
        shallowMount(Donut, { propsData: { total, sections } });
      }
      catch (error) {
        errorThrown = true;
        expect(error.message).toContain('should not exceed');
      }
      finally {
        expect(errorThrown).toBe(true);
        spy.mockRestore();
      }
    });

    it('accounts for floating-point arithmetic issues before throwing an error', () => {
      // when using these values in this order, validation logic used to throw an error
      const fpaValues = [8.2, 34.97, 30.6, 26.23];
      const [total, sections] = [100, fpaValues.map(value => ({ value }))];

      let errorThrown = false;
      try {
        shallowMount(Donut, { propsData: { total, sections } });
      }
      catch (error) {
        errorThrown = true;
      }
      finally {
        expect(errorThrown).toBe(false);
      }
    });
  });

  describe('"has-legend" prop', () => {
    it('renders the legend with proper legend items', () => {
      const sections = [
        { label: 'Section 1 with value 10', value: 10, color: '#aaaaaa' },
        { label: 'Section 2 with value 20', value: 20, color: '#bbbbbb' },
        { label: 'Section 3 with value 30', value: 30, color: '#cccccc' }
      ];
      const wrapper = shallowMount(Donut, { propsData: { sections, hasLegend: true } });

      const legendItems = wrapper.findAll(el.LEGEND_ITEM);
      const legendItemColors = wrapper.findAll(el.LEGEND_ITEM_COLOR);

      sections.forEach((section, idx) => {
        expect(legendItems.at(idx).text()).toContain(section.label);
        expect(legendItemColors.at(idx).element.style.backgroundColor).toContain(hextToCssRgb(section.color));
      });
    });

    it('renders the legend with default plugged in colors and text if they\'re not provided', () => {
      const sections = [10, 20, 30].map(value => ({ value }));
      const wrapper = shallowMount(Donut, { propsData: { sections, hasLegend: true } });

      const legendItems = wrapper.findAll(el.LEGEND_ITEM);
      const legendItemColors = wrapper.findAll(el.LEGEND_ITEM_COLOR);

      sections.forEach((_, idx) => {
        expect(legendItems.at(idx).text()).toContain(`Section ${idx + 1}`);
        expect(legendItemColors.at(idx).element.style.backgroundColor).toContain(hextToCssRgb(colors[idx]));
      });
    });

    it('doesn\'t render the legend by default', () => {
      const sections = [{ value: 10 }];
      const wrapper = mount(Donut, { propsData: { sections } });

      const legend = wrapper.find(el.LEGEND);
      const legendItems = wrapper.findAll(el.LEGEND_ITEM);

      expect(legend.exists()).toBe(false);
      expect(legendItems).toHaveLength(0);
    });
  });

  describe('"legend-placement" prop', () => {
    it('renders the legend on the correct side based on the "legend-placement" prop', () => {
      const sections = [10, 20, 30].map(value => ({ value }));
      const wrapper = shallowMount(Donut, { propsData: { sections, hasLegend: true } });

      const directions = ['top', 'right', 'bottom', 'left'];

      directions.forEach(direction => {
        wrapper.setProps({ legendPlacement: direction });
        expect(wrapper.vm.placementStyles.legend).toEqual(placementStyles[direction].legend);
      });
    });
  });

  describe('"legend" slot', () => {
    it('renders the provided content in "legend" slot instead of the default legend', () => {
      const sections = [10, 20, 30].map(value => ({ value }));
      const legendHtml = '<p>Custom legend.</p>';
      const wrapper = shallowMount(Donut, {
        propsData: { sections, hasLegend: true },
        slots: { legend: legendHtml }
      });

      expect(wrapper.find(el.LEGEND).exists()).toBe(false);
      expect(wrapper.html()).toContain(legendHtml);
    });
  });

  describe('"start-angle" prop', () => {
    it('renders the sections with correct "start-angle" offset', () => {
      const sections = [10, 20, 30].map(value => ({ value }));
      const startAngle = 45;

      const wrapper = mount(Donut, { propsData: { sections, startAngle } });
      const sectionsContainerStyles = wrapper.find(el.DONUT_SECTIONS_CONTAINER).element.style;

      expect(sectionsContainerStyles.transform).toBe(`rotate(${startAngle}deg)`);
    });
  });

  describe('section events', () => {
    nativeSectionEvents.forEach(({ nativeEventName, sectionEventName }) => {
      it(`emits the "${sectionEventName}" event with correct payload when native "${nativeEventName}" occurs`, () => {
        const sections = [
          { name: 'section-1', value: 10 },
          { name: 'section-2', value: 10 },
          { name: 'section-3', value: 10 }
        ];
        const sectionsCopy = [
          { name: 'section-1', value: 10 },
          { name: 'section-2', value: 10 },
          { name: 'section-3', value: 10 }
        ];

        const wrapper = mount(Donut, { propsData: { sections } });
        const sectionWrappers = wrapper.findAll(el.DONUT_SECTION);

        sections.forEach((section, idx) => {
          // trigger the native event on section
          sectionWrappers.at(idx).trigger(nativeEventName);
          const sectionEvent = wrapper.emitted(sectionEventName);
          const [calledWithSection, nativeEvent] = sectionEvent[idx];

          // assert that correct number of events have been emitted
          expect(sectionEvent).toHaveLength(idx + 1);
          // assert that the object passed by the user is the one that's returned back and not the internal one
          expect(calledWithSection).toBe(section);
          // and the object hasn't been mutated
          expect(calledWithSection).toStrictEqual(sectionsCopy[idx]);
          // and the second argument is the native event
          expect(nativeEvent).toBeInstanceOf(Event);
        });
      });
    });

    // sections with value: 0 are rendered in the DOM with width: 0, however native events like
    // mouseover/mouseenter/mouseleave still sometimes occur on these sections but we want to make
    // sure these don't emit corresponding section-* events.
    it('does not emit section events when the native events occur on a section with value set to 0', () => {
      const zeroSection = { name: 'section-1', value: 0 };
      const sections = [zeroSection];
      const wrapper = mount(Donut, { propsData: { sections } });
      const sectionWrapper = wrapper.find(el.DONUT_SECTION);

      // make sure none of the section-* events are emitted for value:0 sections
      nativeSectionEvents.forEach(({ nativeEventName, sectionEventName }) => {
        sectionWrapper.trigger(nativeEventName);
        expect(wrapper.emitted(sectionEventName)).toBeFalsy();
      });
    });
  });

  describe('"auto-adjust-text-size" prop - font-size recalculation for chart content', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('triggers font-size recalculation when the component is mounted', () => {
      const recalcFontSize = jest.fn();
      const wrapper = shallowMount(Donut, { methods: { recalcFontSize } });
      expect(wrapper.vm.autoAdjustTextSize).toBe(true);
      expect(recalcFontSize).toHaveBeenCalledTimes(1);
    });

    it('triggers font-size recalculation when `size` or `unit` props are updated', () => {
      const recalcFontSize = jest.fn();
      const wrapper = shallowMount(Donut, { methods: { recalcFontSize } });

      wrapper.setProps({ size: 210 });
      expect(recalcFontSize).toHaveBeenCalledTimes(2); // called once on mounted

      wrapper.setProps({ unit: '%' });
      expect(recalcFontSize).toHaveBeenCalledTimes(3);
    });

    it('triggers font-size recalculation when the window is resized/zoomed', async () => {
      const wrapper = shallowMount(Donut, { propsData: { size: 50 } });
      const { vm } = wrapper;

      let clientWidth = 250;
      jest.spyOn(vm.donutEl, 'clientWidth', 'get').mockImplementation(() => clientWidth);

      // trigger recalcFontSize so it accesses `clientWidth` this time
      wrapper.setProps({ unit: '%' });
      await vm.$nextTick();

      const oldfontSize = wrapper.vm.fontSize;

      // trigger resize and update the clientWidth
      clientWidth = 350;
      triggerResize();
      await vm.$nextTick();

      const newfontSize = vm.fontSize;

      expect(oldfontSize).not.toEqual(newfontSize);
    });

    it('removes the resize listener from window when the component is destroyed', () => {
      const wrapper = shallowMount(Donut);
      const removeListener = jest.spyOn(window, 'removeEventListener');
      wrapper.destroy();
      expect(removeListener).toHaveBeenCalledWith('resize', expect.any(Function));
    });

    it('does not perform recalculation or set resize listener when "auto-adjust-text-size" is not set', async () => {
      const recalcFontSize = jest.fn();
      const addListener = jest.spyOn(window, 'addEventListener');
      const wrapper = shallowMount(Donut, {
        propsData: { autoAdjustTextSize: false },
        methods: { recalcFontSize }
      });

      await wrapper.vm.$nextTick();
      expect(recalcFontSize).not.toHaveBeenCalled();
      expect(addListener).not.toHaveBeenCalled();
    });

    it('does not perform recalculation when "auto-adjust-text-size" goes from true to false', async () => {
      const removeListener = jest.spyOn(window, 'removeEventListener');
      const wrapper = shallowMount(Donut);

      // by default, font size recalc should cause the default value of 1em to change
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.fontSize).not.toBe('1em');

      wrapper.setProps({ autoAdjustTextSize: false });

      // setting it to false should set it back to 1em and remove the resize event listener
      expect(wrapper.vm.fontSize).toBe('1em');
      expect(removeListener).toHaveBeenCalledWith('resize', expect.any(Function));
    });

    it('performs recalculation when "auto-adjust-text-size" goes from false to true', async () => {
      const addListener = jest.spyOn(window, 'addEventListener');
      const wrapper = shallowMount(Donut, { propsData: { autoAdjustTextSize: false } });

      // with the prop set to false, even after nextTick, size should remain 1em
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.fontSize).toBe('1em');
      expect(addListener).not.toHaveBeenCalled();

      wrapper.setProps({ autoAdjustTextSize: true });
      await wrapper.vm.$nextTick();

      // setting it to true should cause the recalculation to trigger immediately
      expect(wrapper.vm.fontSize).not.toBe('1em');
      // and it should register the resize listener
      expect(addListener).toHaveBeenCalledWith('resize', expect.any(Function));
    });
  });
});
