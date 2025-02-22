import jwt from 'jsonwebtoken';

const generateToken = (userId, res) => {
    const token =jwt.sign({ userId }, process.env.JWT_SECRET, {})

    res.cookie("token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production" ? true : false,
    })
}

export default generateToken;