import React, {useState} from 'react';
import {dragEndHandler, dragLeaveHandler, ondragOverHandler} from "../Function/dragonFunction";

const Trello = () => {
    const [boards, setBoards] = useState([
        {
            id: 1,
            title: 'Что я хочу сделать',
            items: [
                {id: 1, itle: "Пойти на работу"},
                {id: 2, itle: "Пойти на работу"},
                {id: 3, itle: "1"},
                ]
        },
        {
            id: 2,
            title: 'Что я вроде начал делать',
            items: [
                {id: 1, itle: "Пойти на работу"},
                {id: 2, itle: "Пойти на работу"},
                {id: 3, itle: "1"},
            ]
        },
        {
            id: 3,
            title: 'Что я делаю сейчас ',
            items: [
                {id: 1, itle: "Пойти на работу"},
                {id: 2, itle: "Пойти на работу"},
                {id: 3, itle: "1"},
            ]
        },
        {
            id: 4,
            title: 'Сделал)',
            items: [ ]
        },
    ]);
    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    function dragStartHandler(e, board, items) {
        setCurrentBoard(board);
        setCurrentItem(items);
    }


    function dropHandler(e, board, items) {
        e.preventDefault();
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);
        const dropIndex = board.items.indexOf(items);
        board.items.splice(dropIndex + 1, 0, currentItem);
        renderItem(board);

    }

    const renderItem = board => {
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board;
            }
            if (b.id === currentBoard.id) {
                return currentBoard;
            }
            return b;
        }));


    }

    function dropBoardHandler(e, board) {
        board.items.push(currentItem);
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);
        renderItem(board);

    }

    const createItem = newItem => {
        setBoards(boards[0].items.push(newItem));
    };
    return (
        <div className="Trello">
                {boards.map((board, index) =>
                    <div className='board' key={index}
                         onDragOver={(e) => ondragOverHandler(e)}
                         onDrop={(e) => dropBoardHandler(e, board)}>
                        <h3 className="board__title">{board.title}</h3>
                        {board.items.map((items, id) =>
                            <div className='board__item' key={id} draggable={"true"}
                                 onDragOver={(e) => ondragOverHandler(e)}
                                 onDragLeave={e => dragLeaveHandler(e)}
                                 onDragStart={(e) => dragStartHandler(e, board, items)}
                                 onDragEnd={(e) => dragEndHandler(e)}
                                 onDrop={(e) => dropHandler(e, board, items)}
                            >{items.itle}</div>
                        )}
                    </div>
                )}
        </div>
    );
};

export default Trello;