const Shape = require('./shape');

class Circle extends Shape {
  constructor(text, textColour, bgColour, shape) {
    super(text, textColour, bgColour);
    this.shape = shape;
  }
  render() {
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  <circle cx="50" cy="50" r="50" fill="#000" />
</svg>`;
  }
}

const circle = new Circle('jon', 'green', 'green', 'circle');
console.log(circle);

module.exports = Circle;
