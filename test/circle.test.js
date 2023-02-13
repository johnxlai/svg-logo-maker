const Circle = require('../lib/circle');

describe('Circle', () => {
  describe('Render Method', () => {
    it('should render circle', () => {
      const circle = new Circle('Jon');
      expect(circle.render()).toBe(
        `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
      );
    });
  });
});
