//index.js
import express from "express";
import bodyParser from "body-parser";
import expressGraphQL from "express-graphql";
import cors from "cors";
import mongoose from "mongoose";
require("dotenv").config();

const app = express();
app.use(cors(), bodyParser.json());
app.use(
  "/graphql",
  expressGraphQL({
    schema: {},
    rootValue: {},
    graphiql: true
  })
);

function main() {
  const port = process.env.PORT || 5000;
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@klinkster-cwd1q.mongodb.net/test?retryWrites=true&w=majority`;
  // console.log(uri)
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      app.listen(port, () =>
        console.log(`Server is listening on port: ${port}`)
      );
    })
    .catch(err => {
      console.log("there is an error:", err);
    });
}
main();