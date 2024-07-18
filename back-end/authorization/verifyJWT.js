import jwt from "jwt"
import User from "../models/UserModel";

const verifyJWT = async (req, res, next) => {

    try {

        const token = res.cookie.jwt
        const result = await jwt.verify(token, process.env.JWT);

        if (!result) {
            return res.status(400).json({error: "Unauthorized. Token Not Found"});
        } else {
            const id = result.user.userId;
            const user = await User.findById({id});
            if (!user) {
                return res.status(404).json({error: "User not found"});
            } else {
                req.user = user; // This request will be passed on to the next controller.
            }
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({error: err})
    }
    next();
};

return verifyJWT;