const products = require("../products.json");


//everything after the "=" sign came from the HANDLER of the first ENDPOINT
//I saved the HANDLER to a variable to use in the ENDPOINT in index.js file

const getProducts = (request, response) => {
    if(request.query.price) {
        const filteredPrice = products.filter(product => 
        product.price >= +request.query.price);
        response.json(filteredPrice);
    } else {
        response.json(products);
    }
}

module.exports = getProducts;