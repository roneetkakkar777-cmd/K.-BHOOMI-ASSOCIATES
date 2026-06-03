// =============================================
// WISHLIST CONTEXT
// =============================================
import { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext({
  wishlist: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isWishlisted: () => false,
  toggleWishlist: () => {},
});

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('wishlist')) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (id) => {
    setWishlist(prev => [...prev, id]);
  };

  const removeFromWishlist = (id) => {
    setWishlist(prev => prev.filter(item => item !== id));
  };

  const isWishlisted = (id) => wishlist.includes(id);

  const toggleWishlist = (id) => {
    if (isWishlisted(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist(id);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isWishlisted, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
