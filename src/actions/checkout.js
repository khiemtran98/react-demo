import * as actionType from './type'

export const SubmitCheckout = info => ({
    type: actionType.CO_SUBMIT,
    payload: {
        info
    }
})