import "../styles/character.css"
import img1 from "../styles/img.jpg"
import img2 from "../styles/img2.jpg"
import img3 from "../styles/img3.jpg"
import img4 from "../styles/img4.jpg"
import img5 from "../styles/img5.png"
import img6 from "../styles/img6.jpg"
import img7 from "../styles/img7.jpg"
import img8 from "../styles/img8.jpg"
import img9 from "../styles/img9.png"
import img10 from "../styles/img10.jpg"




function Character ({characterObject}) {
   // console.log(characterObject)
    const character = characterObject
    const colors = {
        Human: img1,
        Alien: img3,
        Humanoid: img2,
        Robot: img4,
        "Mythological Creature": img5,
        unknown: img6,
        Poopybutthole: img7,
        Cronenberg: img8, 
        Animal: img9,
        Disease:img10,
        
    }

    
    return(
        <div className="card-container" style={{
            backgroundImage: `url(${colors[character.species]})`,

        }}>
            <img className="card-img" src={character.image} alt="este es un personaje"></img>

            <div className="card-info">
                <h2>{character.name}</h2>
                <p>{character.species}</p>
            </div>
            <button className="character-buton">Episodios</button>
        </div>
    )
}

export {Character}
