const path = process.env.NODE_ENV === "development" ? "http://localhost:3080" : "";

export const statusCheck = res => {
    if (!res.ok) throw new Error("Response not in 200 range.")
    return res
}

export const clone = obj => JSON.parse(JSON.stringify(obj))

export const openDeckPDF = deckString => {
    fetch(path + `/api/pdf/${deckString}`)
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