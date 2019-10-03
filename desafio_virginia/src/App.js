import React from 'react';
import store from './store';
import { Provider, useSelector } from 'react-redux';
import Home from './components/productos/Home';
import FormCreate from './components/productos/FormCreate';
import FormEdit from './components/productos/FormEdit';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import PrivateRoute from './components/private-route/PrivateRoute'
  import './App.css';
  // import store from './store';
  import Login from './views/login/Login';
function App() {

  
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
      <div>
      <Navbar className="navbar-dark bg-dark"  expand="md" style={{color:"#ffff"}}>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler /> 
          <Collapse  navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/product">Productos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="users">Users</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
        {/* exact  */}
        <Route path="/" exact component={Login} />
        <PrivateRoute exact path="/product" component={Home} />

          <PrivateRoute path="/users" exact>
            {/* <Users /> */}
          </PrivateRoute>
          <PrivateRoute path="/createproduct" exact component={FormCreate} />
          <PrivateRoute path="/updateproduct" exact component={FormEdit} />
          
        </Switch>
      </div>
    </Router>
      </Provider>

    </div>
  );
}

export default App;