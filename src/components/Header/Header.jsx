import React, { Component } from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/apple-256.png" alt=""/>
        </header>
    )

}
    export default Header;