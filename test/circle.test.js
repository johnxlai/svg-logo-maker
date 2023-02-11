const Circle = require('../lib/circle');

describe('Circle', () => {
  describe('Have own render', () => {
    it('should have own render', () => {
      const circle = new Circle('Jon');
      expect(circle.render()).toBe(
        `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
      );
    });
  });
});
