import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={style.header}>
        <img
            src='https://st4.depositphotos.com/1004920/28246/v/950/depositphotos_282465114-stock-illustration-pekingese-vector-illustration-for-t.jpg'
            alt='logo'/>

        <div className={style.loginBlock}>
            {props.isAuth
                ? <div> {props.login} -<button onClick={props.logout}>Log  out</button>  </div>
                : <NavLink to={'/login'}>Login</NavLink>}

        </div>


    </header>

}

export default Header;