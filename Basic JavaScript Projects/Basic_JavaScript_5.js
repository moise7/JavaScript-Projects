document.write(typeof 5);
document.write(10==10);
document.write(3==10);
x=10;
y=10;
document.write(x===y);
x=82;
y="82";
document.write(x===y);

document.write(5>2 && 10>4)+"br";
document.write(5>10 && 10>4);
function not_Function() {
    document.getElementById("Not").innerHTML=!(20>10);
}