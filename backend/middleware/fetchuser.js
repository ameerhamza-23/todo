var jwt = require('jsonwebtoken');

const fetchuser = (req,res,next)=> {
    const token = req.header('authToken');
    const JWT_SECRET = "todoAPPwithBackend"
    if(!token) {
        return res.status(401).json({error:"please authenticate using a valid token"});
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.user;
        next();
    }
    catch(err) {
        // return res.status(401).json({error:"Please authenticate using a valid token"});
    }
    
}

module.exports = fetchuser;