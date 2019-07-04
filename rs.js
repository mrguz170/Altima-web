
	  /*var firebaseConfig = {
		apiKey: "AIzaSyAsTRKeUEKEf0nKxf2_GZ8s-W_mNRIYHb4",
		authDomain: "tomaelcontrol-830dd.firebaseapp.com",
		databaseURL: "https://tomaelcontrol-830dd.firebaseio.com",
		projectId: "tomaelcontrol-830dd",
		storageBucket: "tomaelcontrol-830dd.appspot.com",
		messagingSenderId: "913825052825",
		appId: "1:913825052825:web:914ed529ba0879b7"
	  };
    firebase.initializeApp(firebaseConfig);*/
    

    var app = document.getElementById('app')
    var dbref = firebase.database()

    var messageRef = dbref.ref('message')

    messageRef.once('value').then(function(snap){

      app.innerText= snap.val()
    })
