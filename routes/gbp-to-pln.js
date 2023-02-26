const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
  res.redirect('..')
})

const calculator = require('../src/script')

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