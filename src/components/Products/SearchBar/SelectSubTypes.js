import { Select } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { GetProducsBySubTypesAction, GetProductsAction } from "../../../redux/Products"

const SelectSubTypes = () => {

    const dispatch = useDispatch()

    const handleSelect = (e) => {
        
        if(e.target.value === 'SubTypes') {
            dispatch(GetProductsAction())
        } else {
            dispatch(GetProducsBySubTypesAction(e.target.value))
        }

    }


  return (
            <Select onChange={handleSelect} width={['30%', '20%']} size='xs' name="SubTypes">
                <option value={null}>SubTypes</option>
                <option value={'BREAK'}>BREAK</option>
                <option value={'Baby'}>Baby</option>
                <option value={'Basic'}>Basic</option>
                <option value={'EX'}>EX</option>
                <option value={'GX'}>GX</option>
                <option value={'goldenrod*game*corner'}>Goldenrod Game Corner</option>
                <option value={'LEGEND'}>LEGEND</option>
                <option value={'level*up'}>Level-Up</option>
                <option value={'MEGA'}>MEGA</option>
                <option value={'Pokemon*Tool'}>Pokémon Tool</option>
                <option value={'Pokemon*Tool*F'}>Pokémon Tool F</option>
                <option value={'Rapid*Strike'}>Rapid Strike</option>
                <option value={'Restored'}>Restored</option>
                <option value={"Rocket's*Secret*Machine"}>Rocket's Secret Machine</option>
                <option value={'Single*Strike'}>Single Strike</option>
                <option value={'Special'}>Special</option>
                <option value={'Stadium'}>Stadium</option>
                <option value={'Stage*1'}>Stage 1</option>
                <option value={'Stage*2'}>Stage 2</option>
                <option value={'Supporter'}>Supporter</option>
                <option value={'TAG*TEAM'}>TAG TEAM"</option>
                <option value={'Technical*Machine'}>Technical Machine</option>
                <option value={'V'}>V</option>
                <option value={'VMAX'}>VMAX</option>
            </Select>
  )
}

export default SelectSubTypes