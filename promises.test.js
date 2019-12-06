const { getQuotes } = require('./promises');

describe('futurama api', () => {
  it('gets quotes', () => {
    return getQuotes()
      .then(quotes => {
        expect(quotes).toHaveLength(20);
      })
  });
});
