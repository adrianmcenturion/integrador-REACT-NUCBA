import { Badge, Box, Flex, Image, Text, Button, Spacer, useToast } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import typeColor from "./TypesColors"
import { AddToCartAction } from "../../redux/CartSlice"


const Card = () => {

    const dispatch = useDispatch()

    const toast = useToast()

    const handleClickAddToCart = (card) => {
        dispatch(AddToCartAction(card))
        toast({
            title: 'Added to cart!',
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
    }

    const pokeCardsData = useSelector(state => state.products.productsData)
    console.log(pokeCardsData)

    const mappedCards = pokeCardsData?.map((card, id) => {

        return (

        <Box overflow='hidden' borderWidth='1px' borderRadius='lg' key={card.id}>
            <Image boxSize='fit-content' maxW='150px' src={card.images.small} alt={card.name}></Image>
            <Box p='2' mx='auto' maxW='fit-content' height='fit-content'>
                    <Box display='flex' flexDirection='column' alignItems='flex-start' gap='2'>
                        <Text fontSize='md'>{card.name}</Text>
                        
                        <Flex >
                            {card.types === undefined ? null : <Text textAlign='left' fontSize='x-small'>Type: </Text>}
                            <Box display='flex' flexWrap='wrap' gap={1} alignItems='center'>
                            {card.types === undefined ? null : (card.types).map((type, id) => {return <Badge ml='2' borderRadius='base' px='2' key={id} colorScheme={typeColor[type]} textAlign='center' fontSize='x-small' fontWeight='semibold'>{type}</Badge>})}
                            </Box>
                        </Flex>
                        <Box display='flex' flexDirection='column' justify='space-around' gap='1' alignItems='flex-start'>
                            <Text fontSize='x-small'>Set: {card.set.name}</Text>
                            <Text fontSize='x-small'>Rarity: {card.rarity}</Text>
                            <Flex gap='1' alignItems='flex-start' flexDirection='column'>
                                <Text fontSize='x-small'>Price: ${card.price}</Text>
                            </Flex>
                        </Box>
                        <Spacer/>
                    </Box>
                    <Button mx='auto' color='white' colorScheme='newRed' size='xs' fontSize='xx-small' onClick={() => handleClickAddToCart(card)} >ADD TO CART</Button>
            </Box>
        </Box>
        )
    })


  return (

        <>{mappedCards}</>
  )
}

export default Card