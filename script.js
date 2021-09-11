AOS.init();

$(window).on("load", function () {
  $("#loader").fadeOut(1500);
});


$(document).ready(function () {
  $("#bars").click(function () {
    $(".nav-sec").slideToggle("slow");
  });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    
    document.querySelector(".navigation").style.backgroundColor = "white";
  } else {
    document.querySelector(".navigation").style.backgroundColor = "transparent";
  }
}












  

