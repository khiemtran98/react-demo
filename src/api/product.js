import axios from 'axios'

export function getProducts() {
    return axios.get('https://projectapi1.herokuapp.com/api/products/', {
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Content-Type': 'application/json',
        // }
        // crossdomain: true
    });
}

export function getProductsById(id) {
    let url = 'https://projectapi1.herokuapp.com/api/products/' + id;
    return axios.get(url);
}