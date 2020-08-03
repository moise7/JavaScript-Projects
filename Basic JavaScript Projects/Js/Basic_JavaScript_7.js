var x = 10;
function Add_number_1(){
   console.log(30+ X + "<br>");
    function Add_number_2(){
        console.log(X + 100);
    }
    Add_number_1();
    Add_number_2();
}
if (3<6){
    document.write("The left number is smaller than the number on the right")
}
function Time_Function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time<24 == Time>0){
        Reply = "It is morning time!";
    }
    else{
        Reply = "it is evening time!"
    }

    document.getElementById("Time_of_day").innerHTML=Reply;
    }
