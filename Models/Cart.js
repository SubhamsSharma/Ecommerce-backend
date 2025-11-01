import { model, Schema } from "mongoose";


const CartItemSchema = new Schema({
    productId:{
        type: Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
      name: {
      type: String,
      trim: true,
      required: [true, 'Please provide product name'],
      maxlength: [100, 'Name can not be more than 100 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide product price'],
      default: 0,
    },
    qty:{
        type:Number,
        required:true,
        min:1,
        default:1
    }
}, {
    _id:false
})

const CartSchema = new Schema({
    items:[CartItemSchema]
},{
    timestamps:true
})

export const Cart = model('Cart', CartSchema)