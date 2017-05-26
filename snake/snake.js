function initSnake(){	
	var square = $(".square");
	var main = $("#main")
		var width = window.screen.availWidth
		var height = window.screen.availHeight
		
		cols = Math.floor(width/50)
		rows = Math.floor(height/50)


	var snake = [0,1,2,3,4,5,6,7]
	// 1 is right, -1 is left, 10 is down, and -10 is up
	var direction = 1
	var counter = 0

	// CLICK LISTENERS
	document.onkeydown = checkKey;

	function checkKey(e) {

	    e = e || window.event;

	    if (e.keyCode == '38') {
	        // up arrow
	        direction = -cols
	    }
	    else if (e.keyCode == '40') {
	        // down arrow
	        direction = cols
	    }
	    else if (e.keyCode == '37') {
	       // left arrow
	       direction = -1
	    }
	    else if (e.keyCode == '39') {
	       // right arrow
	       direction = 1
	    }

	}

	function init(){

		var square = $(".square");
		var widthPointer = 0
		var heightPointer = 0
		var counter = 0
		for (var i = 0; i < rows; i++) {
			for (var g = 0; g < cols; g++) {
				
				var node = document.createElement("div");               
				document.body.appendChild(node);  
				node.className += "square"
				var square = $(".square")
				square[counter].style.top = (i*50) + "px"
				square[counter].style.left = (g*50) + "px"
				counter++
			};
		};

		interval = window.setInterval(function(){
			updateList()
			renderSnake()
			counter ++
			
		},400)
		
	}

	init()

	



	var square = $(".square");

	function renderSnake(){
		// make squares invisible
		for (var i = 0; i < square.length; i++) {
			square[i].style.display = "none"
		};
		// make squares visible
		for (var i = 0; i < snake.length; i++) {
			
			square[snake[i]].style.display = "block"

		};
	}

	function updateList(){
		var current = snake[snake.length - 1]
		
		snake.push(current + direction)
		if(counter != 10){
			snake.shift();
			
		}else{
			counter = 0
		}
		
		
	}

	


}


function end(){
	clearInterval(interval)
	var square = $(".square");
	for (var i = 0; i < square.length; i++) {
		square[i].style.display = "none"
	};
}