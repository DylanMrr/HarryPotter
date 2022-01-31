import {useSelector} from "react-redux";
import { mapToCharacterDetailDto } from "./mappers/characterMapper";

export function useCharacterInformation(name) {
    const data = useSelector((state) => state.data.data)
    const char = data.find(x => x.name == name)
    return mapToCharacterDetailDto(char)
}