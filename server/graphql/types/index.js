import {mergeTypes} from "merge-graphql-schemas";
import User         from "./user";
import Product         from "./product";

const typeDefs = [User];

export default mergeTypes(typeDefs, {all: true});
