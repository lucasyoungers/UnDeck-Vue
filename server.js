"use strict"

// Requires
const express = require("express")
const axios = require("axios")
const bodyParser = require("body-parser")
const path = require("path")
const pokemon = require("pokemontcgsdk")
const { jsPDF } = require("jspdf")

const cors = require("cors") // TODO: remove

// App Setup
const app = express()
app.use(bodyParser.json())
app.use(cors()) // TODO: remove
app.use(express.static(path.join(__dirname, "dist")))

// API Key Setup
const KEY = process.env.POKEMON_API_KEY
pokemon.configure({ apiKey: KEY })

// =========
// Endpoints
// =========

app.get("/api/sets", async (req, res) => {
    try {
        const { series } = req.query
        const sets = series
            ? await pokemon.set.all({ q: `series:${series}` })
            : await pokemon.set.all()
        res.json(sets)
    } catch (err) {
        res.status(500).type("text").send("Sets not found.")
    }
})

app.get("/api/supertypes", async (_, res) => {
    try {
        const supertypes = await pokemon.supertype.all()
        res.json(supertypes)
    } catch (err) {
        res.status(500).type("text").send("Supertypes not found.")
    }
})

app.get("/api/subtypes", async (_, res) => {
    try {
        const subtypes = await pokemon.subtype.all()
        res.json(subtypes)
    } catch (err) {
        res.status(500).type("text").send("Subtypes not found.")
    }
})

app.get("/api/types", async (_, res) => {
    try {
        const types = await pokemon.type.all()
        res.json(types)
    } catch (err) {
        res.status(500).type("text").send("Types not found.")
    }
})

// get a given number of random cards given a query
app.get("/api/random", async (req, res) => {
    try {
        // Compute query
        const rarities = await pokemon.rarity.all()
        const lowRarities = ["Common", "Uncommon", "Rare", "Rare Holo", "Promo"]
        const highRarities = rarities.filter(r => !lowRarities.includes(r))
        const q = `!rarity:"${highRarities.join("|")}"`

        // Compute page size
        const { pageSize = 1 } = req.query

        // Compute page number
        const dummy = await pokemon.card.where({ q, pageSize: 1 })
        const page = Math.floor(Math.random() * dummy.totalCount / pageSize) || 1

        // Get cards via query, page size, and page number
        const cards = await pokemon.card.where({ q, pageSize, page })
        res.json(cards)
    } catch (err) {
        res.status(500).type("text").send("Oh no! Team Rocket stole all of our cards!")
    }
})

app.get("/api/search", async (req, res) => {
    try {
        let q = []

        // manually add important parameters
        const { name } = req.query
        const queryObject = {}
        if (name) queryObject.name = ["N", "AZ"].includes(name) ? name : `"*${name}*"` // hardcoded exact search
        const queryLeft = objectToQuery(queryObject)
        if (queryLeft) q.push(queryLeft)

        // automatically add other parameters
        const queryRight = req.query.q
        if (queryRight) q.push(queryRight)

        q = q.join(" ")

        const cards = await pokemon.card.where({ q, orderBy: "-set.releaseDate, number" })
        res.json(cards)
    } catch (err) {
        res.status(500).type("text").send("We can't find your cards! Looks like Team Rocket is up to no good.")
    }
})

// get the json data for a given deck string
app.get("/api/deck/:deck", async (req, res) => {
    try {
        const deck = await Promise.all(req.params.deck.split("|").map(async cardData => {
            const [ id, count = 1 ] = cardData.split("~")
            const card = await pokemon.card.find(id)
            card.count = parseInt(count)
            return card
        }))
        res.json(deck)
    } catch (err) {
        res.status(500).type("text").send("We can't find your deck, have you tried unsleeving it and resleeving it again?")
    }
})

// make a pdf for a given deck string
app.get("/api/pdf/:deckString", async (req, res) => {
    try {
        const deck = await getDeckCards(req.params.deckString)
        const images = deck.map(card => card.images.large)
        const pdf = await makePDF(images)
        const buffer = Buffer.from(pdf)
        res.type("pdf").send(buffer)
    } catch (err) {
        res.status(500).send("We can't build your deck, have you tried unsleeving it and resleeving it again?")
    }
})

// send file backup endpoint
app.get("*", (_, res) => {
    res.type("html").sendFile(path.join(__dirname, "dist", "index.html"))
})

// ================
// Helper Functions
// ================

/**
 * Gets all the card objects from a given deck string and returns them in an array
 * @param {String} deckString - deck string with | delimiter
 * @returns {Promise<Array<Object>>} - promise that resolves to an array of card objects
 */
async function getDeckCards(deckString) {
    return Promise.all(deckString.split("|").map(item => {
        const [ id, count ] = item.split("~")
        return Array(parseInt(count)).fill(id)
    }).flat().map(id => pokemon.card.find(id)))
}

/**
 * Constructs a pdf given an array of card image urls.
 * @param {Array<String>} deck - array of card image urls
 * @returns {Promise<ArrayBuffer>} - array buffer for the deck pdf
 */
async function makePDF(deck) {
    const doc = new jsPDF({ format: "letter", unit: "in" })
    for (let i = 0; i < deck.length; i++) {
        if (i > 8 && i % 9 === 0) doc.addPage("letter")
        const x = 0.53 + 2.49 * (i % 3)
        const y = 0.3 + 3.47 * Math.floor((i % 9) / 3)
        const buffer = await axios.get(deck[i], {
            headers: { "X-API-KEY": KEY },
            responseType: "arraybuffer"
        }).then(statusCheck)
        const img = Buffer.from(buffer.data, "binary").toString("base64")
        const data = "data:image/png;base64," + img
        doc.addImage(data, "png", x, y, 2.48, 3.46)
    }
    return doc.output("arraybuffer")
}

/**
 * Validates the status of the response.
 * @param {Response} res - any response to be checked
 * @returns {Promise} - returns the passed response as a promise
 */
async function statusCheck(res) {
    if (res.statusText !== "OK") throw new Error("an error occurred, try again later")
    return res
}

function objectToQuery(obj) {
    return Object.keys(obj).reduce((q, key) => [...q, `${key}:${obj[key]}`], []).join(" ")
}

const PORT = process.env.PORT || 3080
app.listen(PORT)
