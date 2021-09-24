import React from 'react';
import logo from '../../static/logo.png';

const Logo = ({width, height, onClick}) => (
    <img src={logo} 
        alt="Cinema Logo" 
        width={width} 
        height={height}
        onClick={onClick}
    />
);

export default Logo;