import React, { Component } from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src="https://cdn2.iconfinder.com/data/icons/braille-alphabet/500/braille_S-256.png" alt=""/>
        </header>
    )

}
    export default Header;