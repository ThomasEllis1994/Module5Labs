import app from "./app.js";
const port = 3000;
// import express from "express";
// app.use(express.json);
// start the app to listen on the right port
app.listen(port, () => {
    console.log(`Example app listening at
http://localhost:${port}`);
});

// import express from "express";
// import calculatorRoutes from "./routes/calculatorRoutes.js";

// const app = express();
// const port = 3000;
// app.use(express.json());

// app.use("/", express.static("public"));
// app.use("/calculator", calculatorRoutes);

// app.listen(port, () => {
//     console.log(`example app listening at http://localhost:${port}`);
// });
