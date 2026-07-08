require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./Routes/productRoutes");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{

    console.log("MongoDB Connected");

})
.catch(err=>{

    console.log(err);

});

app.use("/api/products",productRoutes);

app.listen(5000,()=>{

    console.log("Server Running On Port 5000");

});