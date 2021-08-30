import React from 'react';
import {useParams} from "react-router";
import "../style/style.css";


const ItemTrello = () => {
    const boardsMas = [
        {
            id: 1,
            title: 'Что я хочу сделать',
            items: [
                {id: 1, title: "Пойти на работу"},
                {id: 2, title: "Пойти на работу"},
                {id: 3, title: "Пойти на работу"},
                {id: 4, title: "Пойти на работу"},
                {id: 5, title: "Пойти на работу"},
                {id: 6, title: "Пойти на работу"},
                {id: 7, title: "Пойти на работу"},
            ]
        },
        {
            id: 2,
            title: 'Что я вроде начал делать',
            items: []
        },
        {
            id: 3,
            title: 'Что я делаю сейчас ',
            items: []
        },
        {
            id: 4,
            title: 'Сделал)',
            items: []
        },
    ];

    console.log(...boardsMas[0].items )

    const params = useParams();
    return (
        <div className="Item-item">
            <h4>Задача которую вы открыли  </h4>
            <div className="board__item">{boardsMas[0].items[params.id - 1].title}</div>
        </div>
    );
};

export default ItemTrello;