import { Box, Button, Container, Flex, Spacer, Text, useToast } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { ClearCartAction, GetTotalsAction } from "../../redux/CartSlice"
import { useEffect } from "react"


const Checkout = () => {

  const dispatch = useDispatch()
  const cart = useSelector( state => state.cart)
  const subTotal = useSelector( state => state.cart.cartTotalAmount)
  const quantity = useSelector( state => state.cart.cartTotalQuantity)

  const toast = useToast()

  const handleClearCart = () => {
    dispatch(ClearCartAction())
    toast({
      title: 'Cart cleared!',
      status: 'error',
      duration: 2000,
      isClosable: true,
  })

  }

  const handleCheckout = () => {
    dispatch(ClearCartAction())
    toast({
      title: 'Order processed, thanks!',
      status: 'success',
      duration: 2000,
      isClosable: true,
  })
  }

  useEffect(() => {
    dispatch(GetTotalsAction())

  }, [cart, dispatch])



  return (
    
    <Box my={6}>
        <Container maxWidth='900px' mx='auto'>
            <Flex justifyContent='flex-end'>
              <Button  size='md' fontSize='xs' variant='outline' onClick={handleClearCart}>CLEAR CART</Button>
              <Spacer/>
                <Flex flexDirection='column'>
                  <Flex w='10em'>
                    <Text>SUBTOTAL: </Text>
                    <Spacer/>
                    <Text>${subTotal.toFixed(2)}</Text>
                  </Flex>
                {quantity > 0 ? <Button size='md' fontSize='xs' mt={4} variant='outline' onClick={handleCheckout}>CHECKOUT</Button> : <Button disabled={true} size='md' fontSize='xs' mt={4} variant='outline' onClick={handleCheckout}>CHECKOUT</Button>}
                </Flex>
            </Flex>
            


        </Container>
    </Box>



  )
}

export default Checkout