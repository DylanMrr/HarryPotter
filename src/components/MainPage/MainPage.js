import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import CharacterShort from "../CharacterShort/CharacterShort";
import { useNavigate } from "react-router-dom";

import './MainPage.css'

export default () => {

    const navigate = useNavigate()
    const onElementClick = (name) => {
        navigate(`/person/${name}`)
    }

    const data = useSelector((state) => state.data)
    const loading = data.loading
    
    if (loading){
        return (
        <div>
            Загрузка
        </div>
        )
    }
    if (data.error){
        return (
        <div>
            ошибка
        </div>
        )
    }
    return (
        <div className="mainpage__characters">
            {data.data.map(item => item.image && (<CharacterShort key={item.name} name={item.name} house={item.house} imageurl={item.image} onclick={onElementClick}/>))}
        </div>
    )
}