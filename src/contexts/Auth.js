import { useState, createContext, useContext } from "react";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("Mytoken") !== null
  );

  const login = () => {
 
    setAuthenticated(true);
  };

  const logout = () => {
 
    localStorage.removeItem("Mytoken");
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};
