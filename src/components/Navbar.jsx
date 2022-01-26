import {NavLink} from 'react-router-dom'
import "../styles/navbar.css"

function Navbar(){
    return(
        <div>
            <div className="navbar">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/episodes">Episodies</NavLink>
                </li>
                <li>
                    <NavLink to="/characters">Character</NavLink>
                </li>
                <li>
                    <NavLink to="/locations">Locations</NavLink>
                </li>
            </ul>
        </div>
        </div>

    )
}

export { Navbar } 
