import React, { createContext, useEffect, useState } from 'react';
import api from '@/utils/axiosInstance';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [userData, setUserData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [intializing, setIntializing] = useState(true);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('userData');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUserData(foundUser);
      setIsAuthenticated(true);
    }
    setIntializing(false);
  }, []);

  const login = (user, email) => {
    localStorage.setItem('user', JSON.stringify(user));
    api
      .get(`api/accounts/all_accounts/?email=${email}`)
      .then(res => {
        const userInfo = res.data.results[0];
        const storedUserData = {
          firstName: userInfo.first_name,
          lastName: userInfo.last_name,
          isNewUser: userInfo.is_new_user,
          id: userInfo.id,
          email: userInfo.email,
        };
        setIsAuthenticated(true);
        setUserData(storedUserData);
        localStorage.setItem('userData', JSON.stringify(storedUserData));
        if (userInfo.is_new_user === true) {
          router.push('/profile');
        } else {
          router.push('/');
        }
      })
      .catch(err => console.log(err));
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userData');
    setUserData({});
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ userData, login, logout, isAuthenticated, intializing }}
    >
      {children}
    </AuthContext.Provider>
  );
};
