const Shape = require('./shape');

class Circle extends Shape {
  render() {
    return `<circle cx="50" cy="50" r="50" fill="${this.bgColour}" />`;
  }
}

module.exports = Circle;
