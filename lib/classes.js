class Employee {
    constructor(id, name, role, email) {
        this._id = id;
        this._name = name;
        this._role = role;
        this._email = email;
    }
    getName() {
        return this._name;
    }
    getId() {
        return this._id;
    }
    getEmail() {
        return this._email;
    }
    getRole() {
        return this._role = "Employee";
    }
}

class Manager extends Employee {
    constructor(officeNumber) {
        this._officeNumber = officeNumber;
    }
    getRole() {
        return 'Engineer'
    }
    getGithub() {
        return this._github = 'https://github.com/' + github;
    }
}