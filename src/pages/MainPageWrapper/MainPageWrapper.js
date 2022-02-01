import React from "react";
import AllCharacters from "../../components/AllCharacters/AllCharacters";
import Character from "../../components/Character/Character";
import MainPage from '../../components/MainPage/MainPage';

import './MainPageWrapper.css'

export default ({Child}) => {
    
    const getChild = () => {
        switch (Child){
            case "/": return <MainPage />
            case "/person/:name": return <Character />
            case "/all": return <AllCharacters />
        }
    }

    return (
        <div className="mainPageWrapper">
            <div className="mainPageWrapper__child">
                {getChild()}
            </div>
        </div>
    )
}