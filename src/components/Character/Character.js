import React from "react";
import { useParams } from "react-router-dom";
import { useCharacterInformation } from "../../api/personApi";

import './Character.css'

export default () => {
    
    const params = useParams()
    const name = params.name
    
    const data = useCharacterInformation(name)

    return (
        <div className="character">
            {data.name}
        </div>
    )
}