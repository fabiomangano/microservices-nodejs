import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import useToken from "../../hooks/useToken";
import AppContext from '../../context/AppContext';

import style from "./App.module.css";

const App = () => {
  const { token, setToken } = useToken();
  return (
    <BrowserRouter>
      <div className={style.main}>
        <AppContext.Provider value={{ token, setToken }}>
          <Header />
          <Main setToken={setToken} />
          <Footer />
        </AppContext.Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;

