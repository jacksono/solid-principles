class Shape {
  constructor(sidesArray) {
    this.sidesArray = sidesArray;
  }

  area() {
    return this.sidesArray[0] * this.sidesArray[1];
  }

  volume() {
    return this.sidesArray.reduce((acc, side) => side * acc);
  }
}

const cube = new Shape([2, 3, 5]);
console.log('Cube base area: ', cube.area());
console.log('Cube volume: ', cube.volume());


class Rectangle extends Shape {
  constructor(sidesArray) {
    super(sidesArray);
    this.name = 'RectangleShape';
  }
}

const rectangleShape = new Rectangle([5, 8]);
console.log('rectangleShape area: ', rectangleShape.area());
console.log('rectangleShape volume: ', rectangleShape.volume());
