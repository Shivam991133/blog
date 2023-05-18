const userModel = require('../model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signUp = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        if (userName && email && password) {
            const user = await userModel.findOne({ email: email });
            if (user) {
                res.status(400).json({ message: "User Already exists" });
            } else {
                const hasHpassword = await bcrypt.hashSync(password, 9);
                const userSave = await userModel({
                    userName,
                    email,
                    password: hasHpassword
                }).save();
                res.status(200).json({ message: "User Data is Save SccuessFully", result: userSave })
            }
        } else {
            res.status(400).json({ message: "Please Enter all Data" })
        }

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email && password) {
            const user = await userModel.findOne({ email: email });
            if (user) {
                const isMatch = await bcrypt.compareSync(password, user.password)
                if (isMatch) {
                    const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
                    res.status(200).json({ message: "User Login SuccesFully", result: user, token: token })
                } else {
                    res.status(400).json({ message: "Password is Not Match" });
                }
            } else {
                res.status(400).json({ message: "User Not Found" });
            }
        } else {
            res.status(400).json({ message: "Please Enter all details" })
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    signUp,
    login
}