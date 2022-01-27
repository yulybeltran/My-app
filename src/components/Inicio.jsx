import image from "../styles/images//401155.png"

function Inicio(){
    return(
       <div>
           <h1>API de Rick y Morty</h1>
           <p>La API de Rick y Morty esta basada en el programa de televisión Rick and Morty. Tendrás acceso a unos cientos de personajes, imágenes, localizaciones y episodios.</p>
            <img src= {image} alt="Imagen" style={{width:`1000px`}}/>


       </div>
    )
}

export {Inicio}