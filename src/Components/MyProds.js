import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import axios from "axios";

const MyProds = () => {
  // const MY_SERVER = "http://localhost:3005/prods";//json server (nodejs - download)
  // const MY_SERVER = "http://localhost:5000/prods"; //flask (python -flask)
  const MY_SERVER = "http://127.0.0.1:8000/products"; //flask (python -django)
  const { cart, setCart } = useContext(CartContext);
  const [myPrdos, setmyPrdos] = useState([]);

  useEffect(() => {
    axios.get(MY_SERVER).then((r) => setmyPrdos(r.data));
  }, []);

  return (
    <div style={{ backgroundColor: "pink", padding: "100px" }}>
      {myPrdos.map((prod, i) => (
        <button onClick={() => setCart([...cart, prod])}>{prod.desc}</button>
      ))}

      {/* <button onClick={() => setCart([...cart, { desc: "coffee", price: 30 }])}>
        coffee
      </button> */}
    </div>
  );
};

export default MyProds;
