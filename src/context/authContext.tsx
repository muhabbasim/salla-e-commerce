
import { createContext, useState, useEffect } from 'react'
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom'


interface Props {
  children: React.ReactNode;
}

interface AuthContextProps {
  login: (formData: any) => void;
  logout: () => void;
  currentUser: boolean;
  loginError: string;

}

const defaultContext: AuthContextProps = {
  login: () => {},
  logout: () => {},
  currentUser: false,
  loginError: "",

};

export const AuthContext = createContext<AuthContextProps>(defaultContext);

export const AuthContextProvider = ({ children }: Props ) => {
  
  const route = useNavigate();
  const [loginError, setLoginError] = useState('')

  // save user to the localStorage
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem('current_user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // save token to localStorage
  const [token, setToken] = useState(() => {
    if (typeof window !== 'undefined') {
      const storeToken = localStorage.getItem('user_token');
  
      if (storeToken) {
        try {
          // Attempt to parse the storeToken, and set it to null if parsing fails
          return JSON.parse(storeToken) || null;
        } catch (error) {
          console.error('Error parsing user data:', error);
          return null;
        }
      } else {
        return null;
      }
    }
    return null;
  });

  // get the login axios from the login page
  const login = async (formData: any) => {

    try {
      
      const res = await axios.post('https://limitless-lake-55070.herokuapp.com/user/signIn', formData)
      console.log(res)
      setToken(res.data.token)  
      setCurrentUser(true)
      route('/')
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error)
        setLoginError(error.response?.data)
      }
    }
  }

  const logout = async () => {
    try {
      
      setToken(null)
      setCurrentUser(false)
      route('/')

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    localStorage.setItem('user_token', JSON.stringify(token))
    localStorage.setItem('current_user', JSON.stringify(currentUser))
  }, [currentUser, token])

  return (
    <AuthContext.Provider value={{ login, loginError, logout, currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}