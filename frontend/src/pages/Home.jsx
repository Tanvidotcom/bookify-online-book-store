import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO SECTION ================= */}

      <section className="hero-section">

        <div className="hero-content">

          <p className="hero-label">
            YOUR NEXT CHAPTER STARTS HERE
          </p>

          <h1>
            Stories worth
            <br />
            <span>coming back to.</span>
          </h1>

          <p className="hero-description">
            Discover books that inspire, challenge and stay with
            you long after the final page.
          </p>

          <Link to="/catalogue" className="hero-button">
            Explore Catalogue
            <span>→</span>
          </Link>

        </div>


        <div className="hero-visual">

          <div className="hero-image-wrapper">

            <img
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=85"
              alt="Stack of books"
            />

          </div>

          <div className="hero-note">
            <span>✦</span>
            Find your next favourite
          </div>

        </div>

      </section>


      {/* ================= INTRO SECTION ================= */}

      <section className="intro-section">

        <p className="section-label">
          BOOKIFY by Tanvi Nanaware
        </p>

        <h2>
          More than a bookstore.
          <br />
          A place for curious minds.
        </h2>

        <p className="intro-text">
          Whether you're looking for a story to escape into,
          a new skill to learn, or an idea that changes the way
          you see the world — there's something here for you.
        </p>

      </section>


      {/* ================= FEATURED BOOKS ================= */}

      <section className="featured-section">

        <div className="section-heading">

          <div>
            <p className="section-label">
              HANDPICKED FOR YOU
            </p>

            <h2>
              Featured books
            </h2>
          </div>

          <Link to="/catalogue" className="view-link">
            View all books →
          </Link>

        </div>


        <div className="featured-grid">

          <div className="featured-card">

            <div className="featured-image">
              <img
                src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=85"
                alt="The Alchemist"
              />
            </div>

            <div className="featured-info">
              <p>FICTION</p>
              <h3>The Alchemist</h3>
              <span>Paulo Coelho</span>
            </div>

          </div>


          <div className="featured-card">

            <div className="featured-image">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=85"
                alt="Atomic Habits"
              />
            </div>

            <div className="featured-info">
              <p>SELF HELP</p>
              <h3>Atomic Habits</h3>
              <span>James Clear</span>
            </div>

          </div>


          <div className="featured-card">

            <div className="featured-image">
              <img
                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=85"
                alt="Clean Code"
              />
            </div>

            <div className="featured-info">
              <p>PROGRAMMING</p>
              <h3>Clean Code</h3>
              <span>Robert C. Martin</span>
            </div>

          </div>


          <div className="featured-card">

            <div className="featured-image">
              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=85"
                alt="Think Like a Monk"
              />
            </div>

            <div className="featured-info">
              <p>SELF HELP</p>
              <h3>Think Like a Monk</h3>
              <span>Jay Shetty</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="categories-section">

        <div className="categories-heading">

          <p className="section-label">
            EXPLORE
          </p>

          <h2>
            Find something
            <br />
            you'll love.
          </h2>

        </div>


        <div className="category-list">

          <Link to="/catalogue?category=Fiction" className="category-item">
            <span>01</span>
            <h3>Fiction</h3>
            <strong>→</strong>
          </Link>

          <Link to="/catalogue?category=Self Help" className="category-item">
            <span>02</span>
            <h3>Self Help</h3>
            <strong>→</strong>
          </Link>

          <Link to="/catalogue?category=Programming" className="category-item">
            <span>03</span>
            <h3>Programming</h3>
            <strong>→</strong>
          </Link>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="home-cta">

        <div>

          <p className="section-label">
            READY WHEN YOU ARE
          </p>

          <h2>
            There's a book
            <br />
            waiting for you.
          </h2>

        </div>

        <Link to="/catalogue" className="cta-button">
          Start exploring
          <span>→</span>
        </Link>

      </section>

    </div>
  );
}

export default Home;