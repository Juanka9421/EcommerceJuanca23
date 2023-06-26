import { useState } from "react";
import { Navbar } from "./components/layout/navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/cart/Cart";
import ItemListContainer from "./components/pages/cart/itemList/ItemListContainer";

function App() {
  const [saludo, setSaludo] = useState("Hello How are you????");
  const cambiarSaludo = (greeting) => {
    setSaludo(greeting);
  };
  //props
  return (
    <div>
      <Navbar />
      <Home />
      <Cart />

      <ItemListContainer saludo={saludo} cambiarSaludo={cambiarSaludo} />
    </div>
  );
}

export default App;
