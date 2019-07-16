
firebase.auth().onAuthStateChanged(function(user)
{
  if(user)
  {
    alert('Bienvenido. Toma el control summit 2019')    
    var user = firebase.auth().currentUser;

    window.location.replace("./home.html")
  }
});


function LoginUser()
{
  var email=document.getElementById('email').value;
  var password=document.getElementById('password').value;
 
  firebase.auth().signInWithEmailAndPassword(email, password).then(function() 
  {  
   alert('Loading...')
  }).catch(function(error)
  {
    alert('La contraseña debe tener más de 6 dígitos o el correo no es válido')
    var errorcode= error.code;
    var errormsg=error.message;

  });
}
