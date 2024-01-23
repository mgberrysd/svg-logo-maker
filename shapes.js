class Shapes {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor;
    }
  }
  
  class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
  
    }
  }
  
  class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
  
    }
  }
  
  class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
  
    }
  }

  module.exports = Shapes, Circle, Triangle, Square;