const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

const generateSvg = ({
  logoName,
  textColour,
  logoColour,
  logoShape,
} = data) => {
  switch (logoShape) {
    case 'circle':
      const makeCircle = new Circle(logoName, textColour, logoColour);
      // console.log(makeCircle);
      return makeCircle;
      break;

    case 'triangle':
      const makeTriangle = new Triangle(logoName, textColour, logoColour);
      return makeTriangle;
      break;

    case 'square':
      const makeSquare = new Square(logoName, textColour, logoColour);
      return makeSquare;
      break;

    default:
      return `Something is not right!`;
      break;
  }
};

const makeSvg = (shape) => {
  // console.log(shape);
  return `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">

      ${shape.render()}

      <text x="50%" y="50%" text-anchor="middle" fill="${
        shape.textColour
      }" font-size="2.3rem" letter-spacing="2" dy=".3em" font-family="monospace">${
    shape.text
  }</text>
    </svg>
  `;
};
console.log(
  makeSvg(
    generateSvg({
      logoName: 'gor',
      textColour: 'red',
      logoColour: 'green',
      logoShape: 'triangle',
    })
  )
);

module.exports = { generateSvg };
