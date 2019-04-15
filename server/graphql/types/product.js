export default `
  type Product{
    _id:ID!
    title:String,
    description:String,
    price:Price
    expiryData:Date
  }
  type Price{
    originalPrice:Int,
    finalPrice:Int,
    discount:Int
  }
  
  type Query{
  
    product(id:ID!):Product
    products:[Product]
  }
  
  type Mutation{
    addProduct(product:createProductInput):Product
  }
  
  input createProductInput{
     title:String,
     description:String,
     expiryData:Date,
     price: Price
  }
`
