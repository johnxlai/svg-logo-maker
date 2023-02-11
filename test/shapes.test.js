const Shape = require('../lib/shape');

describe('Shape Error', () => {
  it('should throw an error if render() is called', () => {
    const shape = new Shape();
    const err = new Error('Child shapes must implement a render() method');
    expect(() => shape.render()).toThrow(err);
  });
});

describe('Shape Text', () => {
  it('should not be empty', () => {
    const shape = new Shape('');
    const err = new Error('Logo text cannot be empty');
    expect(shape).toThrow(err);
  });
});

describe('Shape Text Length', () => {
  it('should not exceed 3 characters', () => {
    const text = 'Max';
    const shape = new Shape(text);
    expect(shape.text.length);
  });
});
