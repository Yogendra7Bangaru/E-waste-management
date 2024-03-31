// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000; // or any port you prefer

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ewaste_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ewasteCenterSchema = new mongoose.Schema({
  name: String,
  address: String,
  state: String,
  latitude: Number,
  longitude: Number,
});

const EwasteCenter = mongoose.model('EwasteCenter', ewasteCenterSchema);

// Define your API endpoints here, e.g., search by state
app.get('/api/ewaste-centers/:state', async (req, res) => {
  const state = req.params.state;
  const centers = await EwasteCenter.find({ state });
  res.json(centers);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
