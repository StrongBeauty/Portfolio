import React from 'react'
import style from './Header.module.scss'
import {Navigation} from "../Common/Components/Navigation/Navigation";

export const Header = () => {
    return (
        <header className={style.header}>
            <Navigation />
        </header>
    )
}