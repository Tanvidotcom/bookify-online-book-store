import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { addToCart, saveCart } from "../utils/cartUtils";
import "./Catalogue.css";

function Catalogue() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cartMessage, setCartMessage] = useState("");

  // Fetch books from Spring Boot backend
  useEffect(() => {
    fetch("http://localhost:8080/api/books")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load books.");
        }

        return response.json();
      })
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Read category from URL
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");

    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Search and category filtering
  useEffect(() => {
    let result = books;

    if (searchTerm.trim()) {
      result = result.filter(
        (book) =>
          book.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          book.author
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      result = result.filter(
        (book) => book.category === selectedCategory
      );
    }

    setFilteredBooks(result);
  }, [searchTerm, selectedCategory, books]);

  // Get unique categories
  const categories = [
    "All",
    ...new Set(books.map((book) => book.category)),
  ];

  // Add book to cart
  const handleAddToCart = (book) => {
    addToCart(book);

    setCartMessage(`${book.title} added to your cart.`);

    setTimeout(() => {
      setCartMessage("");
    }, 2000);
  };

  // Buy Now
  // This clears the existing cart, adds only the selected book,
  // and takes the user directly to checkout.
  const handleBuyNow = (book) => {
    const buyNowItem = {
      ...book,
      quantity: 1,
    };

    saveCart([buyNowItem]);

    window.dispatchEvent(new Event("cartUpdated"));

    navigate("/buy-now");
  };

  // Loading state
  if (loading) {
    return (
      <div className="catalogue-page">
        <div className="catalogue-loading">
          <div className="loading-line"></div>
          <p>Opening the shelves...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="catalogue-page">
        <div className="catalogue-error">
          <h2>Something went wrong.</h2>

          <p>{error}</p>

          <p>
            Please make sure the Spring Boot backend is running
            on port 8080.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="catalogue-page">

      {/* =========================
          CART SUCCESS MESSAGE
      ========================= */}

      {cartMessage && (
        <div className="cart-toast">
          ✓ {cartMessage}
        </div>
      )}

      {/* =========================
          CATALOGUE HEADER
      ========================= */}

      <section className="catalogue-header">

        <div>
          <p className="section-label">
            THE BOOKIFY COLLECTION by Tanvi Nanaware
          </p>

          <h1>
            Find your next
            <br />
            <span>great read.</span>
          </h1>

          <p className="catalogue-description">
            Explore our collection of books across stories,
            ideas, skills and everything in between.
          </p>
        </div>

        <div className="book-count">
          <span>{filteredBooks.length}</span>
          <p>Books available</p>
        </div>

      </section>

      {/* =========================
          FILTERS
      ========================= */}

      <section className="catalogue-controls">

        <div className="search-box">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="category-filter">

          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-button active"
                  : "category-button"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}

        </div>

      </section>

      {/* =========================
          BOOK GRID
      ========================= */}

      {filteredBooks.length > 0 ? (

        <section className="book-grid">

          {filteredBooks.map((book) => (

            <article
              className="book-card"
              key={book.id}
            >

              <div className="book-image-wrapper">

                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="book-image"
                />

                <div className="book-category">
                  {book.category}
                </div>

              </div>

              <div className="book-info">

                <p className="book-author">
                  {book.author}
                </p>

                <h2>
                  {book.title}
                </h2>

                <p className="book-description">
                  {book.description}
                </p>

                <div className="book-bottom">

                  <span className="book-price">
                    ₹{book.price}
                  </span>

                  <div className="book-actions">

                    {/* ADD TO CART */}

                    <button
                      className="add-cart-button"
                      onClick={() => handleAddToCart(book)}
                    >
                      Add to Cart
                    </button>

                    {/* BUY NOW */}

                    <button
                      className="buy-button"
                      onClick={() => handleBuyNow(book)}
                    >
                      Buy Now
                    </button>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </section>

      ) : (

        <div className="no-books">

          <p className="section-label">
            NOTHING FOUND
          </p>

          <h2>
            No books match your search.
          </h2>

          <p>
            Try another title, author or category.
          </p>

        </div>

      )}

    </div>
  );
}

export default Catalogue;