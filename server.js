const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

const calculatorRouter = require('./routes/calculator')
app.use('/calculator', calculatorRouter)

const gbpToPln = require('./routes/gbp-to-pln')
app.use('/gbp-to-pln', gbpToPln)

const plnToGbp = require('./routes/pln-to-gbp')
app.use('/pln-to-gbp', plnToGbp)

app.get("/", (req, res) => {
    res.redirect('/calculator')
})


app.listen(port)