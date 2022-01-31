import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import { mapToCharacterDetailDto } from "./mappers/characterMapper";
import {getData} from '../redux/reducers/dataReducer'

export function useCharacterInformation(name) {
    const data = useSelector((state) => state.data.data)
    if (Object.keys(data).length == 0) {
        return null
    }
    const char = data.find(x => x.name == name)
    return mapToCharacterDetailDto(char)
}