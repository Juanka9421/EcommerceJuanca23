import { useState } from "react";
import "./home.css";

const Home = () => {
  const [contador, funcionContador] = useState(0);

  const sumar = () => {
    funcionContador(contador + 2);
  };

  return (
    <div>
      <button onClick={sumar}>sumar contador</button>
      <h2>el contador esta en {contador}</h2>
    </div>
  );
};

export default Home;
