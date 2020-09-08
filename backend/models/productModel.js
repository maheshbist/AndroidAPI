import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const prodctSchema = new mongoose.Schema({
  image: { type: String, required: false },
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true }

});

const productModel = mongoose.model('Product', prodctSchema);

export default productModel;
