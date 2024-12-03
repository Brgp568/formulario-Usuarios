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
const cbDeportes = document.getElementById('deportes');
const cbVideoJuegos = document.getElementById('videojuegos');
const cbManualidades = document.getElementById('manualidades');
const cbArtes = document.getElementById('artes');


const aficiones = document.getElementById('aficiones');

function stringAficiones(aficiones,cbMusica,cbDeportes,cbVideoJuegos,cbManualidades,cbArtes){

if(cbMusica.checked == true){
  
}
if(cbDeportes.checked == true){

}

if(cbVideoJuegos.checked == true){

}

if(cbManualidades.checked == true){

}

if(cbArtes.checked == true){

}


}