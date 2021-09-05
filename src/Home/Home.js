import React from 'react'
import style from './Home.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'


export const Home = () => {
    return (
        <div className={style.homeBlock}>
            <div className={`${styleContainer.container} ${style.homeContainer}`}>
                <div className={style.text}>

                        <h2>Hi There</h2>
                        <h1>I'm Anastasiya</h1>
                        <h3>Frontend Developer</h3>

                </div>
                <div className={style.photo}>Photo</div>
            </div>
        </div>
    )
}