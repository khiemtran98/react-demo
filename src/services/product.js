import Data from '../components/data';
const queryString = require('query-string');

export function getProduct(url) {
    const parsed = queryString.parse(url);
    let [product] = Data.filter(element => element["id"] === parseInt(parsed.id));
    return product;
};