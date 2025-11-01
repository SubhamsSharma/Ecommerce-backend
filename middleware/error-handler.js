export const errorHandlerMiddleware = (err, req, res, next) => {
    
    // imporove later

    res.status(err.statusCode).json({msg:err.msg})
}