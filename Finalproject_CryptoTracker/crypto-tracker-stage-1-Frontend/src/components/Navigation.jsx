import { Link } from 'react-router-dom'

const Navigation = () => {

    return ( <>
    <nav className="Navigation-container">
    <ul>
        <li>
            <Link to="/">Dashboard</Link>
        </li>
        <li>
             <Link to="watchlist">Watchlist</Link>
        </li>
    </ul>
    </nav>
    </>
    )
}

export default Navigation;