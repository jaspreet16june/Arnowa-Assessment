const express = require("express");
const userModel = require("../model/userModel");
let userRouter = express.Router();
const { createElement} = require("../helper/factory");

let createUser = createElement(userModel);


userRouter
    .route("/:id")

userRouter
    .route("/")
    .post(createUser);

module.exports = userRouter;