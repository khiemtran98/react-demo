export default (state = {}, action) => {
   
    switch (action.type) {
        case 'SEARCH':
            return {
                 ...state, keyword: action.payload 
            };
        default:
            break;
    }

    return state;

}
