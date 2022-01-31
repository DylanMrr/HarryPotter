import React from "react";
import { useParams } from "react-router-dom";
import { useCharacterInformation } from "../../api/personApi";
import { getHouseColor } from "../../utils/color";

import './Character.css'

export default () => {
    const params = useParams()
    const name = params.name
    
    let data = useCharacterInformation(name)

    //todo при перезагрузке redux сбрасывается
    /*if (!data){

    }*/

    return (
        <div className="character">
            <img src={data.imageUrl} />
            <div className="character__info">
                <div className="character__name">
                    {data.name}
                </div>
                <div style={{color: getHouseColor(data.house)}} className="character__house">
                    {data.house}
                </div>
            </div>
        </div>
    )
}