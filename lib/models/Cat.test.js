const Cat = require('./Cat');

describe('Cat Model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const cat = new Cat({
        type: 'tabby',
        age: 10
      });

      const { errors } = cat.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });

  describe('type', () => {
    it('is required', () => {
      const cat = new Cat({
        name: 'Gravy',
        age: 10,
      });

      const { errors } = cat.validateSync();
      expect(errors.type.message).toEqual('Path `type` is required.');
    });

    describe('age', () => {
      it('is required', () => {
        const cat = new Cat({
          name: 'Gravy',
          type: 'tabby'
        });

        const { errors } = cat.validateSync();
        expect(errors.age.message).toEqual('Path `age` is required.');
      });

      it('is over 0', () => {
        const cat = new Cat({
          name: 'Gravy',
          type: 'tabby',
          age: -1,
        });

        const { errors } = cat.validateSync();
        expect(errors.age.message).toEqual('Path `age` (-1) is less than minimum allowed value (0).');
      });

      it('is under 30', () => {
        const cat = new Cat({
          name: 'Gravy',
          type: 'tabby',
          age: 40,
        });

        const { errors } = cat.validateSync();
        expect(errors.age.message).toEqual('Path `age` (40) is more than maximum allowed value (30).');
      });
    });
  });
});
