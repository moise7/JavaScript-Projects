function full_Sentence(){
    var part_1 = "My name is ";
    var part_2 = " Moise";
    var part_3 = " Ngoumape";
    var part_4 = " from the central africa republic";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method(){
    var fruits = ["banana","orange", "Lemon", "apple","mango"];
    var citrus = fruits.slice(1,3);
    document.getElementById("Slice").innerHTML = citrus;
}


function string_Method(){
    var x =182 ;
    document.getElementById("Number_to_string").innerHTML = x.toString();
}
function precision_Method(){
    var x = 12456.3456767889686879756765;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}