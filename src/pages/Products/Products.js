import Navbar from "../../components/Navbar/Navbar"
import ProductsContainer from "../../components/Products/ProductsContainer"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetProductsAction } from "../../redux/Products"
import SearchBar from "../../components/Products/SearchBar/SearchBar"
import Footer from "../../components/Footer/Footer"

const Products = () => {

  const dispatch = useDispatch()

  const isLoading = useSelector(state => state.loading.isLoading)
  

  useEffect(() => {
    
    dispatch(GetProductsAction())

  },[dispatch])
  



  return (
    <div>
        <Navbar/>
        <SearchBar/>
        <ProductsContainer/>
        {isLoading ? null : <Footer/>}
    </div>
  )
}

export default Products