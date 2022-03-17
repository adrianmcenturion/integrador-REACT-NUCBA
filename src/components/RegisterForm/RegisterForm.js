import { Box, FormControl, FormLabel, Input, FormErrorMessage, Container, Button, Center, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { RegisterAction } from "../../redux/Register"


const RegisterForm = () => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
  
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleFirstNameChange = (e) => setFirstName(e.target.value)
    const handleLastNameChange = (e) => setLastName(e.target.value)
  
    const isErrorEmail = email === ''
    const isErrorPassword = password === ''
    const isErrorFirstName = firstName === ''
    const isErrorLastName = lastName === ''



    const onRegister = () => {
        dispatch(RegisterAction({ email, password, firstName, lastName }));
    }
  
    
  return (
    <Box w='60%' maxWidth='900px' display='flex' flexDirection='column' marginY={0} marginX='auto' mt={24}>
        <Center mb='1em' fontWeight='bold' fontSize='3xl'>
            <h1>REGISTER</h1>
        </Center>
        <Container maxW='xs' centerContent alignItems='center' gap='1em'>
            <FormControl isInvalid={isErrorFirstName}>
                <Box display='flex' flexDirection='column'>
                <>
                <FormLabel htmlFor='firstName' >Firstname</FormLabel>
                <Input id='firstName' type='text' size='xs' value={firstName} onChange={handleFirstNameChange}/>
                </>
                {isErrorFirstName && <FormErrorMessage>Firstname is required</FormErrorMessage>}
                </Box>
                </FormControl>
                <FormControl isInvalid={isErrorLastName}>
                <Box display='flex' flexDirection='column'>
                <>
                <FormLabel htmlFor='lastname' >Lastname</FormLabel>
                <Input id='lastname' type='text' size='xs' value={lastName} onChange={handleLastNameChange}/>
                </>
                {isErrorLastName && <FormErrorMessage>Lastname is required</FormErrorMessage>}
                </Box>
            </FormControl>
            <FormControl isInvalid={isErrorEmail}>
                <Box display='flex' flexDirection='column'>
                <>
                <FormLabel htmlFor='email' >Email</FormLabel>
                <Input id='email' type='email' size='xs' value={email} onChange={handleEmailChange}/>
                </>
                {isErrorEmail && <FormErrorMessage>Email is required</FormErrorMessage>}
                </Box>
            </FormControl>
            <FormControl isInvalid={isErrorPassword}>
                <Box display='flex' flexDirection='column'>
                <>
                <FormLabel htmlFor='password' >Password</FormLabel>
                <Input id='password' type='password' size='xs' value={password} onChange={handlePasswordChange}/>
                </>
                {isErrorPassword && <FormErrorMessage>Password is required</FormErrorMessage>}
                </Box>
            </FormControl>
                <Link to='/login'><Button type="button" size='sm' colorScheme='newRed' mt={4} onClick={onRegister} >Register</Button></Link>
                <Text mt={1} fontSize='xs'>Have already an account? <Link to='/login'>Click here to login!</Link></Text>
            </Container>
    </Box>
      
  )
  }


export default RegisterForm