const products = require("../products.json");

const getProduct = (request, response) => {
    const prodName = products.find(products => 
    products.id === +request.params.id);
    if (prodName) {
        response.json(prodName);
    } else {
        response.status(500).json("Item not in list")
    }
}

module.exports = getProduct;