import { useState } from "react";
import { createContext } from "react";

// 作为您要访问的实际值
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// 提供
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
