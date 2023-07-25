import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      // reject(products);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => setError(error));
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
// const ItemList = ({ saludo, cambiarSaludo }) => {
//   return (
//     <div>
//       <h2>{saludo}</h2>
//       <button onClick={() => cambiarSaludo("Hola como estas?")}>
//         Greeting
//       </button>
//       <CounterContainer />
//     </div>
//   );
// };

// export default ItemList;
