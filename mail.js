const firebaseConfig = {
    apiKey: "AIzaSyBySFE6U_s19dpftxU3xCsOJsviY8-0nnA",
    authDomain: "contactform-4e961.firebaseapp.com",
    databaseURL: "https://contactform-4e961-default-rtdb.firebaseio.com",
    projectId: "contactform-4e961",
    storageBucket: "contactform-4e961.appspot.com",
    messagingSenderId: "733576873975",
    appId: "1:733576873975:web:7d87575dd912772c4090f2"
  };

  firebase.initializeApp(firebaseConfig);
  var contactformDB = firebase.database().ref('contactForm');
  document.getElementById('ContactForm').addEventListener("submit",submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var message = getElementVal('message');
    saveMessages(name, email, message);
    //alert after form filled
    document.querySelector('.alert').style.display = "block"; 
    //removing alert after sometime
    setTimeout(() =>{
        document.querySelector('.alert').style.display = "none"; 

    }, 1500);
    //reset the form 
    document.getElementById('ContactForm').reset();

  }

  const saveMessages = (name, email, message) => {
    var newContactForm = contactformDB.push();
    newContactForm.set({
        name : name,
        email : email,
        message : message,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };