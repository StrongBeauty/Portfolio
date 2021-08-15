import React from 'react'
import style from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={style.nav}>
            <a href=''>Home</a>
            <a href=''>Skills</a>
            <a href=''>Projects</a>
            <a href=''>Contacts</a>
        </div>
    )
}