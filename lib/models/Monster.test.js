const Monster = require('./Monster');

describe('Monster', () => {
  describe('name', () => {
    it('requires a name', () => {
      const monster = new Monster({
        eyes: 2,
        limbs: 3,
        unDead: true
      });

      const { errors } = monster.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });

  describe('eyes', () => {
    it('requires eyes', () => {
      const monster = new Monster({
        name: 'zombie danny',
        limbs: 3,
        unDead: true
      });

      const { errors } = monster.validateSync();
      expect(errors.eyes.message).toEqual('Path `eyes` is required.');
    });
  });

  describe('limbs', () => {
    it('requires limbs', () => {
      const monster = new Monster({
        name: 'zombie danny',
        eyes: 2,
        unDead: true
      });

      const { errors } = monster.validateSync();
      expect(errors.limbs.message).toEqual('Path `limbs` is required.');
    });
  });

  describe('unDead', () => {
    it('requires unDead', () => {
      const monster = new Monster({
        name: 'zombie danny',
        eyes: 2,
        limbs: 3,
      });

      const { errors } = monster.validateSync();
      expect(errors.unDead.message).toEqual('Path `unDead` is required.');
    });
  });
});
