let express = require("express");
let productRoute = express.Router();
let productDataModel =  require("../data-model/productDataModel");



productRoute.post("/api/save", (req,res)=>{
    let product = req.body;
    console.log(product);

    productDataModel.findOne({name:req.body.name}).then((existingProduct)=>{
        if(existingProduct) {
            console.log("already exists", existingProduct);
            res.send(existingProduct)
        } else { //product is not present go for product creation
    
            //use schema to create new product object
            let newProduct = new productDataModel(product)//req.body
            
            newProduct.save().then((newProduct)=>{//will get _id once document is created
                console.log("successful save ", newProduct);
                res.send(newProduct)
            }).catch((err1)=>{
                console.log("err save", err1);
                res.send("error while save")
            })
        }
    }).catch((err)=>{
        console.log("err while save ", err);
        res.send("Error while save - existing product")
    })
})


module.exports = productRoute;