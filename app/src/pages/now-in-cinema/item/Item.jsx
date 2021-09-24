import React from 'react';
import Button from '../../../components/button/Button'
import style from './Item.module.css';

const Item = ({ movie, showModal }) => {
    const { title, description, image } = movie;
    return(
        <li className={style.preview}>
        <img alt="Movie" className={style.image} src={image} width="180px" height="240px" />
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
        <div className={style.container}>
            <Button
                label="Acquista"
                onClick={() => {
                    showModal(movie);
                }}>Acquista</Button>
        </div>
 
    </li>
    )
};

export default Item;

