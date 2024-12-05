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

const cbMusica = document.getElementById('musica');
const cbDeportes = document.getElementById('deporte');
const cbVideoJuegos = document.getElementById('videojuegos');
const cbManualidades = document.getElementById('manualidades');
const cbArtes = document.getElementById('artes');
const cbLectura = document.getElementById('lectura');


const aficiones = document.getElementById('aficiones');

function stringAficiones(){
    let aficionesString = ''; 
if(cbMusica.checked ){
    //Concatenacion de caracteres (con +=)
    aficionesString += 'MU';
}
if(cbDeportes.checked){
    aficionesString += 'DE';
}

if(cbVideoJuegos.checked ){
    aficionesString += 'VI';


}

if(cbManualidades.checked){
    aficionesString += 'MA';

}

if(cbArtes.checked){
    aficionesString += 'AR';

}

if(cbLectura.checked){
    aficionesString += 'LE';

}
aficiones.value = aficionesString;

}