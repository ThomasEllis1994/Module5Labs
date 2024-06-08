import express from "express";

const app = express();
const port = 3000;
app.use(express.json());
//Lab 1 creating second port
const port2 = 4660;

app.use("/", express.static("public"));

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

// //testing to see if this will show in both ports

// app.get("/testing", (req, res) => {
//     res.send("Testing Express");
// });

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});
app.listen(port2, () => {
    console.log(`This one is listening at http://localhost:${port2} `);
});
