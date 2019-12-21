import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

class Header extends React.Component{
    render(){
        return(
            <header className="header-wrapper">
                <Link to="/" className="logo"><img src="logo512.png" alt="Logo"/></Link>
                <ul className="header-list">
                    <li>
                        <Link to="/newclient" className="link">Добавить заказ!</Link>
                    </li>
                    <li>
                        <Link to="/vieworders" className="link">Посмотреть заказы!</Link>
                    </li>
                    <li>
                        <Link to="/signin" id="signinlink">Вход!</Link>
                        <Link to="/signin" id="signuplink">Регистрация!</Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;