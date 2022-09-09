import { formularioBuscar, divBuscar, divMensajes, divResultado, headingResultado  } from './interfaz.js';

class ApiRequest {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI() {
        const url = `https://api.vagalume.com.br/search.php?art=${this.artista}&mus=${this.cancion}&apikey={fc97fbccdae15a1a6daf50c83f165036}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => {
                if(datos.mus) {
                    const { art: { name }, mus } = datos;
                    divResultado.textContent = mus[0].text
                    headingResultado.textContent= `Letra de la cancion: ${mus[0].name} de ${name}`
                } else {
                    divResultado.textContent = '';
                    headingResultado.textContent = '';
                    divMensajes.textContent = 'La cancion no existe, prueba con otra busqueda';
                    divMensajes.classList.add('error');


                    setTimeout(() => {
                        divMensajes.textContent = '';
                        divMensajes.classList.remove('error');
                    }, 3000);
                }
            })
            .catch(error => console.log(error));
    }
}


export default ApiRequest;
