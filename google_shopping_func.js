//load products.json
var data = require("./products.json")

//define getItemsCount function
//accepts full item data
//returns the length of the items array
var getItemsCount = function(itemData){
    return itemData.items.length;
}

//console.log('Item Count: ' + getItemsCount(data));


var getItems = function(itemData){
    return itemData["items"];
}
//console.log(getItems(data));

var getItemsByBrand = function(array, brand){
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].product.brand === brand) {
            newArray.push(array[i].product.title);
        }
    }
    return newArray
}
//console.log(getItemsByBrand(data["items"], "Canon"));

var getItemsByAuthor = function(array, author){
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].product.author.name === author) {
            newArray.push(array[i].product.title);
        }
    }

    return newArray
}
//console.log(getItemsByAuthor(data["items"], "eBayitemD"))

var getAvailableProducts = function(array){
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        if (array[i].product.inventories[0].availability === "inStock") {
            newArray.push(array[i].product.title)
        }
    }
    return newArray
}
//console.log(getAvailableProducts(data["items"]))



// 5.) Use your functions

// Use the functions you created in 1 - 5 to print find the following lists of items.

// All items made by Nikon with the author eBay.
console.log(getItemsByBrand(data["items"], "Nikon")) && getItemsByAuthor(data["items"], "eBay");
// All items made by Sony.
console.log(getItemsByBrand(data["items"], "Sony"))
// All items made by Sony that are available.
console.log(getItemsByBrand(data["items"], "Nikon") && getAvailableProducts(data["items"]))
// BONUS: Create another search function and/or think of other interesting ways to combine the functions to preform useful searches.
