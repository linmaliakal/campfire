(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBCx6lUOgDMW8UrjtH1DNKHjwDG6egQH6M",
    authDomain: "campfire-75074.firebaseapp.com",
    databaseURL: "https://campfire-75074.firebaseio.com",
    projectId: "campfire-75074",
    storageBucket: "campfire-75074.appspot.com",
    messagingSenderId: "487710190246"
  };
  firebase.initializeApp(config);

  // Firebase App is always required and must be first -->
  src="https://www.gstatic.com/firebasejs/5.6.0/firebase-app.js";

  //Add additional services that you want to use
  src="https://www.gstatic.com/firebasejs/5.6.0/firebase-auth.js";
  src="https://www.gstatic.com/firebasejs/5.6.0/firebase-database.js";

  // Comment out (or don't include) services that you don't want to use -->
  //<script src="https://www.gstatic.com/firebasejs/5.6.0/firebase-storage.js"></script> -->

    var config = {
      // ...
    };
    firebase.initializeApp(config);


  //get elements

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin= document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementByID('btnLogout');

  //Add Login Events
  btnLogin.addEventListener('click', e => {
    //Get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  //Add singup events
  btnSignUp.addEventListener('click', e => {
    //Get Email and pass
    //// TODO: Check for real emails!
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise
      .catch(e => console.log(e.message));
  });

btnLogout.addEventListener('click',e => {
  firebase.auth.signOut();
});

  //Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    } else {
      console.log('not logged in');
      btnLogout.classList.add('hide');
    }
  });

  const auth = firebase.auth();

  auth.signInWithEmailAndPassword(email, pass);
  auth.createUserWithEmailAndPassword(email, pass);
  auth.onAuthStateChanged(firebaseUser=> {});

}());
