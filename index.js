/**   Downloaded NPM   **/
const express = require("express");
const cors = require("cors");
//504
//455
/**   Variables   **/
const app = express();
app.use(cors());

/**   Local NPM   **/
require("./src/database/mongoose");
const accountRouter = require("./src/routers/account");
const productRouter = require("./src/routers/product");

/**   express uses   **/
app.use(express.json());
app.use(accountRouter);
app.use(productRouter);

/**   express functions   **/
app.listen(5000, () => {
  console.log("Server up on 5000");
});
