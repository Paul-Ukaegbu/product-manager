const Product = require("../models/models.product")

module.exports.createProduct = (req,res) => {
    const{title, price, description} = req.body
    Product.create({
        title,
        price,
        description
    })
    .then(product => res.json(product))
    .catch(err => res.json(err)) 
}


module.exports.displayProducts =(req,res) => {
    Product.find({})
    .then(products => res.json(products))
    .catch(err => res.json(err))     
}

module.exports.getOneProduct = (req, res) => {
    Product.findById({_id:req.params.id})
    .then(oneProduct => res.json(oneProduct))
    .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate({_id:req.params.id}, req.body,{new:true, runValidators:true})
    .then(updateProduct => res.json(updateProduct))
    .catch(err => res.json(err))    
}

module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete({_id:req.params.id})
    .then(deleteProduct => res.json(deleteProduct))
    .catch(err => res.json(err)) 
}