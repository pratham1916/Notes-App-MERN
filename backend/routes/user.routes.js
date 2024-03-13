const express = require("express")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const { userModel } = require("../model/user.model");
const userRouter = express.Router();

userRouter.post("/register", (req, res) => {
    const { username, email, password } = req.body;
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                res.status(400).json({ err })
            }
            else {
                const user = new userModel({ username, email, password: hash })
                await user.save();
                res.status(200).json({ msg: 'User Registered Successfully' })
            }
        })
    }
    catch (error) {
        res.status(400).json({ error })
    }
})

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userID: user._id, username: user.username }, "masai")
                    res.status(200).json({ msg: 'Login Successfully', token })
                }
                else {
                    res.status(400).send({ err })
                }
            })
        }
        else {
            res.status(400).send({ msg: "login failed" })
        }
    }
    catch (error) {
        res.status(401).json({ error })
    }
})


module.exports = {
    userRouter
}