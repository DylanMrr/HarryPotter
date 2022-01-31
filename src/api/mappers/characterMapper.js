export const mapToCharacterDetailDto = (obj) => {
    return {
        name: obj.name,
        alive: obj.alive,
        dateOfBirth: obj.dateOfBirth,
        staff: obj.hogwartsStaff,
        student: obj.hogwartsStudent,
        house: obj.house,
        imageUrl: obj.image,
        patronus: obj.patronus,
        wizard: obj.wizard
    }
}