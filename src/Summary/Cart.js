import React from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal' 

function Cart(props) {
  const cart = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected[feature];

    return (
      <CartItem
        key={featureHash}
        featureHash={featureHash}
        feature={feature}
        selectedOption={selectedOption}
      />
    );
  });

  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );

  return (
    <>
      <section className="main__summary">
            <h2>Your cart</h2>
            {cart}
            <CartTotal
              total={total}
            />
      </section>
    </>
  );
}

export default Cart;