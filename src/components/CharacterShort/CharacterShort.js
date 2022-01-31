import React from "react";
import { getHouseColor } from "../../utils/color";

import './CharacterShort.css'

export default ({name, house, imageurl, onclick}) => {     
    return (
        <div className="characterShort" onClick={() => onclick(name)}>
            <img src={imageurl} />
            <div className="characterShort__info">
                <div className="characterShort__name">
                    {name}
                </div>
                <div style={{color: getHouseColor(house)}} className="characterShort__house">
                    {house}
                </div>
            </div>
        </div>
    )
}