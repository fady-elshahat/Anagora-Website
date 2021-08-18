
// Scroll Navbar Function
window.addEventListener("scroll", () => {
     const nav = document.querySelector(".navbar");
     const logo = document.getElementById("logo");
     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          nav.classList.add('header_change');
          logo.src = "imges/logo-red.png";
          nav.style.padding = "10px 60px"
     }
     else {
          nav.classList.remove('header_change');
          logo.src = "imges/logo-white.png";
          nav.style.padding = "18px 60px"
     }
});

// Toggel Navbar 
$('.navbar-nav>li>a').on('click', function(){
     $('.navbar-collapse').collapse('hide');
});



$(document).ready(function(){
     $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
     loop:true,
     margin: 5,
     responsiveClass:true,
     responsive:{
          0:{
               items:1,
               nav:true
          },
          600:{
               items:3,
               nav:false
          },
          1000:{
               items:5,
               nav:true,
               loop:false
          }
     }
})