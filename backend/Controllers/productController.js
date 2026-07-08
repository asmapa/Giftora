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

module.exports = {
    addProduct,
    getProducts,
    getTrending
};