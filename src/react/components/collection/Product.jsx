import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <h5 className="Product__title">{this.props.product.title}</h5>
      </div>
    );
  }
}

export default Product;