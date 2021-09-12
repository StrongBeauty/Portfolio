import React from 'react'
import style from './Project.module.scss'
import styleText from '../../Common/Components/Title/Title.module.scss'


export const Project = (props) => {
    return (
        <div  className={style.projectBlock}>

            <a href={props.href}><div className={style.icon} style={props.style}></div></a>

            <div className={style.projectInfo}>
                <h5 className={style.projectTitle}>{props.title}</h5>
                <span className={`${styleText.text} ${style.description}`}>{props.description}</span>
            </div>
        </div>
    )
}