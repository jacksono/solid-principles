class FlatShape {
  constructor(sidesArray) {
    this.sidesArray = sidesArray;
  }

  area() {
    return this.sidesArray[0] * this.sidesArray[1];
  }
}

class SolidShape extends FlatShape {
  constructor(sidesArray) {
    super(sidesArray);
    this.sidesArray = sidesArray;
  }

  volume() {
    return this.sidesArray.reduce((acc, side) => side * acc);
  }
}

const cube = new SolidShape([2, 3, 5]);
console.log('Cube base area: ', cube.area());
console.log('Cube volume: ', cube.volume());


class Rectangle extends FlatShape {
  constructor(sidesArray) {
    super(sidesArray);
    this.name = 'RectangleShape';
  }
}

const rectangleShape = new Rectangle([5, 8]);
console.log('rectangleShape area: ', rectangleShape.area());
