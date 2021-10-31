let express = require("express");
let authRouter = express.Router();
let {bodyChecker} = require("../helper/utilFun")
let jwt = require("jsonwebtoken");
let {JWT_SECRET} = require("../secret")
const userModel = require("../model/userModel");


authRouter.use(bodyChecker)
authRouter
    .route("/signup")
    .post(signupUser);

authRouter
    .route("/login")
    .post(loginUser);


async function signupUser(req, res) {
    try {
        let newUser = await userModel.create(req.body);
        res.status(200).json({
            "message": "user created successfully",
            user: newUser,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}

async function loginUser(req, res) {
    try {
        let { email, password } = req.body;
        let user = await userModel.findOne({ email });
        if (user) {
            if (user.password == password) {
                let token = jwt.sign({ id: user["_id"] }, JWT_SECRET);
                res.cookie("JWT", token);
                res.status(200).json({
                    message: "user logged in",
                    user: user,
                })

            } else {
                res.status(404).json({
                    message: "email or password is not correct",
                })
            }
        } else {
            res.status(404).json({
                message: "user not found",
            })
        }
    } catch (err) {
    
        res.status(404)
            .json({
                message: err.message,
            })
    }
}

module.exports = authRouter;