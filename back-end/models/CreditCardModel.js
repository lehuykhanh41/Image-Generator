import mongoose from "mongoose";

const creditCardSchema = new mongoose.Schema({
    cardName: {
        type: String,
        require: true,
    },
    cardNumber: {
        type: String,
        require: true,
    },
    cardCVV: {
        type: String,
        require: true,
    },
    cardDate: {
        type: Date,
        require: true,
    }
});

const CreditCard = mongoose.model("CreditCard", creditCardSchema);

export default CreditCard;