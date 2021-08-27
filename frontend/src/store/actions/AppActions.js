export const GET_CARDS_REQUEST = 'GET_CARDS_REQUEST'


export function getProduct() {
    return function (dispatch) {
        dispatch({
            type: GET_CARDS_REQUEST,
        })
        fetch('/api/goods')
            .then(res => res.json())
            .then((result) => dispatch({
                type: SET_ITEMS,
                payload: result,
            }))
            .catch((e) => dispatch({
                type: ERROR,
                payload: e,
            }))
    }
}