export const SET_ITEMS = 'SET_ITEMS';
export const ERROR = 'ERROR';


export function getProduct() {
    return function (dispatch) {
        fetch('/api/goods')
            .then(res => res.json())
            .then((result) => dispatch({
                type: SET_ITEMS,
                payload: result,
            }))
            .catch((e) => dispatch({
                type: ERROR,
                error: true,
                payload: new Error(e),
            }))
    }
}