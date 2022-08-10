import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <div className="container p-2">
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
                            <Link to="/" className='nav-link'>Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/userlist" className='nav-link'>User List</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/projects" className='nav-link'>Projects</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/gallery" className='nav-link'>Gallery</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;