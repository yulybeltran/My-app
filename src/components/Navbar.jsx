import {NavLink} from 'react-router-dom'
import style from "../styles/navbar.module.css"

function Navbar(){
    return(
        <div>
            <div className={style.navbar}>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/episodes">Episodies</NavLink>
                </li>
                <li>
                    <NavLink to="/characters">Characters</NavLink>
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
