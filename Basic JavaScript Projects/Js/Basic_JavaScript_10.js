function call_Loop(){
    var Digit="";
    var x =2;
    while (x<12){
        Digit += "<br>"+x;
        x++;
    }
    document.getElementById("Loop").innerHTML=Digit;

}
var Instruments =["Guitar", "Drums", "Piano", 'Flute'];
var Content="";
var Y;
function for_Loop(){
    for(Y=0; Y<Instruments.length; Y++){
        Content += Instruments[Y] +"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}
function cat_pics(){
    var cat_picture =[];
    cat_picture[0]="Sleeping";
    cat_picture[1]="playing";
    cat_picture[2]= "eating";
    cat_picture[3]= "purring";
    document.getElementById("Cat").innerHTML="In this picture, the cat is "+ cat_picture[2]+ ".";
}
function constant_function(){
    const fast_car = {type: "car", brand:"Chrysler", color:"white"};
    fast_car.color = "red";
    fast_car.price = "$14000";
    document.getElementById("Constant").innerHTML= "The cost of the "+ fast_car.type+ " was "+fast_car.price;
}
var x =10;
x =7;
document.write(x);
var x = 85;
document.write(x);
{
    let x = 34;
    document.write("<br>"+x);
}
document.write("<br>"+x);
