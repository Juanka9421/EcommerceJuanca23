import CounterContainer from "../../common/counter/CounterContainer";

const ItemList = ({ saludo, cambiarSaludo }) => {
  return (
    <div>
      <h2>{saludo}</h2>
      <button onClick={() => cambiarSaludo("Hola como estas?")}>
        Greeting
      </button>
      <CounterContainer />
    </div>
  );
};

export default ItemList;
