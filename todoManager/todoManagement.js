const Todo = require("./todo");
const todoManagement = () => {
    const todos = [];
    let nextId = 1;
    const addTodo = (description) => {
        return todos.push(new Todo(nextId++, description));
    }

    // find todo
    const findTodo = (searchId) => {
        return todos.find(todo => todo.id === searchId);
    }

    const findIndexTodo = (searchId) => {
        return todos.findIndex(todo => todo.id === searchId);
    }

    const removeTodo = (removeId) => {
        if (removeId < 0) return -1;
        const removeTodoIndex = findIndexTodo(removeId);
        todos.splice(removeTodoIndex, 1);
    }
    const getTodos = () => {
        return todos;
    }

    return { addTodo, findTodo, findIndexTodo, removeTodo, getTodos }
}

const tm = todoManagement();
tm.addTodo("running");
tm.addTodo("walking");
console.log(tm.findIndexTodo(1));
console.log(tm.getTodos());