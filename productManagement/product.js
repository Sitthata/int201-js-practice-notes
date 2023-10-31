const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
    { id: 2, name: "Phone", category: "Electronics", price: 500 }
];

const addProduct = (product) => {
    return products.push(product)
}

const findProductByCategory = (category) => {
    return products.filter(product => product.category.includes(category))
}

const sortByCategory = (products) => {
    const categorizedProduct = {}
    products.forEach(product => {
        const currentCategory = product.category;
        if (!categorizedProduct[currentCategory]) {
            categorizedProduct[currentCategory] = [];
        }
        categorizedProduct[currentCategory].push(product);
    });
    return categorizedProduct;
}

console.log(sortByCategory(products));