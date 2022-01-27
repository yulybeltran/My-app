import style from '../styles/character.module.css'
import img1 from "../styles/images/img.jpg"
import img2 from "../styles/images/img2.jpg"
import img3 from "../styles/images/img3.jpg"
import img4 from "../styles/images/img4.jpg"
import img5 from "../styles/images/img5.png"
import img6 from "../styles/images/img6.jpg"
import img7 from "../styles/images/img7.jpg"
import img8 from "../styles/images/img8.jpg"
import img9 from "../styles/images/img9.png"
import img10 from "../styles/images/img10.jpg"




function Character ({characterObject}) {
   // console.log(characterObject)
    const character = characterObject
    const colors = {
        Human: img1,
        Alien: img3,
        Humanoid: img2,
        "Mythological Creature": img5,
        unknown: img6,
        Poopybutthole: img7,
        Cronenberg: img8, 
        Animal: img9,
        Disease:img10,
        Robot: img4,
        
    }

    
    return(
        <div className={style.cardContainer} style={{
            backgroundImage: `url(${colors[character.species]})`,

        }}>
            <img className={style.cardImg} src={character.image} alt="este es un personaje"></img>

            <div className={style.cardInfo}>
                <h2>{character.name}</h2>
                <p>{character.species}</p>
            </div>
            <button className={style.characterButon}>Episodios</button>
        </div>
    )
}

export {Character}
