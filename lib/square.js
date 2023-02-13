const Shape = require('./shape');

class Square extends Shape {
  render() {
    return `<rect width="100" height="100" rx="15" fill="${this.bgColour}" />`;
  }
}

module.exports = Square;
