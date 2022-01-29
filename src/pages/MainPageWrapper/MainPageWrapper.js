import React from "react";
import MainPage from '../../components/MainPage/MainPage';

import './MainPageWrapper.css'

export default () => {
    return (
        <div className="mainPageWrapper">
            <div className="mainPageWrapper__child">
                <MainPage />
            </div>
        </div>
    )
}