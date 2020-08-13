 
// get the button
 var mybutton = document.getElementById('up');

window.onscroll = function () {
	// body...
	scrollFunction();
}
function scrollFunction() {
	// body...
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
		mybutton.style.display = "block";
	}else{
		mybutton.style.display = "none";
	}
}

function topFunction() {
	// body...
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// hide nav bar on scroll

var prevScrollPos =  window.pageYOffset;
window.onscroll = function () {
	// body...
	var currenScollPos = window.pageYOffset;
	if (prevScrollPos > currenScollPos) {
		document.getElementById("navbar").style.top = "0";
	}else {
		document.getElementById("navbar").style.top = "-400px";
	}
	prevScrollPos = currenScollPos;

}