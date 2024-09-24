import {createContext, useContext, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData); // Set user data upon login
  };

  const logout = () => {
    setUser(null); // Clear user data upon logout
  };

  return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
