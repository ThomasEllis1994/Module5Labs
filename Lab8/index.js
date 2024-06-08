import express from "express";
import calculatorRoutes from "./routes/calculatorRoutes.js";

const app = express();
const port = 3000;
app.use(express.json());
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" with {type:"json"};

// const swaggerUi = require("swagger-ui-express");
// swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", express.static("public"));
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});
