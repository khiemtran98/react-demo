export default (state = {}, action) => {
    console.log({ state, action })
    switch (action.type) {
        case 'UPDATE_NAME':
            return { ...state, name: action.payload };

        default:
            break;
    }

    return state;

}