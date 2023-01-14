const Employee = require("./employee");


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    // return github
    getGithub() {
        return this.github;
    }

    // override parent method
    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer;