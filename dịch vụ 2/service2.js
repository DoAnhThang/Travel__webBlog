// //Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
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