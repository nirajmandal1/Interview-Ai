const jwt= require("jsonwebtoken")



function authUser(req, res, next){
    const token = req.cookies.taken

    if(!token){
        return res.status(401).json({
            message: "Unauthorized access. Please login to access this resource."
        })


}}
try{
    const decoded

    }