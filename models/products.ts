import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: 'string',
    minLength: 1,
    maxLength: 20,
    required: true,
  },
  image: 'string',
  price: {
    type: 'number',
    min: 10,
    required: true,
  },
  description: {
    type: 'string',
    minLength: '10',
    maxLength: '160',
    required: true,
  },
  category: {
    type: 'string',
    values: ['men', 'women', 'unisex'],
    required: true,
  },
  rating: {
    type: 'number',
    min: 1,
    max: 5,
  },
});

export default mongoose.model('products', ProductSchema);
