import '../css/navbar.css';
import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    let navigate = useNavigate()

    const handleLogout = ()=> {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">todo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/login">{!localStorage.getItem('token') && 'Login'}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/signup">{!localStorage.getItem('token') && 'Signup'}</Link>
                        </li>
                        <li className="nav-item">
                            {localStorage.getItem('token') ? <button onClick={handleLogout} type="button" class="btn btn-success">Logout</button> : null}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;