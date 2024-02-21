import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d',
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, // cookie cannot be accessed by the client
        sameSite: "strict", // csrf protection 
        secure: process.env.NODE_ENV !== "developement",
    });
};

export default generateTokenAndSetCookie;