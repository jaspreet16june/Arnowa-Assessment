const express = require('express');

const app = express();

const PORT = process.env.PORT || 3002
const userRouter = require("./router/userRouter");
const authRouter = require("./router/authRouter");

app.use(express.json());
app.use(express.static("public"));

app.use("/user", userRouter);
app.use("/auth", authRouter);

app.listen(PORT, function () {
    console.log(`Server is listening to the port ${PORT}`);
})
