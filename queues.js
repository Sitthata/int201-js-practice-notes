let customerQueue = [];
let availableTable = 2;

const addCustomer = (name) => {
    customerQueue.push(name);
    seatCustomer();
    console.log(`${name} has been added`);
    console.log(`Current queues: ${customerQueue.length === 0 ? "No queues" : customerQueue.join(", ")} \n`);

}

const addVipCustomer = (name) => {
    customerQueue.unshift(name);
    console.log(`${name} vip has arrived!`)
    console.log(`Current queues: ${customerQueue.length === 0 ? "No queues" : customerQueue.join(", ")} \n`);
}

const seatCustomer = () => {
    while(availableTable > 0 && customerQueue.length > 0) {
        const currentCustomer = customerQueue.shift();
        console.log(`Please come in, ${currentCustomer} the table is ready.`)
        availableTable--;
    }
    console.log(`Available Table: ${availableTable}`);
}

// Simulate customer arrival
addCustomer("John");
addCustomer("Ann");
addCustomer("Alex");
addVipCustomer("P'Ta");
addCustomer("Joe");
availableTable = 1;
addCustomer("Dane")