const Flower = require('./Flower');

describe('Flower Model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const flower = new Flower({
        petals: 5,
        color: 'purple',
        perrenial: true
      });

      const { errors } = flower.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });

  describe('petals', () => {
    it('is required', () => {
      const flower = new Flower({
        name: 'daisy',
        color: 'purple',
        perrenial: true
      });

      const { errors } = flower.validateSync();
      expect(errors.petals.message).toEqual('Path `petals` is required.');
    });

    it('is over 0', () => {
      const flower = new Flower({
        name: 'daisy',
        petals: -1,
        color: 'purple',
        perrenial: true
      });

      const { errors } = flower.validateSync();
      expect(errors.petals.message).toEqual('Path `petals` (-1) is less than minimum allowed value (0).');
    });

    it('is under 100', () => {
      const flower = new Flower({
        name: 'daisy',
        petals: 200,
        color: 0,
        perrenial: 0
      });

      const { errors } = flower.validateSync();
      expect(errors.petals.message).toEqual('Path `petals` (200) is more than maximum allowed value (100).');
    });
  });

  describe('color', () => {
    it('is required', () => {
      const flower = new Flower({
        name: 'daisy',
        petals: 5,
        perrenial: 0
      });

      const { errors } = flower.validateSync();
      expect(errors.color.message).toEqual('Path `color` is required.');
    });
  });

  describe('perrenial', () => {
    it('is required', () => {
      const flower = new Flower({
        name: 'daisy',
        petals: 5,
        color: 'purple',
      });

      const { errors } = flower.validateSync();
      expect(errors.perrenial.message).toEqual('Path `perrenial` is required.');
    });
  });
});
