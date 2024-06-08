//Lab 2: setting up routes for Calculator
import express from "express";
const router = express.Router();

router.get("/add", (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 + num2;
    console.log(sum);
    res.status(200);
    res.json({ result: sum });
});

router.get("/subtract", (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let diff = num1 - num2;
    console.log(diff);
    res.status(200);
    res.json({ result: diff });
});

router.get("/divide", (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let divide = num1 / num2;
    console.log(divide);
    res.status(200);
    res.json({ result: divide });
});

router.get("/multiply", (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let product = num1 * num2;
    console.log(product);
    res.status(200);
    res.json({ result: product });
});

export default router;
