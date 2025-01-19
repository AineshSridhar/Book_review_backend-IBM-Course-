import {decodeToken} from "../utils/tokens.js"

function authenticate(req, res, next){
    try{
        let tokenHeader = req.headers.authorization;
        
        if (!tokenHeader||!tokenHeader.startsWith("Bearer")){
            return res.status(401).json({message: "You are not authorized to perform this action!"});
        }
        tokenHeader = tokenHeader.split(' ')[1];

        const {user_id} = decodeToken(tokenHeader);
        req.user = {user_id};
        console.log(user_id);

        next();

    } catch (error) {
        return res.status(401).json({message: "You're not authorized to perform this action!"});
    }
}

export default authenticate;
