window.onload = function() {
    
    try {
        if(firebase.auth().currentUser.I!=null){    
            console.log("Sesion Activa");
        }

    } catch (error) {
        window.location.replace("./Login.html");
    }


  document.getElementById("ws1_1").onclick = function(){ registro("ws1"); };
  document.getElementById("ws1_2").onclick = function(){ registro("ws1"); };
  document.getElementById("ws2_1").onclick = function(){ registro("ws2"); };
  document.getElementById("ws2_2").onclick = function(){ registro("ws2"); };
  document.getElementById("sk1").onclick = function(){ registro("sk1"); };
  document.getElementById("sk2").onclick = function(){ registro("sk2"); };
  document.getElementById("sk3").onclick = function(){ registro("sk3"); };

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



function registro(x){
    var libro;
    switch (x) {
        case 'ws1':    
            if( confirm("¿Desea hacer registro?") ){
                firebase.database().ref('WorkShopsSubcriptions/' + firebase.auth().currentUser.uid).update({
                    one : true
                });
                alert('Registro Exitoso');
            }
            break;
        case 'ws2':
            if( confirm("¿Desea hacer registro?") ){
                firebase.database().ref('WorkShopsSubcriptions/' + firebase.auth().currentUser.uid).update({
                    two : true
                });
                alert('Registro Exitoso');
            }
            break;
        case 'sk1':
            if( confirm("¿Desea hacer registro?") ){
                firebase.database().ref('SpeakersSubcriptions/' + firebase.auth().currentUser.uid).update({
                    one : true
                });
                alert('Registro Exitoso');
            }
            break;
        case 'sk2':
            if( confirm("¿Desea hacer registro?") ){
                firebase.database().ref('SpeakersSubcriptions/' + firebase.auth().currentUser.uid).update({
                    two : true
                });
                alert('Registro Exitoso');
            }
            break;
        case 'sk3':
            if( confirm("¿Desea hacer registro?") ){
                firebase.database().ref('SpeakersSubcriptions/' + firebase.auth().currentUser.uid).update({
                    three : true
                });
                alert('Registro Exitoso');
            }
            
            break;
    }

    

}