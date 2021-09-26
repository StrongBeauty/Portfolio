import React from 'react'
import style from './Skill.module.scss'
import Fade from 'react-reveal/Fade';

export const Skill = (props) => {
    return (
        <Fade bottom>
        <div className={style.skillBlock}>
            <h3 className={style.skillTitle}>{props.title}</h3>
            <img src={props.src} alt="" className={style.icon}></img>
            <span className={style.description}>{props.description}</span>
        </div>
            </Fade>
    )
}