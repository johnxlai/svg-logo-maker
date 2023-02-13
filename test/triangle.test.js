const Triangle = require('../lib/triangle');

describe('Triangle', () => {
  describe('Render Method', () => {
    it('should return triangle string', () => {
      const triangle = new Triangle('Mel', '#CC00CC', '#000');
      expect(triangle.render()).toBe(
        `<polygon points="100 0, 0 ,0 50, 100" fill="#000" />`
      );
    });
  });
});
