const express = require('express');
const connectMongoDB = require('./db');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());

connectMongoDB();

// ✅ Enable CORS for your frontend
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Routes
app.use('/api', require('./routes/DisplayData'));
app.use('/api/auth', require('./routes/CreateUser'));
app.use('/api/auth', require('./routes/OrderData'));  // 👈 includes both getOrderData + myorders

app.get('/', (req, res) => {
  res.send('Backend running');
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server listening on port ${process.env.PORT}`);
});
