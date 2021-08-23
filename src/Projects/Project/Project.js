import React from 'react'
import style from './Project.module.css'


export const Project = (props) => {
    return (
        <div className={style.projectBlock}>
            <div className={style.icon}>
                <a href={props.title}>view</a>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}