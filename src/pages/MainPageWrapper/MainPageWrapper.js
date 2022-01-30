import React from "react";
import Character from "../../components/Character/Character";
import MainPage from '../../components/MainPage/MainPage';

import './MainPageWrapper.css'

export default ({Child}) => {
    
    const getChild = () => {
        switch (Child){
            case "/": return <MainPage />
            case "/person/:name": return <Character />
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