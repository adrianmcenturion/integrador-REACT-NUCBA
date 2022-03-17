import axios from "axios"
import { LoadingTrueAction, LoadingFalseAction } from "./Loading";

// DEFAULT VALUE

const defaultValue = {
    productsData: '',
    dataReceived: false,
    requestData: []

}

// ACTION TYPES

const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_PRODUCTS_BY_TYPE = 'GET_PRODUCTS_BY_TYPE'
const GET_PRODUCTS_BY_SUBTYPE = 'GET_PRODUCTS_BY_SUBTYPE'
const GET_PRODUCTS_BY_SEARCH = 'GET_PRODUCTS_BY_SEARCH'


// REDUCER

export default function ProductsReducer(state = defaultValue, { type, payload }) {
    switch(type) {
        case GET_PRODUCTS: return {...state, productsData: payload.productsData, dataReceived: payload.dataReceived, requestData: payload.requestData };
        case GET_PRODUCTS_BY_TYPE: return {...state, productsData: payload.productsData, dataReceived: payload.dataReceived, requestData: payload.requestData };
        case GET_PRODUCTS_BY_SUBTYPE: return {...state, productsData: payload.productsData, dataReceived: payload.dataReceived, requestData: payload.requestData };
        case GET_PRODUCTS_BY_SEARCH: return {...state, productsData: payload.productsData, dataReceived: payload.dataReceived, requestData: payload.requestData };
        default: return state;
    }
}

// ACTIONS




export const GetProductsAction = () => async (dispatch) => {
    
    dispatch(LoadingTrueAction())

    const response = {

        method: 'GET',
        url: `https://back-poketcg.herokuapp.com/get-cards`

    } 

    await axios.request(response).then((response) => {

        const reponse = response.data.data

        const fixReponse = reponse.map(element => {
            return {...element, price: (element.cardmarket === undefined || element.cardmarket.prices === undefined || element.cardmarket.prices.averageSellPrice === undefined ? (Math.random() * 20.50).toFixed(2) : element.cardmarket.prices.averageSellPrice) }
        })
    
    dispatch({ type: GET_PRODUCTS , payload: { productsData: fixReponse, dataReceived: true, requestData: {...response.data, data: null}  }} );

    dispatch(LoadingFalseAction())
        
    }).catch((error) => {
        return console.error(error)
        
    })

}

export const GetProducsByTypesAction = (types) => async (dispatch) => {

    dispatch(LoadingTrueAction())

    const response = {
        method: 'GET',
        url: `https://back-poketcg.herokuapp.com/get-cards/types`,
        params: {types: types}

    } 

    await axios.request(response).then((response) => {

        const reponse = response.data.data

        const fixReponse = reponse.map(element => {
            return {...element, price: (element.cardmarket === undefined || element.cardmarket.prices === undefined || element.cardmarket.prices.averageSellPrice === undefined ? (Math.random() * 20.50).toFixed(2) : element.cardmarket.prices.averageSellPrice) }
        })
    
    dispatch({ type: GET_PRODUCTS_BY_TYPE , payload: { productsData: fixReponse, dataReceived: true, requestData: {...response.data, data: null}  }});

    dispatch(LoadingFalseAction())

        
    }).catch((error) => {
        return console.error(error)
        
    })

}

export const GetProducsBySubTypesAction = (subtypes) => async (dispatch) => {

    dispatch(LoadingTrueAction())

    const response = {
        method: 'GET',
        url: `https://back-poketcg.herokuapp.com/get-cards/subtypes`,
        params: {subtypes: subtypes}

    } 

    await axios.request(response).then((response) => {

        const reponse = response.data.data

        const fixReponse = reponse.map(element => {
            return {...element, price: (element.cardmarket === undefined || element.cardmarket.prices === undefined || element.cardmarket.prices.averageSellPrice === undefined ? (Math.random() * 20.50).toFixed(2) : element.cardmarket.prices.averageSellPrice) }
        })
    
    dispatch({ type: GET_PRODUCTS_BY_SUBTYPE , payload: { productsData: fixReponse, dataReceived: true, requestData: {...response.data, data: null}  }});

    dispatch(LoadingFalseAction())

        
    }).catch((error) => {
        return console.error(error)
        
    })

}

export const GetProducsBySearchAction = (searchname) => async (dispatch) => {

    dispatch(LoadingTrueAction())

    const response = {
        method: 'GET',
        url: `https://back-poketcg.herokuapp.com/get-cards/searchname`,
        params: {searchname: searchname}

    } 

    await axios.request(response).then((response) => {

        const reponse = response.data.data

        const fixReponse = reponse.map(element => {
            return {...element, price: (element.cardmarket === undefined || element.cardmarket.prices === undefined || element.cardmarket.prices.averageSellPrice === undefined ? (Math.random() * 20.50).toFixed(2) : element.cardmarket.prices.averageSellPrice) }
        })
    
    dispatch({ type: GET_PRODUCTS_BY_SEARCH , payload: { productsData: fixReponse, dataReceived: true, requestData: {...response.data, data: null}  }});

    dispatch(LoadingFalseAction())
        
    }).catch((error) => {
        return console.error(error)
        
    })

}