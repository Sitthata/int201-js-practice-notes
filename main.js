const students = [
    { id: 1, firstName: 'Quincy', lastName: "Doe", grade: 70 },
    { id: 2, firstName: 'Jason', lastName: "Doe", grade: 40 },
    { id: 3, firstName: 'JaiDee', lastName: "Doe", grade: 100 },
    { id: 4, firstName: 'Sam', lastName: "Doe", grade: 90 }
];

const fullNames = students.map((student) => `${student.firstName} ${student.lastName}`);
const newIds = students.map((student) => {
    const currentYear = new Date(Date.now()).getFullYear();
    return currentYear.toString() + student.id;
});

const failStudent = students.find(student => student.grade < 50);
console.log(failStudent);

const jaiStudentId = students.find(student => student.firstName.startsWith("Jai")).id;
console.log(jaiStudentId);

console.log(students.some((student) => student.firstName.toLowerCase().endsWith("son")));