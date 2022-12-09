import { useEffect, useState } from "react";
import MyCart from "./Components/MyCart";
import MyProds from "./Components/MyProds";
import TotalDisplay from "./Components/TotalDisplay";
import { CartContext } from "./Contexts/CartContext";

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    //run evry time we buy any item
    // taking care (save/load from localstorage)
    if (cart.length > 0) localStorage.setItem("cart", JSON.stringify(cart)); //save mycart if not empty to localstorage
    const tempCart = localStorage.getItem("cart"); //read from localstorage to temp variable
    if (tempCart) {
      setCart(JSON.parse(tempCart)); //if tempCart not empty - save to cart
    }
  }, [cart.length]);

  // test only
  const test = () => {
    localStorage.setItem(
      "test",
      JSON.stringify({ desc: "tes-desc", price: 4.7 })
    );
    localStorage.setItem("ar", JSON.stringify([3, 5, 7]));
    console.log(localStorage.getItem("test"));
    console.log(localStorage.getItem("ar"));
    console.log(JSON.parse(localStorage.getItem("test")));
    console.log(JSON.parse(localStorage.getItem("ar")));
  };
  // clear memory
  const clearCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
    console.clear();
  };
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div style={{ backgroundColor: "aquamarine", padding: "100px" }}>
        hello
        <MyProds></MyProds>
        <MyCart></MyCart>
        <button onClick={() => test()}>RND </button>
        <button onClick={() => clearCart()}>clearCart </button>
        <TotalDisplay></TotalDisplay>
      </div>
    </CartContext.Provider>
  );
};

export default App;
