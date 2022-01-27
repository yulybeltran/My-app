
import { useEffect, useState } from "react";
import { ChangePage } from "./Changepage";
import {Episode} from "./Episode";

function Episod() {
    // useState -> parametro1 : estado | parametro2 : nos pertmite cambiar el estado
    const [apiEpisode, setApiEpisode] = useState("https://rickandmortyapi.com/api/episode")
    const [EpisodesResults, setEpisodesResults] = useState([])
    const [apiInfo, setApiInfo] = useState([])
  
    //UseEffect [] -> antes de que los componentes se rendericen
    //[parametro, parametro2...] -> se va a volver a ejecutar cada vez que lo que haya dentro cambie
    useEffect(() => {
      
        const fetchData = async () => {
            const getData = await fetch(apiEpisode)
            const jsonData = await getData.json()
            setEpisodesResults(jsonData.results)
            setApiInfo(jsonData.info)
            
            // == === comparacion | = asignar un valor

            
        }
        fetchData()
    }, [apiEpisode])

    return (
        <>
            <div>
                {EpisodesResults.map(Episode=> (
                    <Episode
                    episodeObject={Episode}
                        key={Episode.id}
                    />
                ))}

            </div>

            <div>
            <ChangePage
            apiInfo={apiInfo}
            setApiEpisode={setApiEpisode}
            
            />
          </div>
        </>
    );
}

export {Episod};
