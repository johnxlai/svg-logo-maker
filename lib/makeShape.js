const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

const makeShape = ({ logoName, textColour, logoColour, logoShape } = data) => {
  switch (logoShape) {
    case 'circle':
      const makeCircle = new Circle(
        logoName,
        textColour,
        logoColour,
        logoShape
      );
      return makeCircle;
      break;

    case 'triangle':
      const makeTriangle = new Triangle(
        logoName,
        textColour,
        logoColour,
        logoShape
      );
      return makeTriangle;
      break;

    case 'square':
      const makeSquare = new Square(
        logoName,
        textColour,
        logoColour,
        logoShape
      );
      return makeSquare;
      break;

    default:
      return `Something is not right!`;
      break;
  }
};

module.exports = { makeShape };
