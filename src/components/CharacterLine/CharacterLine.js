import React from "react";
import { getHouseColor } from "../../utils/color";

import './CharacterLine.css'

export default ({name, house, onclick}) => {
    return (
        <>
            <div className="characterLine" onClick={() => onclick(name)}>
                <div>
                    {name}
                </div>
                <div style={{color: getHouseColor(house)}}>
                    {house}
                </div>
            </div>
            <hr />
        </>
    )
}