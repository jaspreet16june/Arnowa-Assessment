const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../secret")

module.exports.bodyChecker = function bodyChecker(req, res, next) {
    let isPresent = Object.keys(req.body);
    if (isPresent.length) {
        next();
    } else {
        res.send("Send details in body");
    }
}


module.exports.protectRoute = function protectRoute(req, res, next) {
    try {

        let decreptedToken = jwt.verify(req.cookies.JWT, JWT_SECRET);
        if (decreptedToken) {
            let userId = decreptedToken.id;
            req.userId = userId;
            next();
        } else {
            res.send("kindly login to access this record");
        }

    } catch (err) {
        res.status(404)
            .json({
                message: err.message,
            })
    }
}
