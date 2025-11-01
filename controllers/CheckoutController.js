export const generateReciept = (req, res) => {
    const {cart}  = req.body
    if(!cart){
        res.status(400).json({message:"Reciept can't be generted with empty cart"})
    }
    let total = cart.reduce((acc,item) =>acc+(item.price * item.qty) , 0)
    let totalPrice = Math.ceil(total.toFixed(2,0))
    console.log("total",total)
    res.status(200).json({total:totalPrice, timestamp: new Date()})
}