const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3000

//  enable CORS
app.use(cors());

// for parsing the body of the request 
app.use(bodyParser.json());

// Endpoint POST /calculate
app.post('/calculate', (req, res) => {
    const { num1, num2 } = req.body;

    //send data to client in JSON format
    let sum = parseInt(num1) + parseInt(num2)
    res.json({
        result: sum
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
