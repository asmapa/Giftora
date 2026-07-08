const express = require("express");

const router = express.Router();

const {
    addProduct,
    getProducts,
    getTrending
} = require("../Controllers/productController");

router.post("/",addProduct);

router.get("/",getProducts);

router.get("/trending",getTrending);

module.exports = router;