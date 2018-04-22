(function($){
	$(document).ready(function(){

//all & reccomend
$(".all").on("click", function(){
	$(".slider").fadeIn(1000);
	$(".secondslider").hide();
})
$(".recommended").on("click", function(){
	$(".slider").hide();
	$(".secondslider").fadeIn(1000);
})

//sub menu
$("#lastli").on("click", function(){
	$("body").toggleClass("sub-menu-open");
});


//thank-you message 
$(".input_wrapper").on("submit", function(event){
	event.preventDefault();
	$(".input_wrapper").hide();
	$(".success").fadeIn(1000);
	$("success").css("display", "inline-block");
})

//hamburger (mobile-size)
$(".hamburger").on("click", function(){
	$("body").toggleClass("mobile-nav-open");
});


//drag-and-drop element
$(".draggable").draggable({
	cursor: "crosshair"
});

//accordion
$(".details").click(function(){
	$(this).next().slideToggle();
	$(".newdiv").not($(this).next()).slideUp();
});


})
})(jQuery);

window.onscroll = function() {myFunction()};
  var header = document.getElementById("header");
  var bg = header.offsetTop;

  function myFunction(){
    if (window.pageYOffset > bg) {
      header.classList.add("bg-change");
    } else {
      header.classList.remove("bg-change");
    }
  };
