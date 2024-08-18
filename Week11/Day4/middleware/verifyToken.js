const jwt = require('jsonwebtoken');
require('dotenv').config();

const { ACCESS_TOKEN_SECRET } = process.env;

const verifyToken = (req, res, next) => {
    const accesstoken = req.cookies["Alex-token"] || req.headers["x-access-token"]

    console.log('accesstoken=>', accesstoken);

    if(!accesstoken) return res.status(401).json({message: "unauthorized"});

    jwt.verify(accesstoken, ACCESS_TOKEN_SECRET, (err,decode) => {
        if(err) return res.status(403).json({message: "forbidden", error: err.message });

        const { userid, email } = decode;
        req.userid = userid
        req.email = email
        req.userinfo = decode

        console.log(req);

        next();

    });

    // next();
};

module.exports = {
    verifyToken,
}

// method:"POST",
// headers:{
//     content-type: 'application/json',
//     "x-access-token": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjMsImVtYWlsIjoiYWxleEBnbWFpbC5jb20iLCJpYXQiOjE3MjM5Njk5OTIsImV4cCI6MTcyMzk3MDA1Mn0.y-gJK9k98Kx9pEUkuALvgXW2SfVfc4EjuOTbfXhCtVc
// }