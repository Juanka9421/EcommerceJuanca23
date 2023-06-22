import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div>
      <h2>Animation Store</h2>
      <img
        src="https://res.cloudinary.com/dy5gfx0uv/image/upload/v1687139325/goku-y-gohan-nube-voladora-150x150_o5gdgh.png"
        alt=""
      />
      <a href="/">Inicio</a>
      <a href="/">Nosotros</a>
      <a href="/">Contacto</a>
      <CartWidget />
    </div>
  );
};
