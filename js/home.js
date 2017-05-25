var bars = $(".bar");
var begin = true
var introText = $('.introText')[0]
var laptop = $(".laptop")[0]
var laptopLarge = false
var overlays = $(".overlay");
var mainLaptop = "laptop"
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
		laptop.style.display = "block"
		$(".laptop2")[0].style.display = "block"
		$(".laptop3")[0].style.display = "block"
		laptopSize(80)
	}, 2000)
	setTimeout(function(){
		for(var i = 0; i < overlays.length; i++){
			overlays[i].style.display = "block"
		}
	}, 3500)

	$('body').css('background', '#8ed2e8');
	$('body').css('overflow', 'hidden')
	// make page only the size of the screen
	$('.extraHeight:first').removeClass('extraHeight')

}

// FUNCTION TO MAKE LAPTOP CHANGE SIZES (pass in same type of values as defined in css)
function laptopSize(width){
	// for some reason, the animation, won't work, without this line of code
	var windVw = ($(window).width())/100
	laptop.style.width = width + "vw"
	laptop.style.height = width/2 +"vw"
	laptop.style.left = "10vw"
	$(".laptop2")[0].style.left = "2vw"
	$(".laptop2")[0].style.width = "20vw"
	$(".laptop2")[0].style.height = "10vw"
	$(".laptop3")[0].style.right = "2vw"
	$(".laptop3")[0].style.width = "20vw"
	$(".laptop3")[0].style.height = "10vw"
	

};

// returns the numbers from argument
function numFromSize(size){
	var num = ""
	for(var i = 0; i < size.length;i++){
		// if a number
		if(isNaN(size[i])){
			var d = 1
		}else{
			num += size[i]
		}
	}
	return parseInt(num)
}

// adds hover listeners, for when you hover over small laptops
for(var i = 0; i < overlays.length; i++){
	overlays[i].addEventListener("mouseover", function(){
		laptop.classList.add('fast')
		laptop.style.height = "30vw"
		laptop.style.width = "60vw"
		laptop.style.left = "20vw"
		laptop.style.top = "20vh"
	})

	overlays[i].addEventListener('mouseout', function(){

		laptop.style.height = "40vw"
		laptop.style.width = "80vw"
		laptop.style.left = "10vw"
		laptop.style.top = "10vh"
		// laptop.classList.remove('fast')
	})
}
