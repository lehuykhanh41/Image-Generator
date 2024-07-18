import express from "express";
import User from "../models/UserModel.js";
import bcryptjs from "bcryptjs";
import generateToken from "../authorization/createJWT.js";

export const signUp = async (req, res, next) => {

    const {username, password, passwordConf, email} = req.body;

    try {

        if (passwordConf != password) {
            return res.status(500).json({error: "Password Mismatch"});
        } else {
        // Check for existing users:
            const existedUser = await User.findOne({username});
            if (existedUser) {
                return res.status(500).json({error: "User already existed"});
            } else {
                
                const salt = await bcryptjs.genSalt(10);
                const encrypted = await bcryptjs.hash(password, salt);

                const avatar = `https://ui-avatars.com/api/?name=${username}`;

                const newUser = new User({
                    username,
                    password: encrypted, 
                    email,
                    imageHistory: [],
                    avatar,
                });

                if (newUser) {
                    generateToken({userId: newUser._id}, res);
                    await newUser.save();
                    return res.status(200).json({success: "Account Registration Success"});
                } else {
                    return res.status(500).json({error: "Register Error"});
                }
            }
        }


    } catch (err) {
        console.log(err);
        res.status(500).json({err: "Account Sign Up Error"});
    }  
    
    next();
};

export const login = async (req, res, next)=>{

    const {username, password} = req.body;

    try {

        const existingAccount = await User.findOne({username});
        if (!existingAccount) {
            return res.status(404).json({error: "Account Not Found"})
        } else {
            const verifiedPassword = await bcryptjs.compare(password, existingAccount.password);
            if (!verifiedPassword) {
                return res.status(403).json({error: "Incorrect Password"});
            } else {
                generateToken({userId: existingAccount._id}, res);
                return res.status(200).json(existingAccount);
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({err: "Log in Error"});
    }
    next();
};

export const logout = async (req, res, next) => {

    try {

        res.cookie("jwt", "", {
            maxAge: 0,
        });
        res.status(200).json({success: "Log Out Successfully"});


    } catch (err) {
        res.status(500).json({error: "Log Out Error"});
    }

    next();
}