const product = [{name: "phone", price: 500, category: "devices"}, {name: "tablet", price: 700, category: "devices"}, {name: "frige", price: 1000, category: "domestic"}];

function getData(name) {
    let product_chosen = product.find(item => item.name === name)
    console.log(product_chosen);
}

module.exports = {
    getData
};