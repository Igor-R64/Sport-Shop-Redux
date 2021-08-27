import { GET_CARDS_REQUEST } from "../actions/AppActions";

const initialState = {
    products: [],
    error:'',
}


export function appReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CARDS_REQUEST:
            return { ...state,  products:action.payload, error: '' }
       default:
            return state
    }
}