	
	var numberOfSqaures=6

	var sqaures=document.querySelectorAll(".sqaures")
	var colorDisplay=document.getElementById("colorDisplay")
	var colors=getRandomColors(numberOfSqaures)	
	var pickedColor=pickColor() //by asisgning it to varible were making sure it  only change with refresh//
	var massageDisplay=document.getElementById("massageDisplay")
	var resetBtn=document.getElementById("resteButton")
colorDisplay.textContent=pickedColor
var easyMode=document.getElementById("easyButton")
var hardMode=document.getElementById("hardButton")
var counter=document.getElementById("lifecounter")
var countLives =3
var currentLives=countLives
//get the sqaures to be at random colors ://
counter.textContent=countLives

function myFunction() {

	var hints=document.getElementById("hints")
  if (hints.style.display === "none") {
    hints.style.display = "block";
  } else {
    hints.style.display = "none";
  }
}

hardMode.addEventListener("click",function(){
	numberOfSqaures=6
	countLives=3
	counter.textContent=countLives
	hardMode.classList.add("selected")
	easyMode.classList.remove("selected")
	colorDisplay.textContent=pickedColor
	resetBtn.textContent="New Colors?"
	
	colors=getRandomColors(numberOfSqaures)
	pickedColor=pickColor()
	for (var i=0;i<sqaures.length;i++) {
		sqaures[i].style.backgroundColor=colors[i]
		sqaures[i].style.display="block"

	}
})

easyMode.addEventListener("click",function(){

	
	reset();
	numberOfSqaures=3
	countLives=100
	counter.textContent=countLives
	hardMode.classList.remove("selected")
	easyMode.classList.add("selected")
	colorDisplay.textContent=pickedColor
	resetBtn.textContent="New Colors?"

	colors=getRandomColors(numberOfSqaures)	
	pickedColor=pickColor()
	for (var i=0;i<sqaures.length;i++) {

		if(colors[i]) {
			sqaures[i].style.backgroundColor=colors[i]

		}
		else {
		sqaures[i].style.display="none"
		}

		
	}


})

resetBtn.addEventListener("click",function(){

	reset();
	if (numSquares=3) {
		
		colors=getRandomColors(numberOfSqaures)
		pickedColor=pickColor()
		colorDisplay.textContent=pickedColor
		for (var i=0;i<sqaures.length;i++) {
		
			sqaures[i].style.backgroundColor=colors[i]
		
				
		}
	}
	



	if (countLives===100){
		counter.textContent=countLives

		

	if (countLives===0) {

		reset();
		for (var i=0;i<sqaures.length;i++) {
		
			counter.textContent=countLives
			sqaures[i].style.display="block"
			sqaures[i].style.backgroundColor=colors[i]
		}
	
	}



}



	resetBtn.textContent="New Colors"
	massageDisplay.textContent=""
	
})


for (var i=0;i<sqaures.length;i++) {

	sqaures[i].style.backgroundColor=colors[i]

	sqaures[i].addEventListener("click",function(){
		var clickedColor=	sqaures[i]=this.style.backgroundColor

			if(clickedColor===pickedColor)
			 {
				resetBtn.textContent="Play again?"
				 massageDisplay.textContent="Correct"
					changeColor(clickedColor)
			}
				else {
					// sadface.style.display="block"
					this.style.backgroundColor="rgb(54, 53, 53)"
					massageDisplay.textContent="Try again"
					countLives=countLives-1
					counter.textContent=countLives
					if (countLives===0) {
						massageDisplay.textContent="Lost"
						resetBtn.textContent="Play again?"
						for (var i=0;i<sqaures.length;i++) {

						
							 
							sqaures[i].style.display="none"
							
					
							
						}

					
	
					}
				}
	})
}





	//	(34,139,34)//
	//function that get radonm color//

	function randomColor() {
				var r=Math.floor(Math.random() *256 )
				var g=Math.floor(Math.random() *256)
				var b=Math.floor(Math.random() *256)

				return "rgb("+r+", "+g+", "+b+")"
	}


//function that push the rnadom colors to the aray//

function getRandomColors(num){

	var arr=[]

	for (var i=0;i<num;i++) {
		arr.push(randomColor())
	}

	return arr
}

//picking a random color from that arry//

function pickColor() {

	var random=	Math.floor(Math.random() *numberOfSqaures)
	return colors[random]
}

// we need a function that change all the waures to be the same coolor if we win//


function changeColor(color) {

	for (var i=0;i<sqaures.length;i++) {

		sqaures[i].style.backgroundColor=color
	}

}

// function reset//

function reset() {

	//number of sqaures wil change adaptly to the current one (easy or hard)

	colors=getRandomColors(numberOfSqaures)

	//will make all sqaures new color//
	for (var i=0;i<sqaures.length;i++) {
		sqaures[i].style.display="block"
		sqaures[i].style.backgroundColor=colors[i]
	}

		//get new picked color//

		pickedColor=pickColor()
}


