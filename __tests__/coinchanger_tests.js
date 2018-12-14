import * as coinchanger from '../src/coinchanger';

describe('coinchanger', () => {
  describe('changeCoins', () => {
    [200, 100, 50, 20, 10, 5, 2, 1].forEach(coin => {
      expect(coinchanger.changeCoins(coin)).toEqual(coin);
      });

    it('returns 2, 1  when given 3', () => {
      expect(coinchanger.changeCoins(3)).toEqual([2, 1]);
      });

    it('returns "not a coin" when given 6', () => {
      expect(coinchanger.changeCoins(6)).toEqual('not a coin');
      });
  });
});
