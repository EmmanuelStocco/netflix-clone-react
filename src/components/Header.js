import React from 'react';
import './Header.css'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://logopng.com.br/logos/netflix-94.png" alt="Netflix">

                    </img>
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/originals/b2/71/e6/b271e6f7dac8d1f8fc914b8a7df4c7ee.jpg" alt="logo--usuario"></img>
                </a>    
            </div>
        </header>
    );
}