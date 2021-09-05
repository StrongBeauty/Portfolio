import React from 'react'
import style from './Navigation.module.scss'

export const Navigation = () => {
    return (
        <div className={style.nav}>
            <a className={style.text} href=''>home</a>
            <a className={style.text} href=''>skills</a>
            <a className={style.text} href=''>projects</a>
            <a className={style.text} href=''>contacts</a>
        </div>
    )
}