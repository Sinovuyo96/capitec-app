import React from 'react'
import { Route, Link } from "react-router-dom";

function Admin(){

    return(

        <form>
        <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" />
        </div>

        <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
                <label>Shop name</label>
                <input type="text" className="form-control" placeholder="Shop name" />
        </div>

        <div className="form-group">
                <label>Package Size</label>
                <input type="text" className="form-control" placeholder="Package Size" />
        </div>

        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" /> 
          </div>
       
          <div className="form-group">
          <Link to={"/Navbar"}><button type="submit" href="http://facebook.com/" className="btn btn-primary btn-block">Submit</button></Link>
            <p className="forgot-password text-right">
               Forgot <a href="">password?</a> 
            </p> 
            </div>
       </form>

        // <div style="text-align:center" className="all-btns">
        // <p>
        //     <a id="staff-login-link" class="myButton" href="/auth-saml/saml/login/?apId=_127_1&amp;redirectUrl=">Admin Login</a>
        // </p>
        // <br/>
        // <br/>
        // <p>
        // <a id="student-login-link" class="myButton" href="/auth-saml/saml/login/?apId=_128_1&amp;redirectUrl=">Customer Login</a>
        // </p>
        // <br/>
        // <br/>
        // <p>
        // <a id="admin-link" class="myButton" href="/webapps/login/?action=default_login&amp;new_loc=">Driver Login</a>
        // </p>

        //     </div>
    )
}

export default Admin