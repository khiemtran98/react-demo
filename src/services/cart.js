export function getCart() {
    // axios.get('./cart.json')
    //   .then( response => {
    //     this.setState({
    //       cart: response.data.cart
    //   });
    // })
    // return JSON.parse(localStorage.getItem('cart'));
}

export function getCartQuantity(cart) {
    return cart.items.reduce((total, x) => {
        return total + x.quantity
    }, 0);
}

export function addItem(item) {
    let cart = getCart();
    if (cart && cart.length > 0) {
        let checkAlreadyExist = false;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === item.id) {
                cart[i].quantity = parseInt(cart[i].quantity) + parseInt(item.quantity);
                checkAlreadyExist = true;
                break;
            }
        }
        if (!checkAlreadyExist) {
            cart.push(item);
        }
    } else {
        cart = [item];
    }
    saveCart(cart);
}

export function changeItem(id, quantity) {
    let cart = getCart();
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].quantity = parseInt(quantity);
            break;
        }
    }
    saveCart(cart);
}

export function saveCart(cart) {
    // TODO: test
    localStorage.setItem("cart", JSON.stringify(cart));
    // localStorage.setItem("cart", "[" + JSON.stringify(item) + "]");
}

export function deleteItem(id) {
    let cart = getCart();
    cart = cart.filter(x => x.id !== id);
    saveCart(cart);
}