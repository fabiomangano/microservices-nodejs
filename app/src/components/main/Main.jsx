import React from 'react';
import { Route, Switch } from "react-router-dom";
import style from './Main.module.css';

import Home from "../../pages/home/Home";
import NowInCinema from "../../pages/now-in-cinema/NowInCinema";
import Login from "../../pages/login/Login";

const Main = ({ setToken }) => (
  <main className={style.main}>
    <Switch>
      <Route path="/" exact><Home /></Route>
      <Route path="/in-programmazione"><NowInCinema /></Route>
      <Route path="/accedi"><Login setToken={setToken} /></Route>
    </Switch>
  </main>
)

export default Main;