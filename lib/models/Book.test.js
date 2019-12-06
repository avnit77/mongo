const Book = require('./Book');

describe('Book Model', () => {
  describe('title', () => {
    it('requires a title', () => {
      const book = new Book({
        pages: 255,
        genre: 'mystery'
      });

      const { errors } = book.validateSync();
      expect(errors.title.message).toEqual('Path `title` is required.');
    });
  });

  describe('Book Title', () => {
    it('it requires pages', () => {
      const book = new Book({
        title: 'Book Title',
        genre: 'mystery'
      });

      const { errors } = book.validateSync();
      expect(errors.pages.message).toEqual('Path `pages` is required.');
    });

    it('is over 0', () => {
      const book = new Book({
        title: 'Book Title',
        pages: -1,
        genre: 'mystery',
      });

      const { errors } = book.validateSync();
      expect(errors.pages.message).toEqual('Path `pages` (-1) is less than minimum allowed value (0).');
    });

    it('is under 1000', () => {
      const book = new Book({
        title: 'Book Title',
        pages: 2000,
        genre: 'mystery',
      });

      const { errors } = book.validateSync();
      expect(errors.pages.message).toEqual('Path `pages` (2000) is more than maximum allowed value (1000).');
    });
  });

  describe('genre', () => {
    it('it requires a genre', () => {
      const book = new Book({
        title: 'Book Title',
        pages: 255,
      });

      const { errors } = book.validateSync();
      expect(errors.genre.message).toEqual('Path `genre` is required.');
    });
  });
});
