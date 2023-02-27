// Main exchange rate calculator route

const express = require("express")
const router = express.Router()

const calculator = require('../src/calculator')

// Rendering the page based on the current exchange rate
router.get("/", (req, res) => {
  calculator.getExchangeRate('gbp')
    .then(exchangeRate => {
      res.render("index", {
        send : req.body.send,
        receive : req.body.receive,
        exchangeRate : exchangeRate
      })
    })
})


module.exports = router