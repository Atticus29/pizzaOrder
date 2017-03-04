// Back End

// containsObject was stolen from the internet
function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }
  return false;
}

function Address(name, street, city, state, zip){
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

Address.prototype.reportAddress = function(){
  return (this.name + "<br>" + this.street + "<br>" + this.city + ", " + this.state + " " + this.zip);
}

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
  } else{    return false;
  }
}

Pizza.prototype.isValidNumMeats = function(){
  if((typeof this.numMeats === "number") && (this.numMeats >= 0) && (Math.trunc(this.numMeats) === this.numMeats)){
    return true;
  } else{
    return false;
  }
}

Pizza.prototype.reportOrderBasic = function(){
  return "1 " + this.size + " pizza";
}

Pizza.prototype.reportOrderVerbose = function(){
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
      price += 10;
    }
    // Add veggie toppings to price
    for (var i = 1; i <= this.numVeggies; i++){
      if(i === 1){
        price += 0.5;
      } else{
        price += 0.3;
      }
    }
    // Add meat toppings to price
    for (var i = 1; i <= this.numMeats; i++){
      if(i === 1){
        price += 1;
      } else{
        price += 0.9;
      }
    }
    if(this.deliveryStatus){
      var deliveryPrice = 10;
      price += deliveryPrice;
    }
    var rounded = (Math.round(price*100))/100;
    return (rounded.toFixed(2));
  } else{
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

testOrders();

// Make deliveryPrice a function

// Front End
$(function(){
  var checkoutBag = [];
  var replacementTracker = [];
  $("#pizzaForm").submit(function(){
    event.preventDefault();
    var sizeInput = $("input:radio[name=size]:checked").val();
    var veggieInputArray = []
    $("input:checkbox[name=veggie]:checked").each(function(){
      veggieInputArray.push($(this).val());
    })
    var meatInputArray = [];
    $("input:checkbox[name=meat]:checked").each(function(){
      meatInputArray.push($(this).val());
    })
    var deliveryStatus = (($("input:radio[name=service]:checked").val()) === "true");
    var currentPizza = new Pizza (sizeInput, veggieInputArray.length, meatInputArray.length, deliveryStatus);
    if(currentPizza.deliveryStatus){
      $("#addressBtn").show();
    }
    checkoutBag.push(currentPizza);
    $("#pizzaForm").hide();
    $("#orderAgain").show();
    $("#results").show();
    $("#order-summary").empty();
    $(".grand-toal").remove();
    checkoutBag.forEach(function(pizza){
      $("#order-summary").append("<li><span class='pizza-item'>" + pizza.reportOrderBasic()+ "</span></li>");
    });
  });

  $("#addressBtn").click(function(){
    $("#address-form").show();
    $("#results").hide();
  });

  $("#address-form").submit(function(){
    event.preventDefault();
    var nameInput = $("#usrName").val();
    var streetInput = $("#usrStreet").val();
    var cityInput = $("#usrCity").val();
    var stateInput = $("#usrState").val();
    var zipInput = $("#usrZip").val();
    currentAddress = new Address(nameInput, streetInput, cityInput, stateInput, zipInput)
    $("#address-form").hide();
    $("#addressBtn").remove();
    $("#orderAgain").show();
  });

  $("#orderAgainBtn").click(function(){
    event.preventDefault();
    $("#pizzaForm").show();
    $("#orderAgain").hide();
    $("#results").hide();
  });

  $("#checkout-btn").click(function(){
    event.preventDefault();
    $("#checkout-btn").hide();
    $("#backBtn").show();
    $("#pizzaForm").hide();
    $("#orderAgain").hide();
    $("#results").show();
    $("#order-summary").empty();
    checkoutBag.forEach(function(pizza){
      $("#order-summary").append("<li><span class='pizza-item'>" + pizza.reportOrderBasic()+ "</span></li>");
    });
    $("#order-summary").append("<hr>");
    var grandTotal = 0;
    checkoutBag.forEach(function(pizza){
      grandTotal += parseFloat(pizza.calculatePrice());
    })
    $(".grand-total").remove();
    $("#order-summary").after("<p class='grand-total'>Grand total is: $ " + grandTotal.toFixed(2) + ".</p>");
    $(".address-report").remove();
    $(".grand-total").after("<p class='address-report'>Order will be sent to:<br>" + currentAddress.reportAddress() + "</p>");
  });

  $("#backBtn").click(function(){
    event.preventDefault();
    $("#backBtn").hide();
    $("#orderAgain").show();
    $("#checkout-btn").show();
  });

  $("#order-summary").last().on("click", ".pizza-item", function(){
    event.preventDefault();    var checkoutBagIndexToGet = $(".pizza-item").index($(this));
    var replacement = checkoutBag[checkoutBagIndexToGet].reportOrderVerbose();
    if(!containsObject(replacement, replacementTracker)){
      $("#detailed-ordered-items").append("<li class='pizza-extended'>" + replacement + "</li>")
    }
    replacementTracker.push(replacement);
  });
});
