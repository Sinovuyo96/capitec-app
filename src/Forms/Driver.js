import React, {Components} from 'react';
import { Route, Link } from "react-router-dom";


function Driver(){
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
                 <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                 <label>Registration Number</label>
                <input type="text" className="form-control" placeholder="Enter Registration" />
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
        )
    }


export default Driver;