import { SET_ITEMS } from "../actions/AppActions";

const initialState = {
    products: [],
    isFetching: true,
    error: '',
}


export function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ITEMS:
            return { ...state, products: action.payload, isFetching: false, error: '' }
        case GET_PHOTOS_FAIL:
            return { ...state, error: action.payload.message, isFetching: false }
        default:
            return state
    }
}
