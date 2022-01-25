import { Character } from './Character';
import {dataCharacters} from './dataCharacters';
import '../styles/characters.css';

function Characters(){
    const AllCharacters = dataCharacters
    return (
        <div className="container-card">
            {AllCharacters.results.map(character => (
                <Character
                characterObject={character}
                />
            ))}
        </div>
    );
}
export{Characters};