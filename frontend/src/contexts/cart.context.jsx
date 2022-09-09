import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
  clearItemFromCart: () => null,
  removeItemToCart: () => null,
  cartTotal: 0,
});

// 1. 添加 #FF0000
const addCartItem = (cartItems, productToAdd) => {
  // 1) 查找Cartitems是否包含productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // 2) 如果有，增加 quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  // 3) 返回修改后的cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// 2. 减少 #FF0000
const removeCartItem = (cartItems, cartItemToRemove) => {
  // 1) 查找要删除的
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // 2) 检查quantity是否等于1，则删除该项目
  if (existingCartItem.quantity === 1) {
    // 过滤掉cartItem.id 不等于 cartItemToRemove.id 的数据，并返回过滤掉的数据
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // 3) quantity 大于1的情况下 数量减1
  return cartItems.map((cartItem) => {
    return cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};

// 3. 去除 #FF0000
const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

  

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setcartTotal] = useState(0);

  // 每当cartItems的状态发生改变时就改变cartCount的状态
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setCartCount(newCartCount);

    const allPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setcartTotal(allPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemToCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
