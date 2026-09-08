import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCartCount } from "../utils/cartUtils";

function Navbar() {
  const navigate = useNavigate();

  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const updateNavbar = () => {
      setCartCount(getCartCount());

      const savedUser = localStorage.getItem("bookifyUser");

      if (savedUser) {
        setUser(JSON.parse(savedUser));
      } else {
        setUser(null);
      }
    };

    updateNavbar();

    window.addEventListener(
      "cartUpdated",
      updateNavbar
    );

    window.addEventListener(
      "userUpdated",
      updateNavbar
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        updateNavbar
      );

      window.removeEventListener(
        "userUpdated",
        updateNavbar
      );
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("bookifyUser");

    setUser(null);

    window.dispatchEvent(new Event("userUpdated"));

    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          BOOKIFY by Tanvi Nanaware
        </Link>

        <nav className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/catalogue">
            Catalogue
          </Link>

          <Link to="/cart">
            Cart{" "}
            <span className="cart-count">
              {cartCount}
            </span>
          </Link>

          {!user ? (
            <>
              <Link
                to="/register"
                className="register-link"
              >
                Register
              </Link>

              <Link
                to="/login"
                className="nav-login"
              >
                Login
              </Link>
            </>
          ) : (
            <div className="user-menu">

              <span className="user-name">
                {user.name}
              </span>

              <button
                className="logout-button"
                onClick={handleLogout}
              >
                Logout
              </button>

            </div>
          )}

        </nav>

      </div>
    </header>
  );
}

export default Navbar;