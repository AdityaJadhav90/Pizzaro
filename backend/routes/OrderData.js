const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');

// 📌 Save new order
router.post('/getOrderData', async (req, res) => {
  try {
    const { email, orderItems } = req.body;

    if (!email || !orderItems || orderItems.length === 0) {
      return res.status(400).json({ success: false, message: 'Invalid order data' });
    }

    const totalPrice = orderItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const newOrder = new Order({
      email,
      items: orderItems,
      totalPrice,
      orderDate: new Date(),   // ✅ make sure date is saved
    });

    await newOrder.save();
    res.json({ success: true, message: 'Order saved', orderId: newOrder._id });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// 📌 Fetch past orders
router.post('/myorders', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const orders = await Order.find({ email }).sort({ orderDate: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
