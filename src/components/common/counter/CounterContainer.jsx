import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(0);
  const sumar = () => {
    contador < stock
      ? setContador(contador + 1)
      : alert("Maxima cantidad alcanzada");
  };
  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };
  return (
    <Counter contador={contador} restar={restar} sumar={sumar} onAdd={onAdd} />
  );
};

export default CounterContainer;
