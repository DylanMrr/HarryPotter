import React from "react";

import './CharacterShort.css'

export default ({name, house, imageurl}) => {
    return (
        <div className="characterShort">
            <img src={imageurl} />
            <div className="characterShort__info">
                <div className="characterShort__name">
                    {name}
                </div>
                <div className="characterShort__house">
                    {house}
                </div>
            </div>
        </div>
    )
}