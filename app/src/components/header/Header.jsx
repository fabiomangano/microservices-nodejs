import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../components/logo/Logo';
import Button from '../../components/button/Button';
import AppContext from '../../context/AppContext';
import { useHistory } from 'react-router-dom';

import style from './Header.module.css';

const Navbar = () => {
  const { token, setToken } = useContext(AppContext);

  const history = useHistory()
  return (
    <nav className={style.nav}>
      <Link to="/">
        <Logo
          width="100px"
          height="70px"
        />
      </Link>
      <Menu />
      {!token ? <Link to="/accedi"><Button label={"Login"}/></Link> : <Button label={"Logout"} onClick={()=> 
        {
          setToken(undefined);
          localStorage.removeItem('token')
          history.push('/')

        }}></Button>}
    </nav>
  )
}

const Menu = () => {
  return (
    <ul className={style.menu}>
      <li>
        <Link to="/" className={style.link}>Homepage</Link>
      </li>
      <span> | </span>
      <li>
        <Link to="/in-programmazione" className={style.link}>Programmazione</Link>
      </li>
    </ul>
  )
};

const Header = () => (
  <header className={style.header}>
    <Navbar />
  </header>
);

export default Header;
