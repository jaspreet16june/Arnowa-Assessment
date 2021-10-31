let userModel = require("../model/userModel");

module.exports.bodyChecker = function bodyChecker(req, res, next) {
    let isPresent = Object.keys(req.body);
    if (isPresent.length) {
        next();
    } else {
        res.send("Send details in body");
    }
}

