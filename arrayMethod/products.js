const products = [
    {
        name: 'Laptop',
        category: 'Electronics',
        price: 1200,
        inStock: true
    },
    {
        name: 'Shampoo',
        category: 'Personal Care',
        price: 15,
        inStock: false
    },
    {
        name: 'Coffee Maker',
        category: 'Appliances',
        price: 80,
        inStock: true
    },
    {
        name: 'Book',
        category: 'Books',
        price: 20,
        inStock: true
    },
    {
        name: 'Smartphone',
        category: 'Electronics',
        price: 600,
        inStock: false
    }
];

const getInStock = (products) => {
    return products.filter(product => product.inStock)
}

const totalInventoryValue = (products) => {
    return getInStock(products)
        .map(product => product.price)
        .reduce((acc, curr) => acc + curr, 0);
};

const categorizeProducts = (products) => {
    const categorized = {};
    products.forEach(product => {
        const category = product.category;
        if (!categorized[category]) {
            categorized[category] = [];
        }
        categorized[category].push(product);
    })
    return categorized;
}

const mostExpensiveProduct = (products) => {
    return products.sort((a, b) => b.price - a.price)[0];
}

const averageProductPrice = (products) => {
    // const totalPrice = products.map(product => product.price)
    //     .reduce((acc, curr) => acc + curr, 0);
    return products.reduce((acc, curr) => acc + curr.price, 0) / products.length;
}


// console.log(averageProductPrice(products));
// console.log(mostExpensiveProduct(products))
console.log(categorizeProducts(products))
// console.log(getInStock(products));
// console.log(totalInventoryValue(products));