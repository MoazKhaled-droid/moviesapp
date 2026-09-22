import { createContext, useContext, useState } from 'react';

const WishListContext = createContext();

export function WishListProvider({ children }) {
  const [wishList, setWishList] = useState(() => {
    const saved = localStorage.getItem('wishList');
    return saved ? JSON.parse(saved) : [];
  });

  const addToWishList = (item) => {
    setWishList((prevList) => {
      if (prevList.some((i) => i.id === item.id)) return prevList;      
      const newList = [...prevList, item];
      localStorage.setItem('wishList', JSON.stringify(newList));
      return newList;
    });
  };

  const removeFromWishList = (id) => {
    setWishList((prevList) => {
      const newList = prevList.filter((item) => item.id !== id);
      localStorage.setItem('wishList', JSON.stringify(newList));
      return newList;
    });
  };

  return (
    <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList }}>
      {children}
    </WishListContext.Provider>
  );
}

export const useWishList = () => {
  const context = useContext(WishListContext);
  if (context === undefined) {
    throw new Error('useWishList must be used within a WishListProvider');
  }
  return context;
};