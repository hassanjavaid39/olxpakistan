import React from 'react';
import { Link } from 'react-router-dom';
import { getFromStorage } from "../storage";

class SecureHeader extends React.Component {
    constructor(props) {
        super(props);
        const obj = getFromStorage('olx');
        this.state = {
            userId: obj.userId
        }
    }

    render() {

        const { username } = this.props;
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{ padding: '10px' }}>
                    <div className="form-inline my-2 my-lg-0">
                        <button className="btn btn-warning my-2 my-sm-0" style={{ marginRight: '20px' }} onClick={this.props.logout}>Log Out</button>
                        <Link className="btn btn-outline-warning my-2 my-sm-0" style={{ marginRight: '20px' }} to="/categories" >Submit an Ad</Link>
                        <Link className="btn btn-success my-2 my-sm-0" style={{ marginRight: '20px' }} to="/messages" >Messages</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default SecureHeader;