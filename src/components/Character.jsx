import {morty} from "../dataCharacter"
import "../styles/character.css"


function Character ({characterObject}) {
   // console.log(characterObject)
    const character = characterObject
    
    return(
        <div className="card-container">
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
