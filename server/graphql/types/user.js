export default `
 type User {
    id:String!
    name:String!
    email:String!
 }
 
 type Query{
    user(id:String!):User
    users: [User]
 }
 
 type Mutation{
    createUser(id:String!,name:String!,email:String!): User!
    updateUser(id:String,name:String,email:String):User!,
    deleteUser(id:String!,name:String,email:String):User!
 }
`
