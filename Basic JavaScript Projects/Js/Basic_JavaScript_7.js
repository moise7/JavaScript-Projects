var x = 10;
function Add_number(){
    console.log(30+x + "<br>")
}
function Time_function(){
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
