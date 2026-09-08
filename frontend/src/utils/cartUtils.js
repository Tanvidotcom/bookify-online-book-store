const CART_KEY = "bookifyCart";

export const getCart = () => {
  const cart = localStorage.getItem(CART_KEY);

  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const addToCart = (book) => {
  const cart = getCart();

  const existingBook = cart.find(
    (item) => item.id === book.id
  );

  if (existingBook) {
    existingBook.quantity += 1;
  } else {
    cart.push({
      ...book,
      quantity: 1,
    });
  }

  saveCart(cart);

  window.dispatchEvent(new Event("cartUpdated"));

  return cart;
};

export const removeFromCart = (bookId) => {
  const cart = getCart();

  const updatedCart = cart.filter(
    (item) => item.id !== bookId
  );

  saveCart(updatedCart);

  window.dispatchEvent(new Event("cartUpdated"));

  return updatedCart;
};

export const updateQuantity = (bookId, quantity) => {
  const cart = getCart();

  const updatedCart = cart.map((item) => {
    if (item.id === bookId) {
      return {
        ...item,
        quantity: Math.max(1, quantity),
      };
    }

    return item;
  });

  saveCart(updatedCart);

  window.dispatchEvent(new Event("cartUpdated"));

  return updatedCart;
};

export const getCartCount = () => {
  const cart = getCart();

  return cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
};

export const getCartTotal = () => {
  const cart = getCart();

  return cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
};