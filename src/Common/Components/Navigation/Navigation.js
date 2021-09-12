import React from 'react'
import style from './Navigation.module.scss'
import {Link} from "react-scroll";


export const Navigation = () => {
    return (

        <nav className={style.nav}>
            <ul>
                <Link  className={style.text} href={'#home'} to={'home'}>home</Link>
                <a className={style.text} href={'#skills'} to={'skills'}>skills</a>
                <a className={style.text} href={'#projects'} to={'projects'}>projects</a>
                <Link className={style.text} href={'#contacts'} to={'contacts'}>contacts</Link>
            </ul>
        </nav>
    )
}