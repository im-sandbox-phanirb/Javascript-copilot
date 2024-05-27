const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(express.static('Node-'));
app.use(bodyParser.urlencoded({ extended: true }));

class Calculator {
    constructor() {
        this.result = 0;
    }

    add(number) {
        this.result += number;
        return this.result;
    }

    subtract(number) {
        this.result -= number;
        return this.result;
    }

    multiply(number) {
        this.result *= number;
        return this.result;
    }

    divide(number) {
        if (number === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result /= number;
        return this.result;
    }

    clear() {
        this.result = 0;
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
    let calculator = new Calculator();
    let number1 = parseFloat(req.body.number1);
    let number2 = parseFloat(req.body.number2);
    let operation = req.body.operation;

    let output;
    switch (operation) {
        case 'add':
            calculator.add(number1);
            calculator.add(number2);
            output = calculator.result;
            break;
        case 'subtract':
            calculator.subtract(number1);
            calculator.subtract(number2);
            output = calculator.result;
            break;
        case 'multiply':
            calculator.multiply(number1);
            calculator.multiply(number2);
            output = calculator.result;
            break;
        case 'divide':
            calculator.divide(number1);
            calculator.divide(number2);
            output = calculator.result;
            break;
        default:
            output = 'Invalid operation';
    }

    res.send(output.toString());
});

app.listen(port, () => {
    console.log(`Calculator app listening at http://localhost:${port}`);
});
