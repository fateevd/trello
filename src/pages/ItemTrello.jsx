import React from 'react';
import {useParams} from "react-router";
import "../style/style.css";


const ItemTrello = () => {
    const params = useParams();
    return (
        <div className="Item-item">
            <h4>Задача которую вы открыли </h4>
            <div className="board__item">{params.id}</div>
        </div>
    );
};

export default ItemTrello;