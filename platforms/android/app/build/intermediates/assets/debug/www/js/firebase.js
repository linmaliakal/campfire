// Initialize Firebase
function initializeFirebase(){
  var config = {
    apiKey: "AIzaSyAVxYCfEeKEYikLBnsujRTNwtpd6Pbyl9w",
    authDomain: "campfire422.firebaseapp.com",
    databaseURL: "https://campfire422.firebaseio.com",
    projectId: "campfire422",
    storageBucket: "campfire422.appspot.com",
    messagingSenderId: "808812844066"
  };
  firebase.initializeApp(config);
};

initializeFirebase();
