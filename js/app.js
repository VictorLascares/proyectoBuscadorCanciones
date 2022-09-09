import { formularioBuscar, divBuscar, divMensajes, divResultado, headingResultado  } from './interfaz.js';
import ApiRequest from './api.js';

formularioBuscar.addEventListener('submit', buscarCancion);


function buscarCancion(e) {
    e.preventDefault();

    // Obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;


    if (!artista || !cancion) {
        headingResultado.textContent = '';
        divResultado.textContent = '';
        divMensajes.textContent = 'Todos los campos son obligatorios';
        divMensajes.classList.add('error');

        setTimeout(() => {
            divMensajes.textContent = '';
            divMensajes.classList.remove('error');
        }, 3000);

        return;
    }



    // Consultar API
    const busqueda = new ApiRequest(artista, cancion);
    busqueda.consultarAPI();
}
    
