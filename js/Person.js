// Définition de la classe et exportation
export default class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    constructor() {
        this.firstName = 'unknown';
        this.lastName = 'unknown';
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    toString() {
        return `${this.firstName} ${this.lastName}`;
    }
}