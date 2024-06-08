//Lab 2: setting up calculator routes
//Lab 3: setting up all 4 functions to work and use HTML to take input from user
const express = require("express");
const router = express.Router();
//lab 5: setting routes to use controllers
// import calculator from "../controllers/calculatorController.js";
const calculator = require("../controllers/calculatorController.js");
router.get("/add", (req, res) => {
    calculator.addNumbers(req, res);
});

router.get("/subtract", (req, res) => {
    calculator.subtract(req, res);
});

router.get("/divide", (req, res) => {
    calculator.divide(req, res);
});

router.get("/multiply", (req, res) => {
    calculator.multiply(req, res);
});

// I broked something when I tried seperating them out

// import addController from "../controllers/addController.js";
// import subtractController from "../controllers/subtractController.js";
// import divideController from "../controllers/divideController.js";
// import multiplyController from "../controllers/multiplyController.js";

// router.get("/add", (req, res) => {
//     addController.add(req, res);
// });

// router.get("/subtract", (req, res) => {
//     subtractController.subtract(req, res);
// });

// router.get("/divide", (req, res) => {
//     divideController.divide(req, res);
// });

// router.get("/multiply", (req, res) => {
//     console.log(req.query);
//     multiplyController.multiply(req, res);
// });

//These did work, stopped working once I added controllers
//Lab 2: setting up routes for Calculator
// router.get("/add", (req, res) => {
//     let num1 = parseInt(req.query.num1);
//     let num2 = parseInt(req.query.num2);
//     let sum = num1 + num2;
//     console.log(sum);
//     res.status(200);
//     res.json({ result: sum });
// });

// router.get("/subtract", (req, res) => {
//     let num1 = parseInt(req.query.num1);
//     let num2 = parseInt(req.query.num2);
//     let diff = num1 - num2;
//     console.log(diff);
//     res.status(200);
//     res.json({ result: diff });
// });

// router.get("/divide", (req, res) => {
//     let num1 = parseInt(req.query.num1);
//     let num2 = parseInt(req.query.num2);
//     let divide = num1 / num2;
//     console.log(divide);
//     res.status(200);
//     res.json({ result: divide });
// });

// router.get("/multiply", (req, res) => {
//     let num1 = parseInt(req.query.num1);
//     let num2 = parseInt(req.query.num2);
//     let product = num1 * num2;
//     console.log(product);
//     res.status(200);
//     res.json({ result: product });
// });
module.exports = router;
