"use strict";
class Developer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        this.isDeveloper = true;
    }
    getInfo() {
        return {
            name: this.name,
            salary: this.salary,
        };
    }
}
class SeniorDeveloper extends Developer {
    constructor(name, salary, devs) {
        super(name, salary);
        this.name = name;
        this.salary = salary;
        this.devs = devs;
    }
    teachJuniorDevs() {
        return this.devs;
    }
    appendJunior(jun) {
        this.devs.push(jun);
    }
}
// const developer = new Developer("Max", 2000);
// console.log(developer.getInfo());
const seniorDeveloper = new SeniorDeveloper("Max", 2000, [
    { name: "Oleg", age: 21 },
    { name: "Sasha", age: 23 },
]);
seniorDeveloper.appendJunior({ name: "Gena", age: 23 });
const devs = seniorDeveloper.teachJuniorDevs();
console.log(devs);
//# sourceMappingURL=test.js.map