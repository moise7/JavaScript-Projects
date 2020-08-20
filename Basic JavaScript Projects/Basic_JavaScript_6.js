function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").Value;
    Can_ride = (Height<52) ? "You are too short" : "You are tall engough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
function Vehicle(make, model, year, color){
        this.Vehicle_make = make;
        this.Vehicle_model = model;
        this.Vehicle_year= year;
        this.Vehicle_color= color;
    }
    var Moise = new Vehicle("Dodge","Viper", 2020, "Red");
    var Emily = new Vehicle("Jeep", "Trail", 2020,"White");
function myFunction(){
       document.getElementById("Keywords_and_Constructors").innerHTML = "Moise drives a "+ Moise.vehicle_color + "-colored" + Moise.vehicle_model + " manufactured in " + Moise.vehicle_year;
    funtion Nested_Function(){
        var Starting_point = 8;
        return Starting_point;
    }
    }
