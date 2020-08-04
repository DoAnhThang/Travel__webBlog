// ------Element list images ------

//open the modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}
//close modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
//position current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
  }
 
var slideIndex = 1;
showSlides(slideIndex);

//next and prev
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// ------- button scroll top --------

//get the button
var mybutton = document.getElementById('btnTop');

//when scroll down 20px , show button
window.onscroll = function(){scrollFuntion()}

function scrollFuntion(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none";
    }
}

//when click the button, scroll to the top 
function topFunction(){
    document.documentElement.scrollTop = 0;
}