const students2 = [
    {
        id: 3,
        name: "Bob Lee"
    },
    {
        id: 0,
        name: "John Lee"
    },
    {
        id: 1,
        name: "Ann Lee"
    },
]

const sortById = (students) => {
    return [...students].sort((a, b) => a.id - b.id);
}

const sortByName = (students) => {
    return [...students].sort((o1, o2) => {
        const name1 = o1.name.toLowerCase();
        const name2 = o2.name.toLowerCase();
        if (name1 < name2) {
            return -1
        }
        if (name1 > name2) return 1;
        return 0;
    });
}

function counter() {
    let count = 0;

    function increment() {
        return ++count;
    }

    function decrement() {
        return --count;
    }

    return { increment, decrement }
}

const { increment, decrement } = counter();
