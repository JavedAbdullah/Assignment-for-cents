const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

// for parsing the body of the request 
app.use(bodyParser.json());

// Endpoint POST /calculate
app.get('/calculate', (req, res) => {
    const { num1, num2 } = req.body;

    //send data to client in JSON format
    let sum = num1 + num2
    res.json({
        res: sum
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
