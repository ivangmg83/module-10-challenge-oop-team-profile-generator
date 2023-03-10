const Employee = require("./employee");


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // override parent method
    getRole() {
        return "Manager";
    }

}

module.exports = Manager;