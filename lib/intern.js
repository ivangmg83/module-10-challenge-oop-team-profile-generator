const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    // get school
    getSchool() {
        return this.school;
    }


    // override parent method
    getRole() {
        return "Intern";
    }

}

module.exports = Intern;