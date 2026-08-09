const express = require("express");

const router = express.Router();

const {
    addProduct,
    getProducts,
    getTrending,
    getProductById,
    updateProduct,
    deleteProduct
} = require("../Controllers/productController");

router.post("/",addProduct);

router.get("/",getProducts);

router.get("/trending",getTrending);

router.get("/:productId", getProductById);

// Update product
router.put('/:productId', updateProduct);

// Delete product
router.delete('/:productId', deleteProduct);

module.exports = router;