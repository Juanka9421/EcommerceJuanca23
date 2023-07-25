import { CartWidget } from "../../common/cartWidget/CartWidget";

import styled from "styled-components";

export const Navbar = () => {
  return (
    <>
      <NavContainer>
        <div className="logo">
          <h2>Animation Store</h2>
          <img
            src="https://res.cloudinary.com/dy5gfx0uv/image/upload/v1687139325/goku-y-gohan-nube-voladora-150x150_o5gdgh.png"
            alt=""
          />
        </div>

        <div>
          <a href="/">Inicio</a>
          <a href="/">Nosotros</a>
          <a href="/">Contacto</a>
        </div>
        <CartWidget />
      </NavContainer>
    </>
  );
};
const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    font-size: 2rem;
  }
  padding: 0.5rem;
  background: rgb(9, 11, 121);
  background: radial-gradient(
    circle,
    rgba(9, 11, 121, 1) 28%,
    rgba(9, 64, 121, 1) 85%
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    font-size: 2rem;
    text-decoration: none;
    margin-right: 1.5rem;
    transition: 0.5s;
  }
  a:hover {
    background-color: #054a72;
    cursor: pointer;
    border-radius: 10px;
  }
`;
