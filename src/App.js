import React, { Component } from 'react';
import Navbar from "./Navbar";
import Products from "./Products";
import Home from "./Home";
import Managers from "./Managers";
import { Switch, Route } from "react-router-dom";
import { fetchUsers, fetchProducts } from "../store";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    users: state.users,
  }
}

class App extends Component {
  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchProducts();
  }
  render(){
    const { users, products } = this.props;
    let managersCount = 0;
    for(let i = 0; i < products.length; ++i){
      for(let x = 0; x < users.length; ++x){
        if(users[x].id === products[i].managerId){
          ++managersCount
        }
      }
    }
    return(
      <div>
        <h1>Acme Product Managers</h1>
        <Navbar managersCount={managersCount}/>
        <Switch>
          <Route exact path="/" render={() => <Home managersCount={managersCount}/>}/>
          <Route exact path="/products" render={() => <Products />}/>
          <Route exact path="/products/managers" render={() => <Managers />}/>
        </Switch>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
