function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").nodeValue;
    Can_ride = (Height<52) ? "You are too short" : "You are tall engough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
function vehicle(make, model, year, color){
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year= year;
    this.vehicle_color= color;
}
var Moise = new vehicle("Dodge","Viper", 2020, "red");
var Emily = new vehicle("Jeep", "Trail", 2020,"White");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = "Moise drives a "+ Moise.vehicle_color + "-colored" + Moise.vehicle_model + " manufactured in " + Moise.vehicle_year;
}