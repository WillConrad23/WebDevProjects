var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var cost = document.getElementById('cost')
cost.textContent = '$' + total;