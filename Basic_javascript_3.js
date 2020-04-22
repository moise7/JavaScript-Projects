function addition_Function (){
    var addition = 4+4;
    document.getElementById("Math").innerHTML = "4+4 = "+ addition; 
}
function multiplication_Function (){
    var multiplication = 4*8;
    document.getElementById("Math").innerHTML = "4*8 ="+ multiplication;
}
function substraction_Function (){
    var substraction = 545-67;
    document.getElementById("Math").innerHTML = "545-67 = "+ substraction; 
}
function division_Function(){
    var division = 45/5;
    document.getElementById("Math").innerHTML = "45/5 ="+division;
}
function modulus_operation(){
    var modulus = 23%5;
    document.getElementById("Math").innerHTML = "23%5 =" + modulus;
}
var x= 5;
x++;
document.write(x);
var y= 10;
y--;
document.write(y);
window.alert(Math.random()*100);