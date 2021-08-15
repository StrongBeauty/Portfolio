import React from 'react'
import style from './Project.module.css'



export const Project = (props) => {
    return (
        <div className={style.projectBlock}>
            <a href={props.title} className={style.icon}></a>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}