import React from "react";
import { Query } from "react-apollo";

import { GET_CART_HIDDEN } from "../../graphql/cart/queries";

import Header from "./header.component";

function HeaderContainer() {
  return (
    <Query query={GET_CART_HIDDEN}>
      {({ data: { cartHidden } }) => <Header hidden={cartHidden} />}
    </Query>
  );
}

export default HeaderContainer;
