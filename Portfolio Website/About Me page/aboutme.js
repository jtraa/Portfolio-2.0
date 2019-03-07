var car = document.getElementById("car");
var xposcar = 0;
var carInterval = setInterval(carWalk, 4000);


function carWalk() {
	if (xposcar >=-750){
	walkRight();
} else {
	carReset();
}
}

function carReset () {
	xposcar = 1468;
	car.style.left = xposcar + "px";
	clearInterval(setInterval(carWalk, 1000))
}

setInterval(carWalk, 3);

function walkRight(){
	xposcar += 25;
    car.style.left = xposcar + "px";
    loop: true;
};