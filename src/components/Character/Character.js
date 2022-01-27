import React from "react";

import './Character.css'

export default ({name, house, imageurl}) => {
    return (
        <div className="character">
            {name}
            {house}
            <img src={imageurl} />
        </div>
    )
}