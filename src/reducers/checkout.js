import * as actionType from '../actions/type'

const initialCartState = {
    info: {}
}

const SubmitCheckout = (state = initialCartState, action) => {
    switch (action.type) {
        case actionType.CO_SUBMIT:
            return {
                ...state, info: action.payload.info
            }
        default:
            return state
    }
};

export default SubmitCheckout;