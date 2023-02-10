const Shape = require('../lib/shape');

descible('Shape Tester', () => {
  test('should throw an error if render() is called', () => {
    const shape = new Shape();
    const err = new Error('Child shapes must implement a render() method');
    expect(shape.render).toThrow(err);
  });
});
