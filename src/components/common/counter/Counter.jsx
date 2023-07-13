const Counter = ({ contador, restar, sumar, onAdd }) => {
  return (
    <div style={{ border: "2px solid steelblue", padding: "40px" }}>
      <button onClick={sumar}>sumar</button>
      <h2>{contador}</h2>
      <button onClick={restar}>restar</button>
      <button onClick={() => onAdd(contador)}>agregar al carrito</button>
    </div>
  );
};

export default Counter;
