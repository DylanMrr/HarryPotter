import React from "react";
import { useParams } from "react-router-dom";

import './Character.css'

export default () => {
    
    const params = useParams()
    const name = params.name
    
    return (
        <div className="character">
            {name}
        </div>
    )
}