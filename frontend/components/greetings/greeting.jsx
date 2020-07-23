import React from 'react';
import { Link } from 'react-router-dom';

class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signout();
    }

    render() {
        if (this.props.currentUser === undefined) {
            return  (
                <div className="signup-logout">
                    <Link to="/signup">Sign Up</Link>
                    <br/>
                    <Link to="/login">Log In</Link>
                </div>
            )
        } else {
            return  (
                <div>
                    <span>Welcome {this.props.currentUser.username}</span>
                    <br/>
                    <button onClick={this.handleSubmit}>Log out</button>
                </div>
            )
        }
     
    }
}

export default Greetings;