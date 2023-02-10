const Shape = require('../lib/shape');

describe('Shape Error', () => {
  test('should throw an error if render() is called', () => {
    const shape = new Shape();
    const err = new Error('Child shapes must implement a render() method');
    expect(shape.render).toThrow(err);
  });
});

describe('Shape Text', () => {
  test('text should not be empty', () => {
    const text = 'Jon';
    const shape = new Shape(text);
    expect(shape.text).toBe(text);
  });
});
