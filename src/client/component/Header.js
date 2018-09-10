import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link to="/" className="navbar-brand">OLX</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>   

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item active">
                                <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                            </li> */}
                            {this.props.isAuth ? (
                                <li className='nav-item'>
                                    <Link to='/dashboard' className='nav-link'>Dashboard</Link>
                                </li>
                            ) : (
                                    <li className="nav-item dropdown">
                                        <Link to='/signup' className='nav-link dropdown-toggle' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Account</Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link to='/signin' className='dropdown-item'>Sign In</Link>
                                            <Link to='/signup' className='dropdown-item'>Sign Up</Link>
                                        </div>
                                    </li>
                                )}
                    </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <button className="btn btn-success my-2 my-sm-0" type="submit">Search Location</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;