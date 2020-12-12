
var mybutton = document.getElementById("up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  scrollToTop();
}
 const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 30);
  }
};

// hid nav bar

			var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-400px";
  }
  prevScrollpos = currentScrollPos;
}

// add action to menu icon

let btnmenushow = document.querySelector('.btnmenu');
btnmenushow.addEventListener( 'click', () =>{
  let checkmenucode = localStorage.getItem('showmenu');
  checkmenucode = parseInt(checkmenucode);
 if(checkmenucode == 1){
  document.querySelector('.submenu-menu').style.opacity = "0";
  localStorage.setItem('showmenu', 0);
}else if(checkmenucode == 0){
   document.querySelector('.submenu-menu').style.opacity = "1";
   localStorage.setItem('showmenu', 1);
}else{
  localStorage.setItem('showmenu', 1);
  document.querySelector('.submenu-menu').style.opacity = "1";
}


}) 

// call resume or portfolio
let callportfolio = document.querySelector('.slidemenup');
if(callportfolio == null){

}else{
  callportfolio.addEventListener('click', () =>{
  document.querySelector('.Portfolio').style.display = "block";
  document.querySelector('.resumecontent').style.display = "none";
  localStorage.setItem('displaycontent', 1);
})
}
let callresume = document.querySelector('.slidemenur');
if (callresume == null) {

}else{
callresume.addEventListener('click', () =>{
  document.querySelector('.Portfolio').style.display = "none";
  document.querySelector('.resumecontent').style.display = "block";
  localStorage.setItem('displaycontent', 2);
})
}





function keepsubmenu() {
  // body...
   let checkmenucode = localStorage.getItem('showmenu'); 
   if (checkmenucode == 1) {
     document.querySelector('.submenu-menu').style.opacity = "1";
   }else if(checkmenucode == 0){
    document.querySelector('.submenu-menu').style.opacity = "0";
  }else{

  }

}

function keepcontent() {
  // body...
   let checkcontent = localStorage.getItem('displaycontent'); 
   if (checkcontent == 1) {
    document.querySelector('.Portfolio').style.display = "block";
  document.querySelector('.resumecontent').style.display = "none";
   }else if(checkcontent == 2){
     document.querySelector('.Portfolio').style.display = "none";
  document.querySelector('.resumecontent').style.display = "block";
  }else{
    localStorage.setItem('displaycontent', 1);
    document.querySelector('.Portfolio').style.display = "block";
  document.querySelector('.resumecontent').style.display = "none";
  }

}


 keepcontent();
keepsubmenu();




