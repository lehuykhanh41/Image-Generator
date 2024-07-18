import User from "../models/UserModel.js";

export const purchase = async(req, res, next) => {
    const {username, amount, cardName, cardNumber, cardCVV, cardMonth, cardYear} = req.body;

    try {
        const today = new Date();
        if (parseInt(cardYear) < today.getFullYear() || (parseInt(cardYear) == today.getFullYear() && parseInt(cardMonth) < today.getMonth())) {
            return res.status(400).json({error: "Invalid Card"})
        } else {
            const user = await User.findOne({username});
            if (!user) {
                return res.status(404).json({error: "User Not Found"});
            } else {
                const newCredits = user.credits + parseInt(amount);
                await user.updateOne({credits: newCredits})
                await user.save();
                return res.status(200).json({success: "Payment Success"});
            }
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({error: "Payment Error"});
    }

    next();
}