document.getElementById('dataForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const response = await fetch('http://localhost:3000/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ num1, num2 })
    });
    // console.log('Sending:', { num1, num2 });
    const data = await response.json();
    document.getElementById('result').textContent = `Server Response:  sum: ${data.result} \n first prime grather than: ${Math.max(num1, num2)} is ${data.firstPrime}, so the final result is ${data.finalResult} `;
});