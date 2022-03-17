import { Button, Container, Flex, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"



const Hero = () => {

    const { token } = useSelector( store => store.login )

  return (

        <Container maxWidth='900px'  mx='auto' filter='none' blur='0px' brightness='none'>
            <Flex justifyContent='center' alignItems='center' minH='80vh' flexDirection='column' gap={6}>
                <Heading fontSize='4xl'>All the cards that you need in one place!</Heading>
                {token ? <Link to='/products'><Button size='lg' py={8} fontSize='4xl' color='white' colorScheme='newRed'>Catch 'em all!</Button></Link> : <Link to='/login'><Button size='lg' fontSize='4xl' color='white' colorScheme='newRed'>Catch 'em all!</Button></Link>}

            </Flex>
        </Container>
  )
}

export default Hero