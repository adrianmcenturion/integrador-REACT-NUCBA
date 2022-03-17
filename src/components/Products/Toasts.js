import { useToast } from "@chakra-ui/react"

export const AddToCartToast = () => {

 const addedToCart = useToast()

   addedToCart({
    title: 'Added to cart!',
    status: 'success',
    duration: 2000,
    isClosable: true,
   })

}

