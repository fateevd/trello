import React from 'react';
import {useParams} from "react-router";
import "../style/style.css";


const ItemTrello = () => {
    const params = useParams();
    let name = '';
    const idMas = JSON.parse(localStorage.getItem('boardsID'));
    idMas.filter(i => {
        if (+i.id === +params.id) {
            name = i.title;
        }
    })


    return (
        <div className="Item-item">
            <h4>Задача которую вы открыли </h4>
            <div key={params.id} className='board__item'>{name}</div>
        </div>
    );
};

export default ItemTrello;