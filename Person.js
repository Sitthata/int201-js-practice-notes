class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth; // Object Date
    }

    getFullName() {
        return `${this.firstName}, ${this.lastName}`;
    }

    getAge() {
        const today = Date.now(); // millisecond
        const personAge = this.dateOfBirth.getTime(); // millisecond
        const dateDifferenceMilli = today - personAge;
        const dateDifference = new Date(dateDifferenceMilli);
        return Math.abs(dateDifference.getUTCFullYear() - 1970);
    }

    isEqual(anotherPerson) {
        if (this.firstName === anotherPerson.firstName) return true;
        if (this.getFullName() !== anotherPerson.getFullName()) return false;
        return JSON.stringify(this) === JSON.stringify(anotherPerson);
    }
}

const person1 = new Person("John", "Doe", new Date(2003, 11, 24));
console.log(person1.getFullName());
console.log(person1.getAge());