class WageCalculator {
  constructor(hoursWorked, bonus, employeeType = 'associate') {
    this.employeeType = employeeType;
    this.hoursWorked = hoursWorked;
    this.bonus = bonus;
  }

  bonusWage() {
    return 10 * this.bonus;
  }

  wage() {
    let wage = this.bonusWage();
    if (this.employeeType === 'associate') {
      wage += 200 * this.hoursWorked;
    } else if (this.employeeType === 'cordinator') {
      wage += 400 * this.hoursWorked;
    } else {
      wage += 800 * this.hoursWorked;
    }
    return wage;
  }
}

class WageReport {
  constructor(name, wage) {
    this.name = name;
    this.wage = wage;
  }

  wageReportShillings() {
    return `The wage for ${this.name} is KES ${this.wage}`;
  }

  wageReportDollars() {
    const wageInDollars = Math.floor(this.wage / 100);
    return `The wage for ${this.name} is USD ${wageInDollars}`;
  }
}

const allanWage = new WageCalculator(100, 50);
const allanWageReport = new WageReport('Allan', allanWage.wage());

const peterWage = new WageCalculator(100, 50, 'manager');
const peterWageReport = new WageReport('Peter', peterWage.wage());

console.log(allanWageReport.wageReportShillings());
console.log(allanWageReport.wageReportDollars());
console.log(peterWageReport.wageReportShillings());
console.log(peterWageReport.wageReportDollars());
