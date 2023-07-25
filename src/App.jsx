import { useState } from "react";
import { Navbar } from "./components/layout/navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/cart/Cart";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import CounterContainer from "./components/common/counter/CounterContainer";
import ItemDetail from "./components/home/itemDetail/ItemDetail";

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
      <CounterContainer />
      <ItemDetail />
      <ItemListContainer saludo={saludo} cambiarSaludo={cambiarSaludo} />
    </div>
  );
}

export default App;
// function App() {
//   const [showitems, setShowitems] = useState(false);
//   return (
//     <div>
//       {showitems ? <itemList /> : <h1>no hay nada </h1>}
//       <button onClick={() => setShowitems(!showitems)}>
//         MONTAR- DESMONTAR
//       </button>
//     </div>
//   );
// }
// export default App;
