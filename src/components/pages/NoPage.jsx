import { Link } from "react-router-dom"

export default function NoPage(){

    return (
        <div className="noPage">
            <h1>Page not Found !</h1>
            <button><Link to='/'>Retourner sur l'acceuil</Link></button>
        </div>
    )
}