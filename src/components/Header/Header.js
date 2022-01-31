import React from "react";
import { Link } from "react-router-dom";
import { useRandomCharacter } from "../../api/personApi";

import './Header.css'

export default () => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <Link to="/" style={{textDecoration: "none"}}>
                    <div>
                        Главная 
                    </div>
                </Link>
                <Link to={`/person/${useRandomCharacter()}`} style={{textDecoration: "none"}}>
                    <div>
                        Случайный персонаж
                    </div>
                </Link>
                Поиск
                Все персонажи
            </div>
        </div>
    )
}