import { createSlice } from "@reduxjs/toolkit";


// DEFAULT VALUE

const initialState = {
    cartItems: [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        AddToCartAction(state, action){

            const itemIndex = state.cartItems.findIndex( (item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
            } else {
                
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct)

            }
        },
        RemoveFromCartAction(state, action){
           const nextCartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            )

            state.cartItems = nextCartItems

        },
        DecreaseCartQuantityAction(state, action){
            const itemIndex = state.cartItems.findIndex(
                item => item.id === action.payload.id
            )

            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1
            } else if (state.cartItems[itemIndex].cartQuantity === 1){
                const nextCartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                )
    
                state.cartItems = nextCartItems

            }
        },
        ClearCartAction(state, action){
            state.cartItems = []
        },
        GetTotalsAction(state, action){
            let { total, quantity } = state.cartItems.reduce((cartTotal, item) => {
                const { price, cartQuantity } = item
                const itemTotal = price * cartQuantity

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal
            }, {
                total: 0,
                quantity: 0
            })

            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        }

    }
})

export const { AddToCartAction, RemoveFromCartAction, DecreaseCartQuantityAction, ClearCartAction, GetTotalsAction } = cartSlice.actions

export default cartSlice.reducer