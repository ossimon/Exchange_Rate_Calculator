// Route for calculating the amount in gbp after getting input in pln

const express = require("express")
const router = express.Router()

// Redirecting when user doesn't provide input in neither currency
router.get("/", (req, res) => {
  res.redirect('..')
})

const calculator = require('../src/calculator')

// Reacting to user input
router.post("/", (req, res) => {

  calculator.getExchangeRate('gbp')
    .then(exchangeRate => {
      const input = req.body.receive
      const output = calculator.calculateOutput(input, exchangeRate, 'pln')
      res.render("index", {
        send : output,
        receive : input,
        exchangeRate : exchangeRate
      })
    })
})

module.exports = router