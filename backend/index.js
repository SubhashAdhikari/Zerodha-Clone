const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { HoldingsSchema } = require("./holdingSchema");

const app = express();
const PORT = 3002;

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/zerodha");

const Holding = mongoose.model("Holding", HoldingsSchema);

// 🟢 UNCOMMENTED: Add sample holdings data
app.get("/addHoldings", async (req, res) => {
  await Holding.insertMany([
    {
      name: "RELIANCE",
      qty: 1,
      avg: 2725.0,
      price: 2732.45,
      net: "+7.45",
      day: "0.27%",
    },
    {
      name: "TCS",
      qty: 2,
      avg: 3420.0,
      price: 3435.55,
      net: "+15.55",
      day: "0.45%",
    },
    {
      name: "INFY",
      qty: 4,
      avg: 1450.0,
      price: 1463.25,
      net: "+13.25",
      day: "0.91%",
    },
    {
      name: "ITC",
      qty: 5,
      avg: 450.0,
      price: 452.75,
      net: "+2.75",
      day: "0.61%",
    },
    {
      name: "WIPRO",
      qty: 3,
      avg: 395.0,
      price: 398.4,
      net: "+3.4",
      day: "0.86%",
    },
    {
      name: "SBIN",
      qty: 10,
      avg: 560.0,
      price: 562.65,
      net: "+2.65",
      day: "0.47%",
    },
    {
      name: "HDFCBANK",
      qty: 1,
      avg: 1560.0,
      price: 1572.1,
      net: "+12.1",
      day: "0.78%",
    },
    {
      name: "AXISBANK",
      qty: 3,
      avg: 900.0,
      price: 905.3,
      net: "+5.3",
      day: "0.59%",
    },
    {
      name: "ICICIBANK",
      qty: 6,
      avg: 950.0,
      price: 952.8,
      net: "+2.8",
      day: "0.29%",
    },
    {
      name: "BHARTIARTL",
      qty: 2,
      avg: 820.0,
      price: 823.6,
      net: "+3.6",
      day: "0.44%",
    },
    {
      name: "ADANIENT",
      qty: 1,
      avg: 2200.0,
      price: 2212.45,
      net: "+12.45",
      day: "0.57%",
    },
    {
      name: "MARUTI",
      qty: 1,
      avg: 8800.0,
      price: 8815.25,
      net: "+15.25",
      day: "0.17%",
    },
    {
      name: "TITAN",
      qty: 1,
      avg: 2700.0,
      price: 2711.0,
      net: "+11.0",
      day: "0.41%",
    },
  ]);
  res.send("Done!");
});

// 🔁 This route fetches all holdings
app.get("/allHoldings", async (req, res) => {
  const data = await Holding.find();
  res.json(data);
});

app.listen(PORT, () => {
  console.log("Server started");
});
