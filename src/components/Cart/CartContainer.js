import { Box, Divider, Container, Heading, Flex, Text, Image, Grid, GridItem, Button, useToast, useMediaQuery } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { RemoveFromCartAction, DecreaseCartQuantityAction, AddToCartAction } from "../../redux/CartSlice"


const CartContainer = () => {

  const isCartEmpty = useSelector(state => state.cart.cartItems)
  const cart = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()
  const toast = useToast()
  const [isMobile] = useMediaQuery('(max-width: 550px)')

  const handleRemoveFromCart = (item) => {
    dispatch(RemoveFromCartAction(item))
    toast({
      title: 'Item removed from cart!',
      status: 'error',
      duration: 2000,
      isClosable: true,
  })
    
  }

  const handleClickDecrease = (item) => {
    dispatch(DecreaseCartQuantityAction(item))
  }

  const handleClickIncrement = (item) => {
    dispatch(AddToCartAction(item))
  }

  const mappedCart = cart.map((item, id) => {

    return (

          <Grid my={6} maxH='150px' templateRows='1fr' templateColumns='2fr 1fr 1fr 1fr' gap={4} key={item.id} alignItems='center'>
            <GridItem rowSpan={1} colSpan={1} display='flex' alignItems='center'>
             { isMobile ? null : <Flex flexDirection='column' gap={2}>
              <Image maxW='60px' src={item.images.small}></Image>
              <Button size='xs' fontSize='xs' variant='link' fontWeight='medium' onClick={() => {handleRemoveFromCart(item)}}>Remove</Button>
              </Flex>}
              <Box ml={4} display='flex' flexDirection='column' alignItems='flex-start' justifyContent='space-between'>
                <Text fontSize='xs'>{item.name}</Text>
                <Text fontSize='xs'>Set: {item.set.name}</Text>
                <Text fontSize='xs'>Rarity: {item.rarity}</Text>
                {isMobile ? <Button mt={4} size='xs' fontSize='xs' variant='link' fontWeight='medium' onClick={() => {handleRemoveFromCart(item)}}>Remove</Button> : null}
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} display='flex' justifyContent='center'>
              <Text fontSize='xs'>${item.price}</Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} display='flex' justifyContent='center'>
            <Flex alignItems='baseline' gap={2}>
                <Button size='xs' fontSize='xs' variant='ghost' onClick={() => handleClickDecrease(item)}>-</Button>
                {/* <Input size='xs' fontSize='xs' type='number' value={item.cartQuantity}></Input> */}
                <Text fontSize='xs' width='2em'>{item.cartQuantity}</Text>
                <Button size='xs' fontSize='xs' variant='ghost' onClick={() => handleClickIncrement(item)}>+</Button>
            </Flex>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} display='flex' justifyContent='center'>
              <Text fontSize='xs'>${(item.price*item.cartQuantity).toFixed(2)}</Text>
            </GridItem>
          </Grid>
    )

  })


  return (

    <Box mt={10}>
      <Container maxWidth='900px' mx='auto'>
      <Heading fontWeight='bold' fontSize='xl' >CART</Heading>
        <Grid mt={16}h='50px' templateRows='1fr' templateColumns='2fr 1fr 1fr 1fr' gap={4}>
            <GridItem rowSpan={1} colSpan={1}>
              <Text fontSize='md'>PRODUCT</Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Text fontSize='md'>PRICE</Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Text fontSize='md'>QUANTITY</Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Text fontSize='md'>TOTAL</Text>
            </GridItem>
        </Grid>
        <Divider my='2' orientation="horizontal"/>
        {isCartEmpty.length <= 0 ? <Text>No items in cart</Text> : mappedCart}
        <Divider my='2' orientation="horizontal"/>

      </Container>
    </Box>





      



    
    


  )
}

export default CartContainer