import axios from "axios"

// DEFAULT VALUE

const defaultValue = {   
    userInfo: {}

}

// ACTION TYPES

const REGISTER = 'REGISTER';


// REDUCER

export default function RegisterReducer(state = defaultValue, { type, payload }) {
    switch(type) {
        case REGISTER: return {...state, userInfo: payload };
        default: return state;
    }
}

// ACTIONS


export const RegisterAction = ({email, password, firstName, lastName}) => async (dispatch) => {

    const response = {
                        method: 'POST',
                        url: `https://back-poketcg.herokuapp.com/auth/register`,
                        data: {
                            email,
                            password,
                            firstName,
                            lastName
                        }
    
                    } 
    
                    await axios.request(response).then((response) => {

                        const userInfo = response.data
                        
                        dispatch({ type: REGISTER , payload: userInfo });
                        
                    }).catch((error) => {
                        return console.error(error)
                        
                    })

}