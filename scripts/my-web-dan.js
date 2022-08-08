// animate typing effect
const texts = ['happy to see you  ','a Web Developer  ','an Android Developer  '];
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





// visitors counter
    
//firebase configerations 

var firebaseConfig = {
   apiKey: "AIzaSyArL98ueDDOZhgnS0Z9PAOfKgP8MUcrho0",
    authDomain: "e-learning-app-d98c7.firebaseapp.com",
    databaseURL: "https://e-learning-app-d98c7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "e-learning-app-d98c7",
    storageBucket: "e-learning-app-d98c7.appspot.com",
    messagingSenderId: "17597297186",
    appId: "1:17597297186:web:e724ebb9903c428f96907b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//insertcount() ;
function insertcount() {
  // body...
    let visitorscount = "Visitorscountnumber"
  firebase.database().ref('Visitors/' + visitorscount).set({

      CountNumber: "0"

    },  (error) => {
  if (error) {
    // The write failed...
     alert('Registration Faled');
     
  }else{
 alert('Count added');
     
  }
}
)
}


let previouscount;
getallvisitors();
//get previouse count
let countholder = document.getElementById('countHolder');
function getallvisitors() {
  // body...
  let visitorscount = "Visitorscountnumber"
  
  firebase.database().ref('Visitors/' + visitorscount).on('value',function(snapshot){
    try{

      previouscount = snapshot.val().CountNumber;
      localStorage.setItem('Count',previouscount );
      countholder.innerHTML = previouscount;
  }catch(err){
    //alert(typeof err);
    console.log(err.message);

 
  } 

})
  
}
setTimeout(function() { updatevisitors(previouscount); }, 5000);
// push the current count
function updatevisitors(newcount) {
  // body...
  let visitorscount = "Visitorscountnumber"
    firebase.database().ref('Visitors/' + visitorscount).update({

    CountNumber: newcount+1
      }).then(() => {
  // Data saved successfully!
  
})
.catch((error) => {
  console.log('counter failed')
});
}

// get current year

let currentyear = document.getElementById('currentyear');
let year = new Date();
currentyear.innerHTML = year.getFullYear();

// show more 

/*let morecert = document.getElementById('morecert');
morecert.addEventListener('click', () =>{
  morecert.innerHTML = "Hide ";
})*/


// show more elements
 var morecert1 = document.getElementById('morecert1');
 var btnviewmorecert = document.getElementById('morecert');
 var viewcertnumber = 0;

// hide more by default
