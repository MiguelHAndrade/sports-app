import { Link } from "react-router-dom";

import './styles.scss'

export function Sport({id, icon, title}){
    return(
        <article className="card"> 
            <Link to={`sport/${id}`}>
                <div className="card-icon">
                    {icon &&
                        <img src={icon} alt={title}/>
                    }
                </div>
                <div className="card-title">{title}</div>
            </Link>
        </article>
    )
}
