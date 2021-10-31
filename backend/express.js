const express = require('express');
const path = require('path');
const app = express();

const userRouter = require("./router/userRouter");
const authRouter = require("./router/authRouter");

app.use(express.json());
app.use(express.static("public"));




app.use("/user", userRouter);
app.use("/auth", authRouter);


app.listen("3001", function () {
    console.log(`Server is listening to the port 3001`);
})

app.use(function (req, res) {
    let restOfPath = path.join("./public", "404.html");
    res.status(404).sendFile
        (path.join(__dirname, restOfPath));
})