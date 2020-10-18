import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>


            <ul className="nav">

                <li className="nav-item">
                    <Link className="nav-link" to="/">Acceuil</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>

            </ul>


        </>
    )
}
