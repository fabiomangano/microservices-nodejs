import { useState } from 'react';

export default function useToken() {
  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };

  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken ? userToken : undefined;
  };

  const [token, setToken] = useState(getToken());

  return {
    token,
    setToken: saveToken
  }
}

