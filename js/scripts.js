// Back End

function Pizza (size, numVeggies, numMeats, deliveryStatus){
  this.size = size;
  this.numVeggies = numVeggies;
  this.numMeats = numMeats;
  this.deliveryStatus = deliveryStatus;
}

Pizza.prototype.isValidSize = function(){
  if((typeof this.size === "string") && (this.size === "Large" || this.size === "Medium" || this.size === "Small")){
    return true;
  } else{
    return false;
  }
}

Pizza.prototype.isValidNumVeggies = function(){
  if((typeof this.numVeggies === "number") && (this.numVeggies >= 0) && (Math.trunc(this.numVeggies) === this.numVeggies)){
    return true;
  } else{
    console.log("invalid number of veggies");
    return false;
  }
}

Pizza.prototype.isValidNumMeats = function(){
  if((typeof this.numMeats === "number") && (this.numMeats >= 0) && (Math.trunc(this.numMeats) === this.numMeats)){
    return true;
  } else{
    console.log("invalid number of meats");
    return false;
  }
}

Pizza.prototype.reportOrder = function(){
  if(this.deliveryStatus === true){
    return this.size + " pizza with " + this.numVeggies + " vegetable topping(s) and " + this.numMeats + " meat topping(s) for delivery = $" + this.calculatePrice();
  } else{
    return (this.size + " pizza with " + this.numVeggies + " vegetable toppings and " + this.numMeats + " meat toppings for pickup = $" + this.calculatePrice());
  }
}

Pizza.prototype.calculatePrice = function (){
  var price = 0;
  // validate
  if(this.isValidSize() && this.isValidNumVeggies() && this.isValidNumMeats()){
    // Add size to price
    if(this.size === "Large"){
      price += 13;
    } else if (this.size === "Medium"){
      price += 11.50;
    } else {
      // console.log("a Small was ordered");
      price += 10;
    }
    // Add veggie toppings to price
    for (var i = 1; i <= this.numVeggies; i++){
      if(i === 1){
        price += 0.5;
      } else{
        // console.log(i + " topping being added to the price");
        price += 0.3;
      }
    }
    // Add meat toppings to price
    for (var i = 1; i <= this.numMeats; i++){
      if(i === 1){
        price += 1;
      } else{
        // console.log(i + " topping being added to the price");
        price += 0.9;
      }
    }
    if(this.deliveryStatus){
      var deliveryPrice = 10;
      price += deliveryPrice;
    }
    return price;
  } else{
    // alert("Please enter a valid pizza size, number of meat toppings, veggie toppings, and delivery status")
    // console.log("this should never happen");
  }
}

var testOrders = function(){
  var pizza1 = new Pizza("Large", 1, 1, false);
  console.log(pizza1.calculatePrice());
  var pizza1 = new Pizza("Large", 1, 1, true);
  console.log(pizza1.calculatePrice());
  var pizza1 = new Pizza("Large", 1, 2, false);
  console.log(pizza1.calculatePrice());
  var pizza1 = new Pizza("Small", 1, 1, false);
  console.log(pizza1.calculatePrice());
  var pizza1 = new Pizza("Medium", 2, 1, false);
  console.log(pizza1.calculatePrice());
  var pizza1 = new Pizza("Medium", 5, 1, false);
  console.log(pizza1.calculatePrice());
  var pizza1 = new Pizza("Medium", 20, 20, false);
  console.log(pizza1.calculatePrice());
  var pizza1 = new Pizza("Large", 100, 100, true);
  console.log(pizza1.calculatePrice());
  var pizza1 = new Pizza("Large", 1.5, 1, false); // should throw error
  console.log(pizza1.calculatePrice());
  var pizza1 = new Pizza("Large", 1, 1.5, false); // should throw error
  console.log(pizza1.calculatePrice());
  var pizza1 = new Pizza("Large", 1, 1.5, false); // should throw error
  console.log(pizza1.calculatePrice());
  var pizza1 = new Pizza("Any", 1, 1, false); // should throw error
  console.log(pizza1.calculatePrice());
  var pizza1 = new Pizza("Medium", 1, 1, false); // should throw error
  console.log(pizza1.calculatePrice());
  var pizza1 = new Pizza("medium", -1, 1, false); // should throw error
  console.log(pizza1.calculatePrice());
  var pizza1 = new Pizza("Medium", -1, 1, false); // should throw error
  console.log(pizza1.calculatePrice());
  var pizza1 = new Pizza("medium", 1, -3, false); // should throw error
  console.log(pizza1.calculatePrice());
  var pizza1 = new Pizza("Medium", 1, -3, false); // should throw error
  console.log(pizza1.calculatePrice());
}

// testOrders();

// Make deliveryPrice a function

// Front End
$(function(){
  var checkoutBag = [];
  $("#pizzaForm").submit(function(){
    event.preventDefault();
    var sizeInput = $("input:radio[name=size]:checked").val();
    // console.log(sizeInput);
    var veggieInputArray = []
    $("input:checkbox[name=veggie]:checked").each(function(){
      veggieInputArray.push($(this).val());
    })
    // console.log(veggieInputArray);
    var meatInputArray = [];
    $("input:checkbox[name=meat]:checked").each(function(){
      meatInputArray.push($(this).val());
    })
    // console.log(meatInputArray);
    var deliveryStatus = (($("input:radio[name=service]:checked").val()) === "true");
    console.log(deliveryStatus);
    var currentPizza = new Pizza (sizeInput, veggieInputArray.length, meatInputArray.length, deliveryStatus);
    console.log(currentPizza);
    // console.log(currentPizza.calculatePrice());
    console.log(currentPizza.reportOrder());
    checkoutBag.push(currentPizza);
    $("#pizzaForm").hide();
    $("#orderAgain").show();
    $("#results").show();
    $("#order-summary").empty();
    checkoutBag.forEach(function(pizza){
        $("#order-summary").append("<li class='pizza-item'>" + pizza.reportOrder()+ "</li>");
    });

  });
  $("#orderAgainBtn").click(function(){
    $("#pizzaForm").show();
    $("#orderAgain").hide();
    $("#results").hide();
  });
});
