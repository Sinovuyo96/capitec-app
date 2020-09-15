// import React from 'react';
// // import Jokes from './components/Jokes'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar';
// import Button from './components/Button';
// // import ToDo from "./ToDo"

// function App() {
//   return (
//             <div>
//             <Navbar/>
//             <Button/>
            
//             </div>

//   );
// }

// export default App;

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import CurrentLocation from './components/CurrentLocation';
import Navbar from './components/Navbar';
import Driver from './Forms/Driver';
import Admin from './Forms/Admin';
import Customer from './Forms/Customer';
import MapContainer from './components/MapContainer'

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" href="#" to={"/sign-in"}>Logo</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link"  to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to={"/sign-up"}>Sign up</Link> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" /*to={"/Navbar"}*/>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"MapContainer"}>Track Order</Link>
              </li>
              <li>
                {/* <Link className="nav-item" to="{/Admin}">Choose Account</Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            {/* <Route path="/sign-up" component={SignUp} /> */}
            <Route path="/MapContainer" component={MapContainer}/>
            <Route path="/Navbar" component={Navbar}/>
            <Route path="/Driver" component={Driver}/> 
            <Route path="/Admin" component={Admin}/> 

            <Route>
              <Customer/>
            </Route>

          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
