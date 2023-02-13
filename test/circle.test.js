const Circle = require('../lib/circle');

describe('Circle', () => {
  describe('Render Method', () => {
    it('should render circle string', () => {
      const circle = new Circle('Jon', 'green', 'red');
      expect(circle.render()).toBe(
        `<circle cx="50" cy="50" r="50" fill="red" />`
      );
    });
  });
});
