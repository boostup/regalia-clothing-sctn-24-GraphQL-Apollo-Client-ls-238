import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";

import { GET_ITEM_COUNT } from "../../graphql/cart/queries";
import { TOGGLE_CART_HIDDEN } from "../../graphql/cart/mutators";

import CartIcon from "./cart-icon.component";

const CartIconContainer = (props) => {
  const { itemCount } = props.data;
  const { toggleCartHidden } = props;
  return <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />;
};

export default compose(
  graphql(GET_ITEM_COUNT),
  graphql(TOGGLE_CART_HIDDEN, { name: "toggleCartHidden" })
)(CartIconContainer);
