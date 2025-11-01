import { Cart } from "../Models/Cart.js"
import { Product } from "../Models/Product.js"


 export const getCart = async(req, res) => {
    const cart = await Cart.find({})
    res.status(200).json(cart)

}

export const addToCart = async(req, res) => {
    const { productId, qty } = req.body
    if(!productId || !qty){
        return res.status(400).json({message:"productId and qty are required"})
    }
     const quantity = parseInt(qty, 10)
        if (isNaN(quantity) || quantity <= 0) {
            return res.status(400).json({ message: "qty must be a positive integer" })
     }

             let cart = await Cart.findOne()
        if (!cart) cart = new Cart({ items: [] })

        // find existing item in cart.items by productId
        const existingItem = cart.items.find(
            (item) => item.productId.toString() === productId.toString()
        )

        if (existingItem) {
            // increase qty
            existingItem.qty = (Number(existingItem.qty) || 0) + quantity
        } else {
            // add new item — expect name and price in body if available,
            // otherwise use sensible defaults

            const product = await Product.findById(productId)
            if(!product){
                res.status(404).json({message:"No such product exist"})
            }
            const { name, price } = product
            cart.items.push({
                productId,
                name: name, 
                price: price,
                qty: quantity
            })
        }

        await cart.save()
        return res.status(200).json(cart)
     
}

 export const removeFromCart = async(req, res) => {
    const idToRemove = req.params.id
     const deletedProduct = await Cart.findByIdAndDelete(idToRemove)
     res.status(200).json({message:"product successfullly removed from cart"})
}