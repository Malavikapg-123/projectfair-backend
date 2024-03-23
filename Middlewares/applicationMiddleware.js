
const appMiddleware=(req,res,next)=>{
    console.log("Inside applicatin middleware");
    next();
}
module.exports=appMiddleware;