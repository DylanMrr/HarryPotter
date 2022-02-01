import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { matchRoutes, useNavigate } from "react-router-dom";
import CharacterLine from "../CharacterLine/CharacterLine";

import './AllCharacters.css'

export default () => {
    const navigate = useNavigate()
    const onElementClick = (name) => {
        navigate(`/person/${name}`)
    }

    const data = useSelector((state) => state.data)

    return (
        <div>
            {data.data.map(item => <CharacterLine key={item.name + Math.random()} name={item.name} house={item.house} onclick={onElementClick}/>)}
        </div>
    )
}