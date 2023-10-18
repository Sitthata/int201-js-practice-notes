const arrayAnalyze = (array) => {
    array.sort((a, b) => a - b);
    const sumOfArray = array.reduce((prev, curr) => prev + curr);
    const averageOfArray = sumOfArray / array.length;
    return {
        min: array[0],
        max: array[array.length - 1],
        sum: sumOfArray,
        average: averageOfArray
    }
}

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

const getData = async () => {
    const data = await fetchData();
    const webList = data.map(user => user.website);
    console.log(filterExtension(webList, ".com"));
}

const filterExtension = (webList, extension) => {
    return webList.filter((web) => web.endsWith(extension));
}

getData();