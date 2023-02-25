const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get("/gbr-to-pln-calculator", (req, res) => {
    res.render('index')
})

app.listen(port)