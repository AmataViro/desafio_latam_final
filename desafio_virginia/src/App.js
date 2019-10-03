import React from 'react';
import store from './store';
import { Provider} from 'react-redux';
import Home from './components/productos/Home';
import Header from './components/header/Header';
import FormCreate from './components/productos/FormCreate';
import FormEdit from './components/productos/FormEdit';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/private-route/PrivateRoute'
import './App.css';
import Login from './views/login/Login';
import Welcome from './views/welcome/Welcome';
function App() {

  
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route path="/" exact component={Login} />
            <PrivateRoute path="/dashboard" component={Header} />
            <PrivateRoute path="/dashboard/welcome" exact component={Welcome} />
            <Route path="/login" exact component={Login} />
            <PrivateRoute path="/dashboard/createproduct" exact component={FormCreate} />
            <PrivateRoute path="/dashboard/updateproduct" exact component={FormEdit} />
            <PrivateRoute path="/dashboard/product" exact component={Home} />
          </Router>
      </Provider>
    </div>
  );
}

export default App;