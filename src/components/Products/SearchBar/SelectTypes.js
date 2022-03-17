import { Select } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { GetProducsByTypesAction, GetProductsAction } from "../../../redux/Products"

const SelectTypes = () => {

    const dispatch = useDispatch()

    const handleSelect = (e) => { 

        if(e.target.value === 'Types') {
            dispatch(GetProductsAction())
        } else {
            dispatch(GetProducsByTypesAction(e.target.value))
        }
    }


  return (

    <Select onChange={handleSelect} width={['30%', '20%']} size='xs' name="Types">
                <option value={null}>Types</option>
                <option value={'colorless'}>Colorless</option>
                <option value={'darkness'}>Darkness</option>
                <option value={'dragon'}>Dragon</option>
                <option value={'fairy'}>Fairy</option>
                <option value={'fighting'}>Fighting</option>
                <option value={'fire'}>Fire</option>
                <option value={'grass'}>Grass</option>
                <option value={'lightning'}>Lightning</option>
                <option value={'metal'}>Metal</option>
                <option value={'psychic'}>Psychic</option>
                <option value={'water'}>Water</option>
            </Select>

  )
}

export default SelectTypes