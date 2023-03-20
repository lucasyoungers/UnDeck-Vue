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
    if (card1.supertype === "Trainer") {
        // TODO: Sort Trainers by Subtype
    }

    // Special -> Basic
    if (card1.supertype === "Energy") {
        if (card1.subtypes && card2.subtypes) {
            return card2.subtypes?.contains("Special") - card1.subtypes?.contains("Special")
        } else {
            return typeTable[card1.name.substr(0, card1.name.indexOf(" "))] - typeTable[card2.name.substr(0, card2.name.indexOf(" "))]
        }
    }

    // Fallback on Alphabetic Sort
    return card1.name < card2.name ? -1 : card1.name > card2.name
}