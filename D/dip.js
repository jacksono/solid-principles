class Associate {
  constructor(name) {
    this.name = name;
    this.hoursMultiplier = 200;
  }
}

class WageCalculator {
  constructor(hoursWorked, bonus, name) {
    this.hoursWorked = hoursWorked;
    this.bonus = bonus;
    this.employee = new Associate(name);
  }

  wage() {
    const wage = 10 * this.bonus;
    return wage + (this.employee.hoursMultiplier * this.hoursWorked);
  }

  wageReport() {
    return `The wage for ${this.employee.name} is KES ${this.wage()}`;
  }
}

const allanWage = new WageCalculator(100, 50, 'Allan');

console.log(allanWage.wageReport());
