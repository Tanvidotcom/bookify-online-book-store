import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getCart,
  getCartTotal,
} from "../utils/cartUtils";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const cart = getCart();
  const total = getCartTotal();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // =========================
    // FORM VALIDATION
    // =========================

    if (!formData.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!formData.address.trim()) {
      setError("Please enter your delivery address.");
      return;
    }

    if (!formData.city.trim()) {
      setError("Please enter your city.");
      return;
    }

    if (!formData.pincode.trim()) {
      setError("Please enter your pincode.");
      return;
    }

    // =========================
    // SEND ORDER TO BACKEND
    // =========================

    try {
      setLoading(true);

      // Get logged-in user
      const savedUser = localStorage.getItem("bookifyUser");

      const user = savedUser
        ? JSON.parse(savedUser)
        : null;

      // Create order information
      const order = {
        userId: user ? user.id : null,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        pincode: formData.pincode,
        total: total,
      };

      // Create order items
      const items = cart.map((book) => ({
        bookId: book.id,
        quantity: book.quantity,
        price: book.price,
      }));

      // Send order to Spring Boot
      const response = await fetch(
        "http://localhost:8080/api/orders",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            order: order,
            items: items,
          }),
        }
      );

      const data = await response.json();

      // Check backend response
      if (!response.ok) {
        throw new Error(
          data.message || "Unable to place order."
        );
      }

      // =========================
      // ORDER SUCCESSFUL
      // =========================

      // Clear shopping cart
      localStorage.removeItem("bookifyCart");

      // Update navbar cart count
      window.dispatchEvent(
        new Event("cartUpdated")
      );

      // Go to order success page
      navigate("/order-success", {
        state: {
          order: data.order,
        },
      });

    } catch (err) {
      setError(
        err.message ||
        "Something went wrong while placing the order."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // EMPTY CART
  // =========================

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-empty">

          <p className="section-label">
            NOTHING TO CHECK OUT
          </p>

          <h1>
            Your cart is empty.
          </h1>

          <p>
            Add some books to your cart before continuing
            to checkout.
          </p>

          <Link
            to="/catalogue"
            className="checkout-browse-button"
          >
            Browse Books
          </Link>

        </div>
      </div>
    );
  }

  // =========================
  // CHECKOUT PAGE
  // =========================

  return (
    <div className="checkout-page">

      {/* =========================
          CHECKOUT HEADER
      ========================= */}

      <section className="checkout-header">

        <div>

          <p className="section-label">
            BOOKIFY by Tanvi CHECKOUT
          </p>

          <h1>
            Complete your
            <br />
            <span>order.</span>
          </h1>

          <p className="checkout-description">
            Enter your delivery details and review your
            order before placing it.
          </p>

        </div>

      </section>


      <section className="checkout-content">

        {/* =========================
            DELIVERY FORM
        ========================= */}

        <div className="checkout-form-card">

          <div className="checkout-form-heading">

            <p className="section-label">
              DELIVERY DETAILS
            </p>

            <h2>
              Where should we deliver?
            </h2>

          </div>


          <form onSubmit={handleSubmit}>

            {/* FULL NAME + EMAIL */}

            <div className="checkout-form-row">

              <div className="checkout-form-group">

                <label htmlFor="fullName">
                  Full name
                </label>

                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />

              </div>


              <div className="checkout-form-group">

                <label htmlFor="email">
                  Email address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* PHONE + PINCODE */}

            <div className="checkout-form-row">

              <div className="checkout-form-group">

                <label htmlFor="phone">
                  Phone number
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>


              <div className="checkout-form-group">

                <label htmlFor="pincode">
                  Pincode
                </label>

                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  placeholder="Enter pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* ADDRESS */}

            <div className="checkout-form-group">

              <label htmlFor="address">
                Delivery address
              </label>

              <textarea
                id="address"
                name="address"
                placeholder="House number, street, area..."
                value={formData.address}
                onChange={handleChange}
                rows="4"
              />

            </div>


            {/* CITY */}

            <div className="checkout-form-group">

              <label htmlFor="city">
                City
              </label>

              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
              />

            </div>


            {/* ERROR MESSAGE */}

            {error && (
              <div className="checkout-error">
                {error}
              </div>
            )}


            {/* PLACE ORDER BUTTON */}

            <button
              type="submit"
              className="place-order-button"
              disabled={loading}
            >
              {loading
                ? "Placing Order..."
                : "Place Order"}
            </button>

          </form>

        </div>


        {/* =========================
            ORDER SUMMARY
        ========================= */}

        <aside className="checkout-summary">

          <p className="section-label">
            YOUR ORDER
          </p>

          <h2>
            Order summary
          </h2>


          {/* BOOKS */}

          <div className="checkout-books">

            {cart.map((book) => (

              <div
                className="checkout-book"
                key={book.id}
              >

                <img
                  src={book.imageUrl}
                  alt={book.title}
                />

                <div className="checkout-book-info">

                  <h3>
                    {book.title}
                  </h3>

                  <p>
                    Qty: {book.quantity}
                  </p>

                </div>

                <strong>
                  ₹{book.price * book.quantity}
                </strong>

              </div>

            ))}

          </div>


          <div className="checkout-summary-divider"></div>


          {/* ITEM COUNT */}

          <div className="checkout-summary-row">

            <span>
              Items
            </span>

            <span>
              {cart.reduce(
                (sum, item) =>
                  sum + item.quantity,
                0
              )}
            </span>

          </div>


          {/* SUBTOTAL */}

          <div className="checkout-summary-row">

            <span>
              Subtotal
            </span>

            <span>
              ₹{total}
            </span>

          </div>


          {/* DELIVERY */}

          <div className="checkout-summary-row">

            <span>
              Delivery
            </span>

            <span>
              FREE
            </span>

          </div>


          <div className="checkout-summary-divider"></div>


          {/* TOTAL */}

          <div className="checkout-final-total">

            <span>
              Total
            </span>

            <strong>
              ₹{total}
            </strong>

          </div>


          {/* BACK TO CART */}

          <Link
            to="/cart"
            className="back-to-cart"
          >
            ← Back to Cart
          </Link>

        </aside>

      </section>

    </div>
  );
}

export default Checkout;