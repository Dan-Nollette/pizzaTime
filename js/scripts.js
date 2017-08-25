//Backend scripts (business logic)

function Pizza(size, toppings){
  this.toppings = toppings;
  this.size = size;
  this.sizeName;
  if (size === 0) {
    this.sizeName = "small"
  } else if (size === 1) {
    this.sizeName = "medium"
  } else {
    this.sizeName = "large"
  }
};

Pizza.prototype.priceCalculator = function(){
  var basePrice = 12.99 + (this.size * 3.5)
  var totalprice = basePrice + this.toppings.length *(2.50 + (this.size * .25));
  return totalprice.toFixed(2);
}

function getPriceOutput(size, toppings){
  currentPie = new Pizza(size, toppings);
  var toppingsString;
  if (currentPie.toppings.length === 0){
    toppingsString = "no toppings";
  } else {
    toppingsString = currentPie.toppings.reduce(function(total, topping, index){
      if (index === currentPie.toppings.length -1) {
        return total + ", and " + topping
      } else {
        return total + ", " + topping
      }
    });
  }
  return "Your " + currentPie.sizeName + " pizza with " + toppingsString + " will cost $" + currentPie.priceCalculator();
}
//frontend scripts (user interface logic)
$(document).ready(function(){
  $("#submitButton").click(function(event){
      event.preventDefault();
      var size = $("#sizes").val();
      var toppings = [];
      toppings = $(".pieOptions input:checkbox:checked").map(function(){
        return $(this).val();
      }).get();
      $("#output").show();
      $("#output").text(getPriceOutput(size, toppings));
  });
});
