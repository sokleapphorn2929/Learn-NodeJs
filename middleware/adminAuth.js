import jwt from 'jsonwebtoken';

function adminAuth(req, res, next){

    const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json(
            {
                message: "please login first."
            }
        )
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = verified;
        next();
    } catch (error) {
        return res.status(403).json(
            {
                message: error.message
            }
        )
    }
}

export default adminAuth;