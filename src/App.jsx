import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  const funcionSaludar = () => {
    console.log("Hello Kitty");
  };
  return (
    <div>
      <Navbar />
      <h1>HOLA A TODOS</h1>
      <button onClick={funcionSaludar}>Saludito</button>
      <Footer />
    </div>
  );
}

export default App;
