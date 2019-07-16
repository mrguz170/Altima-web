window.onload = function() {
    
    try {
        if(firebase.auth().currentUser.I!=null){    
            console.log("Sesion Activa");
        }

    } catch (error) {
        window.location.replace("./Login.html");
    }
    

    
};


function OnPressButtonLogOut()
{
    firebase.auth().signOut().then(function()
    {
        window.location.replace("./Login.html");
    }).catch(function(error)
    {
        alert('Algo salio mal')
        var errorcode = error.code;
        var errormsg = error.message;
    });
}