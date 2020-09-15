import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default class Login extends Component {
    // constructor(props){
    //     super(props)
    //     this.setState={
    //         customer:Customer
    //     }
    //     // this.handleClick=this.handleClick.bind(this)
    // }
    // handleClick =event =>{
    //     this.setState=({customer:this.setState.customer ==='Customer'})
    //     // console.log('clicked')
    // }
    constructor(props) {
        super(props);
      }

      adminClick = () =>{
        this.props.history.push("/Admin")
      };

      customerClick = () => {
        this.props.history.push("/Teacher")
        
        
      };

      driverClick = () =>{
        this.props.history.push("/Student")
      };


    
    render() {
        return (
            <Router>
            <form>
                <h3>Login</h3>

                <div className="form-group">
                <p>
            <button id="admin-login" className="myButton" onClick={this.adminClick} Link to="/Admin" href="/" >Admin</button>
        </p>
                    {/* <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" /> */}
                </div>

                <div className="form-group">
                <p>
        <button id="customer-login" className="myButton" onClick={this.customerClick} Link to="/Customer" href="/">Teacher</button>
        
        </p>
                    {/* <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" /> */}
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                    <p>
        <button id="driver-login" className="myButton"onClick={this.driverClick} Link to="/Driver" href="/">Student</button>
        </p>
                        {/* <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label> */}
                    </div>
                </div>

                {/* <Link to={"/Navbar"}><button type="submit" href="http://facebook.com/" className="btn btn-primary btn-block">Submit</button></Link>
                <p className="forgot-password text-right">
                   Forgot <a href="">password?</a> 
                </p> */}

               <Route>
                   {/* <Customer/> */}
                   {/* <Driver/> */}
                   {/* <Admin/> */}
               </Route>
</form>
</Router>
        );
    }
}