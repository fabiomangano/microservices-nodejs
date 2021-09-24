import React from 'react';
import style from './Button.module.css'

const Button = ({ label, onClick }) => (
    <button className={style.btn} onClick={onClick}>{label}</button>
);

export default Button;