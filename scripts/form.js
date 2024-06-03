const yourName = document.getElementById('inputNombre')
const yourMail = document.getElementById('inputEmail4')
const yourMessage = document.getElementById('mensaje')

const userInfo = document.getElementById('content')

//botones
const submitBtn = document.getElementById('buttonForm')

//alertas
const validationAlerts = document.getElementById('alerts')

// validacion para Email correcto
const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;



function onSubmit(event) {
    // para que no refresque la pagina
    event.preventDefault()

    const userFromStorage = JSON.parse(localStorage.getItem('userName'))

    if (yourName.value === '' || yourMail.value === '' || yourMessage.value === '') {
        return alert("Por favor rellene las casillas");
    }

    if( !validEmail.test(yourMail.value) ){
        return alert('El email introducido no es válido');
    }

    saveDataStorage()
}


function saveDataStorage(guardarLista) {
    localStorage.setItem('userName', JSON.stringify({
        yourName: inputNombre.value,
        yourMail: inputEmail4.value,
        yourMessage: mensaje.value,
    }))

    alert("Mensaje enviado correctamente", "success");
}


function alert(alertMsg, type){
    let alerts = document.createElement("div");
 
    validationAlerts.innerHTML = [`<div class='alert alert-${type}' role='alert'>`,
    alertMsg,
    "</div>"].join("");
     
    //El método Element.append() inserta un conjunto de objetos Node u objetos de tipo cadena después del último hijo de Element
    validationAlerts.append(alerts);
  
    setTimeout(() => {
     validationAlerts.innerHTML = "";
    }, 3000);

    yourName.value = "";
    yourMail.value = "";
    yourMessage.value = "";
}


submitBtn.addEventListener('click', onSubmit)