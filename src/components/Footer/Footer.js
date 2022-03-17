import { Box, Container, Divider, Link, List, ListItem } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box display='flex' flexDirection='column'  width='100%' minH='6em' bg='blackAlpha.500' alignItems='center' justifyContent='center' mt={20}>
        <Container maxWidth='900px' mx='auto'>
            <Box>
                <List display='flex' gap={8} justifyContent='center' listStyleType='none' fontSize='x-small'>
                    <Link href='#'><ListItem>About</ListItem></Link>
                    <Link href='#'><ListItem>Features</ListItem></Link>
                    <Link href='#'><ListItem>Team</ListItem></Link>
                </List>
                <Divider my='2' orientation="horizontal"/>
                <List display='flex' gap={8} justifyContent='center' listStyleType='none' fontSize='x-small'>
                <Link href='#'><ListItem>Privacy Policy</ListItem></Link>
                <Link href='#'><ListItem>Terms of Use</ListItem></Link>
                <Link href='#'><ListItem>Sales and Refunds</ListItem></Link>
                <Link href='#'><ListItem>Legal</ListItem></Link>
                </List>
            </Box>
        </Container>
    </Box>
  )
}

export default Footer