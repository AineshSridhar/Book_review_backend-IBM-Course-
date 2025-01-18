import user from "../models/user.js";
import{hashPassword, compare_hashed_passwords} from "../utils/hashing.js"
import {createToken} from "../utils/tokens.js"

export async function register(req, res) {
    try{
        const{username, password} = req.body;

        const foundUser = await user.findOne({where: {username}});
        if(foundUser) {
            return res.json({message: "This user iss already registered!"});
        }

        const hashedPassword = await hashPassword(password);

        const newUser = await user.create({username: username, password: hashedPassword});
    }
}