window.onload = function() {
    
    try {
        if(firebase.auth().currentUser.I!=null){    
            console.log("Sesion Activa");
        }

    } catch (error) {
        window.location.replace("./Login.html");
    }


    document.getElementById("ws1").onclick = function(){ registro("ws1"); this.innerHTML='<p style="color:#F00;"><b>Registrado</b></p>';this.disabled = true;};
    document.getElementById("ws2").onclick = function(){ registro("ws2"); this.innerHTML='<p style="color:#F00;"><b>Registrado</b></p>'; this.disabled = true;};
    document.getElementById("ws3").onclick = function(){ registro("ws3"); this.innerHTML='<p style="color:#F00;"><b>Registrado</b></p>'; this.disabled = true; };
    document.getElementById("ws4").onclick = function(){ registro("ws4"); this.innerHTML='<p style="color:#F00;"><b>Registrado</b></p>'; this.disabled = true;};
    document.getElementById("ws5").onclick = function(){ registro("ws5"); this.innerHTML='<p style="color:#F00;"><b>Registrado</b></p>'; this.disabled = true;};
    document.getElementById("ws6").onclick = function(){ registro("ws6"); this.innerHTML='<p style="color:#F00;"><b>Registrado</b></p>'; this.disabled = true;};
    document.getElementById("ws7").onclick = function(){ registro("ws7"); this.innerHTML='<p style="color:#F00;"><b>Registrado</b></p>'; this.disabled = true;};
    document.getElementById("sk1").onclick = function(){ registro("sk1"); this.innerHTML='<p style="color:#F00;"><b>Registrado</b></p>'; this.disabled = true; };
    document.getElementById("sk2").onclick = function(){ registro("sk2"); this.innerHTML='<p style="color:#F00;"><b>Registrado</b></p>'; this.disabled = true; };
    document.getElementById("sk3").onclick = function(){ registro("sk3"); this.innerHTML='<p style="color:#F00;"><b>Registrado</b></p>'; this.disabled = true; };


    firebase.database().ref('WorkShopsSubcriptions/' + firebase.auth().currentUser.uid)
    .on("child_added", function(snapshot) {
        
        switch (snapshot.key) {
            case 'one':
                    if(snapshot.val()){
                        document.getElementById("ws1").innerHTML='<p style="color:#F00;"><b>Registrado</b></p>';
                        document.getElementById("ws1").disabled = true;
                    }
                break;
            case 'two':
                if(snapshot.val()){
                    document.getElementById("ws2").innerHTML='<p style="color:#F00;"><b>Registrado</b></p>';
                    document.getElementById("ws2").disabled = true;
                }
                break;
                case 'three':
                    if(snapshot.val()){
                        document.getElementById("ws3").innerHTML='<p style="color:#F00;"><b>Registrado</b></p>';
                        document.getElementById("ws3").disabled = true;
                    }
                break;
            case 'four':
                if(snapshot.val()){
                    document.getElementById("ws4").innerHTML='<p style="color:#F00;"><b>Registrado</b></p>';
                    document.getElementById("ws4").disabled = true;
                }
                break;
                case 'five':
                    if(snapshot.val()){
                        document.getElementById("ws5").innerHTML='<p style="color:#F00;"><b>Registrado</b></p>';
                        document.getElementById("ws5").disabled = true;
                    }
                break;
            case 'six':
                if(snapshot.val()){
                    document.getElementById("ws6").innerHTML='<p style="color:#F00;"><b>Registrado</b></p>';
                    document.getElementById("ws6").disabled = true;
                }
                break;
            case 'seven':
                if(snapshot.val()){
                    document.getElementById("ws7").innerHTML='<p style="color:#F00;"><b>Registrado</b></p>';
                    document.getElementById("ws7").disabled = true;
                }
                break;
        }

    });

    firebase.database().ref('SpeakersSubcriptions/' + firebase.auth().currentUser.uid)
    .on("child_added", function(snapshot) {
        switch (snapshot.key) {
            case 'one':
                if(snapshot.val()){
                    document.getElementById("sk1").innerHTML='<p style="color:#F00;"><b>Registrado</b></p>'; 
                    document.getElementById("sk1").disabled = true;
                }
                break;
            case 'two':
                if(snapshot.val()){
                    document.getElementById("sk2").innerHTML='<p style="color:#F00;"><b>Registrado</b></p>'; 
                    document.getElementById("sk2").disabled = true;
                }
                break;
            case 'three':
                if(snapshot.val()){
                    document.getElementById("sk3").innerHTML='<p style="color:#F00;"><b>Registrado</b></p>'; 
                    document.getElementById("sk3").disabled = true;
                }
                break;
        }
    });


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
        case 'ws3':
            if( confirm("¿Desea hacer registro?") ){
                firebase.database().ref('WorkShopsSubcriptions/' + firebase.auth().currentUser.uid).update({
                    three : true
                });
                alert('Registro Exitoso');
            }
            break;
        case 'ws4':
            if( confirm("¿Desea hacer registro?") ){
                firebase.database().ref('WorkShopsSubcriptions/' + firebase.auth().currentUser.uid).update({
                    four : true
                });
                alert('Registro Exitoso');
            }
            break;
        case 'ws5':
            if( confirm("¿Desea hacer registro?") ){
                firebase.database().ref('WorkShopsSubcriptions/' + firebase.auth().currentUser.uid).update({
                    five : true
                });
                alert('Registro Exitoso');
            }
            break;
        case 'ws6':
            if( confirm("¿Desea hacer registro?") ){
                firebase.database().ref('WorkShopsSubcriptions/' + firebase.auth().currentUser.uid).update({
                    six : true
                });
                alert('Registro Exitoso');
            }
            break;
        case 'ws7':
            if( confirm("¿Desea hacer registro?") ){
                firebase.database().ref('WorkShopsSubcriptions/' + firebase.auth().currentUser.uid).update({
                    seven : true
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