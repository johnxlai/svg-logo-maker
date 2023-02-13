const Shape = require('../lib/shape');

describe('Shape', () => {
  describe('If input empty method', () => {
    it('should throw an error if input is empty', () => {
      const shape = () => new Shape();
      const err = new Error('Input cannot be empty');
      expect(shape).toThrow(err);
    });
  });

  describe('Validate input length', () => {
    it('should throw error if logo text is longer than 3', () => {
      const shape = () => new Shape('John');
      const err = new Error('Logo text cannot be more than 3 characters');
      expect(shape).toThrowError(err);
    });
  });

  describe('Invalid colour input', () => {
    it('should throw error if input is not a vaild css colour', () => {
      const shape = () => new Shape('Ted', 'NotColour');
      const err = new Error(
        'Please enter a vaild css color keyword or hex code'
      );
      expect(shape).toThrowError(err);
    });
  });

  describe('Validate colour input', () => {
    it('should add colour if it is a valid color', () => {
      const shape = new Shape('Ted', 'red', '#000');
      expect(shape.textColour).toBe('red');
    });
  });

  describe('Validate background colour input', () => {
    const shape = new Shape('Sam', 'black', '#123');
    expect(shape.bgColour).toBe('#123');
  });

  describe('Own Render Method', () => {
    it('should throw an error if render() is called', () => {
      //Need to pass in text name other wise it will fail in the if statement
      const shape = new Shape('You', 'green', 'rebeccapurple');
      const err = new Error('Child shapes must implement a render() method');
      expect(() => shape.render()).toThrow(err);
    });
  });
});
