import React, { Component } from "react";
import Products from "./Products.jsx";

class Collection extends Component {
  constructor() {
        super();

        this.state = {
            products: []
        };
    }

    componentWillMount() {
        this.props.client.product.fetchAll().then((res) => {
          this.setState({
            products: res,
          });
        });
    }

    componentDidMount() {}

    componentDidUpdate() {}

    componentWillUnmount() {}

    render() {
        return (
            <div>
                <h1>React Collections</h1>
                <Products products={this.state.products} />
            </div>
        );
    }
}

export default Collection;
