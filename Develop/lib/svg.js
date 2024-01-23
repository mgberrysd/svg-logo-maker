class SVG {
    constructor(text, shape) {
        this.text = '';
        this.shape = '';
    }
    setText(text, textColor) {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
        if (text.length > 3) {
            throw new Error('Text must not exceed 3 characters.')
        }
    }
    setShape(shape) {
        this.shape = shape.render();
    }
    render() {
        return  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    }
}

module.exports = SVG;