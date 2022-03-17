import { Box } from "@chakra-ui/react"
import Navbar from "../../components/Navbar/Navbar"
import RegisterForm from "../../components/RegisterForm/RegisterForm"


const Register = () => {
  return (
    <Box>
      <Navbar/>
      <RegisterForm/>
    </Box>
  )
}

export default Register