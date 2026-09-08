import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getCart,
  removeFromCart,
  updateQuantity,
  getCartTotal,
} from "../utils/cartUtils";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleIncrease = (bookId, quantity) => {
    const updatedCart = updateQuantity(
      bookId,
      quantity + 1
    );

    setCart(updatedCart);
  };

  const handleDecrease = (bookId, quantity) => {
    if (quantity <= 1) {
      return;
    }

    const updatedCart = updateQuantity(
      bookId,
      quantity - 1
    );

    setCart(updatedCart);
  };

  const handleRemove = (bookId) => {
    const updatedCart = removeFromCart(bookId);

    setCart(updatedCart);
  };

  const total = getCartTotal();

  return (
    <div className="cart-page">

      <section className="cart-header">
        <div>
          <p className="section-label">
            YOUR BOOKIFY BAG
          </p>

          <h1>
            Your <span>cart.</span>
          </h1>

          <p className="cart-description">
            Review your selected books before continuing
            to checkout.
          </p>
        </div>

        <div className="cart-item-count">
          <span>{cart.length}</span>
          <p>Different books</p>
        </div>
      </section>

      {cart.length === 0 ? (
        <section className="empty-cart">

          <div className="empty-cart-icon">
            ♡
          </div>

          <p className="section-label">
            YOUR CART IS EMPTY
          </p>

          <h2>
            Nothing here yet.
          </h2>

          <p>
            Explore our collection and find something
            worth reading.
          </p>

          <Link
            to="/catalogue"
            className="continue-shopping"
          >
            Browse Books
          </Link>

        </section>
      ) : (
        <section className="cart-content">

          <div className="cart-items">

            {cart.map((book) => (
              <article
                className="cart-item"
                key={book.id}
              >

                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="cart-book-image"
                />

                <div className="cart-book-info">

                  <p className="cart-book-category">
                    {book.category}
                  </p>

                  <h2>
                    {book.title}
                  </h2>

                  <p className="cart-book-author">
                    {book.author}
                  </p>

                  <button
                    className="remove-button"
                    onClick={() =>
                      handleRemove(book.id)
                    }
                  >
                    Remove
                  </button>

                </div>

                <div className="cart-quantity">

                  <button
                    onClick={() =>
                      handleDecrease(
                        book.id,
                        book.quantity
                      )
                    }
                  >
                    −
                  </button>

                  <span>
                    {book.quantity}
                  </span>

                  <button
                    onClick={() =>
                      handleIncrease(
                        book.id,
                        book.quantity
                      )
                    }
                  >
                    +
                  </button>

                </div>

                <div className="cart-price">

                  <span>
                    ₹{book.price}
                  </span>

                  <strong>
                    ₹{book.price * book.quantity}
                  </strong>

                </div>

              </article>
            ))}

          </div>

          <aside className="cart-summary">

            <p className="section-label">
              ORDER SUMMARY
            </p>

            <h2>
              Your total
            </h2>

            <div className="summary-row">
              <span>
                Items
              </span>

              <span>
                {cart.reduce(
                  (total, item) =>
                    total + item.quantity,
                  0
                )}
              </span>
            </div>

            <div className="summary-row">
              <span>
                Subtotal
              </span>

              <span>
                ₹{total}
              </span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>
                Total
              </span>

              <strong>
                ₹{total}
              </strong>
            </div>

            <Link
              to="/buy-now"
              className="checkout-button"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/catalogue"
              className="continue-link"
            >
              ← Continue Shopping
            </Link>

          </aside>

        </section>
      )}

    </div>
  );
}

export default Cart;