function Pizza(size, toppings){
  this.toppings = toppings;
  this.size = size;
  this.sizeName;
  if (size === 1) {
    this.sizeName = "small"
  } else if (size === 2) {
    this.sizeName = "medium"
  } else {
    this.sizeName = "large"
  }
};

Pizza.prototype.priceCalculator = function(){
  var basePrice = 9.49 + (this.size * 3.5)
  return basePrice + this.toppings.length *(2.25 + (this.size * .25));
}

function getPriceOutput(size, toppings){
  currentPie = new Pizza(size, toppings);
  console.log(currentPie.toppings);
  newArray = [];
  console.log(typeof newArray);
  newArray = currentPie.toppings;
  console.log(typeof newArray);
  var toppingsString = newArray.reduce(function(total, topping, index){
    if (index === currentPie.toppings.length -1) {
      return total + ", and " + topping
    } else {
      return total + ", " + topping
    }
  });
  return "Your " + currentPie.sizeName + " pizza with " + toppingsString + " will cost $" + currentPie.priceCalculator() + " ."
}

$(document).ready(function(){
  $("#submitButton").click(function(event){
      event.preventDefault();
      var size = $("#sizes").val();
      var toppings = [];
      toppings = $(".pieOptions input:checkbox:checked").map(function(){
        return $(this).val();
      }).get();
      $("#output").text(getPriceOutput(size, toppings));

  });
});
