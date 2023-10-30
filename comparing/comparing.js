const student1 = { id: 1, name: "Jason" };
const student2 = { id: 1, name: "Jason" };
// comparing object
const isEqual = JSON.stringify(student1) === JSON.stringify(student2);
console.log(isEqual);

