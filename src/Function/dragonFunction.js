export function ondragOverHandler(e) {
    e.preventDefault();
    if (e.target.className === "board__item") {
        e.target.style.boxShadow = '0 5px  3px gray'
    }
}

export function dragLeaveHandler(e) {
    e.target.style.boxShadow = 'none';
}


export function dragEndHandler(e) {
    e.target.style.boxShadow = 'none';
}

