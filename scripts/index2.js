  
  const numSteps = 20.0;

let mySection;
let prevRatio = 0.0;
let increasingColor = "rgba(158,142,129, ratio)";
let decreasingColor = "rgba(254, 255, 254, ratio)";
let imagewidth = '0px'

// Set things up
window.addEventListener("load", (event) => {
  mySection = document.querySelector(".snapsection");

  createObserver();
}, false);

// creating intersection observer
function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(mySection);
}
//binding array threshold
function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i=1.0; i<=numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}
// add intersection change
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
    }

    prevRatio = entry.intersectionRatio;
  });
}












// animate typing effect
const texts = ['a Web Developer  ','an Android Developer  '];
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



/*function getdate() {
  // body...
  let date = new Date();
  var thisyear = date.getFullYear();
  let displayyear = document.querySelector('.currentyear');
  displayyear.innerHTML = thisyear;
}

getdate();


// feedback content

let btnsubmit = document.getElementById('btnsubmitfeedback');
if (btnsubmit == null) {

}else{
  btnsubmit.addEventListener('click' , () =>{
      let message = document.getElementById('feedbackmessage').value;
   let subject = document.getElementById('feedbacksubject').value;
    let email = document.getElementById('feedbackemail').value;

    let feedbackid = Date.now() / 1000 | 0
    // validate input 
    if (subject == "") {
      document.getElementById('feedbacksubject').style.border = "1px solid red";
    }else{
      if (message == "") {
        document.getElementById('feedbackmessage').style.border = "1px solid red";
      }else{
         firebase.database().ref('MywebPageFeedback/' + feedbackid).set({
      Subject : subject,
      Message : message,
      Email : email,
      FeebackId : feedbackid
    }, (error) =>{
      if (error) {
        alert('Failed to send try again');
      }else{
        alert('Successfully send');
        document.getElementById('feedbackmessage').innerHTML = "";
        document.getElementById('feedbacksubject').innerHTML = "";
        document.getElementById('feedbackemail').innerHTML = "";
      }
    })

      }
    }
    
   
  })

}*/


