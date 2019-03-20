import Data from '../components/data';
import { getProducts as getProductAPI, getProductsById as getProductsByIdAPI } from '../api/product'
const queryString = require('query-string');

// export function getProductByID(url) {
//     const parsed = queryString.parse(url);
//     let [product] = Data.filter(element => element["id"] === parseInt(parsed.id));
//     return product;
// };

export async function getProductsById(id) {
    let response = await getProductsByIdAPI(id);
    return response.data;
}

// export function searchProducts(keyword, order) {
//     // TODO:
//     // order values:
//     // anphabete_asc
//     // anphabete_desc
//     // price_asc
//     // price_desc
//     // step
//     // get data from mock data
//     // search, order
//     return [];
// }

export async function getData(keyword, sortBy, sortOrder) {
    let response = await getProductAPI();
    let products = response.data;

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


export async function getProducts(keyword, sortBy, sortOrder, selectedPage, pageSize) {

    let productData = await getData(keyword, sortBy, sortOrder);
    console.log({ productData });

    if (!productData) return {
        products: [],
        numOfPages: 0
    };

    const numOfPages = Math.ceil(productData.length / pageSize);
    const filteredProducts = productData.slice((selectedPage - 1) * pageSize, selectedPage * pageSize);
    return {
        products: filteredProducts,
        numOfPages
    }
}