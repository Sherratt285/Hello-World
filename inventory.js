
//Name: InventoryExcersise
//Author: Sherratt Pemberton
//Date: 28/06/2017
//Brief description: Product class has id, price and quaantity. Inventory class keeps 
//track of various products and can sum up the value of the inventory

//Class name: Product
//inputs: id, price and quantity
//brief description: this class has a products id, price and quantity
function Product(id,price,quantity){
  this.id = id;
  this.price = price;
  this.quantity = quantity;
}

//Class name: Inventory
//inputs:
//brief description: the inventory can store various products. 
//it can also sum the total value of the inventory
function Inventory(){
  stock = [];  
  
  //function name: calculateValue
  //inputs:
  //output: totalInventoryValue
  //brief description: this function calcuulates the total value of the inventory
  this.calculateValue = function(){ 
      var inventoryValue = 0;
          //return (Product.price * Product.quantity);
          
          for (var i = 0; i < stock.length; i++){
              inventoryValue += ( stock[i].price * stock[i].quantity );
          }
          
          console.log( "The value of this inventory is $" + inventoryValue );
          return inventoryValue;
  }
  
  //function name: addStock
  //inputs: Product
  //brief description: this function adds a product to stock
  this.addStock = function(Product){
    stock.push(Product);
  }
  
  //function name: displayStock
  //inputs: 
  //brief description: this function displays the items in stock
  this.displayStock = function(){

    if (stock.length > 0){
      for (var i = 0; i < stock.length; i++){
      console.log( stock[i] ); 
      }
    } else { console.log("There are no items in the inventory"); 
      }
  }
  
}

hardware = new Inventory();
hardware.addStock( screwDriver = new Product( this.stock.length + 1, 5.00 ,10) );
hardware.addStock( hammer = new Product( this.stock.length + 1, 7.50, 8) );

hardware.displayStock();
hardware.calculateValue();