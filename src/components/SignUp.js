import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class SignUp extends Component {
         handleClick = () =>{
             console.log('this is:',this)
         }

    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <Link to={""}><button type="submit" onClick={this.handleClick} href="/Navbar" className="btn btn-primary btn-block">Sign Up</button></Link>
                <p className="forgot-password text-right">
                     Already registered ?<a href="">sign in</a>
                </p>
            </form>
        );
    }
}
