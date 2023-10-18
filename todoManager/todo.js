class Todo {
    constructor(id, description) {
        this.id = id;
        this.description = description;
    }

    getTodo() {
        return this
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }
}

module.exports = Todo;
