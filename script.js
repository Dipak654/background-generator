var css= document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2= document.querySelector(".color2")
var color3= document.querySelector(".color3")
var color4= document.querySelector(".color4")

var body= document.getElementById("gradient")
 

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + 
       ", "
       + color2.value + ", "
       + color3.value + ", "
       + color4.value 
       + ")"

    css.textContent = body.style.background 
}
color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)
color3.addEventListener("input", setGradient)
color4.addEventListener("input", setGradient)

function isUserValid(bool) {
    return bool
}

var ans = isUserValid(false) ? "You may access!" : "access denied!"
alert(ans)

function moveCommand(direction) {
	var a
	switch (direction) {
		case "forward":
		    a = "you encounter a monster"
		    break
		case "back":
		    a="you arrived at home"
		    break
		case "right":
		    a="you found a river"
		    break
		case "left":
		    a ="you are into a troll"
		    break
		default:
		    a = "please enter valid direction"
	}
	return a
}


const obj = {
	player : "bobby"
	experience: 2
	level: "Intermidiate"
}

let a= 25

function q1() {

	alert(a)
}

const name="Dipak"

const obj1 = {
	name = name,
	age = 23

}