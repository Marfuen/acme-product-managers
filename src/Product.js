import React, { Component } from "react";
import { updateManagerId } from "../store";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    updateManagerId: (id, managerId) => dispatch(updateManagerId(id, managerId)),
  }
}

class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:  props.product.managerId ? props.product.managerId : '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange({target}){
    this.setState({
      value: target.value
    })
  }
  onSubmit(ev){
    ev.preventDefault();
    const productId = this.props.product.id;
    this.props.updateManagerId(productId, 1*this.state.value)
              .catch(e => console.log(e));
  }
  componentDidUpdate(prevState){
    if(this.props.product.managerId && prevState.product.managerId !== this.props.product.managerId){
      this.setState({
        value: this.props.product.managerId
      })
    }
  }
  render(){
    const { product, users } = this.props;
    return(
      <li key={product.id} className="list-group-item">
        <div>
          <h6>{product.name}</h6>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>
                <em>Product Manager</em>
              </label>
              <select className="form-control" name="managerId" onChange={this.onChange}>
                <option value={null}>-- none --</option>
                {users.map(user => <option key={user.id} value={this.state.value}>{user.name}</option>)}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </li>
    )
  }
}

export default connect(null, mapDispatchToProps)(Product);
