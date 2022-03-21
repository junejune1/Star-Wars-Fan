function convertData(character) {
    character.heightConverted = convertHeight(character);
    character.weight = convertWeight(character);
    return character;
}

function convertHeight(character) {
    let feet = Math.floor((character.height * 0.3937008) / 12);
    let inches = Math.round((character.height * 0.3937008) % 12);
    if (inches === 12) {
        feet += 1;
        inches = 0;
    }
    return isNaN(feet) && isNaN(inches) ? "unknown" : `${feet}' ${inches}"`;
}

function convertWeight(character) {
    return isNaN(Math.floor(character.mass * 2.204623)) ? "unknown" : Math.floor(character.mass * 2.204623);
}

export { convertData, convertHeight, convertWeight };
