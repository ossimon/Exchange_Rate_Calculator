const express = require("express")
const router = express.Router()

const calculator = require('../src/script')

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