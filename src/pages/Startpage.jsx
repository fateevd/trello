import React from 'react';
import {Link} from "react-router-dom";

const Startpage = () => {
    return (
        <div className="start">
            <h2 className="start__title">Это просто старт</h2>
            <Link to='/Trello' className='link'>Нажми на меня</Link>

            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur cum et fugiat, id inventore iure minus omnis, optio perspiciatis placeat quaerat tenetur voluptatem! Accusamus accusantium, dolore dolorem doloremque ex facilis, fugit iste iusto libero magnam mollitia nihil numquam optio placeat, quibusdam repellat repudiandae rerum sint soluta tempore vel voluptatibus.</p>
        </div>
    );
};

export default Startpage;