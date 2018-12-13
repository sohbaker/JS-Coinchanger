import * as coinchanger from '../src/coinchanger';

describe('coinchanger', () => {
  describe('changeCoins', () => {
  it('returns 0 when given 0', () => {
    expect(coinchanger.changeCoins(0)).toEqual(0);
    });

  it('returns 1 when given 1', () => {
    expect(coinchanger.changeCoins(1)).toEqual(1);
    });
  });


});
