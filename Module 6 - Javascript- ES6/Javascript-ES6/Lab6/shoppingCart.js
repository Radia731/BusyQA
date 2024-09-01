let shoppingCart = {
items: [],
addItem: function (item) {
 this.items.push(item)    
}
};
//defining the Items 
function Item(name, price){
    this.name = name;
    this.price = price;
};
 // adding items
let item1 = new Item('Butter', 20);
let item2 = new Item('Coke', 30);
let item3 = new Item('Milk', 40);

shoppingCart.addItem(item1);
shoppingCart.addItem(item2);
shoppingCart.addItem(item3);

//removing items
shoppingCart.removeItem = function(index){
    this.items.splice(index, 1);
};
//calculating the total price of the items

shoppingCart.calculateTotal = function(){
    let total = 0;
    for(let i = 0; i < this.items.length; i++){
        total += this.items[i].price
    }
    return total;
};

//adding discount with error message for invalid code

shoppingCart.applyDiscountCode = function(code){
    if (code !== 'SAVE10' && code !== 'SAVE20') {
        return "INVALID CODE";
    }
    switch(code) {
        case 'SAVE10':
            return this.calculateTotal() * 0.9;
        case 'SAVE20':
            return this.calculateTotal() * 0.8;
        default:
            return this.calculateTotal();
    }
},
// get current cart items 

shoppingCart.getCurrentItems = function() {
    return this.items.map(item => item.name);
};

console.log(shoppingCart.getCurrentItems());
shoppingCart.removeItem(0);
console.log(shoppingCart.getCurrentItems());
console.log(shoppingCart.calculateTotal());
console.log(shoppingCart.applyDiscountCode('SAVE10'));
console.log(shoppingCart.applyDiscountCode('SAVE30'));