import { Container, Flex, Spinner, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import Card from "./Card"

const ProductsContainer = () => {

  const isLoading = useSelector(state => state.loading.isLoading)

  return (
    <Container maxWidth='900px' mt={6} >
        <Flex width='100%' justify='space-evenly' gap={6} flexWrap='wrap' mb='6'>
           { isLoading ? <Flex gap={4} alignItems='center'><Text>Loading</Text><Spinner size='md' thickness="2px" emptyColor="red.500" color="white.500"/></Flex> : <Card/>}
        </Flex>
    </Container>
  )
}

export default ProductsContainer