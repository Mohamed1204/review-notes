
let routes = require('../src/api/routes') 
const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;



app.use(bodyParser.json());

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  return res
    .status(200)
    .send({
      message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1`
    });
});

try {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
} catch (error) {
  console.log(`Error occurred: ${error}`);
}
app.use("/api/v1", routes);
