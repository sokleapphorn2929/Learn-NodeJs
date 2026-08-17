import jwt from 'jsonwebtoken';

function authMiddleware(req, res, next) {
    // const authHeader = req.headers['authorization'];
    // const token = authHeader && authHeader.split(' ')[1];

    // but you can write shorter from this above on below

    // [1] is the token while [0] is token
    // example
    // "token" [0]
    // "kdjfihifereir9ru349u43400i0" [1]
    const token = req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json(
            {
                message: "Please login first."
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

export default authMiddleware;