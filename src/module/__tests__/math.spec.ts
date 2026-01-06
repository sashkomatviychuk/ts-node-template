import { add } from '@/module/math';

describe('Math operations', () => {
  describe('add', () => {
    it('should correctly add 2 + 3', () => {
      expect(add(2, 3)).toEqual(5);
    });
  });
});
