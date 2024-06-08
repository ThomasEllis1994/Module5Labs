const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2;
    console.log(sum);
    res.status(200).json({ result: sum });
};

const subtract = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let subtract = number1 - number2;
    console.log(subtract);
    res.status(200).json({ result: subtract });
};

const multiply = (req, res) => {
    console.log(req.query);
    let number1 = parseInt(req.query.num1);

    let number2 = parseInt(req.query.num2);
    let multiply = number1 * number2;
    console.log(multiply);
    res.status(200).json({ result: multiply });
};

const divide = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let divide = number1 / number2;
    console.log(divide);
    res.status(200).json({ result: divide });
};

module.exports = {
    addNumbers,
    subtract,
    multiply,
    divide,
};
