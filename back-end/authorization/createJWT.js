import jwt from "jsonwebtoken";

// Generate a JWT Token.

const generateToken = (userId, res) => {

    const token = jwt.sign(userId, process.env.JWT, {
        expiresIn: "1d",
    });

    res.cookie("jwt", token, {
        maxAge: 24*3600*1000, // Miliseconds
        httpOnly: true,
        sameSite: "strict",
    });

}
export default generateToken;