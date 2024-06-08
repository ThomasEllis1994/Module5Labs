import express from "express";
const router = express.Router();
import storeController from "../controllers/storeController.js";

// router.get("/add", (req, res) => {
//     calculatorController.addNumbers(req, res);
// });

router.get("/products", (req, res) => {
    storeController.productList(req, res);
});

export default router;
