import app from "./app.js";
const port = 3000;
// start the app to listen on the right port
app.listen(port, () => {
    console.log(`Example app listening at
http://localhost:${port}`);
});