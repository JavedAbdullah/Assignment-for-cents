const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3000

//  enable CORS
app.use(cors());

// for parsing the body of the request 
app.use(bodyParser.json());

function is_prime(n) {
    if (n <= 1) { return false; }
    if (n <= 3) { return true; }
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function nextPrime(num) {
    num++;
    while (!is_prime(num)) {
        num++;
    }

    return num;

}

// Endpoint POST /calculate
app.post('/calculate', (req, res) => {
    //console.log('Received:', req.body);
    const { num1, num2 } = req.body;

    let sum = parseInt(num1) + parseInt(num2)
    let maxNum = Math.max(num1, num2);

    let first_prime = nextPrime(maxNum);


    //send data to client in JSON format
    res.json({
        result: sum,
        firstPrime: first_prime
    });


})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
