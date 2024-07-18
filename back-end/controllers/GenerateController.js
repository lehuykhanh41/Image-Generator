import {OpenAI} from "openai";
import {v2 as cloudinary} from "cloudinary";


export const testRequest = (req, res, next) => {
    
    return res.status(200).json({success: "Very usccess"});
    next();
}

export const sendImgRequest2 = async (req, res, next) => {
    try {

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const openai = new OpenAI({
        organization: process.env.OPENAI_ORGANIZATION,
        project: process.env.OPENAI_PROJECT_ID,
        apiKey: process.env.OPENAI_API_KEY
    });

    const {prompt} = req.body;

    const result = await openai.images.generate({
        model: "dall-e-2",
        prompt,
        n: 1,
        size: "512x512",
    });

    if (result) {

        const uploadResult = await cloudinary.uploader.upload(result.url, {public_id: "testy"});

        return res.status(200).json({uploadResult});
    }  else {
        return res.status(400).json({error: "Image generation error"});
    }
    

    } catch (err) {
        console.log(err);
        return res.status(500).json({error: err});
    }

    next();
}