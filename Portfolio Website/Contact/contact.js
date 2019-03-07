var car = document.querySelector("#car");
var xposcar = 0;
var carInterval = setInterval(carWalk, 1000)


function carWalk() {
	if (xposcar >=-3040){
	walkRight();
} else {
	carReset();
}
}

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	Function reset not functioning because its not necessary.

	function carReset () {
	xposcar = -880;
	car.style.left = xposcar + "px";
	clearInterval(setInterval(carWalk, -10000))
}//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

setInterval(carWalk, 3);

function walkRight(){
	xposcar -= 10;
    car.style.left = xposcar + "px";
    /*loop: true;*/
};