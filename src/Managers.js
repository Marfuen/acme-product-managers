import React, {Component} from 'react';
import {connect} from "react-redux";
import { fetchProducts, fetchUsers } from "../store";

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

class Managers extends Component {
  componentDidMount(){
    this.props.fetchProducts();
    this.props.fetchUsers();
  }
  render(){
    const { users, products } = this.props;
    const managers = products.reduce((acc, product) => {
      for(let i = 0; i < users.length; ++i){
        if(users[i].id === product.managerId){
          acc.push(users[i])
        }
      }
      return acc;
      }, [])
    return(
      <ul>
        {managers.map(manager => <li key={manager.id}>{manager.name}</li>)}
      </ul>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Managers);
