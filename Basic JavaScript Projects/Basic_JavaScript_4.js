function my_Dictionary(){
    var Animal ={
        Species: "Dog",
        Color: "White",
        Breed: "Labrador",
        Age: 1,
        Sound:"Bark"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}