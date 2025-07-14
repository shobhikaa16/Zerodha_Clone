const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoute = require("./routes/AuthRoute");

require('dotenv').config();

const { HoldingsModel } = require('./model/HoldingsModel');
const { OrdersModel } = require('./model/OrdersModel');
const { PositionsModel } = require('./model/PositionsModel');

const app = express();
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

// 🟢 MongoDB Connection
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// 🟢 Middleware Setup
app.use(
  cors({
    origin: ["http://localhost:3002", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/", authRoute);

app.get('/allHoldings', async(req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', async(req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// ✅ Required for Render Deployment:
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
