import * as coinchanger from '../src/coinchanger';

describe('coinchanger', () => {
  describe('changeCoins', () => {
    it('returns 2, 2 when given 4', () => {
      expect(coinchanger.changeCoins(4)).toEqual([2, 2]);
      });

    it('returns 2, 1 when given 3', () => {
      expect(coinchanger.changeCoins(3)).toEqual([2, 1]);
      });

    it('returns 200, 100 when given 300', () => {
      expect(coinchanger.changeCoins(300)).toEqual([200, 100]);
      });

    it('returns 200, 200, 100 when given 500', () => {
      expect(coinchanger.changeCoins(500)).toEqual([200, 200, 100]);
      });
  });
});
