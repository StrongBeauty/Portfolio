import React from 'react'
import style from './Home.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import Photo from "./../assets/image/photo2.png"


export const Home = () => {

    const photo = {
        backgroundImage: `url(${Photo})`,
    };

    return (
        <div id={'home'} className={style.homeBlock}>
            <div className={`${styleContainer.container} ${style.homeContainer}`}>
                <div className={style.text}>
                        <h3 className={style.hi}>Hi There</h3>
                        <h2>I'm Anastasiya</h2>
                        <h1>Frontend Developer</h1>
                </div>
                <div  className={style.photo}></div>
            </div>
        </div>
    )
}