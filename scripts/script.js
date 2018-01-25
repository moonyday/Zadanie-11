(function($){
	$(document).ready(function(){

//all & reccomend
$(".all").on("click", function(){
	$(".slider").fadeIn(1000);
	$(".secondslider").hide();
})
$(".recommended").on("click", function(){
	$(".pagination").css("visibility", "visible");
	$(".slider").hide();
	$(".secondslider").fadeIn(1000);
})

//sub menu
$("#lastli").on("click", function(){
	$(".sub-menu").fadeIn(1000);
});
$(".sub-menu").on("mouseleave", function(){
	$(".sub-menu").fadeOut(1000);
})

//thank-you message 
$(".input_wrapper").on("submit", function(event){
	event.preventDefault();
	$(".input_wrapper").hide();
	$(".success").fadeIn(1000);
	$("success").css("display", "inline-block");
})

//hamburger (mobile-size)
$(".hamburger").on("click", function(){
	$("nav").slideToggle();
})
$(window).resize(function(){
	if ($(window).width() > 980) {
		$("nav").css("display", "inline-block")
	} else {
		$("nav").css("display", "none")
	}
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

