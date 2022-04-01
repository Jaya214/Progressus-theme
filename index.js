const navbarToggler = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector("#navbarNav");

var count=false;
navbarToggler.addEventListener("click", function(){
    if(!count){

        navbarNav.classList.add("hide");

        count=true;

    }
    else{
        navbarNav.classList.remove("hide");
        count=false;
    }
});