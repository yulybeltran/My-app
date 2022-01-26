
import { Character } from "./Character";
import { useEffect, useState } from "react";
import '../styles/characters.css';
import { ChangePage } from "./Changepage";

function Characters() {
    // useState -> parametro1 : estado | parametro2 : nos pertmite cambiar el estado
    const [apiCharacter, setApiCharacter] = useState("https://rickandmortyapi.com/api/character")
    const [charactersResults, setCharactersResults] = useState([])
    const [apiInfo, setApiInfo] = useState([])

    //UseEffect [] -> antes de que los componentes se rendericen
    //[parametro, parametro2...] -> se va a volver a ejecutar cada vez que lo que haya dentro cambie
    useEffect(() => {
      
        const fetchData = async () => {
            const getData = await fetch(apiCharacter)
            const jsonData = await getData.json()
            setCharactersResults(jsonData.results)
            setApiInfo(jsonData.info)
            
            // == === comparacion | = asignar un valor

            
        }
        fetchData()
    }, [apiCharacter])

    return (
        <>
            <div className="container-card">
                {charactersResults.map(character => (
                    <Character
                    characterObject={character}
                        key={character.id}
                    />
                ))}

            </div>

            <div className="containerButon">
            <ChangePage
            apiInfo={apiInfo}
            setApiCharacter={setApiCharacter}
            
            />
          </div>
        </>
    );
}

export { Characters };
