import React from "react";
import { Link } from "react-router-dom";

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
                Случайный персонаж
                Поиск
                Все персонажи
            </div>
        </div>
    )
}