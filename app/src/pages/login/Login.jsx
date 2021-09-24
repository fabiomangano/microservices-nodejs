import React, { useState, useContext } from 'react';
import style from './Login.module.css';
import Button from '../../components/button/Button';
import avatar from "../../static/avatar.png";
import AppContext from '../../context/AppContext';

async function loginUser(credentials) {
  return fetch('http://localhost:3001/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
      'X-Forwarded-For': '192.168.1.0'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 
 const Logged = ({token}) => {
  return (
    <div className={style.login}>
      <div className={style.form}>
      <img className={style.avatar} alt= "Avatar" src={avatar} height="150px"></img>
      <h2 className={style.title}> Bentornato {token.name} !</h2>
      </div>
  </div>
  )
}

 const Login = ({setToken}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { token } = useContext(AppContext);
  
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  const handleUsername = e => {
    setUsername(e.target.value);
  }
  const handlePassword = e => setPassword(e.target.value);

  return (
    token ? <Logged token={token}/> : (
      <div className={style.login}>
        <div className={style.form}>
        <img alt="Avatar" src={avatar} height="150px" className={style.avatar}></img>
        <form onSubmit={handleSubmit}>
          <label>
            <h3 className={style.label}>Username</h3>
            <input className={style.input} type="text" onChange={handleUsername} />
          </label>
          <label>
            <h3 className={style.label}>Password</h3>
            <input className={style.input} type="password" onChange={handlePassword} />
          </label>
          <div className={style.btn}>
            <Button type="submit" label="accedi"/>
          </div>
        </form>
        </div>
    </div>
    )
    
  )

}

export default Login;



