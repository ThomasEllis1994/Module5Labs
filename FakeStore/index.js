import express from "express";
import storeRoute from "./routes/storeRoute.js";

const app = express();
const port = 3000;
app.use(express.json());

app.use("/", express.static("public"));
app.use("/store", storeRoute);

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});
