import React from 'react'
import style from './Header.module.scss'
import {Navigation} from "../Navigation/Navigation";

export const Header = () => {
    return (
        <div className={style.header}>
            <Navigation />
        </div>
    )
}