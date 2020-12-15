
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
    window.scrollTo(0, c - c / 6);
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
  document.querySelector('.submenu-menu').style.pointerEvents = "none";
  localStorage.setItem('showmenu', 0);
}else if(checkmenucode == 0){
   document.querySelector('.submenu-menu').style.opacity = "1";
   document.querySelector('.submenu-menu').style.pointerEvents = "auto";
   localStorage.setItem('showmenu', 1);
}else{
  localStorage.setItem('showmenu', 1);
  document.querySelector('.submenu-menu').style.opacity = "1";
  document.querySelector('.submenu-menu').style.pointerEvents = "auto";
}


}) 

// call resume or portfolio
let callportfolio = document.querySelector('.slidemenup');
if(callportfolio == null){

}else{
  callportfolio.addEventListener('click', () =>{
  document.querySelector('.Portfolio').style.display = "block";
  document.querySelector('.selectedtab').innerHTML = "Portfolio";
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
  document.querySelector('.selectedtab').innerHTML = "Resume";
  localStorage.setItem('displaycontent', 2);
})
}





function keepsubmenu() {
  // body...
   let checkmenucode = localStorage.getItem('showmenu'); 
   if (checkmenucode == 1) {
     document.querySelector('.submenu-menu').style.opacity = "1";
     document.querySelector('.submenu-menu').style.pointerEvents = "auto";
   }else if(checkmenucode == 0){
    document.querySelector('.submenu-menu').style.opacity = "0";
    document.querySelector('.submenu-menu').style.pointerEvents = "none";
  }else{

  }

}

function keepcontent() {
  // body...
   let checkcontent = localStorage.getItem('displaycontent'); 
   if (checkcontent == 1) {
    document.querySelector('.Portfolio').style.display = "block";
  document.querySelector('.resumecontent').style.display = "none";
  document.querySelector('.selectedtab').innerHTML = "Portfolio";
   }else if(checkcontent == 2){
     document.querySelector('.Portfolio').style.display = "none";
  document.querySelector('.resumecontent').style.display = "block";
  document.querySelector('.selectedtab').innerHTML = "Resume";
  }else{
    localStorage.setItem('displaycontent', 1);
    document.querySelector('.Portfolio').style.display = "block";
    document.querySelector('.selectedtab').innerHTML = "Portfolio";
  document.querySelector('.resumecontent').style.display = "none";
  }

}

// animate typing effect
const texts = ['Web Developer  ','Android Developer  '];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
(function typing() {
  // body...
  if(count === texts.length){
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector('.myprofession').textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
  }
  setTimeout(typing , 400);

}());

function getdate() {
  // body...
  let date = new Date();
  var thisyear = date.getFullYear();
  let displayyear = document.querySelector('.currentyear');
  displayyear.innerHTML = thisyear;
}





 keepcontent();
keepsubmenu();
getdate();




