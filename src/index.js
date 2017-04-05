var config = {
    apiKey: "AIzaSyBHlsb6QEvJDUT51FeLRbFpZ_e09CCBktQ",
    authDomain: "yo-ang.firebaseapp.com",
    databaseURL: "https://yo-ang.firebaseio.com",
    storageBucket: "yo-ang.appspot.com",
    messagingSenderId: "544561987059"
  };
  firebase.initializeApp(config);

angular
  .module('app', ['ui.router', 'firebase']);
