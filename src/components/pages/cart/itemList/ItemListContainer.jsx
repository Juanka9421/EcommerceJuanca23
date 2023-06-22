const ItemList = ({ saludo, cambiarSaludo }) => {
  return (
    <div>
      <h2>{saludo}</h2>
      <button onClick={() => cambiarSaludo("Hola como estas?")}>
        Greeting
      </button>
    </div>
  );
};

export default ItemList;
