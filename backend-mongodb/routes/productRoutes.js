const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const path = require('path');
const fs = require('fs');
const stripe = require('stripe')("sk_test_51PWzkbLbHlrNsGMN2TL8QIJsVKEuvHWuw72UmrasU6Ycq4tRwTLzE69dPYO6hE29uLe5xuTgmxvpWSQRmItNbnN4000gXgusKy");
const { deleteProduct,allProducts,updateProduct,updateProductWithoutPic } = require('../model/productModel');
const productRouter = express.Router();
var fetchuser = require('../middleware/fetchuser');
const productController=require('../controller/productController');

// Set up multer for file handling
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');                                  
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Product Route
productRouter.post('/placeorder',productController.placeOrder);
productRouter.post('/add-product',upload.single('file'),productController.addProduct);
productRouter.post('/update-product',upload.single('file'), productController.updateproduct)
productRouter.get('/products',productController.allProducts);
productRouter.post('/deleteProduct',productController.deleteProduct)
productRouter.post('/update-product-without-picture', upload.none(),productController.updateProductWithoutPic)


// Stripe Checkout Session
productRouter.post('/create-checkout-session',async (req,res)=>{
  const {products} = req.body;
  console.log("Stripe Products",products);
  const lineItems = products.map((product)=>({
    price_data:{
      currency:'usd',
      product_data:{
        name:product.name,
      },
      unit_amount:product.price,
    },
    quantity:product.totalQuantity
  }));
  console.log(lineItems);
  const session = await stripe.checkout.sessions.create({
    payment_method_types:['card'],
    line_items:lineItems,
    mode:'payment',
    success_url:'http://localhost:3000/success',
    cancel_url:'http://localhost:3000/cancel',
  })
  console.log("Server side stripe response",session);
  res.json({id:session.id});
})

module.exports = productRouter;