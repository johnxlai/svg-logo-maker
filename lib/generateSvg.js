const Circle = require('./circle');

const generateSvg = ({
  logoName,
  textColour,
  logoColour,
  logoShape,
} = data) => {
  switch (logoShape) {
    case 'circle':
      const makeCircle = new Circle(logoName, textColour, logoColour);
      return makeCircle.render();
      break;

    case 'triangle':
      return `triangle`;
      // const makeCircle = new Circle(logoName, textColour, logoColour);
      // return makeCircle.render();
      break;

    case 'square':
      const makeSquare = new Square(logoName, textColour, logoColour);
      return makeSquare.render();
      break;

    default:
      return `Something is not right!`;
      break;
  }
};

module.exports = { generateSvg };
