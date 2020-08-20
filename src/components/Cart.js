import React, { Component } from "react";
import Title from "./Title";
import CartColumns from "./cart/CartColumns";
import CartList from "./cart/CartList";
import CartTotals from "./cart/CartTotals";
import { ProductConsumer } from "../context";
import EmptyCart from "./cart/EmptyCart";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
