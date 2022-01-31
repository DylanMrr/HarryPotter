export const getHouseColor = (house) => {
    switch (house){
        case 'Gryffindor': return 'red'
        case 'Slytherin': return 'green'
        case 'Ravenclaw': return 'blue'
        case 'Hufflepuff': return 'yellow'
        default: return 'black'
    }
}