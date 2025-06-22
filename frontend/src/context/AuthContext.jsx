import { createContext, useState, useEffect } from "react";
import axios from "../utils/AxiosConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const checkUser = async () => {
    try {
      const res = await axios.post("/");
      if (res.data.status) setUser(res.data.user);
      else setUser(null);
    } catch (err) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
