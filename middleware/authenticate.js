import {decodeToken} from "./utils/token.js"

function authenticate(req, res, next){
    try{
        let tokenHeader = req.headers.authorization;
        
        if (!tokenHeader||!tokenHeader.startswith("Bearer")){
            return res.status(401).json({message: "You are not authorized to perform this action!"});
        }
        tokenHeader = tokenHeader.split(' ')[1];

        const {user_id} = decode(tokenHeader);
        req.user = {user_id};

        next();

    } catch (error) {
        return res.status(401).json({message: "You're not authorized to perform this action!"});
    }
}

export default authenticate;
