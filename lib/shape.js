class Shape {
  constructor(text, textColour, bgColour) {
    this.text = text;
    this.textColour = textColour;
    this.bgColour = bgColour;
  }

  render() {
    throw new Error('Child shapes must implement a render() method');
  }
}

console.log(new Shape('JLJ', 'white', 'green'));
module.exports = Shape;
