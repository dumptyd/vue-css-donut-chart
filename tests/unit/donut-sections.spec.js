import { shallowMount } from '@vue/test-utils';
import DonutSections from '../../src/components/DonutSections.vue';

describe('DonutSections component - edge cases', () => {
  it('doesn\'t throw even if no props are passed', () => {
    let errorThrown = false;
    try {
      shallowMount(DonutSections);
    }
    catch (error) {
      errorThrown = true;
    }
    finally {
      expect(errorThrown).toBe(false);
    }
  });

  it('applies the default background color if one isn\'t provided', () => {
    const defaultColor = 'dodgerblue';
    const sections = [10, 20, 30].map(value => ({ value }));
    const wrapper = shallowMount(DonutSections, { propsData: { sections } });

    const bgColors = wrapper.vm.donutSections.map(section => section.fillerStyles.backgroundColor);

    expect(bgColors).toEqual(Array(sections.length).fill(defaultColor));
  });
});
