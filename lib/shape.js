class Shape {
  constructor(text, textColour, bgColour) {
    // if (!text) throw new Error('Logo text cannot be empty');

    // if (text.length > 3) {
    //   throw new Error('Logo text cannot be more than 3 characters');
    // }

    this.text = text;
    this.textColour = textColour;
    this.bgColour = bgColour;
  }

  render() {
    throw new Error('Child shapes must implement a render() method');
  }
}

module.exports = Shape;
