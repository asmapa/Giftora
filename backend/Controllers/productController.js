const Product = require("../Models/product")

const addProduct = async(req,res)=>{
    try{
        const product = new Product(req.body)
        await product.save();

        res.status(201).json({
            message:"Product Added Successfully",
            product
        });
    } catch(err){

        res.status(500).json({
            message:err.message
        });

    }
};

const getProducts = async(req,res)=>{
    try{
        const product = await Product.find()
        res.json(product)
    }catch(err){

        res.status(500).json({
            message:err.message
        });
    }
};

const getTrending = async(req,res)=>{
    try{
        const product = await Product.find({
            trending:true
        });
        res.status(200).json(product);
    }catch (err) {

        res.status(500).json({
            message: err.message
        });
    }
};

const getProductById = async (req, res) => {

    try {

        const product = await Product.findOne({
            productId: req.params.productId
        });

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json(product);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};


const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { productId: req.params.productId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({
      productId: req.params.productId
    });

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({
      message: 'Product deleted successfully'
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
    addProduct,
    getProducts,
    getTrending,
    getProductById,
    updateProduct,
    deleteProduct
};