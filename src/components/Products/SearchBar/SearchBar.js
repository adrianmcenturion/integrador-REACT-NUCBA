import { Box, Container, Divider, IconButton, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from "react"
import SelectSubTypes from "./SelectSubTypes"
import { SearchIcon } from "@chakra-ui/icons"
import SelectTypes from "./SelectTypes"
import { useDispatch, useSelector } from "react-redux"
import { GetProducsBySearchAction } from "../../../redux/Products"


const SearchBar = () => {

  const isLoading = useSelector(state => state.loading.isLoading)

  const results = useSelector(state => state.products.requestData.count)

  const dispatch = useDispatch()

  const [searchName, setSearchName] = useState('')

  const handleChangeSearchName = e => {setSearchName(e.target.value)}

  const handleClick = () => {
    dispatch(GetProducsBySearchAction(searchName))
  }
    

  return (
    <Box>
        <Divider my='6' orientation="horizontal"/>
        <Container maxWidth='900px' mx='auto'>
            <Box display='flex' alignItems='baseline' justifyContent='center'>
                <InputGroup alignItems='baseline' width={['35%', '60%']} size='xs'>
                  <Input size='xs' placeholder="Search" value={searchName} onChange={handleChangeSearchName} />
                  <InputRightElement width='1.5em'>
                    <IconButton size='xs' bg='transparent' mr={2} onClick={handleClick} icon={<SearchIcon/>}></IconButton>
                  </InputRightElement>
              </InputGroup>
              <SelectTypes/>
              <SelectSubTypes/>
            </Box>
        </Container>
        <Divider my='6' orientation="horizontal"/>
        <Container maxWidth='900px' mx='auto'>
        {isLoading ? null : <Text textAlign='start' fontSize='xs'> Results: {results}</Text>}
        <Divider my='6' orientation="horizontal"/>
        </Container>
    </Box>
  )
}

export default SearchBar