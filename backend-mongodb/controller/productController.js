
const { deleteProduct,addProductDB,updateProduct,placeOrderDB } = require('../model/productModel');
const Products = require('../model/Product');


const addProduct=async(req, res) => {
    try{
          if (!req.file) {
            return res.status(400).json({message: 'Picture not attached'});
          }
          console.log("File received",req.file.filename);
          const picture = req.file.filename;
          const { name,price,quantity,description} = req.body;
          console.log("values of name, price,descrptin",name, price,quantity,description,picture);
          //const result = await addProductDB(name,price,quantity,description,imageName);
          const addproduct = new Products({
            name, price,quantity,description,picture
        })
        const savedproduct = await addproduct.save()
          res.status(200).json({message: 'Product Added Successfuly'});
        }
    catch (error)
      {
          console.log("error:",error);
          res.status(500).json({ message: 'Error adding product'});
      }
  }

const placeOrder=async(req,res)=>{
  try{
      const { name,phone,address,products} = req.body;
      console.log("values of name, price,descrptin",name,phone,address,products);
      for (const product of products) {
        const newQuantity=product.totalQuantity-product.orderedQuantity;
        console.log("new quantity=",newQuantity);
        const result = await placeOrderDB(product.id, newQuantity);
        console.log(result);  // Log the result of placeOrder
      }
        return res.status(200).json({message: 'Order successfully placed'});
    }
    catch(error)
    {
      console.log("place order error=",error);
      return res.status(500).json(error);
    } 
}

//Endpoint to Get Products List
const allProducts = async (req,res)=>{
  try{
      //console.log("from product list function")
      const list = await Products.find();
      if(list)
        {
          //console.log("list received",list);
          res.status(200).json(list);
        }
        else
        {
          res.status(404).json({message:"No product found"});
        }
    }
    catch (error)
    {
      res.status(500).json({ message: 'Error fetching products'});
    }
    }
    


module.exports = {addProduct,placeOrder,allProducts};