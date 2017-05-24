var bars = $(".bar");
var begin = true
var introText = $('.introText')[0]

// MAKE SURE PAGE STARTS AT TOP WHEN RELOADED
$(window).on('beforeunload', function() {
   $(window).scrollTop(0);
});

// WHEN THE PAGE IS LOADED
$(document).ready(function(){
	// MAKE TEXT BIG
	$(".introText")[0].style.fontSize = "7.5em"
	$(".introText:first").addClass('introTextTrans')
	// MAKE HAMBURGER APPEAR
	for(var i = 0; i < bars.length; i++){
		bars[i].style.background = "#3e3e3e"
	}
	$(".scrollArrow")[0].style.color = "lightgrey"
})

// WHEN YOU SCROLL
$(document).scroll(function(){
	// IF YOU WERE AT THE BEGINNING OF THE PAGE
	if (begin){
		begin = false
		flyOff()
	}
	
})

// FUNCTION TO TRANSITION FROM LANDING PAGE TO NEXT
function flyOff(){
	introText.style.letterSpacing = "200px"
	introText.style.width = "400vw"
	introText.style.marginLeft = "100vw"
	setTimeout(function(){
		$(".scrollArrow")[0].style.display = "none"	
		$('.intro')[0].style.display = "none"
	}, 2000)
	$('body').css('background', 'white');

	
		
	
}