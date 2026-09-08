import { Link, useLocation } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  const location = useLocation();

  const order = location.state?.order;

  return (
    <div className="order-success-page">

      <div className="order-success-card">

        <div className="success-icon">
          ✓
        </div>

        <p className="section-label">
          BOOKIFY by Tanvi 
        </p>

        <h1>
          Order placed
          <br />
          <span>successfully.</span>
        </h1>

        <p className="success-message">
          Thank you for your order. Your books are now
          being prepared for delivery.
        </p>

        {order && (
          <div className="success-order-info">

            <div>
              <span>Order ID</span>
              <strong>
                #{order.id}
              </strong>
            </div>

            <div>
              <span>Total</span>
              <strong>
                ₹{order.total}
              </strong>
            </div>

            <div>
              <span>Status</span>
              <strong>
                {order.status}
              </strong>
            </div>

          </div>
        )}

        <div className="success-actions">

          <Link
            to="/catalogue"
            className="success-primary-button"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="success-secondary-button"
          >
            Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default OrderSuccess;