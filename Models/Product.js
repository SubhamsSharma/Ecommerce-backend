import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
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
    }
}, 
{timestamps:true})

export const Product = model('Product', ProductSchema)