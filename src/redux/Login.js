import axios from "axios"

// DEFAULT VALUE

const defaultValue = {
    token: null,
    userInfo: {}

}

// ACTION TYPES

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const GET_USER_INFO = 'GET_USER_INFO'


// REDUCER

export default function LoginReducer(state = defaultValue, { type, payload }) {
    switch(type) {
        case LOGIN: return {...state, token: payload };
        case LOGOUT: return defaultValue;
        case GET_USER_INFO: return {...state, userInfo: payload }
        default: return state;
    }
}

// ACTIONS


export const LoginAction = ({email, password}) => async (dispatch) => {

    // const dispatch = useDispatch   
    // let isLoading = true
    // dispatch(IsLoadingAction({isLoading}))

    const response = {
                        method: 'POST',
                        url: `https://back-poketcg.herokuapp.com/auth/login`,
                        data: {
                            email,
                            password
                        }
    
                    } 
    
                    await axios.request(response).then((response) => {
                    
                        const token = response.data;

                        dispatch({ type: LOGIN , payload: token});
              
                    }).catch((error) => {
                        return console.error(error)
                        
                    })

}

export const LogoutAction = () => dispatch => {
  
    dispatch({type: LOGOUT})
}