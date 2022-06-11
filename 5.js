
function MakeZakaz() {
  console.log(1);
  var inner = document.querySelector('#inn');
var data = document.querySelector('#data');

var username = document.querySelector('#username').value;
var mail = document.querySelector('#mail').value;
var namem = document.querySelector('#namem').value;
var message = document.querySelector('#message').value;
data.innerHTML = "Уважаемый " + username +", ваш заказ зарегистрирован. Вскоре с Вами созвонится наш оператор для уточнения деталей. Спасибо за заказ!";

document.querySelector('#username').value = "";
document.querySelector('#mail').value= "";
document.querySelector('#namem').value= "";
document.querySelector('#message').value= "";
};
