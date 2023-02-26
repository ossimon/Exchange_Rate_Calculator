const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.redirect('..')
})

const calculator = require('../src/script')

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