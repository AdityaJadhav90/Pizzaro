const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for individual items in an order
const ItemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

// Main order schema
const OrderSchema = new Schema({
  email: { type: String, required: true, trim: true }, // user email
  items: { type: [ItemSchema], required: true },       // items in this order
  totalPrice: { type: Number, required: true },        // total cost
  orderDate: { type: Date, default: Date.now },        // timestamp
});

module.exports = mongoose.model('Order', OrderSchema, 'orders'); // explicitly use 'orders' collection
