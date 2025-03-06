const express = require('express');
const app = express();



app.get("/ping", (req, res) => {
    res.send("pong is ping");
});


app.listen(2006, () => {
    console.log("Server is running successfully");
});
