const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser'); // cookie-parser ko import kia hai kyuki hume cookies ko parse karna hai, agar cookies use krte hai toh
// yeh sab import kia hai kyuki hume express app banani hai, mongoose se db connect karna hai, body-parser se request body ko parse karna hai, cors se cross-origin requests allow karne hai
const authRoute = require("./routes/AuthRoute");

require('dotenv').config();

const { HoldingsModel } = require('./model/HoldingsModel'); // yha se import krke use krenge
const { OrdersModel } = require('./model/OrdersModel'); // yha se import krke use krenge
const { PositionsModel } = require('./model/PositionsModel'); // yha se import krke use krenge

const app = express();
const PORT = process.env.PORT || 3002; // agar yeh line miss out hojati hai toh deployment  ke time issue ata hai 
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
    origin: ["http://localhost:3002","http://localhost:5173"], // yeh dono origins allow kiye hai, kyuki frontend aur backend dono alag alag ports par chal rahe hai
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);


//app.use(bodyParser.json()); // yeh line request body ko json format me parse karne ke liye hai, taaki hum request body ko easily access kar sake

// here in this project hume dummy data insert krna hai toh hum route (like get() route -data ko db se read krna hai bas) ka use krke , initial data inser krege , hum mongoDb ka collections mai jakar
// add my own data bhi likh skte hai lekin that will take a lot of time, so hum directly yha se ek baar mai daal denge
// app.get('/addHoldings', async(req,res)=>{
//     let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];
//   // ab har object jo ooper hai unko db mai insert krna hai
//   // har object keliye model ka instance banayenge aur usko save() method se db mai insert krenge
//   tempHoldings.forEach((item)=>{
//      let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,

//      });
//         newHolding.save(); // save() method se db mai insert ho jaega, item by item
//   });
// res.send("Done!");
// });

// orders ka dummy data add kia
// app.get('/addOrders', async(req,res)=>{
//     let tempOrders = [
//         {
//             product: "CNC",
//             name: "HDFCBANK",
//             qty: 2,
//             price: 1522.35,
//             type: "BUY",
//             date: "2023-10-01",
//         },
//         {
//             product: "CNC",
//             name: "INFY",
//             qty: 1,
//             price: 1555.45,
//             type: "BUY",
//             date: "2023-10-02",
//         },
//         {
//             product: "CNC",
//             name: "ITC",
//             qty: 5,
//             price: 207.9,
//             type: "BUY",
//             date: "2023-10-03",
//         },
//     ];
//     ab har object jo ooper hai unko db mai insert krna hai
//      har object keliye model ka instance banayenge aur usko save() method se db mai insert krenge
//     tempOrders.forEach((item)=>{
//        let newOrder = new OrdersModel({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         price: item.price,
//         type: item.type,
//         date: item.date,

//        });
//           newOrder.save(); // save() method se db mai insert ho jaega, item by item
//     });
//     res.send("Done!");
// });

// // positions ka dummy data add kia
// app.get('/addPositions', async(req,res)=>{
//     let tempPositions = [
//         {
//             product: "CNC",
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1522.35,
//             price: 1550.0,
//             net: "+1.83%",
//             day: "+0.11%",
//             isLoss: false,
//         },
//         {
//             product: "CNC",
//             name: "INFY",
//             qty: 1,
//             avg: 1555.45,
//             price: 1600.0,
//             net: "+2.87%",
//             day: "-1.60%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "ITC",
//             qty: 5,
//             avg: 207.9,
//             price: 210.0,
//             net: "+1.01%",
//             day: "+0.80%",
//         },
//     ];
//   // ab har object jo ooper hai unko db mai insert krna hai
//     //har object keliye model ka instance banayenge aur usko save() method se db mai insert krenge
//     tempPositions.forEach((item)=>{
//        let newPosition = new PositionsModel({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss,

//        });
//           newPosition.save(); // save() method se db mai insert ho jaega, item by item
//     });
//     res.send("Done!");
//  });

app.get('/allHoldings', async(req,res)=>{ // yeh hai ek api endpoint
    //ab yha hume jo bhi data milta hai database se wo hume read krna hai 
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

//similarly hum holdings ki trah positions ke liye bhi krlenge
app.get('/allPositions', async(req,res)=>{// this is an api endpoint for positions
    //ab yha hume jo bhi data milta hai database se wo hume read krna hai 
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

// app.listen(PORT, ()=>{
//     console.log(`🚀 Server started on http://localhost:${PORT}`);
// });