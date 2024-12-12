const express = require("express");
const cors = require("cors")
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db")

module.exports = async (req, res) => {
  const app = express();
  await connectDB();

  app.use(cors());

  app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: false
  }));

  app(req, res);
};