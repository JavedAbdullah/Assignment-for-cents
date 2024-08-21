const express = require('express')
const app = express()
const port = 3000

app.get('/calculate', (req, res) => {
    res.send('ci siamo forse!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
