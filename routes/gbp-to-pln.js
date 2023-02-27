// Route for calculating the amount in pln after getting input in gbp

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
      const input = req.body.send
      const output = calculator.calculateOutput(input, exchangeRate, 'gbp')
      res.render("index", {
        send : input,
        receive : output,
        exchangeRate : exchangeRate
      })
    })
})

module.exports = router