export const statusCheck = res => {
    if (!res.ok) throw new Error("Response not in 200 range.")
    return res
}

export const clone = obj => JSON.parse(JSON.stringify(obj))

export const updateLocalDeck = deck => localStorage.deck = deck.map(card => `${card.id}~${card.count}`).join("|")

export const openDeckPDF = deckString => {
    fetch(`http://localhost:3080/api/pdf/${deckString}`) // TODO: remove localhost url
      .then(statusCheck)
      .then(res => res.blob())
      .then(res => {
            window.open(
                window.URL.createObjectURL(res, { type: "application/pdf" }),
                "_blank",
                "noreferrer"
            )
    })
}