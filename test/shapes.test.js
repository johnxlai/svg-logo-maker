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
    it('should throw error if logo text is shorter than 3', () => {
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

  describe('Text Colour must be vaild', () => {
    it('should throw error if text colour is not a vaild css colour', () => {
      const shape = () => new Shape('Ted', 'NotColour');
      const err = new Error(
        'Please enter a vaild css color keyword or hex code'
      );
      expect(shape).toThrowError(err);
    });
  });

  describe('Background Colour must be vaild', () => {
    it('should throw error if background colour is not a vaild colour', () => {});
  });
});
