import SchemaUtil from "../utils/schema.util";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const ProductsSchema = new Schema({
  title: SchemaUtil.getPropDefination(String),
  link: SchemaUtil.getPropDefination(String),
  imageUrl: SchemaUtil.getPropDefination(String),
  Price: {
    original: SchemaUtil.getPropDefination(Number),
    final: SchemaUtil.getPropDefination(Number),
    discount: SchemaUtil.getPropDefination(Number)
  },
  expiryData: SchemaUtil.getPropDefination(Date,),
});


const Products = mongoose.model('Products', ProductsSchema);

export default Products;
