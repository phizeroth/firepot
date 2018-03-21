// Register firebase module
var app = angular.module("app", ["firebase"]);

// Set up controller function                                                                                       
app.controller("Ctrl", function($scope, $firebaseObject) {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDNEKm6Ob1AEzCTcobqbp68joSc0i-tjKk",
        authDomain: "firepot-phiz.firebaseapp.com",
        databaseURL: "https://firepot-phiz.firebaseio.com",
        projectId: "firepot-phiz",
        storageBucket: "firepot-phiz.appspot.com",
        messagingSenderId: "530141388106"
    };
    firebase.initializeApp(config);

    var firebaseRef = firebase.database().ref();

    // pull the data into a local model                                                                             
    var syncObject = $firebaseObject(firebaseRef);

    // sync the object with three-way data binding                                                                  
    syncObject.$bindTo($scope, "data");
});