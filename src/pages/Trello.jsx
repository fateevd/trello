import React, {useState, useEffect} from 'react';
import {dragEndHandler, dragLeaveHandler, ondragOverHandler} from "../Function/dragonFunction";
import {useHistory} from "react-router";

const Trello = () => {
    const [boards, setBoards] = useState([
        {
            id: 1,
            title: 'Что я хочу сделать',
            items: []
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
    ]);
    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    useEffect(() => {
        const setBoardMas = localStorage.getItem('boards');
        if (setBoardMas !== null) {
            setBoards(JSON.parse(setBoardMas))
        }


    }, [])

    const rout = useHistory();

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
        localStorage.setItem("boards", JSON.stringify((boards)));
    }

    function dropBoardHandler(e, board) {
        board.items.push(currentItem);
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);
        renderItem(board);

    }
    const addNewItem = item => {
        if (item !== '') {
            const newItem = {
                id: Date.now(),
                title: item.toString()
            }
            setCurrentBoard([...boards, boards[0].items.push(newItem)]);
            localStorage.setItem("boards", JSON.stringify((boards)));
            localStorage.setItem("boardsID", JSON.stringify((boards[0].items)));
        } else {
            alert("Не-а, у тебя ничего не получится Джон Сноу :)")
        }
    }
    return (
        <div className="Trello">
            <button className="button-trello" onClick={() => addNewItem(prompt("Укажите вашу задачу"))}>Добавить
                задачу
            </button>
            {boards.map((board, index) =>
                <div className='board' key={index}
                     onDragOver={(e) => ondragOverHandler(e)}
                     onDrop={(e) => dropBoardHandler(e, board)}>
                    <h3 className="board__title">{board.title}</h3>
                    {board.items.map((items, id) =>
                        <div className='board__item' key={id} draggable={"true"}
                             onClick={() => rout.push(`/Trello/${items.id}`)}
                             onDragOver={(e) => ondragOverHandler(e)}
                             onDragLeave={e => dragLeaveHandler(e)}
                             onDragStart={(e) => dragStartHandler(e, board, items)}
                             onDragEnd={(e) => dragEndHandler(e)}
                             onDrop={(e) => dropHandler(e, board, items)}
                        >{items.title}</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Trello;