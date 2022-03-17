import { Box } from "@chakra-ui/react"
import Hero from "../../components/Home/Hero"
import Navbar from "../../components/Navbar/Navbar"
import PokemonBG from '../../other/images/PokemonBG.jpg'

const Home = () => {
  return (
      <Box bgImage={PokemonBG} backgroundPosition='center' backgroundRepeat='no-repeat' width='100%' minHeight='100vh'  >
        <Box width='100%' minHeight='100vh' backdropFilter='auto' backdropBrightness='20%' backdropBlur='6px' justifyContent='center' alignItems='center' overflow='hidden' >
        <Navbar/>
        <Hero/>
        </Box>
      </Box>
  )
}

export default Home