export function getCart() {
    // axios.get('./cart.json')
    //   .then( response => {
    //     this.setState({
    //       cart: response.data.cart
    //   });
    // })
    return JSON.parse(localStorage.getItem('cart'));
}