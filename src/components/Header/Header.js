import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRandomCharacter } from "../../api/personApi";

import './Header.css'

export default () => {

    const navigate = useNavigate()
    const random = useRandomCharacter()

    return (
        <div className="header">
            <div className="header__wrapper">
                <Link to="/" style={{textDecoration: "none"}}>
                    <div>
                        Главная 
                    </div>
                </Link>
                <Link to={`/person/${random}`} style={{textDecoration: "none"}}>
                    <div>
                        Случайный персонаж
                    </div>
                </Link>
                <Link to={`/all`} style={{textDecoration: "none"}}>
                    <div>
                        Все персонажи
                    </div>
                </Link>
                Поиск
            </div>
        </div>
    )
}