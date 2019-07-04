

	 (function(){ 
		const firebaseConfig = {
		  apiKey: "AIzaSyAsTRKeUEKEf0nKxf2_GZ8s-W_mNRIYHb4",
		  authDomain: "tomaelcontrol-830dd.firebaseapp.com",
		  databaseURL: "https://tomaelcontrol-830dd.firebaseio.com",
		  projectId: "tomaelcontrol-830dd",
		  storageBucket: "tomaelcontrol-830dd.appspot.com",
		  messagingSenderId: "913825052825",
		  appId: "1:913825052825:web:914ed529ba0879b7"
		};
		// Initialize Firebase
	  firebase.initializeApp(firebaseConfig);
	   });
	   //obtener elementos por id porfas solo pon los id
	   const txtEmail = document.getElementById('txtEmail');
	   const txtPassword = document.getElementById('txtPassword');
	   const btnSignIn = document.getElementById('btnSignIn');
	   const btnSignUp = document.getElementById('btnSignUp');
	   const btnSignOut = document.getElementById('btnSignOut');

	   btnLogin.addEventListener('click', e=>{
		const email= txtEmail.value;
		const password = txtPassword.value;
		const auth = firebase.auth;

		const promise = auth.signInWithEmailAndPassword(email, password);
		promise.then(user=>console.log(user)).catch(e=>console.log(e.message));

	   });

	   btnSignOut.addEventListener('click', e=>{
		firebase.auth().signOut();
	   });

	   firebase.auth().onAuthStateChanged(firebase =>{
		   if(firebaseUser){
			   console.log(firebaseUser)
			   btnSignOut.classList.remove('hide');
		   }else{
			   console.log('not logged in');
			   btnSignOut.classList.add('hide');
			}

	   });
