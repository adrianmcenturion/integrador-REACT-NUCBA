import { Box, Heading, Spacer, Container, List, UnorderedList, ListItem, useMediaQuery, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LogoutAction } from "../../redux/Login";

const Navbar = () => {


    const { token } = useSelector( store => store.login );

    const [isMobile] = useMediaQuery('(max-width: 500px)')

    const dispatch = useDispatch()

    const onClickLogout = () => {
        dispatch(LogoutAction())
    }

  return (
    <Box  bg='red.500' p={2} width='100%' zIndex={2}>
        
            {isMobile ? 

            <Container maxWidth='900px' display='flex' width='100%'>
                <Accordion allowToggle width='100%'>
                    <AccordionItem borderBottom='none' borderTop='none'>
                        <AccordionButton>
                            <Box p='2'>
                                <Link to='/home'><Heading size='md'  fontSize='xx-large'>PokeTCG</Heading></Link>
                            </Box>
                            <Spacer />
                            <AccordionIcon w={6} h={6} />
                        </AccordionButton>
                        <AccordionPanel>
                        <List spacing={6}>
                            <UnorderedList display='flex' flexDirection='column' alignItems='flex-start' gap={4} listStyleType='none' fontSize='md' fontWeight='semibold'>
                            {token && <Link to= '/products'><ListItem>PRODUCTS</ListItem></Link>}
                            {token && <Link to= '/cart'><ListItem>CART</ListItem></Link>}
                            {token ? null : <Link to='/register'><ListItem>REGISTER</ListItem></Link>}
                            {token ? <Link to='/home'><ListItem onClick={onClickLogout}>LOGOUT</ListItem></Link> : <Link to='/login'><ListItem>LOGIN</ListItem></Link>}
                            </UnorderedList>
                        </List>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Container>

            :

        <Container maxWidth='900px' display='flex' alignItems='center'>
            <Box p='2' as="button">
                <Link to='/home'><Heading size='md'  fontSize='xx-large'>PokeTCG</Heading></Link>
            </Box>
            <Spacer />
            <List spacing={6}>
                <UnorderedList display='flex' gap={4} listStyleType='none' fontSize='md' fontWeight='semibold'>
                {token && <Link to= '/products'><ListItem>PRODUCTS</ListItem></Link>}
                {token && <Link to= '/cart'><ListItem>CART</ListItem></Link>}
                {token ? null : <Link to='/register'><ListItem>REGISTER</ListItem></Link>}
                {token ? <Link to='/home'><ListItem onClick={onClickLogout}>LOGOUT</ListItem></Link> : <Link to='/login'><ListItem>LOGIN</ListItem></Link>}
                </UnorderedList>
            </List>
        </Container>}
    </Box>
  )
}

export default Navbar