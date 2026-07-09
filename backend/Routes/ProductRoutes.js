const express = require("express");

const router = express.Router();

const {
    addProduct,
    getProducts,
    getTrending,
    getProductById
} = require("../Controllers/productController");

router.post("/",addProduct);

router.get("/",getProducts);

router.get("/trending",getTrending);

router.get("/:productId", getProductById);

module.exports = router;