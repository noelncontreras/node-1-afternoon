const express = require("express");
const app = express();
const getProducts = require("./getProducts");
const getProduct = require("./getProduct");
const port = 5678;

//app.get is the ENDPOINT or METHOD
//("/api/products") is the PATH
//(request, response) => {
//     response.status(200).send(products);
// } is the HANDLER --> I moved it to the getProducts.js file to de-clutter
app.get("/api/products", getProducts);

app.get("/api/product/:id", getProduct);

//the console.log below is to check if server is still functioning correctly
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

