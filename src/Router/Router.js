import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Home from '../pages/Home/Home'
import Register from '../pages/Register/Register'
import Products from '../pages/Products/Products'
import Cart from '../pages/Cart/Cart'
import { useSelector } from "react-redux"



const Router = () => {

  const { token } = useSelector( store => store.login )

  return (
    
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                {!token && <Route path="/login" element={<Login/>}/>}
                {!token && <Route path="/register" element={<Register/>}/>}
                {token && <Route path="/products" element={<Products/>}/>}
                {token && <Route path="/cart" element={<Cart/>}/>}
                <Route path="*" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    
  )
}

export default Router