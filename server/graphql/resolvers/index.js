import {mergeResolvers} from "merge-graphql-schemas";
import User         from "./user";
// import Product         from "./product";

const resolvers = [User];

export default mergeResolvers(resolvers);
