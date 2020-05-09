function getReceipt(){
    //This initializes our string so it can get passed from
    var text1 = "<h3>You Ordered:</h3>";
    var text2 = "<h3>You added a drink:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i=0; i<sizeArray.length; i++){
        if (sizeArray[i].checked){
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        
        }
    }
    if(selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    }else if (selectedSize === "Small Pizza"){
        sizeTotal = 8;
    }else if (selectedSize === "Medium Pizza"){
        sizeTotal = 10;
    }else if (selectedSize === "Large Pizza"){
        sizeTotal = 14;
    }else if (selectedSize === "Extra Large Pizza"){
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" =$"+sizeTotal+" .00");
    console.log("size text1:  "+text1);
    console.log("subtotal: $"+runningTotal+ ". 00");
    //these variables will passed on to each function
    getMeat(runningTotal,text1);
    getDrink(runningTotal,text1);
}
function getMeat(runningTotal,text1){
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for(var j = 0; j< meatArray.length; j++){
        if (meatArray[j].checked){
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: ("+meatArray[j].value+")");
            text1 = text1+meatArray[j].value+"<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if(meatCount>1){
        meatTotal = (meatCount -1);
    }else{
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    console.log("total selected meat items:"+meatCount);
    console.log(meatCount+"meat -1 free meat= "+"$"+meatTotal+".00");
    console.log("meat text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML= "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};
function getDrink(runningTotal,text2){
    var drinkTotal = 0;
    var selectedDrink = [];
    var drinkArray = document.getElementsByClassName("drinks");
    for(var l = 0; l< drinkArray.length; l++){
        if (drinkArray[l].checked){
            selectedDrink.push(drinkArray[l].value);
            console.log("selected drink item: ("+drinkArray[l].value+")");
            text2 = text2+drinkArray[l].value+"<br>";
        }
    }
    var drinkCount = selectedDrink.length;
    if(drinkCount>1){
        drinkTotal = (drinkCount -1);
    }else{
        drinkTotal = 0;
    }
    runningTotal = (runningTotal + drinkTotal);
    console.log("total selected drink items:"+drinkCount);
    console.log(drinkCount+"drink -1 free drink= "+"$"+drinkTotal+".00");
    console.log("drink text2: "+text2);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text2;
    document.getElementById("totalPrice").innerHTML= "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};