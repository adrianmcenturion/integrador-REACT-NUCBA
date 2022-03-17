import { Box } from "@chakra-ui/react"
import LoginForm from "../../components/LoginForm/LoginForm"
import Navbar from "../../components/Navbar/Navbar"


const Login = () => {
  return (
        <Box>
          <Navbar/>
          <LoginForm/>
        </Box>
    
  )
}

export default Login