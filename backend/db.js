const mongoose = require('mongoose');
require('dotenv').config();
const { sampleFoodCategories, sampleFoodItems } = require('./sampleData');

const connectMongoDB = async () => {
  try {
    // Try to connect to MongoDB if MONGO_URI is available
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('✅ MongoDB connected successfully');

      global.food_items = await mongoose.connection.db
        .collection('Food_items')
        .find({})
        .toArray();
      global.food_category = await mongoose.connection.db
        .collection('Food_category')
        .find({})
        .toArray();
    } else {
      // Use sample data if no MongoDB connection
      console.log('⚠️ No MongoDB URI found, using sample data');
      global.food_items = sampleFoodItems;
      global.food_category = sampleFoodCategories;
    }

    console.log(`📊 Loaded ${global.food_items.length} food items and ${global.food_category.length} categories`);

  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    console.log('🔄 Falling back to sample data');
    global.food_items = sampleFoodItems;
    global.food_category = sampleFoodCategories;
  }
};

module.exports = connectMongoDB;
