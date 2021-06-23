

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


