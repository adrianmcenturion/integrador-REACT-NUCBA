import { Box, FormControl, FormLabel, Input, FormErrorMessage, Container, Button, Center, Text } from "@chakra-ui/react"
import { useState } from "react"
import { LoginAction } from "../../redux/Login"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"


const LoginForm = () => {

  

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
  
    const isErrorEmail = email === ''
    const isErrorPassword = password === ''

    const dispatch = useDispatch();

    const onLogin = () => {
      dispatch(LoginAction({ email, password }));
  }

    

    
    
  
    


  return (
    <Box w='60%' maxWidth='900px' display='flex' flexDirection='column' marginY={0} marginX='auto' mt={24}>
      <Center mb='1em' fontWeight='bold' fontSize='3xl'>
            <h1>LOGIN</h1>
        </Center>
      <Container maxW='xs' centerContent alignItems='center' gap='2em'>
          <FormControl isInvalid={isErrorEmail}>
            <Box display='flex' flexDirection='column'>
              <>
              <FormLabel htmlFor='email' fontSize='sm'>Email</FormLabel>
              <Input id='email' type='email' size='xs' value={email} onChange={handleEmailChange}/>
              </>
              {isErrorEmail && <FormErrorMessage fontSize='sm'>Email is required</FormErrorMessage>}
            </Box>
            </FormControl>
            <FormControl isInvalid={isErrorPassword}>
            <Box display='flex' flexDirection='column'>
              <>
              <FormLabel htmlFor='password' fontSize='sm' >Password</FormLabel>
              <Input id='password' type='password' size='xs' value={password} onChange={handlePasswordChange}/>
              </>
              {isErrorPassword && <FormErrorMessage fontSize='sm'>Password is required</FormErrorMessage>}
            </Box>
          </FormControl>
            <Link to='/products'><Button type="button" colorScheme='newRed' size='sm' mt={4} onClick={onLogin}>Login</Button></Link>

            <Text mt={1} fontSize='xs'>Don't have an account? <Link to='/register'>Click here to register!</Link></Text>
          
        </Container>

    </Box>
      
  )
  }


export default LoginForm