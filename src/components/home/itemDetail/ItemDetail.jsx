import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = () => {
  let producto = {
    nombre: "DBZ",
    precio: 1000,
    id: 1,
    stock: 10,
  };

  const onAdd = (cantidad) => {
    console.log(producto);
    console.log(cantidad);
  };
  return (
    <div>
      <h2>{producto.nombre}</h2>
      <h2>{producto.precio}</h2>
      <CounterContainer stock={producto.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
