import { sectionValidator } from '../../src/utils/misc';

describe('Utilities', () => {
  describe('misc.js', () => {
    describe('sectionValidator', () => {
      it('returns true for objects with only required key(s)', () => {
        expect(sectionValidator({ value: 25 })).toBe(true);
        expect(sectionValidator({ value: 0 })).toBe(true);
      });

      it('returns true for objects with required as well as optional keys', () => {
        expect(sectionValidator({ label: 'Label', value: 45, color: 'red' })).toBe(true);
      });

      it('returns true for valid objects with additional keys', () => {
        expect(sectionValidator({ value: 100, unknownKey: 'value' })).toBe(true);
      });

      it('returns false for non-object values', () => {
        const nonObjectValues = [1, 'string', [], true, NaN, undefined];

        nonObjectValues.forEach(val => {
          expect(sectionValidator(val)).toBe(false);
        });
      });

      it('returns false when required key(s) aren\'t present', () => {
        expect(sectionValidator({ label: 'Label' })).toBe(false);
      });

      it('returns false for keys with incorrect types', () => {
        expect(sectionValidator({ value: '25' })).toBe(false);
      });
    });
  });
});
