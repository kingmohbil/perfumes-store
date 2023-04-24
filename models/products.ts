import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: 'string',
  image: Schema.Types.String,
});

export default mongoose.model('products', ProductSchema);
