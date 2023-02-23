import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken
} from '../utils/localStorage';

const URL = "http://localhost:8008";
const putHeaders = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const fetchMe = async () => {
      let token = getAccessToken()
      if(token) { 
        const me = await axios.get(`${URL}/auth/me`,putHeaders(token))
        setUser(me.data.user)
      } 
    }
    fetchMe()
  }, [])

  const getMe = async (token) => {
    const me = await axios.get(`${URL}/auth/me`,putHeaders(token))
    setUser(me.data.user)
  }

  const register = async (input) => {
    const res = await axios.post(`${URL}/auth/register`, input);
    addAccessToken(res.data.token)
    getMe(res.data.token)
  };

  const login = async (input) => {
    const res = await axios.post(`${URL}/auth/login`,input)
    addAccessToken(res.data.token)
    getMe(res.data.token)
  }

  const glogin = async (credential) => {
    const res = await axios.post(`${URL}/auth/glogin`,{credential})
    addAccessToken(res.data.token)
    getMe(res.data.token)
  }

  const logout = () => {
    removeAccessToken()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, setUser,register,login,logout,glogin }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
