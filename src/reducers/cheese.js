//sets initial state and updates state based on the action
import * as actions from '../actions/cheese';

const initialState = {
    cheeses: [],
    loading: false,
    error: null,
    message: ''
};

export function cheeseReducer(state=initialState, action) {
    if(action.type === actions.FETCH_CHEESES_REQUEST){
        return Object.assign({}, state, {
            loading: true
        })
    }
    else if(action.type === actions.FETCH_CHEESES_SUCCESS){
        return Object.assign({}, state, {
            cheeses: action.cheeses,
            loading: false,
            error: null
        })
    }
    else if(action.type === actions.FETCH_CHEESES_ERROR){
        console.log(action);
        return Object.assign({}, state, {
            error: action.error,
            message: action.message,
            loading: false
        })
    }
    return state;
}

