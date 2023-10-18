const todoList = [];

const addTodo = (todo) => {
    todoList.push({todo: todo, isDone: false});
}

const addUrgent = (urgentTodo) => {
    todoList.unshift({todo: urgentTodo, isDone: false});
}

addTodo("Dance");
addTodo("Walk");
addTodo("Water the plant");
console.log(todoList);
addUrgent("Deadline Work");
console.log(todoList);