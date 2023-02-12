const Shape = require('../lib/shape');

describe('Shape', () => {
  describe('Text Not Empty', () => {
    it('should not be empty', () => {
      const shape = () => new Shape('');
      const err = new Error('Input cannot be empty');
      expect(shape).toThrow(err);
    });
  });

  describe('Text Length less than 3', () => {
    it('should not exceed 3 characters', () => {
      const shape = () => new Shape('John');
      const err = new Error('Logo text cannot be more than 3 characters');
      expect(shape).toThrowError(err);
    });
  });

  describe('Own Render Method', () => {
    it('should throw an error if render() is called', () => {
      //Need to pass in text name other wise it will fail in the if statement
      const shape = new Shape('Ted', 'green', 'red');
      const err = new Error('Child shapes must implement a render() method');
      expect(() => shape.render()).toThrow(err);
    });
  });
});
