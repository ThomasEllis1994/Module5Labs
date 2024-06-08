const divide = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let divide = number1 / number2;

    res.status(200).json({ result: divide });
};
export default divide;
