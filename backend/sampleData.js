const sampleFoodCategories = [
  {
    _id: "1",
    name: "Pizza"
  },
  {
    _id: "2", 
    name: "Burgers"
  },
  {
    _id: "3",
    name: "Pasta"
  },
  {
    _id: "4",
    name: "Desserts"
  }
];

const sampleFoodItems = [
  {
    _id: "1",
    name: "Margherita Pizza",
    category: "Pizza",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop"
  },
  {
    _id: "2",
    name: "Pepperoni Pizza",
    category: "Pizza", 
    price: 14.99,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop"
  },
  {
    _id: "3",
    name: "Classic Burger",
    category: "Burgers",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"
  },
  {
    _id: "4",
    name: "Cheese Burger",
    category: "Burgers",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop"
  },
  {
    _id: "5",
    name: "Spaghetti Carbonara",
    category: "Pasta",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop"
  },
  {
    _id: "6",
    name: "Fettuccine Alfredo",
    category: "Pasta",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop"
  },
  {
    _id: "7",
    name: "Chocolate Cake",
    category: "Desserts",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
  },
  {
    _id: "8",
    name: "Ice Cream Sundae",
    category: "Desserts",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop"
  }
];

module.exports = { sampleFoodCategories, sampleFoodItems }; 