import React from 'react'
import style from './Project.module.scss'
import styleText from '../../Common/Components/Title/Title.module.scss'


export const Project = (props) => {
    return (
        <div className={style.projectBlock}>
            <div className={style.icon} style={props.style}>
                <a className={style.viewBtn} href={props}>View</a>
            </div>
            <div className={style.projectInfo}>
                <h5 className={style.projectTitle}>{props.title}</h5>
                <span className={`${styleText.text} ${style.description}`}>{props.description}</span>
            </div>
        </div>
    )
}