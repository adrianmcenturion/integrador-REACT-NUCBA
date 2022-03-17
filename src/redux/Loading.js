// DEFAULT VALUE

const defaultValue = {
    isLoading: false

}

// ACTION TYPES

const SET_LOADING_TRUE = 'SET_LOADING_TRUE';
const SET_LOADING_FALSE = 'SET_LOADING_FALSE';

// REDUCER

export default function LoadingReducer(state = defaultValue, { type, payload }) {
    switch(type) {
        case SET_LOADING_TRUE: return {...state, isLoading: payload };
        case SET_LOADING_FALSE: return {...state, isLoading: payload };
        default: return state;
    }
}

// ACTIONS

export const LoadingTrueAction = () => dispatch => {
  
    dispatch({type: SET_LOADING_TRUE, payload: true})
}


export const LoadingFalseAction = () => dispatch => {
  
    dispatch({type: SET_LOADING_FALSE, payload: false})
}