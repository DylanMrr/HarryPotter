import React from "react";

import './CharacterShort.css'

export default ({name, house, imageurl}) => {
    
    const getColor = (house) => {
        switch (house){
            case 'Gryffindor': return 'red'
            case 'Slytherin': return 'green'
            case 'Ravenclaw': return 'blue'
            case 'Hufflepuff': return 'yellow'
            default: return 'black'
        }
    } 
    
    return (
        <div className="characterShort">
            <img src={imageurl} />
            <div className="characterShort__info">
                <div className="characterShort__name">
                    {name}
                </div>
                <div style={{color: getColor(house)}} className="characterShort__house">
                    {house}
                </div>
            </div>
        </div>
    )
}