import mongoose, { models } from 'mongoose'

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    mediaUrl: {
        type: String,
        required: true
    }
})

export default mongoose.models.FoodItem || mongoose.model('FoodItem', productsSchema)