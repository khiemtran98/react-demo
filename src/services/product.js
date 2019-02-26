import Data from '../components/data';
const queryString = require('query-string');

export function getProduct(url) {
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