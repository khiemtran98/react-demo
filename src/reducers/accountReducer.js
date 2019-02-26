export default (state = {}, action) => {
    console.log({ state, action })
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state, loggedIn: true
            };

        default:
            break;
    }

    return state;

}
