import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    React Movies
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/genres">
                                Genres
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/movies/filter">
                                Filter Movies
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/actors">
                                Actors
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/movietheaters">
                                Movie Theatres
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/movies/create">
                                Create a Movies
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}