import express from "express";
import calculatorRoutes from "./routes/calculatorRoutes.js";

const app = express();
const port = 3000;
app.use(express.json());
//Lab 1 creating second port
const port2 = 4660;

app.use("/", express.static("public"));
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});
app.listen(port2, () => {
    console.log(`This one is listening at http://localhost:${port2} `);
});
