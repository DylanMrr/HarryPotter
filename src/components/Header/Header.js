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
                    <div className="header__left header__item">
                        Главная 
                    </div>
                </Link>
                <Link to={`/person/${random}`} style={{textDecoration: "none"}}>
                    <div className="header__item">
                        Случайный персонаж
                    </div>
                </Link>
                <Link to={`/all`} style={{textDecoration: "none"}}>
                    <div className="header__right header__item">
                        Все персонажи
                    </div>
                </Link>
            </div>
        </div>
    )
}