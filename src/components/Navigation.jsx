import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Bootstrap
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id='navmenu'>
                    <ul className="ms-auto navbar-nav">
                        <li className="navbar-item">
                            <Link to="/" className='nav-link'>home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/" className='nav-link'>list</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/" className='nav-link'>about</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;