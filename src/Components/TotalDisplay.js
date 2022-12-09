import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Contexts/CartContext";

const TotalDisplay = () => {
  const [total, setTotal] = useState(0);
  const { cart, setCart } = useContext(CartContext);
  const calcTotal = () => {
    // calcTotal - cal the total cost of the cart
    let sum = 0;
    cart.forEach((p) => (sum += p.price));
    setTotal(sum);
  };

  useEffect(() => {
    calcTotal();
  }, [cart.length]);

  return (
    <div style={{ backgroundColor: "gray", padding: "100px" }}>
      TotalDisplay
      <h1>Total:{total}</h1>
      {cart.length ? (
        <h1> products in cart: {cart.length} Items</h1>
      ) : (
        <h1>cart is empty: {cart.length} Items</h1>
      )}
    </div>
  );
};

export default TotalDisplay;
