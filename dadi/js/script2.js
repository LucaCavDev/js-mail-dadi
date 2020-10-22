// numero casuale giocatore 1

var random_number1 = function(){
   return Math.floor(Math.random() * 6) + 1;
};
document.getElementById('button_text1').onclick = function () {
    document.getElementById("input_box1").innerHTML = random_number();
};

// numero casuale giocatore 2

var random_number2 = function(){
   return Math.floor(Math.random() * 6) + 1;
};
document.getElementById('button_text2').onclick = function () {
    document.getElementById("input_box2").innerHTML = random_number();
};
