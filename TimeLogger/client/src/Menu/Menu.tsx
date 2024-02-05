import React from "react";

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    React Timelogger
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/timeregistrations">
                                Timeregistrations
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
