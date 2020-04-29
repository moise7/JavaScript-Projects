function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time<12 == Time>0){
        Reply = "It is morning time!";
    }
    else{
        Reply = "it is evening time!"
    }
    function Time_function(){
        console.log("Time");
    document.getElementById("Time_of_day").innerHTML=Reply;
    }
}