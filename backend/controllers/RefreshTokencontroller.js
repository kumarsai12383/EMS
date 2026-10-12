const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const refreshTokenController = async(req,res)=>{
    try{
        const {refreshToken}= req.body
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY)
        const accessToken = jwt.sign(
      { userId: decoded.userId },
      process.env.JWT_KEY,
      { expiresIn: "15m" },
    );
    res.status(200).json({ accessToken });
    }
    catch(error){
        res.status(401).json({ message: "Invalid refresh token" });
    }
}
module.exports = refreshTokenController