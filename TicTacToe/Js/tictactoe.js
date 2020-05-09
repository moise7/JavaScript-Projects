window.onload = function() {watch()};
function watch (){
    var btn = document.getElementById('btnStop');
    btnDisabled(btn);
}
//this funtion will roll for random number twice, one for each player and determine which player won the roll.
function rollForTurn(){
    var xArray = [];
    var ranNum = '';
    var maximum = 1;
    var first = "";
    var txt1 = "";
    for (var i = 0; i<2; i++){
        ranNum = Math.floor(Math.randomw()*(maximum - minimum)+minimum);
        xArray.push(ranNum);
    }
    diceRoll();
    for(i=O; i<2; i++){
        var result = i+1;
        var pOne = xArray[O];
        var pTwo = xArray[i];
        if (pOne == pTwo){
            pOne = 1;
            pTwo = 2;
        }
        txt1 = "Player 1 rolled ["+pOne+"]<br>";
        writeMsg(txt1);
        txt1 = txt1 + "Player 2 rolled ["+pTwo+"]<br>";
        setTimeout(function()(writeMsg(txt1);),1000);
    }
}