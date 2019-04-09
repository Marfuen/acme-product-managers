import React, { Component } from 'react';
import Navbar from "./Navbar";
import Products from "./Products";
import Home from "./Home";
import Managers from "./Managers";
import { Switch, Route} from "react-router-dom";

class App extends Component {
  render(){
    return(
      <div>
        <h1>Acme Product Managers</h1>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home/>}/>
          <Route exact path="/products" render={() => <Products />}/>
          <Route exact path="/products/managers" render={() => <Managers />}/>
        </Switch>
      </div>
    )
  }
}

export default App;
