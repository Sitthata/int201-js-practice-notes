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

// const applyDiscount = (products, category) => {
//     return products
//         .filter(product => product.category.includes(category))
//         .map(product => ({ ...product, price: product.price * 0.9 }))
// }

//Higher order
const applyDiscount = (products, category) => {
    return products.map(product => {
        if (product.category.includes(category)) {
            return {...product, price: product.price * 0.9}
        }
        return product
    })
}

const sortByPrice = (products) => {
    return products.sort((p1, p2) => p1.price - p2.price);
}

console.log(sortByCategory(products));
console.log(applyDiscount(products, "Electronics"));
console.log(sortByPrice(products));