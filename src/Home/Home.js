import React from 'react'
import style from './Home.module.css'
import styleContainer from '../Common/Styles/Container.module.css'


export const Home = () => {
    return (
        <div className={style.homeBlock}>
            <div className={`${styleContainer.container} ${style.homeContainer}`}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Name</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    )
}