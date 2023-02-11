const Shape = require('./shape');

class Circle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`;
  }
}

module.exports = Circle;
