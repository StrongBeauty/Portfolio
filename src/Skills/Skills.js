import React from 'react'
import style from './Skills.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import {Skill} from "./Skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={style.hider}>
                <h2 className={style.title}>Skills</h2>
                </div>
                <div className={style.skills}>
                    <Skill title={'React'} description={'Text'}/>
                    <Skill title={'Typescript'} description={'Text'}/>
                    <Skill title={'CSS'} description={'Text'}/>
                </div>
            </div>
        </div>
    )
}