var slideIndex =1;
showSlides(slideIndex);
function plusSlides(n){
    showSlides(slideIndex += n);
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slide[slideIndex-1]. style.display ="block";
}

function countdown(){
    var seconds = document.getElementById("seconds").value;
    function tick(){
        seconds = seconds -1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
        if(seconds== -1){
            alert("Time's up!");
        }
    }
    tick();
}