export const statusCheck = res => {
    if (!res.ok) throw new Error("Response not in 200 range.")
    return res
}

export const clone = obj => JSON.parse(JSON.stringify(obj))

export const updateLocalDeck = deck => localStorage.deck = deck.map(card => `${card.id}~${card.count}`).join("|")

export function openDeckPDF(deckString) {
    fetch(`/api/pdf/${deckString}`)
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