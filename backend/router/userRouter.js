const express = require("express");
const userModel = require("../model/userModel");
let userRouter = express.Router();
const { createElement} = require("../helper/factory");
const { bodyChecker } = require("../helper/utilFun")
let createUser = createElement(userModel);


userRouter
    .route("/:id")

userRouter
    .route("/")
    .post(bodyChecker, createUser);

module.exports = userRouter;