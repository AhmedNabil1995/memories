import jwt from 'jsonwebtoken';

export function verify(req,res,next){
    let token =req.headers.token
    if(!token) return res.status(400).json('you are not authontication');
    try {
        jwt.verify(token,'secretKey',(err,user)=>{
            if(!err){
                req.user = user;
                next();
            }else{
                res.json('expires')
            }
       });
    } catch (error) {
        res.json(error)
    }
}