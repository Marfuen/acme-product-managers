import React, { Component } from "react";
import store, {fetchProducts, fetchUsers} from "../store";
import {connect} from "react-redux";
import Product from "./Product"

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchProducts: () => dispatch(fetchProducts()),
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    products: state.products,
  }
}

class Products extends Component {
  componentDidMount(){
    this.props.fetchProducts();
    this.props.fetchUsers();
  }
  render(){
    const { users, products } = this.props;
    return(
      <ul className="list-group">
        {products.map(product =>
          <Product key={product.id} product={product} users={users}/>
        )}
      </ul>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
