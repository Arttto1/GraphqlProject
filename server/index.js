const express = require("express");
const colors = require("colors")
const cors = require("cors")
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db")
const port = process.env.PORT || 5000;

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