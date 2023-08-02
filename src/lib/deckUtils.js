const supertypeTable = {
    "Pokémon": 0,
    "Trainer": 1,
    "Energy": 2
}

const typeTable = {
    "Grass": 0,
    "Fire": 1,
    "Water": 2,
    "Lightning": 3,
    "Psychic": 4,
    "Fighting": 5,
    "Darkness": 6,
    "Metal": 7,
    "Fairy": 8,
    "Dragon": 9,
    "Colorless": 10
}

const trainerTable = {
    "Supporter": 0,
    "Item": 1,
    "Pokémon Tool": 2,
    "Stadium": 3
}

const energyTable = {
    "Special": 0,
    "Basic": 1
}

export const cardCompareFn = (card1, card2) => {
    // Pokémon -> Trainer -> Energy
    if (card1.supertype !== card2.supertype) {
        return supertypeTable[card1.supertype] - supertypeTable[card2.supertype]
    }

    // Grass -> Fire -> Water -> etc
    if (card1.supertype === "Pokémon") {
        // TODO: Naïve implementation, sort by secondary type as well.
        return typeTable[card1.types[0]] - typeTable[card2.types[0]]
    }

    // Supporter -> Item -> Tool -> Stadium
    if (card1.supertype === "Trainer" && card1.subtypes && card2.subtypes) {
        return trainerTable[card1.subtypes[0]] - trainerTable[card2.subtypes[0]]
    }

    // Special -> Basic
    if (card1.supertype === "Energy") {
        if (card1.subtypes[0] !== card2.subtypes[0]) {
            return energyTable[card1.subtypes[0]] - energyTable[card2.subtypes[0]]
        } else {
            const card1StartIndex = (card1.name.indexOf("Basic") === 0) ? 6 : 0;
            const card2StartIndex = (card2.name.indexOf("Basic") === 0) ? 6 : 0;
            return (
                typeTable[card1.name.substr(card1StartIndex, card1.name.indexOf(" "))] -
                typeTable[card2.name.substr(card2StartIndex, card2.name.indexOf(" "))]
            );
        }
    }

    // Fallback on Alphabetic Sort
    return card1.name < card2.name ? -1 : card1.name > card2.name
}