
var x = document.getElementById("morecert1");
var btnviewone = document.getElementById("btnviewone");
x.style.display = "none";
function MoreCert1() {
	// body...
	   
  if (x.style.display === "none") {
    x.style.display = "flex";
    btnviewone.innerHTML = "Hide Certificate";
  } else {
    x.style.display = "none";
    btnviewone.innerHTML = "See more certificates ...";
  }
} 