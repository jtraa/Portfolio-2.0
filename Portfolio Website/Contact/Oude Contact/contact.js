var car = document.querySelector("#car");
var xposcar = 0;
var carInterval = setInterval(carWalk, 1000)


function carWalk() {
	if (xposcar >=-340){
	walkRight();
} else {
	carReset();
}
}

function carReset () {
	xposcar = 1468;
	car.style.left = xposcar + "px";
	clearInterval(setInterval(carWalk, 10000))
}

setInterval(carWalk, 3);

function walkRight(){
	xposcar += 8;
    car.style.left = xposcar + "px";
    /*loop: true;*/
};