import Data from '../components/data';
const queryString = require('query-string');

export function getProductByID(url) {
    const parsed = queryString.parse(url);
    let [product] = Data.filter(element => element["id"] === parseInt(parsed.id));
    return product;
};

export function searchProducts(keyword, order) {
    // TODO:
    // order values:
    // anphabete_asc
    // anphabete_desc
    // price_asc
    // price_desc
    // step
    // get data from mock data
    // search, order
    return [];
}

export function getData(keyword, sortBy, sortOrder) {
    let products = Data;
    if (keyword) {
        products = products.filter((data) => data.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
    }
    switch (sortBy) {
        case "name":
            products.sort((a, b) => {
                if (a.name > b.name) return sortOrder;
                else if (a.name < b.name) return -sortOrder;
                return 0;
            });
            break;
        case "price":
            products.sort((a, b) => {
                if (a.price > b.price) return sortOrder;
                else if (a.price < b.price) return -sortOrder;
                return 0;
            });
            break;
    }
    return products;
}


export function getProducts(keyword, sortBy, sortOrder, selectedPage, pageSize) {

    let productData = getData(keyword, sortBy, sortOrder);

    const numOfPages = Math.ceil(productData.length / pageSize);
    const filteredProducts = productData.slice((selectedPage - 1) * pageSize, selectedPage * pageSize);
    return {
        products: filteredProducts,
        numOfPages
    }
}