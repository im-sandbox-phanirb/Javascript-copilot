# Copilot Calculator Demo

A small demo project to exercise the basic capabilities of Copilot in ***Visual Studio Code***. In this demo you should refine JavaScript coding a Node based calculator Module that you can access from the UI via an `index.js` entry-point. We use copilot/chat to help in refining JavaScript coding the `calculator.js`, `index,js` and some Node packaging settings. Enjoy !

>Note: The demo/workshop uses **Copilot** & **Copilot Chat** features to complete the solution.

## Pre-Requisits

- Make sure to have...

<img width="50%" src="images/copilot-and-chat.png">

...correctly installed in Visual Studio Code

----

## 1. Write the `calculator.js` file.

### 1.1 Run the `calculator.js` file in port 4000.

Open the treminal.

Run

```
cd demos/Node-calculator
```

```
node calculator.js
```

```
Open http://localhost:4000/
```
Test the code by running te ADD operation 

---

### 1.2 Refine the calculator.js.
The Subraction, multiplication & divide code is not working as expected

Ask Copilot Chat for help

<img width="48px" src="images/copilot-chat.png">

Start a new Copilot chat session and open a blank new tab

In Copilot chat:

```
The subtract, multiply & divide is not working as add
```
<details><summary>Output</summary> <p>

```
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
            calculator.add(number1);
            calculator.subtract(number2);
            output = calculator.result;
            break;
        case 'multiply':
            calculator.add(number1);
            calculator.multiply(number2);
            output = calculator.result;
            break;
        case 'divide':
            if (number2 !== 0) {
                calculator.add(number1);
                calculator.divide(number2);
                output = calculator.result;
            } else {
                output = 'Cannot divide by zero';
            }
            break;
        default:
            output = 'Invalid operation';
    }

    res.send(output.toString());
});
```
</p> </details>


Replace the code & Run `node calculator.js` in treminal.

Open `http://localhost:4000/` and test all operations like Add, subtract, multiply & divide

---

### 1.3 Refine the Index.html
The Inputs of Number 1 & Number 2 are acceptig alphabets instead only numericals.

Ask Copilot Chat for help

<img width="48px" src="images/copilot-chat.png">

Select the the code in `index.html`

Start a new Copilot chat session and open a blank new tab

In Copilot chat:

```
It should accept only numericals
```

<details><summary>Output</summary> <p>

```
<!DOCTYPE html>
<html>
<body>

<h2>Calculator</h2>

<form action="/calculate" method="post">
    Number 1: <input type="number" name="number1"><br>
    Number 2: <input type="number" name="number2"><br>
    Operation: 
    <select name="operation">
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
    </select>
    <br>
    <input type="submit" value="Calculate">
</form>

</body>
</html>
```
</p> </details>


Replace the code & Run `node calculator.js` in terminal.

Open `http://localhost:4000/` and test all operations like Add, subtract, multiply & divide


---



### 2.1 Fix any errors that come up

Type any error in to Copilot-Chat and ask for a fix.

<img width="48px" src="images/copilot-chat.png">

```
...
```

---

## 3. Test the solution

| This section is open to your imagination, try to "challange" the code

...

---

## 4. Create unit tests

### 4.1 Open the `demos/Node-calculator/calculator.js` file

### 4.2 Ask Copilot Chat for help

<img width="48px" src="images/copilot-chat.png">

```
give me a sample unit test for the calculator module.
```

### 4.3 Copy the suggested code to the file

### 4.4 Ask Copilot Chat for help

<img width="48px" src="images/copilot-chat.png">

```
how can I invoke the unit test ?
```


<img width="48px" src="images/copilot-chat.png">

```
how can I create jest json output ?
```

## "Extra Credit"

- Use the Unit test results to create a README [Badge](https://shields.io)
