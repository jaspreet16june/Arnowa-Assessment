const express = require('express');

const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const PORT = process.env.PORT || 3002
const userRouter = require("./router/userRouter");
const authRouter = require("./router/authRouter");

app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser())

app.use("/user", userRouter);
app.use("/auth", authRouter);

app.listen(PORT, function () {
    console.log(`Server is listening to the port ${PORT}`);
})

app.use(function(req,res){
    let restOfPath = path.join("./public","index.html")
    res.status(404).sendFile(path.join(__dirname,restOfPath))
})