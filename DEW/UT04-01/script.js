document.addEventListener('DOMContentLoaded', function () {
    // Mostrar/Ocultar contraseña
    document.getElementById('show-password').addEventListener('change', function () {
        const passwordField = document.getElementById('password');
        if (this.checked) {
            passwordField.type = 'text';
        } else {
            passwordField.type = 'password';
        }
    });
});

const enviarButton = document.getElementById("enviarButton");
const inputUserName = document.getElementById("username");

enviarButton.addEventListener("click",function(event){
    if(inputUserName = ""){
        alert("hola");
        
    }
});
