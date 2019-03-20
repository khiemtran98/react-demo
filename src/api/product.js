import axios from 'axios'

export function getProducts() {
    return axios.get('http://localhost:4000/api/products/', {
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Content-Type': 'application/json',
        // }
        // crossdomain: true
    });
}

export function getProductsById(id) {
    let url = 'http://localhost:4000/api/products/' + id;
    return axios.get(url);
}