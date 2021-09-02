import { SET_ITEMS, ERROR } from "../actions/AppActions";

const initialState = {
    products: [],
    isFetching: true,
    error: '',
}


export function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ITEMS:
            return { ...state, products: action.payload, isFetching: false, error: '' }
        case ERROR:
            return { ...state, error: action.payload.message, isFetching: false }
        default:
            return state
    }
}
