import { Link } from 'react-router-dom'
import './styles.scss'

export function Header(){
    return(
        <header>
            <div><Link to="/">Sports App</Link></div>
        </header>
    )
}