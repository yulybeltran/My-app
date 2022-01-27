import image from "../styles/images//401155.png"
import style from "../styles/inicio.module.css"

function Inicio(){
    return(
       <div className={style.inicio}>
           <h1> Rick and Morty</h1>
           <p>La serie sigue las desventuras de un científico, Rick, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos.</p>
           <p>La API de Rick y Morty esta basada en el programa de televisión Rick and Morty. Tendrás acceso a unos cientos de personajes, imágenes, localizaciones y episodios.</p>
            <img src= {image} alt="Imagen" />


       </div>
    )
}

export {Inicio}