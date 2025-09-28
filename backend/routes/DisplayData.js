const express = require('express');
const router = express.Router();

router.get('/DisplayData', async (req, res) => {
  try {
    console.log('📋 Food items:', global.food_items?.length || 0);
    console.log('📂 Food categories:', global.food_category?.length || 0);
    
    // Log the actual data structure
    if (global.food_items && global.food_items.length > 0) {
      console.log('🔍 Sample food item structure:', JSON.stringify(global.food_items[0], null, 2));
    }
    if (global.food_category && global.food_category.length > 0) {
      console.log('🔍 Sample category structure:', JSON.stringify(global.food_category[0], null, 2));
    }
   
    if (!global.food_items || !global.food_category) {
      console.log('❌ No data available');
      return res.status(404).json({ error: 'No food data available' });
    }

    res.status(200).json({
      food_items: global.food_items,
      food_category: global.food_category
    });

  } catch (error) {
    console.error('Error fetching food items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
